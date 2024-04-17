import nextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    firebseToken?: string;
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
