import ScreenUploader from '../components/ScreenUploader';

export default function AdminUploadPage() {
  return (
    <section className="admin-page">
      <p className="admin-eyebrow">Admin Workspace</p>
      <h1>Upload Screens</h1>
      <p className="admin-intro">
        Drop project screenshots here to upload them to Vercel Blob. When this
        page is opened from a project editor later, the same uploader can attach
        screens directly to that project.
      </p>
      <ScreenUploader />
    </section>
  );
}
