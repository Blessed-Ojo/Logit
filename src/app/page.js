import Image from "next/image";
import Postcards from "@/components/postcards";
import Ppost from "@/components/pposts"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="Hero {raleway.variable} bg-[#7c4ee4] text-white flex flex-col  md:flex-row justify-between items-center p-10">
        <div className="max-w-xl ">
          <h3>Featured post</h3>
          <h1 className="text-5xl md:text-6xl font-bold mb:mb-10 mb-6">
            How AI will
            <br />
            Change the Future
          </h1>
          <p className="mb-6 text-xl md:text-2xl md:mb-10">
            Discover how AI is changing the world around us and shaping the
            future,{" "}
            <span className="text-[#333333]">
              The future of Ai will see home robots having enhanced
              intelligence, increased capabilities, and becoming more personal
              and possibly cute.
            </span>
          </p>
          <Link href="/blog"className="bg-white text-[#333333] font-semibold px-6 py-2 rounded cursor-pointer">
              Read More
          </Link>
        </div>
        <Image
          src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="AI Future"
          width={570}
          height={550}
          className="rounded-lg object-fill mt-6 md:mb-0 "
        />
      </section>

      <section className="Featured-Post justify-items-center p-10">
        <div className="container relative flex flex-col md:block max-w-5xl mx-auto">
      
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI Future"
              fill
              className="object-cover"
            />
          </div>

        
          <div
            className="
            bg-[#7c4ee4] dark:bg-white text-black shadow-lg p-6 rounded-lg mt-4
            md:absolute md:bottom-[-40px] md:left-1/2 md:-translate-x-1/2 md:w-4/5
          "
          >
            <div>
              <h4 className="font-semibold text-white dark:text-black">
                DEVELOPMENT
              </h4>
              <p className="text-white dark:text-gray-700">16 March 2025</p>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white dark:text-black">
              How to make a Game look more attractive with New VR & AI
              Technology
            </h3>
            <p className="mb-4 text-white dark:text-gray-700">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses, and communities...
            </p>
            <Link href="/blog/vr-ai" className="border-white dark:border-[#7c4ee4] border-2 text-white dark:text-[#7c4ee4] font-semibold px-6 py-2 rounded cursor-pointer">
                Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="recent-post justify-items-center p-10">
        <div className=" flex flex-col justify-between items-center  mx-auto p-4">
        <div className="flex justify-between items-center w-full mb-3">
        <h2 className="text-3xl font-bold">Recent Posts</h2>
        <Link href="/blog"className="bg-[#7c4ee4] text-white px-6 py-2 rounded cursor-pointer " >View All</Link>
        </div>
         <div className="post ">
          <Postcards/>
         </div>
        </div>
      </section>

      <section className="p-post justify-items-center p-10">
        <div className=" flex flex-col justify-between items-center  mx-auto p-4">
        <div className="flex justify-between items-center w-full mb-3">
        <h2 className="text-3xl font-bold">Popular Posts</h2>
        <Link href="/blog"className="bg-[#7c4ee4] text-white px-6 py-2 rounded cursor-pointer " >View All</Link>
        </div>
         <div className="ppost ">
          <Ppost/>
         </div>
        </div>
      </section>
    </div>
  );
}
