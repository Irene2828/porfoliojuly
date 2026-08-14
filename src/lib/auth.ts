import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.username = (profile as any).login;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).username = token.username;
      }
      return session;
    },
    async signIn({ user, profile }) {
      const allowedGithubId = process.env.AUTHORIZED_GITHUB_ID || 'Irene2828';
      const username = (profile as any)?.login || (user as any)?.username;
      
      if (username && username.toLowerCase() === allowedGithubId.toLowerCase()) {
        return true;
      }
      return false; // Strictly forbid any other users
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
