const Newslater = () => {
  return (
    <div className="mt-20 poppins">
      <div className="mx-auto">
        <h1 className="text-black text-center font-poppins text-5xl lg:text-[65px] font-semibold leading-normal tracking-[1.95px]">
        Lets Design Together
        </h1>
        <p className=" mt-5 flex-shrink-0 text-black text-center font-poppins text-base lg:text-[21px] font-normal leading-normal tracking-[0.63px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus <br /> netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className="mt-20 mb-10 flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="lg:w-[627px] w-[250px] h-12 lg:h-[75px] flex-shrink-0 rounded-[14px] border border-[#AFAFAF] bg-[#F8F8F8] text-[#797979] text-sm lg:text-[21px] pl-6 py-5 font-normal outline-none leading-none tracking-[0.63px]"
        />
        <button className="lg:w-[222px] w-24 h-12 lg:h-[75px] ml-2 lg:ml-6 flex-shrink-0 rounded-[14px] bg-[#FD6F00] text-white text-center font-poppins hover:bg-orange-600 text-sm lg:text-[24px] font-semibold leading-none tracking-[0.72px]">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Newslater;
