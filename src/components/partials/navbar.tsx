import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "../ui/button";
import Text from "../custom-ui/text";
import SideNav from "./side-nav";
import { ModeToggle } from "../mode-toggle";
import { motion } from "framer-motion";

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

  const handleNavClick = () => {
    if(isOpen) {
      setIsOpen(false)
    }
  }

  const navLinks = [
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/docs", label: "Docs" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <>
      <SideNav handleClose={toggleOpen} isOpen={isOpen} />
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`flex items-center justify-between px-4 md:px-8 w-full h-[80px] top-0 bg-white/80 md:dark:border-none border-b dark:bg-black/80 dark:border-b-gray-800 z-20 fixed backdrop-blur-md ${scrollY > 150 ? 'shadow-sm' : ''}`} 
        onClick={handleNavClick}
      >
        <div className="flex items-center gap-8">
          <Link to='/'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Text label="SaaSify" className="text-xl font-bold text-primary" />
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.to}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link 
                  to={link.to} 
                  className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to='/login' 
                className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                Sign in
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to='/signup'>
                <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <ModeToggle />
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <CiMenuFries 
              onClick={toggleOpen} 
              className="h-6 w-6 md:hidden text-gray-600 dark:text-gray-400 cursor-pointer hover:text-primary dark:hover:text-primary transition-colors" 
            />
          </motion.div>
        </div>
      </motion.nav>
    </>
  )
}
