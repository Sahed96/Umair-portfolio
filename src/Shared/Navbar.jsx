import Logo from '../Components/logo';

const Navbar = () => {
  const Navlist = (
    <div className="lg:flex hover:cursor-pointer traking-[0.63px] items-center text-xl font-normal lg:space-x-10 poppins">
      <li>Home</li>
      <li>About Me</li>
      <li>Services</li>
      <li>Projects</li>
      <li>Testimonial</li>
      <li>Contact</li>
    </div>
  );
  return (
    <div className="navbar mt-10 justify-center bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Navlist}
          </ul>
        </div>
        <a>
          <Logo />
        </a>
      </div>
      <div className="navbar-c hidden lg:flex">
        <ul className="menu menu-horizontal py-2 px-6">{Navlist}</ul>
        <div className="navbar-end">
          <a className="btn text-white text-justify text-[15px] hover:bg-orange-700 font-normal leading-normal tracking-[0.63px] bg-[#FD6F00] poppins w-[152px] h-[17px]  py-2 rounded-xl ml-14">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
