import { Button, MegaMenu, Navbar } from "flowbite-react";
import React from "react";
import logo from "../../assets/logo.png";
import { HiChevronDown } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import PositionedMenu from "../PositionedMenu";

function Header() {
  const path = useLocation().pathname;
  const [selectedCourse, setSelectedCourse] = React.useState("Select a Course");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (course) => {
    if (course) setSelectedCourse(course);
    setAnchorEl(null);
  };
  return (
    <Navbar className='max-w-4xl mx-auto'>
      <div className='flex justify-start items-center gap-2'>
        <Link
          to='/'
          className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center'
        >
          <img src={logo} alt='logo' className='h-12 ' />
        </Link>
        <div className='hidden md:block'>
        <PositionedMenu anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose} selectedCourse={selectedCourse}/>
        </div>
      </div>
      <div className='flex gap-5 md:order-2'>
        <Link to='/sign-in'>
          <Button type='button' size='md' color='gray'>
            <span className='hover:text-black'>Login</span>
          </Button>
        </Link>

        <Link to='/sign-up'>
          <Button type='button' size='md' color='blue'>
            <span className='hover:text-black'>Try for free</span>
          </Button>
        </Link>

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/refer"} as={"div"}>
          <Link to='/refer'>Refer & Earn</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/resources"} as={"div"}>
          <Link to='/resources'>Resources</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to='/about'>About us</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
