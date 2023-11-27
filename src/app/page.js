"use client";

import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

const handleButton = () => {
  toast.success("We Can Do It...!!!");
};

export default function Page() {
  return (
    <div className="justify-center px-2 m-3">
      <div>EVENTMAKERS</div>
      <Button onClick={handleButton} color="success">
        Push Me
      </Button>
    </div>
  );
}
