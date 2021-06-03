import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button className='nav-btn' onClick={() => setOpen(!open)}>
              <FaAlignRight className='nav-icon' />
          </button>
        </div>

        <ul className={open ? 'nav-links show-nav' : 'nav-links'}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/rooms'>Rooms</Link></li>
          </ul>
      </div>
    </nav>
  );
}
