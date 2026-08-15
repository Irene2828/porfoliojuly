import { z } from 'zod';

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta';

type JsonSchema = Record<string, unknown>;

type GenerateJsonOptions<T> = {
  prompt: string;
  responseSchema: JsonSchema;
  validator: z.ZodType<T>;
  model?: string;
};

export class GeminiConfigError extends Error {}

export async function generateGeminiJson<T>({
  prompt,
  responseSchema,
  validator,
  model = process.env.GEMINI_MODEL || 'gemini-2.5-flash',
}: GenerateJsonOptions<T>) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new GeminiConfigError('GEMINI_API_KEY is not configured.');
  }

  const response = await fetch(`${GEMINI_API_BASE}/models/${model}:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema,
        temperature: 0.4,
      },
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Gemini request failed: ${response.status} ${details}`);
  }

  const payload = await response.json();
  const text = payload?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (typeof text !== 'string') {
    throw new Error('Gemini did not return JSON text.');
  }

  return validator.parse(JSON.parse(text));
}

export const projectAnalysisValidator = z.object({
  summary: z.string(),
  caseStudyIntro: z.string(),
  problem: z.string(),
  buildApproach: z.string(),
  impact: z.string(),
  keyDecisions: z.array(z.string()).min(1).max(5),
  suggestedTags: z.array(z.string()).min(1).max(8),
});

export const projectAnalysisResponseSchema: JsonSchema = {
  type: 'object',
  properties: {
    summary: { type: 'string', description: 'One-sentence portfolio summary.' },
    caseStudyIntro: { type: 'string', description: 'Short case-study subline in the current portfolio voice.' },
    problem: { type: 'string', description: 'The core user or business problem.' },
    buildApproach: { type: 'string', description: 'How the solution was built or designed.' },
    impact: { type: 'string', description: 'Outcome, value, or likely result.' },
    keyDecisions: {
      type: 'array',
      minItems: 1,
      maxItems: 5,
      items: { type: 'string' },
    },
    suggestedTags: {
      type: 'array',
      minItems: 1,
      maxItems: 8,
      items: { type: 'string' },
    },
  },
  required: ['summary', 'caseStudyIntro', 'problem', 'buildApproach', 'impact', 'keyDecisions', 'suggestedTags'],
};

export const annotationGenerationValidator = z.object({
  annotations: z.array(z.object({
    markerNumber: z.number().int().min(1),
    title: z.string(),
    explanation: z.string(),
    category: z.string(),
    x: z.number().min(0).max(1),
    y: z.number().min(0).max(1),
    confidence: z.number().min(0).max(1),
  })).min(1).max(6),
});

export const annotationGenerationResponseSchema: JsonSchema = {
  type: 'object',
  properties: {
    annotations: {
      type: 'array',
      minItems: 1,
      maxItems: 6,
      items: {
        type: 'object',
        properties: {
          markerNumber: { type: 'integer' },
          title: { type: 'string' },
          explanation: { type: 'string' },
          category: { type: 'string' },
          x: { type: 'number', minimum: 0, maximum: 1 },
          y: { type: 'number', minimum: 0, maximum: 1 },
          confidence: { type: 'number', minimum: 0, maximum: 1 },
        },
        required: ['markerNumber', 'title', 'explanation', 'category', 'x', 'y', 'confidence'],
      },
    },
  },
  required: ['annotations'],
};
