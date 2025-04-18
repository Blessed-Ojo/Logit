import Image from "next/image";

const about =[
     {
      number:"01",
      tittle:"Brainstorming",
      desc:"Bring to the table a win-win survival strategies to ensure proactive domination.At the end of the day,going forward,a new normal that has evolved from the Gen X is on the runway heading towards a streamlined cloud solution User generated"
     },
     {
      number:"02",
      tittle:"Analysing",
      desc:"Capitlize on low hanging to identify a ballpark value added activity to beta test. Override the digital divide with the additiional clickthrough from DevOps"
     },
     {
      number:"03",
      tittle:"News Publishing",
      desc:"Leverage agile framework to provide a robust synopsis for high levl overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value, Organically grow the holistic world view of disruptive innovation Via workspace diverstiy and empowerment"
     },
]

const About = () => {
  return (
    <div>
       <section className='flex flex-col w-full justify-center items-center p-7 '>
        <div className='flex text-center  flex-col  items-center mx-auto'>
        <h4 className='text-[#666666] p-2 text-2xl font-bold font-cap uppercase '>about us</h4>
        <h1 className="text-3xl font-bold text-[#333333] p-2 " >Creative Blog Writting and Publishing Site</h1>
        <p className='font-bold text-[#666666] p-2 '> Leverage agile framework to provide a robust synopsis for high levl overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value, Organically grow the holistic world view of disruptive innovation Via workspace <br /> diverstiy and empowerment.</p>
        </div>
        <div className="relative w-[800px] h-[300px] md:h-[400px] lg:h-[500px] rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww"
                      alt="About"
                      fill
                      className="object-cover"
                    />
                  </div>
     </section>
     <section className="flex flex-col w-full justify-center items-center p-7">
  <h3 className='text-[#666666] text-start text-1xl font-bold uppercase mb-6'>HOW WE WORK</h3>
  <div className="flex justify-between gap-10 iteam-center">
         <h1 className='text-[#666666] text-2xl font-bold font-cap uppercase '>I will show you how <br /> our team works</h1>
         <p className='font-bold text-[#666666] '>to bring a win-win market strateagies to ensure <br /> perfect articles.</p>
       </div>
  <div className="flex flex-col md:flex-row justify-center items-start gap-6 w-full max-w-6xl">
    {about.map((abouts, index) => (
      <div
      key={index}
      className={`flex flex-col rounded-lg p-6 w-full md:w-1/3 transition-all duration-300 cursor-pointer ${
        index === 0
          ? 'hover:bg-[#7c4ee4] hover:text-white text-[#666666]'
          : ' text-gray-500 hover:bg-[#7c4ee4] hover:text-white'
      }`}
    >
      <h1 className={`text-3xl font-bold transition-colors ${
        index !== 0 ? 'text-gray-300 group-hover:text-white' : ''
      }`}>
        {abouts.number}
      </h1>
    
      <h2 className={`text-xl font-bold mb-2 transition-colors ${
        index !== 0 ? 'text-[#7c4ee4] group-hover:text-white' : ''
      }`}>
        {abouts.title}
      </h2>
    
      <p className="text-sm leading-relaxed transition-colors">{abouts.desc}</p>
    
    </div>
    
    ))}
  </div>
</section>

    </div>
  )
}

export default About