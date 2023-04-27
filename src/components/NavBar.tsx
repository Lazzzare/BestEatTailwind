import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Inpuuuut */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="Search Foods"
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div>

      {/* Cart Buuuuton */}
      <button className="bg-black text-white hidden md:flex items-center py-2 gap-3 rounded-full">
        <BsFillCartFill size={20} />
        Cart
      </button>

      {/* Mobile Menuuuuuu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : null}
      {/* Overlaaaay */}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 ">
            <li className="text-xl py-4 flex gap-3 items-center">
              <TbTruckDelivery size={25} />
              Orders
            </li>
            <li className="text-xl py-4 flex gap-3 items-center">
              <MdFavorite size={25} />
              Favorites
            </li>
            <li className="text-xl py-4 flex gap-3 items-center">
              <FaWallet size={25} />
              Wallet
            </li>
            <li className="text-xl py-4 flex gap-3 items-center">
              <MdHelp size={25} />
              Help
            </li>
            <li className="text-xl py-4 flex gap-3 items-center">
              <AiFillTag size={25} />
              Promotions
            </li>
            <li className="text-xl py-4 flex gap-3 items-center">
              <BsFillSaveFill size={25} />
              Best Ones
            </li>
            <li className="text-xl py-4 flex gap-3 items-center">
              <FaUserFriends size={25} />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
