import React from "react";
import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
    <>
      <aside className="left-sidebar">
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <NavLink to="/" className="text-nowrap logo-img">
              <img
                src="../assets/images/logos/dark-logo.svg"
                width="180"
                alt=""
              />
            </NavLink>
            <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="ti ti-x fs-8"></i>
            </div>
          </div>
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Business</span>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/business/list">
                  <span className="hide-menu">List</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/business/add">
                  <span className="hide-menu">Add</span>
                </NavLink>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">User</span>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/user/list">
                  <span className="hide-menu">List</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/user/add">
                  <span className="hide-menu">Add</span>
                </NavLink>
              </li>
            </ul>
            <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
              <div className="d-flex"></div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default sidebar;
