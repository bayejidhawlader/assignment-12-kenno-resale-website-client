import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const Banner = () => {
  return (
    <div>
      <div className="hero py-20">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">
              Classified platform, a Marketplace Connecting Buyers and Sellers
            </h1>
            <p className="py-6">
              Keeno is the fastest online Mobile marketplace in Bangladesh.
              Start buying and selling today! Make shopping SIMPLE, SECURE and
              FAST on the largest marketplace in Bangladesh. Discover what you
              need and sell all sorts of products in our simple yet powerful
              platform.
            </p>
            <Link to="/singup">
              <PrimaryButton classes="rounded-full px-4 py-2">
                Sign Up Now
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
