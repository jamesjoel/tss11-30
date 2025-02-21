import React from 'react'
import { TopNav } from '../components/TopNav'

const Dashboard = () => {
  return (
    <>
    <div className="main-panel">
        <div className="main-header">
          <div className="main-header-logo">
            
            <div className="logo-header" data-background-color="dark">
              <a href="index.html" className="logo">
                <img
                  src="assets/img/kaiadmin/logo_light.svg"
                  alt="navbar brand"
                  className="navbar-brand"
                  height="20"
                />
              </a>
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
          <TopNav />
        </div>

        <div className="container">
          <div className="page-inner">
            <div
              className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
            >
              <div>
                <h3 className="fw-bold mb-3">Dashboard</h3>
                <h6 className="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
              </div>
              <div className="ms-md-auto py-2 py-md-0">
                <a href="#" className="btn btn-label-info btn-round me-2">Manage</a>
                <a href="#" className="btn btn-primary btn-round">Add Customer</a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div
                          className="icon-big text-center icon-primary bubble-shadow-small"
                        >
                          <i className="fas fa-users"></i>
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Visitors</p>
                          <h4 className="card-title">1,294</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div
                          className="icon-big text-center icon-info bubble-shadow-small"
                        >
                          <i className="fas fa-user-check"></i>
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Subscribers</p>
                          <h4 className="card-title">1303</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div
                          className="icon-big text-center icon-success bubble-shadow-small"
                        >
                          <i className="fas fa-luggage-cart"></i>
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Sales</p>
                          <h4 className="card-title">$ 1,345</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-icon">
                        <div
                          className="icon-big text-center icon-secondary bubble-shadow-small"
                        >
                          <i className="far fa-check-circle"></i>
                        </div>
                      </div>
                      <div className="col col-stats ms-3 ms-sm-0">
                        <div className="numbers">
                          <p className="card-category">Order</p>
                          <h4 className="card-title">576</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
           
            
          </div>
        </div>

        <footer className="footer">
          <div className="container-fluid d-flex justify-content-between">
            
            <div className="copyright">
              2024, made with <i className="fa fa-heart heart text-danger"></i> by
              <a href="http://www.steppingstone.in">TSS</a>
            </div>
            <div>
              Distributed by
              <a target="_blank" href="https://steppingstone.in/">The Stepping Stone</a>.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Dashboard