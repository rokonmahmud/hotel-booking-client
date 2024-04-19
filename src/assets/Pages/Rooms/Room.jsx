import {  useLoaderData } from "react-router-dom";
import RoomsCard from "./RoomsCard";

const Room = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <h2 className="text-center text-4xl uppercase text-[#FF3811] my-4">Available Rooms</h2>
      <hr className="font-bold border-2 w-1/12 mx-auto border-[#FF3811] mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-10/12 gap-4 my-8">
       
        
        {services.map((services) => (
          <RoomsCard services={services} key={services._id}></RoomsCard>
        ))}
       
      </div>
    </div>
  );
};

export default Room;
