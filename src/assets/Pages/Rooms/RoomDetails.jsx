import { Link, useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
// import toast from "react-hot-toast";
const RoomDetails = () => {
  const roomDetail = useLoaderData();
  const {_id, title, price, image, description, availability } = roomDetail;
  console.log(title);
  return (
    <div>
      <div>
        <div>
          <div className="w-9/12 mx-auto my-16">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure className=" my-5 mx-10">
                <img
                  className=" h-[300px] w-[500px] "
                  src={image}
                  alt="Album"
                />
              </figure>
              <div className="card-body w-80">
                <h2 className="card-title text-4xl">{title}</h2>
                {/* <p className="text-xl font-semibold ">Brand : {brandName}</p>
                <p className="text-xl font-semibold ">Type : {type}</p> */}

                {/* rating */}
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                {/* rating */}
                <p className=" text-2xl  mt-2 pt-2 font-bold text-[#ff3811] rounded-full   w-full">
                  Per Night: $ {price}
                </p>
                <p className=" text-2xl  mt-2 pt-2 font-bold text-[#ff3811] rounded-full   w-full">
                  Availability :{" "}
                  <span className="text-gray-800">
                    {" "}
                    {availability === false ? "Available" : "Booked"}
                  </span>
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/roomcheckout/${_id}`}>
                    <button className="btn text-xl mt-8 bg-red-600  text-center text-white rounded-full w-full ">
                      <FaShoppingCart />
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold bg-red-500  text-center py-2 px-2 my-2 text-white rounded-lg ">
              Description:
            </span>
            <p className="text-xl mt-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
