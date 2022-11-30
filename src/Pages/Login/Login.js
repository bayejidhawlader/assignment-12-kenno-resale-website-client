import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { useForm } from "react-hook-form";
import useToken from "../../hooks/useToken";
import toast from "react-hot-toast";

const Login = () => {
  const history = useNavigate();
  const location = useLocation();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const { signIn, GoogleProvider } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const GoogleSign = new GoogleAuthProvider();
  console.log(loginUserEmail);
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
        setLoginUserEmail(user.email);
        const role = "buyer";
        saveUser(user.displayName, user.email, role);
        console.log(user.email);
        toast.success("Successfully Login with Google");
        // navigate("/");
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    console.log(user);
    fetch(`https://server-vert-nu.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Log In Successfully");
      });
  };

  return (
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
            className="btn w-80 mt-5 btn-secondary font-bold text-white"
          >
            Log In With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
