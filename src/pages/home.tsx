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
      <Dialog isOpen={isOpen}>
        <Dialog.Header>Are you sure to delete the post?</Dialog.Header>
        <Dialog.Content>
          Please think again before delete
        </Dialog.Content>

        <Dialog.ActionButtons>
          <Button onClick={toggleOpen} variant="danger-outline">Cancel</Button>
          <Button variant="danger" onClick={toggleOpen}>Ok</Button>
        </Dialog.ActionButtons>
      </Dialog>
    </div>
  )
}
