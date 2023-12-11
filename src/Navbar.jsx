import logo from "./assets/react.svg";
import profile from "./assets/man.png";
import menu from "./assets/menu.svg";
import close from "./assets/close.svg";
import { navItems } from "./navitems";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useClickOutside from "./hook/useClickoutside";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const sidebarRef = useRef();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleActiveLink = (name) => {
    setActiveLink(name);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  //custom hook
  useClickOutside(sidebarRef, closeSidebar);
  return (
    <nav className="d-flex items-center">
      <div className="d-flex gap-2">
        <img src={logo} alt="logo" />
        <ul className="d-flex gap-2 ul-big">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.to}
                onClick={() => handleActiveLink(item.name)}
                className={`${activeLink === item.name ? "active-link" : ""}`}
              >
                {item.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <img src={profile} alt="profile" className="profile" />
      <img src={menu} alt="menu" className="img-open" onClick={toggleSidebar} />
      {/* Sidebar-Small-Screen */}
      <div className={`sidebar ${sidebarOpen && "open"}`} ref={sidebarRef}>
        <img
          src={close}
          alt="close"
          onClick={toggleSidebar}
          className="img-close"
        />
        <ul className="mt-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.to}
                onClick={() => {
                  handleActiveLink(item.name);
                  closeSidebar();
                }}
                className={`${activeLink === item.name ? "active-link" : ""}`}
              >
                {item.name.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Sidebar-Small-Screen */}
    </nav>
  );
};

export default Navbar;
