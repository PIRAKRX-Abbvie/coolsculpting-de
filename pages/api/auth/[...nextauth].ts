import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authenticateDocCheck } from './utils/doccheckAuth';

interface CredentialsParams {
    searchParams: string;
    csrfToken: string;
    callbackUrl: string;
    json: string;
}

function isObjectEmpty(obj: any): boolean {
    return Object.keys(obj).length === 0;
}

const options = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            // @ts-ignore
            async authorize(credentials: CredentialsParams): Promise<any>{
                if (!isObjectEmpty(credentials)) {
                    const searchParams = new URLSearchParams(credentials.searchParams);
                    const code: string | null = searchParams.get('code');

                    if (code !== null && code !== '') {
                        const user = await authenticateDocCheck(code);
                        return user;
                    } else {
                        throw new Error('Code is null or empty');
                    }
                }
            }
        })
    ],
    pages: {
        home: '/',
        signIn: '/login',
        error: '/login',
    },
    session: {
        maxAge: 24 * 60 * 60,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn() {
            return true;
        },
        async redirect({url, baseUrl}: any) {
            return url
        },
        async session({session}: any) {
            return session
        },
        async jwt({token}: any) {
            return token
        }
    },
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, options)
}
