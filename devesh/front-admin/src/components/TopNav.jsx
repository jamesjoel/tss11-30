import React from 'react'

const TopNav = () => {
  return (
    <>
    <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
            <div className="container-fluid">
              <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
                <li className="nav-item topbar-user dropdown hidden-caret">
                  <a
                    className="dropdown-toggle profile-pic"
                    data-bs-toggle="dropdown"
                    href="#"
                    aria-expanded="false"
                  >
                    
                    <span className="profile-username">
                      <span className="op-7">Hi, </span>
                      <span className="fw-bold">{localStorage.getItem("name")}</span>
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-user animated fadeIn">
                    <div className="dropdown-user-scroll scrollbar-outer">
                      <li>
                        
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">My Profile</a>
                        <a className="dropdown-item" href="#">My Balance</a>
                        <a className="dropdown-item" href="#">Inbox</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Account Setting</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Logout</a>
                      </li>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
    </>
  )
}

export default TopNav