import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div></div>
      <div className="space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/career"}>Career</Link>
      </div>
      <div className="flex gap-2 items-center">
        <div className="">
          <img src={userIcon} alt="" />
        </div>
        {/* <button className="btn btn-neutral rounded-none w-[140px]">Login</button> */}
        <Link to={'/auth/login'} className="btn btn-neutral rounded-none w-[140px]">Login</Link>
      </div>
    </div>
  );
}
