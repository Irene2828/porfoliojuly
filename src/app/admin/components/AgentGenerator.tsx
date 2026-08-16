'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Projects from '@/app/components/Projects';

import './AgentGenerator.css';

type ScreenOption = {
  id: string;
  label: string;
};

type AgentGeneratorProps = {
  projectId: string;
  screens: ScreenOption[];
};

type GeneratedProject = {
  title: string;
  caseStudyIntro: string;
  resultChips: {
    problem: string;
    buildApproach: string;
    impact: string;
  };
  annotations: Array<{
    markerNumber: number;
    title: string;
    explanation: string;
    category: string;
    x: number;
    y: number;
    confidence: number;
  }>;
};

export default function AgentGenerator({ projectId, screens }: AgentGeneratorProps) {
  const router = useRouter();
  const [prompt, setPrompt] = useState('AI this screen into project 3 section: add a clear name, subline, 3 strategic captions, and 3 impact/value results. Show why I built it this way and how AI helped.');
  const [screenId, setScreenId] = useState(screens.at(-1)?.id || screens[0]?.id || '');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [draft, setDraft] = useState<{ screenId: string; screenUrl: string; generated: GeneratedProject } | null>(null);

  async function runAgent() {
    setIsGenerating(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`/api/admin/projects/${projectId}/agent-generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, screenId: screenId || undefined }),
      });

      const responseText = await response.text();
      const payload = responseText ? JSON.parse(responseText) : null;

      if (!response.ok) {
        throw new Error(payload?.error || responseText || 'Agent generation failed.');
      }

      setDraft({
        screenId: payload.screenId,
        screenUrl: payload.screenUrl,
        generated: payload.generated,
      });
      setSuccess('Preview generated. Review it below, then approve or expand edit.');
    } catch (err) {
      setError(err instanceof SyntaxError ? 'Agent returned an invalid response.' : err instanceof Error ? err.message : 'Agent generation failed.');
    } finally {
      setIsGenerating(false);
    }
  }

  async function approveDraft() {
    if (!draft) return;

    setIsApproving(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/projects/${projectId}/agent-approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          screenId: draft.screenId,
          generated: draft.generated,
          publish: true,
        }),
      });

      const responseText = await response.text();
      const payload = responseText ? JSON.parse(responseText) : null;
      if (!response.ok) {
        throw new Error(payload?.error || responseText || 'Approval failed.');
      }

      setSuccess('Approved and published to the homepage.');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Approval failed.');
    } finally {
      setIsApproving(false);
    }
  }

  const previewProject = draft ? [{
    id: `preview-${projectId}`,
    title: draft.generated.title,
    slug: 'mobile-apps',
    caseStudyIntro: draft.generated.caseStudyIntro,
    problem: draft.generated.resultChips.problem,
    buildApproach: draft.generated.resultChips.buildApproach,
    impact: draft.generated.resultChips.impact,
    bullet1: null,
    bullet2: null,
    bullet3: null,
    screens: [{
      id: draft.screenId,
      originalUrl: draft.screenUrl,
      altText: draft.generated.title,
      annotations: draft.generated.annotations.map((annotation) => ({
        id: `${annotation.markerNumber}`,
        markerNumber: annotation.markerNumber,
        title: annotation.title,
        explanation: annotation.explanation,
        x: annotation.x,
        y: annotation.y,
      })),
    }],
  }] : [];

  return (
    <div className="agent-generator">
      <div>
        <p className="agent-eyebrow">Agentic Build</p>
        <h2>Upload visual. Let AI turn it into the section.</h2>
        <p>
          The agent follows the current project-section structure: name, subline,
          visual, strategic build captions, and impact/value chips.
        </p>
      </div>

      <label>
        Screen to use
        <select value={screenId} onChange={(event) => setScreenId(event.target.value)} disabled={screens.length === 0}>
          {screens.length === 0 ? (
            <option value="">Upload a screen first</option>
          ) : screens.map((screen) => (
            <option key={screen.id} value={screen.id}>{screen.label}</option>
          ))}
        </select>
      </label>

      <label>
        What should AI do?
        <textarea value={prompt} rows={5} onChange={(event) => setPrompt(event.target.value)} />
      </label>

      <button type="button" onClick={runAgent} disabled={isGenerating || screens.length === 0}>
        {isGenerating ? 'Generating Preview...' : 'AI This Into Project Section'}
      </button>

      {error && <p className="agent-error">{error}</p>}
      {success && <p className="agent-success">{success}</p>}

      {draft && (
        <div className="agent-preview">
          <div className="agent-preview-bar">
            <p className="agent-eyebrow">Preview</p>
            <div>
              <button type="button" onClick={approveDraft} disabled={isApproving}>
                {isApproving ? 'Publishing...' : 'Approve + Publish'}
              </button>
            </div>
          </div>

          <Projects initialProjects={previewProject} />

          <details className="agent-edit-details">
            <summary>Edit generated copy before approving</summary>
            <label>
              Name
              <input
                value={draft.generated.title}
                onChange={(event) => setDraft({
                  ...draft,
                  generated: { ...draft.generated, title: event.target.value },
                })}
              />
            </label>
            <label>
              Subline
              <textarea
                rows={2}
                value={draft.generated.caseStudyIntro}
                onChange={(event) => setDraft({
                  ...draft,
                  generated: { ...draft.generated, caseStudyIntro: event.target.value },
                })}
              />
            </label>
            {(['problem', 'buildApproach', 'impact'] as const).map((key) => (
              <label key={key}>
                {key}
                <textarea
                  rows={2}
                  value={draft.generated.resultChips[key]}
                  onChange={(event) => setDraft({
                    ...draft,
                    generated: {
                      ...draft.generated,
                      resultChips: {
                        ...draft.generated.resultChips,
                        [key]: event.target.value,
                      },
                    },
                  })}
                />
              </label>
            ))}
          </details>
        </div>
      )}
    </div>
  );
}
