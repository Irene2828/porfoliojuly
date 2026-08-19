import { config } from 'dotenv';
config({ path: '.env.local' });
import { eq } from 'drizzle-orm';

import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

async function seed() {
  console.log('🌱 Starting seed...');

  // Dynamically import to ensure process.env is populated before Neon initialization
  const { db } = await import('./index');
  const { projects, screens, annotations } = await import('./schema');

  try {
    console.log('Cleaning existing records...');
    await db.delete(annotations);
    await db.delete(screens);
    await db.delete(projects);

    const assetsDir = path.join(process.cwd(), 'src', 'app', 'assets');

    async function uploadAsset(filename: string) {
      const filePath = path.join(assetsDir, filename);
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }
      try {
        console.log(`Uploading ${filename} to Vercel Blob...`);
        const fileBuffer = fs.readFileSync(filePath);
        const blob = await put(`portfolio/${filename}`, fileBuffer, {
          access: 'public',
          addRandomSuffix: true,
        });
        console.log(`Uploaded! URL: ${blob.url}`);
        return blob.url;
      } catch (err) {
        console.warn(`⚠️ Vercel Blob upload failed for ${filename}. Using local fallback path: /assets/${filename}`);
        return `/assets/${filename}`;
      }
    }

    const automationUrl = await uploadAsset('poster.png');
    const websiteUrl = await uploadAsset('ukraine.png');
    const mobileUrl = await uploadAsset('work3.png');

    console.log('Inserting Project 1 (Workflow Automation)...');
    const [proj1] = await db.insert(projects).values({
      title: 'Workflow Automation',
      slug: 'workflow-automation',
      caseStudyIntro: 'Terry Fox Foundation asked for something to make posters easier for volunteers worldwide',
      problem: 'chapters worldwide needed on-brand posters fast, some with edge-case content',
      buildApproach: 'a locked template, editable text layer, and a full manual override panel',
      impact: 'any volunteer self-serves in minutes, without breaking the brand',
      status: 'published',
      displayOrder: 1,
    }).returning();

    const [screen1] = await db.insert(screens).values({
      projectId: proj1.id,
      originalUrl: automationUrl,
      altText: 'Automated Graphic Work Dashboard',
      displayOrder: 1,
    }).returning();

    await db.update(projects).set({ coverImageId: screen1.id }).where(eq(projects.id, proj1.id));

    await db.insert(annotations).values([
      {
        screenId: screen1.id,
        markerNumber: 1,
        title: 'one template, many cities',
        explanation: 'design stays locked by default, only content changes per chapter',
        x: 0.1, y: 0.1,
      },
      {
        screenId: screen1.id,
        markerNumber: 2,
        title: 'two tiers of control',
        explanation: 'click-to-edit for most volunteers, full manual override underneath for edge cases',
        x: 0.2, y: 0.2,
      },
      {
        screenId: screen1.id,
        markerNumber: 3,
        title: 'QR code auto-generated',
        explanation: 'registration link becomes scannable, no export step',
        x: 0.3, y: 0.3,
      },
    ]);

    console.log('Inserting Project 2 (Websites)...');
    const [proj2] = await db.insert(projects).values({
      title: 'Websites',
      slug: 'websites',
      caseStudyIntro: 'Started as “help Ukrainian-owned businesses get found in Canada” — no brief, just a volunteer ask',
      bullet1: 'React and Vite, deployed to Vercel',
      bullet2: 'Volunteer-run, still active',
      status: 'published',
      displayOrder: 2,
    }).returning();

    const [screen2] = await db.insert(screens).values({
      projectId: proj2.id,
      originalUrl: websiteUrl,
      altText: 'Buy Ukrainian in Canada Landing Page Mockup',
      displayOrder: 1,
    }).returning();

    await db.update(projects).set({ coverImageId: screen2.id }).where(eq(projects.id, proj2.id));

    await db.insert(annotations).values([
      {
        screenId: screen2.id,
        markerNumber: 1,
        title: 'Map-first, not list-first',
        explanation: 'trust comes from seeing a store is near you',
        x: 0.1, y: 0.1,
      },
      {
        screenId: screen2.id,
        markerNumber: 2,
        title: 'Yellow on blue',
        explanation: 'visible without feeling costume-y',
        x: 0.2, y: 0.2,
      },
      {
        screenId: screen2.id,
        markerNumber: 3,
        title: 'One action above the fold',
        explanation: 'find stores near me, nothing else competing',
        x: 0.3, y: 0.3,
      },
    ]);

    console.log('Inserting Project 3 (Mobile Apps)...');
    const [proj3] = await db.insert(projects).values({
      title: 'Mobile Apps',
      slug: 'mobile-apps',
      caseStudyIntro: 'Started as “I want to plan meals without opening five apps”',
      bullet1: 'React Native, built with Google Antigravity, deployed to Vercel',
      status: 'published',
      displayOrder: 3,
    }).returning();

    const [screen3] = await db.insert(screens).values({
      projectId: proj3.id,
      originalUrl: mobileUrl,
      altText: 'Meal Planner App 3',
      displayOrder: 1,
    }).returning();

    await db.update(projects).set({ coverImageId: screen3.id }).where(eq(projects.id, proj3.id));

    console.log('🌱 Seed complete!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
