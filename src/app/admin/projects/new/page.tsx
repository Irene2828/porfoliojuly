import Link from 'next/link';

import { createProject } from '../../actions';

export default function NewProjectPage() {
  return (
    <section className="admin-page">
      <p className="admin-eyebrow">New Draft</p>
      <h1>Create Project</h1>
      <p className="admin-intro">Start with the core case-study content. Screens and annotations can be added after saving.</p>

      <form className="admin-form" action={createProject}>
        <label>
          Title
          <input name="title" required />
        </label>
        <label>
          Slug
          <input name="slug" placeholder="auto-generated from title if empty" />
        </label>
        <label>
          Section tag / intro
          <textarea name="caseStudyIntro" rows={3} />
        </label>
        <label>
          Problem
          <textarea name="problem" rows={3} />
        </label>
        <label>
          Built with
          <textarea name="buildApproach" rows={3} />
        </label>
        <label>
          Impact
          <textarea name="impact" rows={3} />
        </label>
        <div className="admin-form-actions">
          <Link href="/admin">Cancel</Link>
          <button type="submit">Save Draft</button>
        </div>
      </form>
    </section>
  );
}
