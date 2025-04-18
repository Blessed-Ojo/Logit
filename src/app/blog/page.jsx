import Postcards from "@/components/postcards";
import Ppost from "@/components/pposts";

const Blog = () => {
  return (
    <div>
      <section className='flex w-full justify-center items-center p-7 '>
        <div className='flex text-center  flex-col  items-center mx-auto'>
        <h4 className='text-[#666666] p-2 text-2xl font-bold font-cap uppercase '>Our Blogs</h4>
        <h1 className="text-3xl font-bold text-[#333333] p-2 " >Find all our blog post from here <span className='text-[#7c4ee4]'>!!!</span></h1>
        <p className='font-bold text-[#666666] p-2 '>our blogs are written from a very research and well know writers so that we can provide <br /> you with the best blogs and news for you to read</p>
        </div>
     </section>
      <section className='justify-items-center p-10'>
        <Postcards/>
        <Ppost/>
      </section>
    </div>
  )
}

export default Blog