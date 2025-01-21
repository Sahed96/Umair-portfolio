import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

const Services = () => {
  return (
    <div className="mt-20 poppins">
      <div className="mx-auto">
        <h1 className="text-black text-center font-poppins text-[65px] font-semibold leading-normal tracking-[1.95px]">
          Services
        </h1>
        <p className=" flex-shrink-0 text-black text-center font-poppins text-base lg:text-[21px] font-normal leading-normal tracking-[0.63px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus <br /> netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 ml-4 gap-10 mt-14 justify-center mx-auto">
        <div className="w-[330px] px-5 h-[346px] flex-shrink-0 rounded-[14px] bg-[#F8F8F8]">
          <img className="pt-[57px]" src={icon1} alt="" />
          <h2 className="text-black pt-6 font-poppins text-[32px] font-semibold leading-normal tracking-[0.96px]">
            UI/UX
          </h2>
          <p className="pt-4 text-black font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
        <div className="w-[330px] px-5 h-[346px] flex-shrink-0 rounded-[14px] bg-[#F8F8F8]">
          <img className="pt-[57px]" src={icon2} alt="" />
          <h2 className="text-black pt-6 font-poppins text-[32px] font-semibold leading-normal tracking-[0.96px]">
            Web Design
          </h2>
          <p className="pt-4 text-black font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
        <div className="w-[330px] px-5 h-[346px] flex-shrink-0 rounded-[14px] bg-[#F8F8F8]">
          <img className="pt-[57px]" src={icon3} alt="" />
          <h2 className="text-black pt-6 font-poppins text-[32px] font-semibold leading-normal tracking-[0.96px]">
            App Design
          </h2>
          <p className="pt-4 text-black font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
        <div className="w-[330px] px-5 h-[346px] flex-shrink-0 rounded-[14px] bg-[#F8F8F8]">
          <img className="pt-[57px]" src={icon4} alt="" />
          <h2 className="text-black pt-6 font-poppins text-[32px] font-semibold leading-normal tracking-[0.96px]">
            Graphic Design
          </h2>
          <p className="pt-4 text-black font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
