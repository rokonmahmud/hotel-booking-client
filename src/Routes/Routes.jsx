import { createBrowserRouter } from "react-router-dom";
import Home from "../assets/Pages/Home/Home";
import Login from "../assets/Pages/Login & signup/Login";
import Signup from "../assets/Pages/Login & signup/Signup";
import ErrorElement from "../assets/ErrorElement";
import Layout from "../Layout/Layout";
import Room from "../assets/Pages/Rooms/Room";
import RoomDetails from "../assets/Pages/Rooms/RoomDetails";
// import CheckoutForm from "../assets/CheckOut/CheckoutForm";
import RoomCheckOut from "../assets/CheckOut/RoomCheckOut";
import Bookings from "../assets/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";
import Contact from "../assets/Contact/Contact";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorElement></ErrorElement>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"/login",
          element: <Login></Login>,
        },
        {
          path:"/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/rooms",
          loader: ()=>fetch('http://localhost:5000/rooms'),
          element: <Room/>
        },
        {
          path: "/rooms/:id",
          loader: ({params})=> fetch(`http://localhost:5000/rooms/${params.id}`),
          element: <PrivetRoute><RoomDetails/></PrivetRoute>,
        },
        {
          path: "/bookings",
          element: <PrivetRoute><RoomDetails/></PrivetRoute>
        },
        {
          path:"/roomcheckout/:id",
          element:<RoomCheckOut/>,
          loader: ({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
        },
        {
          path: "/bookingsdata",
          element: <Bookings/>
          
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    },
  ]);

 export default router;