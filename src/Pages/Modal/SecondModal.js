import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const SecondModal = ({ service }) => {
  const { user } = useContext(AuthContext);
  const handelmodal = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const meetingLocation = form.meetingLocation.value;
    const orderMobile = form.orderMobile.value;

    const booking = {
      orderMobile: orderMobile,
      meetingLocation: meetingLocation,
      name,
      email,
      price,
      location,
      phone,
    };
    console.log(booking);
    fetch(`https://server-vert-nu.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product Purchase Successfully");
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal1"
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
              disabled
              type="text"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              disabled
              type="email"
              readOnly
              defaultValue={user?.email}
              placeholder="email"
              className="input w-full input-bordered"
            />
            <input
              name="orderMobile"
              disabled
              type="text"
              defaultValue={service.ProductTwo[0].name}
              className="input w-full  input-bordered"
            />
            <input
              name="price"
              disabled
              defaultValue={service.ProductTwo[0].priceOffer}
              className="input w-full input-bordered"
            />
            <input
              name="location"
              disabled
              type="text"
              defaultValue={service.ProductTwo[0].location}
              className="input w-full  input-bordered"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              defaultValue={service.ProductTwo[0].Mobile}
              className="input w-full input-bordered"
            />

            <input
              name="meetingLocation"
              placeholder="Meeting Location"
              defaultValue={service.ProductOne[0]?.meetingLocation}
              className="input w-full   input-bordered"
            />

            <button
              htmlFor="booking-modal1"
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

export default SecondModal;
