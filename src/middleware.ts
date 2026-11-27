import { NextResponse, type NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';

// HOLDING PAGE — the whole portfolio is under development.
// Every route shows this page (including /hire and /freelance) until
// this file is reverted. Revert: restore the previous version of this
// file (`git checkout src/middleware.ts`) and redeploy. Nothing else
// was changed, and the /admin GitHub auth below is preserved as-is.
const HOLDING_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>Iryna Sheremeta</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; }
  body {
    background: #121316;
    color: #f4f4f2;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
    -webkit-font-smoothing: antialiased;
  }
  main { max-width: 560px; }
  .eyebrow {
    font-size: 12px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: #9a9aa0;
    margin-bottom: 28px;
  }
  h1 {
    font-size: clamp(40px, 7vw, 64px);
    line-height: 1.08;
    font-weight: 500;
    letter-spacing: -0.02em;
  }
  h1 em {
    font-family: Georgia, "Times New Roman", serif;
    font-style: italic;
    font-weight: 400;
    color: #f2908f;
  }
  .rule {
    width: 48px;
    height: 1px;
    background: #3a3b40;
    margin: 32px auto;
  }
  p {
    font-size: 17px;
    line-height: 1.6;
    color: #c9c9cd;
  }
</style>
</head>
<body>
  <main>
    <p class="eyebrow">Portfolio</p>
    <h1>Iryna <em>Sheremeta</em></h1>
    <div class="rule"></div>
    <p>This portfolio is under development and will be back soon.</p>
  </main>
</body>
</html>`;

function holdingMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/_next/') || pathname === '/favicon.ico') {
    return NextResponse.next();
  }
  return new NextResponse(HOLDING_HTML, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}

export default withAuth(holdingMiddleware, {
  callbacks: {
    authorized({ req, token }) {
      const { pathname } = req.nextUrl;
      if (!pathname.startsWith('/admin')) return true;
      const allowedGithubId = process.env.AUTHORIZED_GITHUB_ID || 'Irene2828';
      const username = token?.username as string;
      return !!username && username.toLowerCase() === allowedGithubId.toLowerCase();
    },
  },
});

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
