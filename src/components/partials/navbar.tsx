import Button from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 h-[80px] border-b">
        <div className="text-xl font-bold text-primary">Logo</div>
        <div>
            <Button>This is button</Button>
        </div>
    </nav>
  )
}
