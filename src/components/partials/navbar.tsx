import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import Button from "../ui/button";
import ModeToggle from "../ui/mode-toggle";
import Search from "../ui/search";
import Text from "../ui/text";
import SideNav from "./side-nav";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SideNav handleClose={toggleOpen} isOpen={isOpen} />
      <nav className={`flex items-center justify-between p-2 w-full h-[80px] top-0 bg-white md:dark:border-none border-b dark:bg-black dark:border-b-gray-600 z-10 fixed ${scrollY > 150 ? 'bg-opacity-60 dark:bg-opacity-60 backdrop-blur' : ''}`}>
        <Link to='/'>
          <Text label="Logo" className="text-xl font-bold" />
        </Link>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <CiMenuFries onClick={toggleOpen} className="h-6 w-6 md:hidden dark:text-white text-black" />

          <div className="hidden md:flex items-center gap-2">
            <Search />
            <Link to='/login'><Button>Login</Button></Link>
          </div>
        </div>
      </nav>
    </>
  )
}
