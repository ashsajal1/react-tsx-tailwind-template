import { useState } from "react";
import Button from "../components/ui/button";
import SideNav from "../components/partials/side-nav";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <SideNav handleClose={toggleOpen} isOpen={isOpen} />
      <Button onClick={() => { setIsOpen(!isOpen) }}>Open dialog</Button>
    </div>
  )
}
