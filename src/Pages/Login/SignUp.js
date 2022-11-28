import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const SingUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [signupError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  //user singup data set state

  if (token) {
    navigate("/");
  }

  const [singUpData, setSingupData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    let fieldValid;
    if (e.target.name === "email") {
      let isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      fieldValid = isEmailValid;
      // console.log(fieldValid);
    }

    if (e.target.name === "password") {
      let passwordValid = e.target.value.length >= 6;
      fieldValid = passwordValid;
    }

    if (e.target.name === "name") {
      // fieldValid = e.target.value
      let nameValid = e.target.value.length >= 2;
      fieldValid = nameValid;
      // console.log(fieldValid)
    }

    if (fieldValid) {
      const newUserInfo = { ...singUpData };
      // console.log(newUserInfo)
      newUserInfo[e.target.name] = e.target.value;
      setSingupData(newUserInfo);
    }
  };
  //  handle submit
  const handleSubmitSingup = (e) => {
    e.preventDefault();
    // post data

    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singUpData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saveuser", data);
        toast("Create User Successfully");
        navigate("/");
      });

    setSignUpError("");
    // createUser(data.email, data.password)
    createUser(singUpData.email, singUpData.password)
      .then((result) => {
        const user = result.user;
        toast("Log In Successfully");
        navigate("/");
        const userInfo = {
          displayName: singUpData.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(singUpData.name, singUpData.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        signupError(error.message);
      });

    const saveUser = (name, email) => {
      const user = { name, email };
      // getUserToken(email);
      setCreatedUserEmail(email);
    };
  };
  const handelSignup = (data) => {};

  return (
    <div className=" h-[800px] w-96 justify-center items-center mx-auto ">
      <div>
        <h2 className="text-center text-4xl">SignUp</h2>
        <form
          className="border mx-auto p-10 mt-7  "
          onSubmit={handleSubmitSingup}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Name </span>
            </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="New Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {signupError && <p className="text-red-600">{signupError}</p>}
          <input className="btn btn-primary w-80  mt-10" type="submit" />
        </form>
        <p className="text-priamry font-bold">
          Already have a Account ? Please
          <Link to="/login" className="text-secondary">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingUp;