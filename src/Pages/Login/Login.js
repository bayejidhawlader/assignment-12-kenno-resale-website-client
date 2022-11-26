import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useDynamicTitle from "../../hooks/useDynamicTitle/useDynamicTitle";
import Spinner from "../../Pages/Shared/Spinner/Spinnner";

const Login = () => {
  const { logInWithGoogleProvider, loginExitingUser } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Login with email and pass
    loginExitingUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const googleProvider = new GoogleAuthProvider();

  // Sing In With Google
  const handleGoogleSingIn = () => {
    logInWithGoogleProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  // Use Title
  useDynamicTitle("Login");
  return (
    <div className="hero">
      <div className="hero-content">
        <form onSubmit={handleLogin} className="card-body p-0">
          {/* Spinner */}
          <Spinner></Spinner>
          <h1 className="text-3xl text-white">Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="Your Email"
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
              placeholder="Your Password"
              className="input input-bordered"
            />
          </div>
          <Link to="/singup" className="">
            <p className=" text-center pb-4">
              Are you new? please
              <button className=" w-100">- Register</button>
            </p>
          </Link>

          <button
            onClick={handleGoogleSingIn}
            className="border-2 border-primary p-2"
          >
            Login with Google
          </button>

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
