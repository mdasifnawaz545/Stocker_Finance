"use client"
import { RiNotification2Line } from "react-icons/ri";
import { firebaseUserAuth } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const user = useSelector((store) => (store.user));

  return (
    <nav className="md:w-full px-8 text-sm flex items-center justify-center h-12 border-b-1 border-gray-200 shadow-sm ">
      { // use h-[30vh] if you do not want to resize your navbar size.
      }

      <div className="md:w-1/5">
        <img src={"/src/assets/zerodha-kite-seeklogo.svg"} width={25} />
      </div>
      <div className="flex items-center justify-end list-none md:w-4/5 md:gap-6 max-md:hidden">
        <a href="/dashboard" className="hover:text-red-500 duration-100"><li>Dashboard</li></a>
        <a href="/orders" className="hover:text-red-500 duration-100"><li>Orders</li></a>
        <a href="/holdings" className="hover:text-red-500 duration-100"><li>Holdings</li></a>
        <a href="/positions" className="hover:text-red-500 duration-100"><li>Positions</li></a>
        <a href="/funds" className="hover:text-red-500 duration-100"><li>Funds</li></a>
        <button className="flex items-center justify-center"><RiNotification2Line /></button>
        {
          // Implement the Notification Badge and Routes.
        }
        <div className="flex items-center justify-center gap-2">
          <li>
            <img src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1737050200/user_pjhcj0.png" width={20} alt="User" />
          </li>
          <li>{`${user.name}`}</li>
        </div>

      </div>


    </nav>
  );
}
