import img1 from '../assets/Ellipse 10.png';
import img2 from '../assets/Ellipse 11.png';
import { Carousel } from 'antd';

const contentStyle = {
  height: '344px',
  width: '1087px',
  borderRadius: '10px',
  margin: '0 auto',
  textAlign: 'center',
  background: '#F8F8F8',
};

const Testimonials = () => {
  return (
    <div className="poppins mt-40">
      <div className="mx-auto">
        <h1 className="text-black text-center font-poppins text-[65px] font-semibold leading-normal tracking-[1.95px]">
          Testimonials
        </h1>
        <p className=" mt-5 flex-shrink-0 text-black text-center font-poppins text-[21px] font-normal leading-normal tracking-[0.63px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus <br /> netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className="mt-10 mb-10">
        <Carousel autoplay>
          <div>
            <div className="flex gap-10" style={contentStyle}>
              <div className="py-14 pl-12">
                <img className="w-[235px]" src={img1} alt="" />
              </div>
              <div className="space-y-2 text-start">
                <p className="w-[698px] h-[146px] mt-20 text-[#424242] text-justify text-[21px] font-normal leading-normal tracking-[0.42px]">
                  <span className="text-[#FD6F00] text-[32px] font-bold ">
                    “
                  </span>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.
                  <span className="text-[#FD6F00] text-[32px] font-bold ">
                    “
                  </span>
                </p>
                <p className="text-black text-justify font-poppins text-[24px] font-medium leading-normal tracking-[0.48px]">
                  Name
                </p>
                <p className="text-black text-justify font-poppins text-[18px] font-medium leading-normal tracking-[0.48px]">
                  CEO
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-10" style={contentStyle}>
              <div className="py-14 pl-12">
                <img className="w-[235px]" src={img2} alt="" />
              </div>
              <div className="space-y-2 text-start">
                <p className="w-[698px] h-[146px] mt-20 text-[#424242] text-justify text-[21px] font-normal leading-normal tracking-[0.42px]">
                  <span className="text-[#FD6F00] text-justify font-poppins text-[32px] font-bold leading-normal tracking-[0.64px]">
                    “
                  </span>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.
                  <span className="text-[#FD6F00] text-[32px] font-bold ">
                    “
                  </span>
                </p>
                <p className="text-black text-justify font-poppins text-[24px] font-medium leading-normal tracking-[0.48px]">
                  Name
                </p>
                <p className="text-black text-justify font-poppins text-[18px] font-medium leading-normal tracking-[0.48px]">
                  CEO
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-10" style={contentStyle}>
              <div className="py-14 pl-12">
                <img className="w-[235px]" src={img1} alt="" />
              </div>
              <div className="space-y-2 text-start">
                <p className="w-[698px] h-[146px] mt-20 text-[#424242] text-justify text-[20px] font-normal leading-normal tracking-[0.42px]">
                  <span className="text-[#FD6F00] text-justify font-poppins text-[32px] font-bold leading-normal tracking-[0.64px]">
                    “
                  </span>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.
                  <span className="text-[#FD6F00] text-[32px] font-bold ">
                    “
                  </span>
                </p>
                <p className="text-black text-justify font-poppins text-[24px] font-medium leading-normal tracking-[0.48px]">
                  Name
                </p>
                <p className="text-black text-justify font-poppins text-[18px] font-medium leading-normal tracking-[0.48px]">
                  CEO
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-10" style={contentStyle}>
              <div className="py-14 pl-12">
                <img className="w-[235px]" src={img2} alt="" />
              </div>
              <div className="space-y-2 text-start">
                <p className="w-[698px] h-[146px] mt-20 text-[#424242] text-justify text-[21px] font-normal leading-normal tracking-[0.42px]">
                  <span className="text-[#FD6F00] text-justify font-poppins text-[32px] font-bold leading-normal tracking-[0.64px]">
                    “
                  </span>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.
                  <span className="text-[#FD6F00] text-[32px] font-bold ">
                    “
                  </span>
                </p>
                <p className="text-black text-justify font-poppins text-[24px] font-medium leading-normal tracking-[0.48px]">
                  Name
                </p>
                <p className="text-black text-justify font-poppins text-[18px] font-medium leading-normal tracking-[0.48px]">
                  CEO
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
