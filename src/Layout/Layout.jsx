import { Outlet } from "react-router-dom";
import Navbar from "../assets/Sheard/Navbar";
import Footer from "../assets/Sheard/Footer";


const Layout = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

 export default Layout;