import Logo from '../Components/logo';
import { NavHashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const Navlist = (
    <div className="lg:flex  hover:cursor-pointer traking-[0.63px] items-center text-xl font-normal lg:space-x-10 poppins">
      <li>
        <Link spy={true} smooth={true} offset={-70} duration={1000} to="/#">
          Home
        </Link>
      </li>
      <li>
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          to="/#about"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          to="/#services"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          to="/#projects"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          to="/#testimonial"
        >
          Testimonial
        </Link>
      </li>
      <li>
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          to="/#contact"
        >
          Contact
        </Link>
      </li>
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
            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Navlist}
          </ul>
        </div>
        <a>
          <Logo />
        </a>
      </div>
      <div className="right-6 hidden  lg:flex">
        <ul className="menu menu-horizontal py-2 px-6">{Navlist}</ul>
      </div>
      <div className="">
        <a className=" lg:ml-20 ml-10 btn text-white text-justify text-[15px] hover:bg-orange-700 font-normal leading-normal tracking-[0.63px] bg-[#FD6F00] poppins w-[152px] h-[17px]  py-2 rounded-xl">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
