/* eslint-disable no-unused-vars */
import { useState } from "react";
import icon from "../../assets/logo.png";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Navbar = () => {
  // const [noOfCarts, setNoOfCarts] = useState(0);
  const pData = useSelector((state) => state.pData);
  return (
    <div className="sticky z-50 top-0 shadow-sm">
      <div className="bg-white border-gray-200 px-4 lg:px-6 py-3">
        <nav className="flex flex-wrap justify-between items-center">
          <div className="cursor-pointer flex items-center justify-center">
            <Link to="/" className="text">
              <img src={icon} height={35} width={35} alt="" />
            </Link>
            <span className="h3">SHOPPER</span>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-3 cursor-pointer nav-menu">
            <div>
              <Link to="/" className="no-underline text-black">
                HOME
              </Link>
            </div>
            <div>
              <Link to="/shop" className="no-underline text-black">
                SHOP
              </Link>
            </div>
            <div>
              <Link to="/about" className="no-underline text-black">
                ABOUT
              </Link>
            </div>
            <div>
              <Link to="/contact" className="no-underline text-black">
                CONTACT
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <button className="text-gray-800 no-underline hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              <Link to="/login" className="no-underline text-black">
                Login
              </Link>
            </button>

            <button type="button" className="position-relative">
              <Link to="/cart" className="no-underline text-black">
                <TiShoppingCart size={30} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {pData.length}
                </span>
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
