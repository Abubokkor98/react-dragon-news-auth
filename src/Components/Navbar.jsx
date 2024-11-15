import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

export default function Navbar() {
  const {user,logOut} = useContext(AuthContext);

  // this handleLogout function is for my learning purpose, we can directly call logOut function on the logout button without creating this handleLogout function.
  const handleLogout = () =>{
    logOut()
    .then(()=>console.log('Logout successful.'))
    .catch(error=>{
      console.log("ERROR", error.message);
    })
  }

  return (
    <div className="flex justify-between">
      <div>{user && user.email}</div>
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
        {
          user?<button onClick={handleLogout} className="btn btn-neutral rounded-none w-[140px]">Logout</button> : <Link to={'/auth/login'} className="btn btn-neutral rounded-none w-[140px]">Login</Link>
        }
      </div>
    </div>
  );
}
