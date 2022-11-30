import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const FirstModal = ({ service }) => {
  const { user } = useContext(AuthContext);

  const handelmodal = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const orderMobile = form.orderMobile.value;
    const meetingLocation = form.meetingLocation.value;
    const productPicture = form.productPicture.value;
    const email = form.email.value;

    const booking = {
      orderMobile: orderMobile,
      meetingLocation: meetingLocation,
      name,
      price,
      location,
      phone,
      email,
      productPicture,
    };

    fetch(`https://server-vert-nu.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Purchase Successfully");
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            action=""
            onSubmit={handelmodal}
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              name="name"
              type="text"
              disabled
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input w-full  input-bordered"
            />
            <input
              name="email"
              disabled
              readOnly
              type="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input w-full  input-bordered"
            />
            <input
              name="orderMobile"
              type="text"
              disabled
              defaultValue={service.ProductOne[0].name}
              className="input w-full input-bordered"
            />

            <input
              name="productPicture"
              hidden
              // type="file"
              disabled
              defaultValue={service.ProductOne[0].productPicture}
              className="input w-full input-bordered"
            />

            <input
              name="price"
              disabled
              defaultValue={service.ProductOne[0]?.priceOffer}
              placeholder=""
              className="input w-full input-bordered"
            />
            <input
              name="location"
              disabled
              type="text"
              defaultValue={service.ProductOne[0]?.location}
              className="input w-full  input-bordered"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              defaultValue={service.ProductOne[0]?.Mobile}
              className="input w-full   input-bordered"
            />
            <input
              name="meetingLocation"
              placeholder="Meeting Location"
              defaultValue={service.ProductOne[0]?.meetingLocation}
              className="input w-full   input-bordered"
            />

            <button
              htmlFor="booking-modal"
              className="btn w-full btn-accent font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirstModal;
