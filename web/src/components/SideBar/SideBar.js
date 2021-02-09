import React from "react";
import { Link } from "react-router-dom";

import Brand from "../Brand/Brand";

import carIcon from "../../assets/car.svg";

import "./SideBar.styles.scss";

export default function SideBar() {
  return (
    <aside className="sidebar" data-mobile="menu">
      <Brand />

      <nav className="sidebar-nav">
        <ul className="sidebar-nav-menu">
          <li className="sidebar-nav-item">
            <Link to="/" className="sidebar-nav-link">
              <img src={carIcon} alt="Cars" className="sidebar-nav-link-img" />
              Cars
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
