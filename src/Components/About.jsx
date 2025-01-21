import man2 from '../assets/Picture2.png';
import { Slider } from 'antd';

const About = () => {
  return (
    <div className="flex justify-evenly gap-8 mt-20 poppins">
      <div>
        <div>
          <div className="relative">
            <img src={man2} alt="" />
            <div className="w-[374px] absolute top-20 left-[120px] h-[83px] flex-shrink-0 bg-[rgba(253,111,0,0.6)]"></div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-black pt-20 text-[65px] font-poppins font-semibold leading-none tracking-[1.95px]">
          About Me
        </h1>
        <p className="w-[600px] text-black">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className="pt-6 space-y-5">
          <div>
            <p className="text-black font-poppins text-2xl font-semibold leading-normal tracking-[0.72px]">
              UX
            </p>
            <Slider
              className="h-[12px] rounded-md bg-[#FD6F00]"
              defaultValue={70}
            />
          </div>
          <div>
            <p className="text-black font-poppins text-2xl font-semibold leading-normal tracking-[0.72px]">
              Website Design
            </p>
            <Slider
              className="h-[12px] rounded-md ant-slider-track bg-[#FD6F00]"
              defaultValue={60}
            />
          </div>
          <div>
            <p className="text-black font-poppins text-2xl font-semibold leading-normal tracking-[0.72px]">
              App Design{' '}
            </p>
            <Slider
              className="h-[12px] rounded-md bg-[#FD6F00]"
              defaultValue={90}
            />
          </div>
          <div>
            <p className="text-black font-poppins text-2xl font-semibold leading-normal tracking-[0.72px]">
              Graphic Design{' '}
            </p>
            <Slider
              className="h-[12px] rounded-md bg-[#FD6F00]"
              defaultValue={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
