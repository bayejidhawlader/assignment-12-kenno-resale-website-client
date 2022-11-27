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
    const orderCar = form.orderCar.value;

    const booking = {
      orderCar: orderCar,
      name,
      email,
      price,
      location,
      phone,
    };
    console.log(booking);
    fetch(`http://localhost:5000/bookings`, {
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
              name="orderCar"
              disabled
              type="text"
              defaultValue={service.Product2[0].name}
              className="input w-full  input-bordered"
            />
            <input
              name="price"
              disabled
              defaultValue={service.Product2[0].priceOffer}
              className="input w-full input-bordered"
            />
            <input
              name="location"
              disabled
              type="text"
              defaultValue={service.Product2[0].location}
              className="input w-full  input-bordered"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              defaultValue={service.Product2[0].Mobile}
              className="input w-full input-bordered"
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
