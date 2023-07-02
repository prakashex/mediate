"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


export function SiteHeader(){
    const {data: session} = useSession();
    return (
        <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
                <div className="flex items-center gap-x-12">
                    <Link href="/" className="text-xl font-bold">
                        Mediate
                    </Link>
                    <Link href="/new-post" className="text-sm font-semibold leading-6 text-gray-900">
                        New Post
                    </Link>
                </div>
                <span className="flex items-center space-x-4">
                    {session?.user && (
                        <Avatar>
                            <AvatarImage src={session.user.image} alt="@shadcn">
                                <AvatarFallback></AvatarFallback>
                            </AvatarImage>
                        </Avatar>
                    )}
                </span>
                </nav>
        </header>
    )
}