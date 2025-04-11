

const footer = () => {
  return (
    <div className="bg-[#7c4ee4] flex justify-center text-white p-10 ">
      <section className="max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Get our stories delivered from <br />
          us to your inbox weekly.
        </h1>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className=" bg-white w-full sm:w-auto px-5 py-3 rounded-md text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-purple-600 transition cursor-pointer"
          >
            Get started
          </button>
        </form>

        <p className="text-sm text-white/80">
          Get a response tomorrow if you submit by 9pm today. If we receive it
          after 9pm, you'll get a response the following day.
        </p>
      </section>
    </div>
  );
};

export default footer;
