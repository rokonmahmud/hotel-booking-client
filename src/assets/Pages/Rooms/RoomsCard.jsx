import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card9 = ({ services }) => {
  // eslint-disable-next-line react/prop-types
  const { room_name, price, image,_id } = services;
  return (
    <div className="">
      <div className="max-[350px]  md:w-[350px] bg-slate-300/20 px-6 py-4   rounded-2xl space-y-6 shadow-md">
        {/* Card Image */}
        <img
          className="w-[350px] h-[190px] bg-gray-400 rounded-2xl"
          src={image}
          alt=""
        />
        {/* Card Heading */}
        <div className="space-y-2">
          <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">
            {room_name}
          </h2>
          {/* rating  */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ff3811"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
        {/* Price and action button */}
        <div className="mt-5 flex justify-between items-center font-medium">
          <h2 className="md:text-xl text-gray-800">${price}</h2>
          <Link to={`/rooms/${_id}`}>
            <button className="bg-[#FF3811] text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card9;
