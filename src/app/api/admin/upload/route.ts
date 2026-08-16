import { put } from '@vercel/blob';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import { db } from '@/db';
import { screens } from '@/db/schema';
import { authOptions } from '@/lib/auth';
import {
  formatFileSize,
  isAllowedImageType,
  MAX_UPLOAD_SIZE_BYTES,
  sanitizeFilename,
} from '@/lib/upload';

export const runtime = 'nodejs';

type UploadedScreen = {
  id?: string;
  url: string;
  pathname: string;
  contentType: string;
  size: number;
  filename: string;
};

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized. Sign into /admin again, then retry upload.' }, { status: 401 });
    }

    const formData = await request.formData();
    const projectId = formData.get('projectId');
    const files = formData.getAll('files').filter((item): item is File => item instanceof File);

    if (files.length === 0) {
      return NextResponse.json({ error: 'Upload at least one image.' }, { status: 400 });
    }

    const invalidFile = files.find((file) => !isAllowedImageType(file.type));
    if (invalidFile) {
      return NextResponse.json(
        { error: `${invalidFile.name} is not a supported image type.` },
        { status: 400 },
      );
    }

    const oversizedFile = files.find((file) => file.size > MAX_UPLOAD_SIZE_BYTES);
    if (oversizedFile) {
      return NextResponse.json(
        { error: `${oversizedFile.name} is larger than ${formatFileSize(MAX_UPLOAD_SIZE_BYTES)}.` },
        { status: 400 },
      );
    }

    const uploadedScreens: UploadedScreen[] = [];

    for (const [index, file] of files.entries()) {
      const safeName = sanitizeFilename(file.name) || `screen-${index + 1}`;
      const blob = await put(`portfolio/screens/${Date.now()}-${safeName}`, file, {
        access: 'public',
        addRandomSuffix: true,
      });

      const uploaded: UploadedScreen = {
        url: blob.url,
        pathname: blob.pathname,
        contentType: blob.contentType || file.type,
        size: file.size,
        filename: file.name,
      };

      if (typeof projectId === 'string' && projectId.length > 0) {
        const [screen] = await db.insert(screens).values({
          projectId,
          originalUrl: blob.url,
          altText: file.name.replace(/\.[^.]+$/, ''),
          displayOrder: Date.now() + index,
        }).returning();

        uploaded.id = screen.id;
      }

      uploadedScreens.push(uploaded);
    }

    return NextResponse.json({ screens: uploadedScreens });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Upload failed.' },
      { status: 500 },
    );
  }
}
