"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";



export function SiteHeader() {
  const { data: session } = useSession();
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="text-xl font-bold">
            Mediate
          </Link>
          <Link
            href="/new-post"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            New Post
          </Link>
        </div>
        <span className="flex items-center space-x-4">
          {session?.user && (
            <Avatar>
              <AvatarImage src={session.user.image} alt="@shadcn"/>
                <AvatarFallback>{session.user.name}</AvatarFallback>
            </Avatar>
          )}
          <span>{session ? <SignOut /> : <Login />}</span>
        </span>
      </nav>
    </header>
  );
}

function Login() {
  return (
    <button
      onClick={() => signIn()}
      className="text-sm font-semibold loading-6 text-gray-900"
    >
      Log in
    </button>
  );
}


function SignOut(){
    const router = useRouter()

    async function onSignOut(){
        await signOut();
        router.push("/api/auth/signin");
    }
    return (
        <button
          onClick={() => onSignOut()}
          className="text-sm font-semibold loading-6 text-gray-900"
        >
          Sign Out
        </button>
      );
}