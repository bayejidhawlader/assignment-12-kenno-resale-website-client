import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useDynamicTitle from "../../hooks/useDynamicTitle/useDynamicTitle";
import Spinner from "../Shared/Spinner/Spinnner";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  // Use Title
  useDynamicTitle("Register");
  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <form onSubmit={handleSingUp} className="card-body p-0">
          {/* Spinner */}
          <Spinner></Spinner>
          <h1 className="text-3xl text-white">Register</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>

          <Link to="/login" className="">
            <p className="text-center pb-4">
              Have an Account? please
              <button>- Login</button>
            </p>
          </Link>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sing Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
