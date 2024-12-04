import { useLocation, useNavigate } from "react-router";
import logo from "../../assets/black-logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="flex justify-between  h-auto w-full px-2 border border-[#2F1A4B] border-opacity-20 py-2">
      <div className="order-last w-auto">
        {location.pathname === "/credit-score/list" && (
          <button
            onClick={() => navigate("/")}
            className="text-[#2F1A4B] text-lg font-bold hover:underline"
          >
            Home
          </button>
        )}
      </div>
      <div>
        <img src={logo} alt="logo" className="w-20 h-auto relative my-2 mr-2" />
      </div>
    </nav>
  );
};

export default Navbar;
