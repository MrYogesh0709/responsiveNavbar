import Navbar from "../Navbar";
import { Link, Outlet } from "react-router-dom";
import github from "../assets/github.svg";
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Link
        to="https://github.com/MrYogesh0709/responsiveNavbar"
        target="_blank"
      >
        <img src={github} alt="github" className="github" />
      </Link>
    </>
  );
};

export default HomeLayout;
