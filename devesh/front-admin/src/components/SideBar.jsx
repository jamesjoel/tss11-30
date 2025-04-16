import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
     <div className="sidebar" data-background-color="dark">
        <div className="sidebar-logo">
          <div className="logo-header" data-background-color="dark">
            <NavLink to="/dashboard" className="logo">
              <img
                src="/assets/img/kaiadmin/logo_light.svg"
                alt="navbar brand"
                className="navbar-brand"
                height="20"
              />
            </NavLink>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="gg-menu-right"></i>
              </button>
              <button className="btn btn-toggle sidenav-toggler">
                <i className="gg-menu-left"></i>
              </button>
            </div>
            <button className="topbar-toggler more">
              <i className="gg-more-vertical-alt"></i>
            </button>
          </div>
        </div>
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-secondary">
              <li className="nav-item active">
                <NavLink to="/dashboard" className="">
                  <i className="fas fa-home"></i>
                  <p>Dashboard</p>
                </NavLink>
              </li>

             
             
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#sidebarLayouts1">
                  <i className="fas fa-th-list"></i>
                  <p>Business</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="sidebarLayouts1">
                  <ul className="nav nav-collapse">
                    <li>
                      <NavLink to="/business/list">
                        <span className="sub-item">List</span>
                      </NavLink>
                    </li>

                    <li>
                      <a href="icon-menu.html">
                        <span className="sub-item">Add</span>
                      </a>
                    </li>
                   
             
                  </ul>
                </div>
              </li>
             
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#sidebarLayouts2">
                  <i className="fas fa-th-list"></i>
                  <p>User</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="sidebarLayouts2">
                  <ul className="nav nav-collapse">
                    <li>
                      <NavLink to="/users/list">
                        <span className="sub-item">List</span>
                      </NavLink>
                    </li>
                    <li>
                      <a href="icon-menu.html">
                        <span className="sub-item">Add</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item active">
                      <NavLink to="/logout" className="">
                       <i className="fas fa-home"></i>
                       <p>Logout</p>
                      </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar