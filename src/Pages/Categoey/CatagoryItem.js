import React from "react";
import { useLoaderData } from "react-router-dom";
import SecondModal from "../Modal/SecondModal";
import FirstModal from "../Modal/FirstModal";

const CatagoryItem = () => {
  const service = useLoaderData();
  console.log(service);

  return (
    <div className="grid lg:grid-cols-2 gap-10 my-20">
      <div className="card card-compact w-full  shadow-xl  items-center">
        <figure>
          <img className="h-96" src={service.Product1[0].pic1} alt="Mobile" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">
            {service.Product1[0].name}
          </h2>

          <div className="">
            <p className="font-bold text-2xl">
              Offer Price: {service.Product1[0].priceOffer}
            </p>
            <p className="font-bold text-xl">
              Original Price: {service.Product1[0].price}
            </p>
          </div>
          <div>
            <p className="text-1xl font-semibold">
              Location : {service.Product1[0].location}
            </p>
            <p className="text-1xl font-semibold">
              Used Time : {service.Product1[0].yearsOfUse}
            </p>
            <p className="font-bold">
              Seller Name: {service.Product1[0].sellerName}
            </p>
          </div>
          <p className="text-1xl font-semibold">
            Published Date : 24-11-{service.Product1[0].year}
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
          <img className="h-96" src={service.Product2[0].pic1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">
            {service.Product2[0].name}
          </h2>
          {/* <p className="font-bold">{service.Product2[0].description}</p> */}
          <div className="">
            <p className="font-bold text-2xl">
              Offer Price: {service.Product2[0].priceOffer}
            </p>
            <p className="font-bold text-xl mb-2">
              Original Price: {service.Product2[0].price}
            </p>
          </div>
          <div>
            <p className="text-1xl font-semibold">
              Location : {service.Product2[0].location}
            </p>
            <p className="text-1xl font-semibold">
              Used Time : {service.Product2[0].yearsOfUse}
            </p>
            <p className="font-bold">
              Seller Name: {service.Product2[0].sellerName}
            </p>
          </div>
          <p className="text-1xl font-semibold">
            Published Date : 24-11-{service.Product2[0].year}
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
