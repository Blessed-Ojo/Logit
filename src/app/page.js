import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="Hero bg-[#7c4ee4] text-white flex flex-col   md:flex-row justify-between items-center p-15">
         <title>Featured post</title>
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-10">How AI will <br />Change the Future</h1>
          <p className="mb-10">Discover how AI is changing the world around us and shaping the future, <span>The future of Ai will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute.</span></p>
          <Link href="/blog">
          <button className="bg-white text-[#333333] font-semibold px-6 py-2 rounded cursor-pointer">Read More</button>
          </Link>
        </div>
        <Image src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI Future" width={550} height={500} className="rounded-lg object-cover" />
      </section>
    </div>
  );
}
