import NavbarLayouts from "@/components/navbar/components/NavbarLayouts";

import toast from "react-hot-toast";

const handleButton = () => {
  toast.success("We Can Do It...!!!");
};

export default function Page() {
  return (
    <div className="justify-center px-2 m-3 max-h-unit-3xl">
      <NavbarLayouts />
      <div>
        <h1>Landing Page</h1>
      </div>
    </div>
  );
}
