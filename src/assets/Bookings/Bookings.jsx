import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingsComponent from "./BookingsComponent";
import Swal from "sweetalert2";
// import BookingsComponent from "./BookingsComponent";
// import BookingsComponent from "./BookingsComponent";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want Delete?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "DELETE",
      denyButtonText: `DON'T DELETE`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("DELETED!", "", "success");
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remining = bookings.filter(
                (bookings) => bookings._id !== id
              );
              setBookings(remining);
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Item Not Deleted!");
      }
    });
  };

  if (!user) {
    <div>Loading...</div>;
  }
  return (
    <div>
      {bookings.length == 0 && (
        <div>
          <div className="h-[500px] w-[500px] mx-auto ">
            <img src="https://i.ibb.co/z2w7BYy/9318694.jpg" alt="" />
            <h2>ADD ITEMS</h2>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          {/* <thead></thead> */}
          <tbody>
            {bookings.map((bookings) => (
              <BookingsComponent
                key={bookings._id}
                bookings={bookings}
                handleDelete={handleDelete}
              ></BookingsComponent>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
