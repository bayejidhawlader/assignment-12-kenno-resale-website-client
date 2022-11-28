import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useForm } from "react-hook-form";
import useToken from "../../hooks/useToken";

const Login = () => {
  const history = useNavigate();
  const location = useLocation();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const { signIn, GoogleProvider } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const GoogleSign = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handellogin = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        // from && history(from.pathname);
      })
      .catch((error) => console.log(error));
  };
  const handelGoogle = () => {
    GoogleProvider(GoogleSign)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  // Login with email and pass
  //   loginExitingUser(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch((err) => console.error(err));
  // };

  // Sing In With Google
  // const handleGoogleSingIn = () => {
  //   logInWithGoogleProvider(googleProvider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    // <div className="hero input-bordered">
    //   <div className="hero-content">
    //     <form onSubmit={handleLogin} className="card-body p-0">
    //       <h1 className="text-3xl text-white">Login</h1>
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text">Email</span>
    //         </label>
    //         <input
    //           name="email"
    //           type="text"
    //           placeholder="Your Email"
    //           className="input input-bordered"
    //         />
    //       </div>
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text">Password</span>
    //         </label>
    //         <input
    //           name="password"
    //           type="password"
    //           placeholder="Your Password"
    //           className="input input-bordered"
    //         />
    //       </div>
    //       <Link to="/singup" className="">
    //         <p className="text-center pb-4">
    //           Are you New? please
    //           <button className="text-red-500">- Sing Up</button> To Kenno Store
    //         </p>
    //       </Link>

    //       <button
    //         onClick={handleGoogleSingIn}
    //         className="border-2 border-primary p-2"
    //       >
    //         Login with Google
    //       </button>

    //       <div className="form-control mt-6">
    //         <input className="btn btn-primary" type="submit" value="Login" />
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <div className="w-96 justify-center items-center mx-auto ">
      <div>
        <h2 className="text-center text-4xl my-10">Login</h2>
        <form
          className=" mx-auto p-10 mt-7"
          onSubmit={handleSubmit(handellogin)}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 Character",
                },
              })}
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <Link to="/singup" className="">
            <p className="text-center mt-2 text-base">
              Are you New User? please
              <button className="text-red-500">- Sing Up </button>
            </p>
          </Link>
          <input
            className="btn btn-primary w-80  mt-10"
            type="submit"
            value="Login"
          />
          <button
            onClick={handelGoogle}
            className="btn  w-80  mt-5 font-bold text-white"
          >
            Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
