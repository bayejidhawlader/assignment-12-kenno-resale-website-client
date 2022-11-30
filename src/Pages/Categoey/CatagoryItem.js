import React from "react";
import { useLoaderData } from "react-router-dom";
import SecondModal from "../Modal/SecondModal";
import FirstModal from "../Modal/FirstModal";
import Spinner from "../Shared/Spinner/Spinnner";

const CatagoryItem = ({ isLoading }) => {
  const service = useLoaderData();

  return (
    <div className="grid lg:grid-cols-2 gap-10 my-20">
      <div className="card card-compact w-full  shadow-xl  items-center">
        <figure>
          <img
            className="h-96"
            src={service.ProductOne[0].productPicture}
            alt="Mobile"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">
            {service.ProductOne[0].name}
          </h2>

          <div className="">
            <p className="font-bold text-2xl">
              Offer Price: {service.ProductOne[0].priceOffer}
            </p>
            <p className="font-bold text-xl">
              Original Price: {service.ProductOne[0].price}
            </p>
          </div>
          <div>
            <p className="text-1xl font-semibold">
              Location : {service.ProductOne[0].location}
            </p>
            <p className="text-1xl font-semibold">
              Used Time : {service.ProductOne[0].yearsOfUse}
            </p>
            <p className="font-bold">
              Seller Name: {service.ProductOne[0].sellerName}
            </p>
          </div>
          <p className="text-1xl font-semibold">
            Published Date : 24-11-{service.ProductOne[0].year}
          </p>
          <div className="card-actions  justify-center my-2">
            <label label htmlFor="booking-modal" className="btn btn-primary">
              Book Now
            </label>
          </div>
        </div>
      </div>
      <div className="card card-compact w-full  shadow-xl  items-center">
        <figure>
          <img
            className="h-96"
            src={service.ProductTwo[0].productPicture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">
            {service.ProductTwo[0].name}
          </h2>
          {/* <p className="font-bold">{service.ProductTwo[0].description}</p> */}
          <div className="">
            <p className="font-bold text-2xl">
              Offer Price: {service.ProductTwo[0].priceOffer}
            </p>
            <p className="font-bold text-xl mb-2">
              Original Price: {service.ProductTwo[0].price}
            </p>
          </div>
          <div>
            <p className="text-1xl font-semibold">
              Location : {service.ProductTwo[0].location}
            </p>
            <p className="text-1xl font-semibold">
              Used Time : {service.ProductTwo[0].yearsOfUse}
            </p>
            <p className="font-bold">
              Seller Name: {service.ProductTwo[0].sellerName}
            </p>
          </div>
          <p className="text-1xl font-semibold">
            Published Date : 24-11-{service.ProductTwo[0].year}
          </p>
          <div className="card-actions justify-center my-2">
            <label label htmlFor="booking-modal1" className="btn btn-primary">
              Book Now
            </label>
          </div>
          <FirstModal key={service._id} service={service}></FirstModal>
          <SecondModal key={service._id} service={service}></SecondModal>
        </div>
      </div>
    </div>
  );
};

export default CatagoryItem;
