import logo from '../assets/Subtract.svg';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-[67px] h-[67px]">
        <img src={logo} alt="logo" />
      </div>
      <div className='montserrat'>
        <span className="text-[#1E1E1E] text-5xl font-bold">M</span>
        <span className="text-[#545454] text-5xl">umair</span>
      </div>
    </div>
  );
};

export default Logo;
