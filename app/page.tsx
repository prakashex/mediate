import { prisma } from '@/prisma/db'
import Image from 'next/image'


export default async function Home() {
    const posts = await prisma.post.findMany()
  return (
    <main>
        {JSON.stringify(posts)}
    </main>
  )
}
