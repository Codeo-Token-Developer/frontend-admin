import React from "react";
import { Link } from "react-router-dom";

function NavLeft() {
  return (
    <div className="left-sidenav">
      <MetricaAnalytic />

      <NavMetricaAnalytic />
    </div>
  );
}

const MetricaAnalytic = () => {
  return (
    <div className="main-icon-menu">
      <nav className="nav">
        <a
          href="#Analytic"
          className="nav-link leftmenu-sm-item bg-pink shadow-pink"
          data-toggle="tooltip-custom"
          data-placement="right"
          title="Dashboard"
          data-original-title="Analytics"
        >
          <svg
            className="nav-svg"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
          >
            <g>
              <path d="M184,448h48c4.4,0,8-3.6,8-8V72c0-4.4-3.6-8-8-8h-48c-4.4,0-8,3.6-8,8v368C176,444.4,179.6,448,184,448z" />
              <path
                className="svg-primary"
                d="M88,448H136c4.4,0,8-3.6,8-8V296c0-4.4-3.6-8-8-8H88c-4.4,0-8,3.6-8,8V440C80,444.4,83.6,448,88,448z"
              />
              <path
                className="svg-primary"
                d="M280.1,448h47.8c4.5,0,8.1-3.6,8.1-8.1V232.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5,0-8.1,3.6-8.1,8.1v207.8
                                        C272,444.4,275.6,448,280.1,448z"
              />
              <path
                d="M368,136.1v303.8c0,4.5,3.6,8.1,8.1,8.1h47.8c4.5,0,8.1-3.6,8.1-8.1V136.1c0-4.5-3.6-8.1-8.1-8.1h-47.8
                                        C371.6,128,368,131.6,368,136.1z"
              />
            </g>
          </svg>
        </a>
      </nav>
    </div>
  );
};

const NavMetricaAnalytic = () => {
  //let {path} = useRouteMatch();

  return (
    <div className="main-menu-inner">
      <div className="menu-body slimscroll">
        <div id="Analytic" className="main-icon-menu-pane active">
          <div className="title-box">
            <h6 className="menu-title text-primary">Admin Dashboard</h6>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <i className="dripicons-meter" />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userManagement">
                <i className="dripicons-user-group" />
                User Management
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cmsUpdate">
                <i className="dripicons-document" />
                CMS Update
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Ledger">
                <i className="dripicons-document" />
                Ledger
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kycApproval">
                <i className="dripicons-document" />
                KYC Approval
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <i className="dripicons-gear" />
                <span className="w-100">Settings</span>
                <span className="menu-arrow">
                  <i className="mdi mdi-chevron-right" />
                </span>
              </Link>
              <ul className="nav-second-level" aria-expanded="false">
                <li>
                  <Link to="/general">General</Link>
                </li>
                <li>
                  <Link to="/bankAccount">Bank Account</Link>
                </li>
              </ul>
            </li>
          </ul>
          <hr />
          <div className="title-box">
            <h6 className="menu-title text-warning">Launchpad</h6>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboardLaunchpad">
                <i className="dripicons-meter" />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listingApproval">
                <i className="dripicons-document" />
                Listing Approval
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userInvestment">
                <i className="dripicons-user" />
                User Investment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/placementAgencies">
                <i className="dripicons-document" />
                Placement Agencies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settingsLaunchpad">
                <i className="dripicons-gear" />
                Launchpad Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavLeft;
