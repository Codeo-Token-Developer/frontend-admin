import React from "react";
import { Switch, Route } from "react-router-dom";

//Pages
import UserManagement from "./UserManagement";
import CMSUpdate from "./CMSUpdate";
import Ledger from "./Ledger";
import KYCApproval from "./KYCApproval";
import Dashboard from "./Dashboard";
import General from "./General";
import BankAccount from "./BankAccount";
import DashboardLaunchpad from "./DashboardLaunchpad";
import ListingApproval from "./ListingApproval";
import UserInvestment from "./UserInvestment";
import PlacementAgencies from "./PlacementAgencies";
import SettingsLaunchpad from "./SettingsLaunchpad";

//Component
import Header from "../component/headerComponent/Header";
import NavLeft from "../component/navbarComponent/NavLeft";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <NavLeft />
        <div className="page-content">
          <div className="container-fluid">
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/userManagement" component={UserManagement} />
              <Route path="/cmsUpdate" component={CMSUpdate} />
              <Route path="/ledger" component={Ledger} />
              <Route path="/kycApproval" component={KYCApproval} />
              <Route path="/general" component={General} />
              <Route path="/bankAccount" component={BankAccount} />
              <Route
                path="/dashboardLaunchpad"
                component={DashboardLaunchpad}
              />
              <Route path="/listingApproval" component={ListingApproval} />
              <Route path="/userInvestment" component={UserInvestment} />
              <Route path="/placementAgencies" component={PlacementAgencies} />
              <Route path="/settingsLaunchpad" component={SettingsLaunchpad} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}
