"use client";
import Image from "next/image"
import Link from "next/link"

const Pposts =[
     {
          id: 1,
          src: "https://images.unsplash.com/photo-1527295110-5145f6b148d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhaW58ZW58MHx8MHx8fDA%3D",
          title:
            "Train or Bus journey? Which one suits",
          date: "16 March 2025",
          category: "Travel",
          description:
            "The choice between a train or bus journey depends on various factors such as the distance of the journey,the time available,the cost and person...",
            href: "/blog",  
     },
     {
          id: 2,
          src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
          title:
            "Best Website to research for your next project",
          date: "16 March 2025",
          category: "Development",
          description:
            "Capitaliz on low handing fruit identify a ballpark value added activity to beta test...",
            href: "/blog",  
     },
     {
          id: 3,
          src: "https://images.unsplash.com/photo-1621976360623-004223992275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRhbmNlcnxlbnwwfHwwfHx8MA%3D%3D",
          title:
            "How to be a dancer in 2025 with proper skills",
          date: "16 March 2025",
          category: "Sports",
          description:
            "Organically grow the holistic world view of disruptive innovation via workplace diverstiy and empowerment...",
            href: "/blog",  
     },
     {
          id: 4,
          src: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFwfGVufDB8fDB8fHww",
          title:
            "Who is the best singer on chart?know him?",
          date: "16 March 2025",
          category: "Music",
          description:
            "Chart by Billboard which ranks all-time greatest artists based on their performance on the weekly Billboard Hot 100 ...",
            href: "/blog",  
     },
     {
          id: 5,
          src: "https://media.istockphoto.com/id/1484871118/photo/confident-african-american-bearded-man-working-with-laptop-computer-remotely-while-sitting-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=rbFb8bMwgsqH4wCH_6UAahNUM4k_I2AN_kCdrRFwBQI=",
          title:
            "How to start export,import business from home",
          date: "16 March 2025",
          category: "Business",
          description:
            "Starting an export-import business from home is easier than ever. With just a laptop and an internet connection, you can source products locally and sell them globally. Begin by selecting a niche, registering your business, and understanding trade regulations...",
            href: "/blog",  
     },
     {
          id: 6,
          src: "https://media.istockphoto.com/id/2159073319/photo/banana-peanut-ice-cream-with-chocolate.webp?a=1&b=1&s=612x612&w=0&k=20&c=dJ8op-0xja4KlpEHNRqtI2pHemckPyPDsS0QY8kIa18=",
          title:
            "Make some drinks with chocolates and milk",
          date: "16 March 2025",
          category: "Food",
          description:
            "Chocolate and milk are a match made in heaven! From classic hot chocolate to creamy milkshakes, you can whip up delicious drinks right at home. Try a chilled chocolate frappe, a warm mocha latte, or even a rich chocolate protein smoothie....",
            href: "/blog",  
     }
]

const Ppost = () => {
  return (
     <section className="px-4 md:px-10 py-16 max-w-7xl mx-auto">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       {Pposts.map((post) => (
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
  )
}

export default Ppost