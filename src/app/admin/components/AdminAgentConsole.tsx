'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import './AdminAgentConsole.css';

type ProjectOption = {
  id: string;
  title: string;
  status: string;
};

type AdminAgentConsoleProps = {
  projects: ProjectOption[];
};

export default function AdminAgentConsole({ projects }: AdminAgentConsoleProps) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [projectId, setProjectId] = useState(projects[2]?.id || projects[0]?.id || '');
  const [prompt, setPrompt] = useState('');
  const [fileName, setFileName] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function runAgent() {
    const file = fileRef.current?.files?.[0];
    if (!file) {
      setError('Add one visual first.');
      return;
    }

    setIsRunning(true);
    setMessage(null);
    setError(null);

    const formData = new FormData();
    formData.append('projectId', projectId);
    formData.append('prompt', prompt);
    formData.append('visual', file);

    try {
      const response = await fetch('/api/admin/agent-run', {
        method: 'POST',
        body: formData,
      });
      const responseText = await response.text();
      const payload = responseText ? JSON.parse(responseText) : null;

      if (!response.ok) {
        throw new Error(payload?.error || responseText || 'Agent failed.');
      }

      setMessage(`Done. Replaced section with "${payload.title}" and published it.`);
      if (fileRef.current) fileRef.current.value = '';
      setFileName('');
      router.refresh();
    } catch (err) {
      setError(err instanceof SyntaxError ? 'Agent returned an invalid response.' : err instanceof Error ? err.message : 'Agent failed.');
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className="admin-agent-console">
      <div className="agent-chat-box">
        <label className="agent-file-drop">
          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            onChange={(event) => setFileName(event.target.files?.[0]?.name || '')}
          />
          <span>{fileName || 'Add visual'}</span>
        </label>

        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          rows={5}
          placeholder="Tell AI what to turn this visual into..."
        />

        <div className="agent-run-row">
          <select value={projectId} onChange={(event) => setProjectId(event.target.value)}>
            {projects.map((project, index) => (
              <option key={project.id} value={project.id}>
                Project {index + 1}: {project.title}
              </option>
            ))}
          </select>
          <button type="button" onClick={runAgent} disabled={isRunning || !projectId}>
            {isRunning ? 'AI is building...' : 'AI It'}
          </button>
        </div>
      </div>

      {error && <p className="agent-console-error">{error}</p>}
      {message && <p className="agent-console-success">{message}</p>}
    </div>
  );
}
