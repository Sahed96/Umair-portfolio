import man from '../assets/Picture1.png';
import icon from '../assets/icons.png';

const Profile = () => {
  return (
    <div className="flex justify-around gap-14 mt-32 poppins">
      <div>
        <p className="text-black text-[24px] font-poppins font-semibold leading-normal tracking-[0.72px]">
          Hi I am{' '}
        </p>
        <p className="text-[#FD6F00] text-[32px] font-poppins font-semibold leading-normal tracking-[0.96px]">
          Muhammad Umair{' '}
        </p>
        <div>
          <h1 className="text-black text-[100px] font-poppins font-extrabold leading-[120%] tracking-[3px]">
            UI & UX
          </h1>
          <h1 className="text-black ml-[230px] text-[100px] font-poppins font-extrabold leading-[120%] tracking-[3px]">
            Designer{' '}
          </h1>
        </div>
        <p className="w-[698px] mt-7 mb-6 h-[101px] flex-shrink-0 text-black text-justify text-[21px] font-normal leading-normal tracking-[0.63px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className="btn text-white text-xl w-[188px] h-[52px] flex-shrink-0 rounded-[5px] bg-[#FD6F00]">
          Hire Me
        </button>
      </div>
      <div>
        <div className="relative">
          <img src={man} alt="" />
          <div className="w-[374px] absolute top-20 right-24 h-[83px] flex-shrink-0 bg-[rgba(253,111,0,0.6)]"></div>
        </div>
        <div className='flex justify-center mt-6'>
          <img className="w-[205px] h-[32px]" src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
