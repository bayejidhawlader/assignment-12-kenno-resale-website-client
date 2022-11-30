import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import img404 from "../../../assets/404.jpg";

const ErrorPage = () => {
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img404})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <Link to="/">
              <PrimaryButton classes="px-8 py-3 font-semibold rounded">
                Back to homepage
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
// https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg
export default ErrorPage;
