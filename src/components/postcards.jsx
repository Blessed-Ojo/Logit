"use client";
import Image from "next/image";
import Link from "next/link"

const posts = [
  {
     id: 1,
    src: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dnJ8ZW58MHx8MHx8fDA%3D",
    title:
      "How to make a Game look more attractive with New VR & AI Technology",
    date: "16 March 2025",
    category: "Development",
    description:
      "Google has been investing in AI for many years and bringing its benefits to individuals, businesses, and communities...",
      href: "/blog",
  },
  {
     id: 2,
    src: "https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVza3RvcCUyMHVpJTJGdXh8ZW58MHx8MHx8fDA%3D",
    title:
      "How to build strong portfolio for your career and get a job in UI/UX",
    date: "16 March 2025",
    category: "Design",
    description:
      "Building a strong portfolio is essential for anyone looking to get a job in UI/UX design...",
      href: "/blog",
  },
  {
     id: 3,
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
    title: "How to be a professional photographer in 2025",
    date: "16 March 2025",
    category: "Photography",
    description:
      "Photography is an art form that requires creativity, technical skill, and a keen eye for detail...",
      href: "/blog",
  },
  {
     id: 4,
    src: "https://plus.unsplash.com/premium_photo-1683140766566-3ecdcf5a02e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    title: "8 Rules of Travelling in 2025 you should know",
    date: "16 March 2025",
    category: "Travel",
    description:
      "Travelling is a great way to explore new places and cultures, but it can also be overwhelming...",
      href: "/blog",
  },
];

const Postcards = () => {
  return (
    <section className="px-4 md:px-10 py-10 max-w-7xl mx-auto space-y-10">
    {/* Top large card */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Image
        src={posts[0].src}
        alt={posts[0].title}
        width={600}
        height={400}
        className="rounded-lg object-cover w-full h-full"
      />
      <div className="flex flex-col justify-center">
        <span className="text-sm text-purple-600 font-semibold uppercase">{posts[0].category}</span>
        <p className="text-xs text-gray-500">{posts[0].date}</p>
        <h3 className="text-2xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">{posts[0].title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{posts[0].description}</p>
        <Link href={posts[0].href} className="text-purple-600 text-sm font-medium">
          Read More...
        </Link>
      </div>
    </div>

    {/* 3 bottom cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.slice(1).map((post) => (
        <div key={post.id} className="space-y-3">
          <Image
            src={post.src}
            alt={post.title}
            width={400}
            height={250}
            className="rounded-lg object-cover w-full"
          />
          <div className="text-sm text-gray-500">
            <span className="font-semibold text-purple-600">{post.category}</span> • {post.date}
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{post.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{post.description}</p>
          <Link href={post.href} className="text-purple-600 text-sm font-medium cursor-pointer">
            Read More...
          </Link>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default Postcards;
