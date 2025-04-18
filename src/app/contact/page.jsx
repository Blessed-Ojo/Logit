import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className="w-full py-12 px-4 md:px-20 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-gray-500 mt-2">
          Contact us to publish your content and show ads on our website and get a good reach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        {[
          { label: 'Office', value: 'Victoria Street, London, UK', icon: '🏢' },
          { label: 'Email', value: 'hello@zamrin.com', icon: '✉️' },
          { label: 'Phone', value: '1(001) 234 3451', icon: '📞' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center transition hover:shadow-xl"
          >
            <div className="bg-[#7c4ee4] text-white rounded-full p-3 text-2xl mb-3">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#7c4ee4]">{item.label}</h3>
            <p className="text-sm text-gray-500">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="w-full max-w-6xl h-[400px] rounded-lg overflow-hidden mb-[-100px] z-0 relative">
        <Image
          src="https://media.istockphoto.com/id/1921032187/photo/background-based-on-the-concept-of-local-location-based-services-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=RY4uOcPRkAzY-DMrf5P9WABbdo6i3Vd3lkzgQfCh4so="
          alt="map"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating Form under Map */}
      <div className="z-10 w-full max-w-4xl -mt-32 mb-12">
        <form className="bg-white text-black p-8 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-[#7c4ee4] placeholder-[#7c4ee4] p-3 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-[#7c4ee4] placeholder-[#7c4ee4] p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            className="border border-[#7c4ee4] p-3 placeholder-[#7c4ee4] rounded w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-[#7c4ee4] p-3 placeholder-[#7c4ee4] rounded w-full"
          />
          <textarea
            placeholder="Message"
            className="border border-[#7c4ee4] p-3 placeholder-[#7c4ee4] rounded col-span-1 md:col-span-2 h-32"
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-[#7c4ee4] text-white py-3 rounded hover:bg-[#693edb] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
