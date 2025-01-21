import logo from '../assets/Subtract.svg';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="lg:w-[67px] w-9 h-9 lg:h-[67px]">
        <img src={logo} alt="logo" />
      </div>
      <div className='montserrat'>
        <span className="text-[#1E1E1E] lg:text-5xl text-2xl font-bold">M</span>
        <span className="text-[#545454] text-2xl lg:text-5xl">umair</span>
      </div>
    </div>
  );
};

export default Logo;
