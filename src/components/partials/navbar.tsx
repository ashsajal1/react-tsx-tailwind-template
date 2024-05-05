import { Link } from "react-router-dom";
import Button from "../ui/button";
import ModeToggle from "../ui/mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 h-[80px] border-b dark:bg-black dark:border-b-gray-600">
      <Link to='/' className="text-xl font-bold text-primary">Logo</Link>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Link to='/login'><Button>Login</Button></Link>
      </div>
    </nav>
  )
}
