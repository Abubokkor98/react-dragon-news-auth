import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  const { createNewUser, setUser, updateUserprofile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleRegister = (e) => {
    setError("");
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Name must be more than 5character long" });
      return;
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // call context function
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserprofile({ displayName: name, photoURL: photo })
        .then(()=>{
          navigate('/');
        })
        .catch(err=>{
          console.log(err);
        })
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log({ errorCode, errorMessage });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          {/* name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
            {error.name && <p className="text-xs text-red-600">{error.name}</p>}
          </div>
          {/* photo input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
          {/* email input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* password input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="label-text">
                  Accept{" "}
                  <span className="font-semibold">Term & Conditions</span>
                </span>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account ?{" "}
          <Link to={"/auth/login"} className="text-red-600">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
