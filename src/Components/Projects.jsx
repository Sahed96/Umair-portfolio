import design1 from '../assets/Web Designs.png';
import design2 from '../assets/Web Designs (1).png';
import design3 from '../assets/Web Designs (2).png';
import design4 from '../assets/Web Designs (3).png';
import design5 from '../assets/Web Designs (4).png';
import design6 from '../assets/Web Designs (5).png';

const Projects = () => {
  return (
    <div className="mt-20 poppins">
      <div className="mx-auto">
        <h1 className="text-black text-center font-poppins text-5xl lg:text-[65px] font-semibold leading-normal tracking-[1.95px]">
          My Projects
        </h1>
        <p className=" mt-5 flex-shrink-0 text-black text-center font-poppins text-base lg:text-[21px] font-normal leading-normal tracking-[0.63px]">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus <br /> lectus. Phasellus consequat urna tellus
        </p>
      </div>
      <div>
        <div className=" gap-6 space-y-4 lg:space-y-0 space-x-1 lg:space-x-0 mt-14 justify-center lg:flex">
          <button className=" border-2  px-5 py-3 items-start  text-xl hover:bg-[#FD6F00]  hover:text-white gap-[10px] rounded-[12px] border-[0.4px_solid_#545454] bg-[#F8F8F8]">
            All
          </button>
          <button className="px-5 border-2 py-3 items-start text-xl hover:bg-[#FD6F00] hover:text-white gap-[10px] rounded-[12px] border-[0.4px_solid_#545454] bg-[#F8F8F8]">
            UI/UX
          </button>
          <button className="px-5 border-2 py-3 items-start text-xl hover:bg-[#FD6F00] hover:text-white gap-[10px] rounded-[12px] border-[0.4px_solid_#545454] bg-[#F8F8F8]">
            Web Design
          </button>
          <button className="px-5 border-2 py-3 items-start text-xl hover:bg-[#FD6F00] hover:text-white gap-[10px] rounded-[12px] border-[0.4px_solid_#545454] bg-[#F8F8F8]">
            App Design
          </button>
          <button className="px-5 border-2 py-3 items-start text-xl hover:bg-[#FD6F00] hover:text-white gap-[10px] rounded-[12px] border-[0.4px_solid_#545454] bg-[#F8F8F8]">
            Graphic Design
          </button>
        </div>
        <div className="grid mb-10 lg:grid-cols-3 grid-cols-1 lg:ml-6 space-y-28 lg:space-y-0 gap-10 mt-14 justify-center mx-auto">
          <div className="relative w-[370px] lg:w-[445px] h-[489px] rounded-[12px] bg-[#FFEBDB]">
            <img className="absolute pr-3 lg:pr-7 right-0" src={design2} alt="" />
            <img className="absolute -bottom-1 pl-3 lg:pl-10" src={design1} alt="" />
            <div className="absolute -bottom-40 lg:-bottom-36 left-0 pb-10">
              <p className="text-[#FD6F00] font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">
                Web Design
              </p>
              <p className="text-black font-poppins text-[24px] font-bold leading-normal tracking-[0.72px]">
                AirCalling Landing Page Design
              </p>
            </div>
          </div>
          <div className="relative w-[370px] lg:w-[445px] h-[489px] rounded-[12px] bg-[#FFEBDB]">
            <img className="absolute pr-3 lg:pr-7 right-0" src={design4} alt="" />
            <img className="absolute -bottom-1 pl-3 lg:pl-10" src={design3} alt="" />
            <div className="absolute -bottom-40 lg:-bottom-36 left-0 pb-10">
              <p className="text-[#FD6F00] font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">
                Web Design
              </p>
              <p className="text-black font-poppins text-[24px] font-bold leading-normal tracking-[0.72px]">
                Business Landing Page Design
              </p>
            </div>
          </div>
          <div className="relative w-[370px] lg:w-[445px] h-[489px] rounded-[12px] bg-[#FFEBDB]">
            <img className="absolute pr-3 lg:pr-7 right-0" src={design6} alt="" />
            <img className="absolute -bottom-1 pl-3 lg:pl-10" src={design5} alt="" />
            <div className="absolute -bottom-32 lg:-bottom-36 left-0 pb-10">
              <p className="text-[#FD6F00] font-poppins text-[19px] font-normal leading-normal tracking-[0.57px]">
                Web Design
              </p>
              <p className="text-black font-poppins text-[24px] font-bold leading-normal tracking-[0.72px]">
                Ecom Web Page Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
