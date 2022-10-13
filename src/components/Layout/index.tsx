import { NavLink, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

// icons
import { BsChevronRight } from "react-icons/bs"
import { BsFillPersonFill } from "react-icons/bs"
import { BsTable } from "react-icons/bs"
import { FaTruck } from "react-icons/fa"

// style
import "./index.css"

// components
import Category from "../Category"
import Logout from "../Logout"

const Layout = () => {
  const [show, setShow] = useState(true)
  const [width, setWidth] = useState({ width: window.innerWidth })

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const MOBILE_VIEW = width.width > 1024

  useEffect(() => {
    if(MOBILE_VIEW) setShow(false)
    else setShow(true)
  },[MOBILE_VIEW])

  return (
    <div className="main">
      <div className={`${show && "wide-sidebar"} sidebar`}>
        <div className={`${show && "wide-bars"} bars`}>
          <button className="bar" onClick={() => setShow(!show)}>
            <BsChevronRight size={20} className={`icon ${!show && "bar-icon"}`} />
          </button>
        </div>
        <div className={`${show && "wide-user"} user ${MOBILE_VIEW && "user-display-wrapper"}`}>
          <div className={`${show && "wide-icon-wrapper"} icon-wrapper`}>
            <BsFillPersonFill size={21} className="icon user-icon" />
          </div>
          <p className={show ? "hidden" : ""}>Hayk G. (waiter)</p>
        </div>
        <div className={`${show && "wide-sidebar-links"} sidebar-links`}>
          <NavLink to="/" end className="sidebar-link">
            <div className={`${show && "wide-icon-wrapper"} icon-wrapper`}>
              <BsTable className="icon table-icon" size={20}/>
            </div>
           <p className={show ? "hidden" : ""}>Table Service</p>
          </NavLink>
          <NavLink to="/delivery" className="sidebar-link">
            <div className={`${show && "wide-icon-wrapper"} icon-wrapper`}>
              <FaTruck className="icon truck-icon" size={20}/>
            </div>
            <p className={show ? "hidden" : ""}>Delievery/Takeaway</p>
          </NavLink>
        </div>
        {
          MOBILE_VIEW && (
            <>
              <Category />
              <Logout onClick={() => true}/>
            </>
          )
        }
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
