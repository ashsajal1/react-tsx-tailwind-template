import { useState } from "react";
import Button from "../components/ui/button";
import Dialog from "../components/ui/dialog";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Button onClick={() => { setIsOpen(!isOpen) }}>Open dialog</Button>
      <Dialog setIsOpen={toggleOpen} isOpen={isOpen} />
    </div>
  )
}
