import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-500">
            <span className="sr-only">Error</span>
            <div className="flex justify-center items-center h-full">OPPS!</div>
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            404 - Page not Found
          </p>
          <Link to="/">
            <PrimaryButton classes="px-8 py-3 font-semibold rounded">
              Back to homepage
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
