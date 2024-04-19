import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {logOut ,user } = useContext(AuthContext);
  const handaleLogout = ()=> {
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }
  const NavigationLink = (
    <>
      <li>
        {" "}
        <NavLink
          className={`text-xl hover:bg-white focos:bg-white text-black`}
          to={"/"}
        >
          Home
        </NavLink>{" "}
      </li>

      <li>
        {" "}
        <NavLink
          className={`text-xl hover:bg-white focos:bg-white text-black`}
          to={"/rooms"}
        >
          Rooms
        </NavLink>{" "}
      </li>
      {
        user?.email&& <li>
        {" "}
        <NavLink
          className={`text-xl hover:bg-white focos:bg-white text-black`}
          to={"/bookingsdata"}
        >
          My Bookings
        </NavLink>{" "}
      </li>

      }
      <li>
        {" "}
        <NavLink
          className={`text-xl hover:bg-white focos:bg-white text-black`}
          to={"/contact"}
        >
          Contact
        </NavLink>{" "}
      </li>
    </>
  );
  return (
    <div className="lg:w-9/12 w-12/12 mx-auto mt-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavigationLink}
            </ul>
          </div>
          <img className="h-16 w-44" src="/public/logo.svg " alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavigationLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <Link
              onClick={handaleLogout}
              className="border-2 border-[#FF3811] py-2 px-6 text-[#FF3811] hover:bg-[#FF3811] hover:text-white transition-colors	"
            >
              Logout
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="border-2 border-[#FF3811] py-2 px-6 text-[#FF3811] hover:bg-[#FF3811] hover:text-white transition-colors	"
            >
              Login
            </Link>
          )}
        </div>
        <div className="dropdown dropdown-end ml-6">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ">
              <img src="https://i.ibb.co/YW2NpSf/666201-removebg-preview.png" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
