'use client';

import { ReactNode, useEffect } from 'react';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.location.hash) return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return <>{children}</>;
}
