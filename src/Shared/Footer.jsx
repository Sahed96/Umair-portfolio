import Logo from '../Components/logo';
import fb from '../assets/Facebook - Negative.svg';
import twt from '../assets/Twitter - Negative.svg';
import lin from '../assets/LinkedIn - Negative.svg';
import insta from '../assets/Instagram - Negative.svg';

const Footer = () => {
  const Navlist = (
    <div className="lg:flex list-none hover:cursor-pointer traking-[0.63px] items-center text-xl font-normal lg:space-x-10 poppins">
      <li>Home</li>
      <li>About Me</li>
      <li>Services</li>
      <li>Projects</li>
      <li>Testimonial</li>
      <li>Contact</li>
    </div>
  );
  return (
    <div className="bg-[#F8F8F8] poppins">
      <div className="lg:pt-20 pt-6 flex justify-center">
        <Logo />
      </div>
      <div className="lg:mt-14 mt-6 justify-center flex">{Navlist}</div>
      <div className="flex justify-center gap-6 mt-14">
        <img src={fb} alt="" />
        <img src={twt} alt="" />
        <img src={insta} alt="" />
        <img src={lin} alt="" />
      </div>
      <div className="bg-[#545454] mt-8 h-12 flex justify-center items-center text-white text-base lg:text-[21px] font-normal leading-none tracking-[0.63px]">
        © 2023{' '}
        <span className="text-[#FD6F00] mx-2 text-lg lg:text-[21px] font-bold leading-none tracking-[0.63px]">
          M.umair
        </span>{' '}
        All Rights Reserved , Inc.
      </div>
    </div>
  );
};

export default Footer;
