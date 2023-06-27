import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Navbar2 from "../components/Shared/Navbar/Navbar2";

const Main = () => {
    return (
        <>
            <Navbar2 />
            <Outlet></Outlet>
            <Footer />
        </>
    );
};

export default Main;