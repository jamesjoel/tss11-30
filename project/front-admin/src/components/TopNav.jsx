import React from 'react'

export const TopNav = () => {
  return (
    <nav
            className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom"
          >
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
                  
                </li>
              </ul>
            </div>
          </nav>
  )
}
