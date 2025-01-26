import React from 'react'
import Sidebar from './componant/sidebar'
import List from './componant/user/list'
import Allroute from './Allroutes/Allroute'
import Dashboard from './pages/dashboard'


const app = () => {
  return (
    <>
       
     <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
      <Sidebar/>
       
     <div className="body-wrapper"> 
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <a className="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
          </ul>
          
        </nav>
      </header>
      <div className="container-fluid">
       <Allroute/>
       
      </div>
    </div> 
  </div>

    </>
  )
}

export default app