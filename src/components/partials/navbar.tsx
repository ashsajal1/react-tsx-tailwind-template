import { Link } from "react-router-dom";
import Button from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 h-[80px] border-b">
        <Link to='/' className="text-xl font-bold text-primary">Logo</Link>
        <div>
            <Link to='/login'><Button>Login</Button></Link>
        </div>
    </nav>
  )
}
