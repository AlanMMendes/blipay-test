import { FunctionComponent } from "react";
import logo from "../../assets/black-logo.svg";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className="flex justify-start items-center h-auto w-full px-2 border border-[#2F1A4B] border-opacity-20 py-2">
      <img src={logo} alt="logo" className="w-20 h-auto relative my-2 mr-2" />
    </div>
  );
};

export default Navbar;
