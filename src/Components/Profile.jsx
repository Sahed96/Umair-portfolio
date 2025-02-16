import { useEffect } from 'react';
import man from '../assets/Picture1.png';
import icon from '../assets/icons.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTypewriter } from 'react-simple-typewriter'

const Profile = () => {
  const [text1]  = useTypewriter({
    words: ['UI & UX', 'FrontEnd'],
    loop: true,
    typeSpeed: 200,
  })

  const [ text2 ] = useTypewriter({
    words: ['Designer', 'Developer'],
    loop: true,
    typeSpeed: 200,
  })

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div className="lg:flex flex-col lg:flex-row justify-around gap-14 mt-6 lg:mt-32 poppins">
      <div className="order-1 lg:order-2 ">
        <div className="relative">
          <img data-aos='fade-left' src={man} alt="Profile" />
          <div data-aos="fade-right" className="lg:w-[374px] w-[200px] h-[50px] absolute top-14 lg:top-20 right-[90px] lg:right-24 lg:h-[83px] flex-shrink-0 bg-[rgba(253,111,0,0.6)]"></div>
        </div>
        <div data-aos="fade-up" className="flex justify-center mt-6">
          <img className="w-[205px] h-[32px]" src={icon} alt="Icon" />
        </div>
      </div>
      <div className="order-2 lg:order-1 mt-8 lg:mt-0">
        <p className="text-black text-[24px] font-semibold leading-normal tracking-[0.72px]">
          Hi I am{' '}
        </p>
        <p className="text-[#FD6F00] text-[32px] font-semibold leading-normal tracking-[0.96px]">
          Muhammad Umair{' '}
        </p>
        <div>
          <h1 className="text-black text-5xl lg:text-[100px] font-extrabold leading-[120%] tracking-[3px]">
            {text1}
          </h1>
          <h1 className="text-black ml-14 lg:ml-[230px]  text-5xl lg:text-[100px] font-extrabold leading-[120%] tracking-[3px]">
            {text2}
          </h1>
        </div>
        <p className="lg:w-[698px] w-[350px] mt-7 mb-6 h-[101px] flex-shrink-0 text-black text-justify text-[21px] font-normal leading-normal tracking-[0.63px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className="btn mt-24 lg:mt-0 text-white text-xl w-[188px] h-[52px] flex-shrink-0 rounded-[5px] bg-[#FD6F00]">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Profile;
