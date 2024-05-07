import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../ui/button";
import ModeToggle from "../ui/mode-toggle";
import Search from "../ui/search";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

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
    <nav className={`flex items-center justify-between p-2 w-full h-[80px] top-0 bg-white border-b dark:bg-black dark:border-b-gray-600 z-10 fixed ${scrollY > 150 ? 'bg-opacity-80 dark:bg-opacity-60 backdrop-blur-sm' : ''}`}>
      <Link to='/' className="text-xl font-bold text-primary">Logo</Link>
      <div className="flex items-center gap-2">
        <Search />
        <ModeToggle />
        <Link to='/login'><Button>Login</Button></Link>
      </div>
    </nav>
  )
}
