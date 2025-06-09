import { useState } from "react";
import SideNav from "../components/partials/side-nav";
import { Button } from "@/components/ui/button";
import Seo from '../components/Seo';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Seo title="Home | React Template" description="Welcome to the Home page of the React TSX Tailwind template." />
      <div>
        <SideNav handleClose={toggleOpen} isOpen={isOpen} />
        <Button onClick={() => { setIsOpen(!isOpen) }}>Open dialog</Button>
      </div>
    </>
  )
}
