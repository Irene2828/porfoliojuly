import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ token }) {
      const allowedGithubId = process.env.AUTHORIZED_GITHUB_ID || 'Irene2828';
      const username = token?.username as string;
      return !!username && username.toLowerCase() === allowedGithubId.toLowerCase();
    },
  },
});

export const config = {
  matcher: ['/admin/:path*'],
};
