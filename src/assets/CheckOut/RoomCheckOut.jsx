import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const RoomCheckOut = () => {
    const user = useContext(AuthContext)
    const rooms = useLoaderData();
    const { title, _id, price, image} = rooms;
    console.log(image);
    const handleCheckout = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const massage = form.massage.value;
        const booking = {
            CustomarName: name,
            email,
            date,
            massage,
            image,
            service: _id,
            title: title,
            price: price,
            
         }
         console.log(booking);

         fetch('https://my-hotel-server-weld.vercel.app/bookings',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "BOOKED SUCCESSFULLY",
                    text: "Your Room is Booked!",
                    icon: "success"
                  });
            }
         })

    }
    return (
        <div>
           <div>
      {/* <CheckoutBanner title={'CHECKOUT FORM'} /> */}
      <div className="text-center">
        <h4 className="text-[#ff3811] font-bold">Service Name</h4>
        <h4 className="text-2xl font-bold uppercase">{title}</h4>
      </div>
      <div className="card shrink-0 w-4/6 mx-auto m-8   bg-[#F3F3F3]">
        <form onSubmit={handleCheckout} className="card-body w-full  ">
          <div className="flex gap-4 mx-auto w-4/6">
            <div className="form-control w-3/6 ">
              <input
                name="name"
                defaultValue={user?.name}
                type="text"
                placeholder="name"
                className="input input-bordered border-none"
                required
              />
            </div>
            <div className="form-control w-3/6">
              <input
                name="date"
                type="date"
                className="input input-bordered border-none"
                required
              />
            </div>
          </div>
          <div className="flex gap-4 mx-auto w-4/6">
            <div className="form-control w-3/6">
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone"
                className="input input-bordered border-none"
                required
              />
            </div>
            <div className="form-control w-3/6">
              <input
                name="email"
                defaultValue={user?.email}
                type="email"
                placeholder="Your Email"
                className="input input-bordered border-none"
                required
              />
            </div>
          </div>

          <textarea
            name="massage"
            id=""
            cols="15"
            placeholder="Type Your Message"
            rows="5"
            className="w-4/6 p-4 border-none mx-auto rounded-lg"
          ></textarea>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="text-xl mx-auto w-4/6 h-16 bg-[#ff3811] rounded-lg hover:scale-95 text-white duration-300"
            >
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default RoomCheckOut;