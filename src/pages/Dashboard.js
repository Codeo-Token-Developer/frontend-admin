import React,{useContext} from "react";
import {
  CardDashboardComponent,
  TableDashboardNewUserJustLoginComponent,
  TableDashboardUserNewKYCAppComponent
} from "../component/mainPageComponent/cardDashboardComponent/CardDashboardComponent";

//import { Route, useRouteMatch } from "react-router-dom";

import {userContext} from "../Context";

function Dashboard() {

  let dashboard=useContext(userContext);

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="float-right">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#admin">Admin</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
            <h4 className="page-title">Dashboard</h4>
          </div>
        </div>
      </div>
      <CardDashboard totalUsers={(dashboard.Dashboard===undefined||dashboard.Dashboard===null)?"0":dashboard.Dashboard.totalUsers} />
    </>
  );
}

const CardDashboard = props => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <CardDashboardComponent
            titleData="Total User" /*====== Text Data For Card ======*/
            totalCount={props.totalUsers} /*====== Total Count Data ======*/
            upDownClass="mdi mdi-trending-up" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="text-success" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="5.5%" /*====== Total Percent Up or Down Today ======*/
            textPercent="Up From Yesterday" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="purple" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-user-group" /*====== For Change Icon Can Change Here Using Dripicons ======*/
          />
        </div>

        <div className="col-lg-3">
          <CardDashboardComponent
            titleData="Active User" /*====== Text Data For Card ======*/
            totalCount="18.020" /*====== Total Count Data ======*/
            upDownClass="mdi mdi-trending-up" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="text-success" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="1.5%" /*====== Total Percent Up or Down Today ======*/
            textPercent="Up From Last Week" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="pink" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-cart" /*====== For Change Icon Can Change Here Using Dripicons ======*/
          />
        </div>

        <div className="col-lg-3">
          <CardDashboardComponent
            titleData="Verified Users" /*====== Text Data For Card ======*/
            totalCount="9.523" /*====== Total Count Data ======*/
            upDownClass="mdi mdi-trending-down" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="text-danger" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="4%" /*====== Total Percent Up or Down Today ======*/
            textPercent="Down From Last Month" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="secondary" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-jewel" /*====== For Change Icon Can Change Here Using Dripicons ======*/
          />
        </div>

        <div className="col-lg-3">
          <CardDashboardComponent
            titleData="Total Transaction" /*====== Text Data For Card ======*/
            totalCount="6.521" /*====== Total Count Data ======*/
            upDownClass="mdi mdi-trending-up" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="text-success" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="4%" /*====== Total Percent Up or Down Today ======*/
            textPercent="Up From Yesterday" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="warning" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-wallet" /*====== For Change Icon Can Change Here Using Dripicons ======*/
          />
        </div>
      </div>
      {/*end row*/}

      <div className="row">
        <div className="col-lg-3">
          <CardDashboardComponent
            titleData="User Register Today" /*====== Text Data For Card ======*/
            totalCount="246" /*====== Total Count Data ======*/
            upDownClass="mdi mdi-trending-up" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="text-success" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="9%" /*====== Total Percent Up or Down Today ======*/
            textPercent="Up From Yesterday" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="danger" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-user-group" /*====== For Change Icon Can Change Here Using Dripicons ======*/
          />
        </div>

        <div className="col-lg-3">
          <CardDashboardComponent
            titleData="Total Generate Wallet" /*====== Text Data For Card ======*/
            totalCount="2.525" /*====== Total Count Data ======*/
            upDownClass="mdi mdi-trending-up" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="text-success" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="72.5%" /*====== Total Percent Up or Down Today ======*/
            textPercent="Up From Last Week" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="success" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-cart" /*====== For Change Icon Can Change Here Using Dripicons ======*/
          />
        </div>

        <div className="col-lg-3">
          <CardDashboardComponent
            titleData="Total Active Wallet" /*====== Text Data For Card ======*/
            totalCount="7.224" /*====== Total Count Data ======*/
            upDownClass="mdi mdi-trending-down" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="text-danger" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="18%" /*====== Total Percent Up or Down Today ======*/
            textPercent="Down From Last Month" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="primary" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-jewel" /*====== For Change Icon Can Change Here Using Dripicons ======*/
          />
        </div>

        <div className="col-lg-3">
          <CardDashboardComponent
            titleData="Total Codeo" /*====== Text Data For Card ======*/
            totalCount="$ 9.234.419" /*====== Total Count Data ======*/
            upDownClass="" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="" /*====== Total Percent Up or Down Today ======*/
            textPercent="&nbsp;" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="purple" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-wallet" /*====== For Change Icon Can Change Here Using Dripicons ======*/
          />
        </div>
      </div>

      <CardTableDashboard />
    </div>
  );
};

const CardTableDashboard = () => {
  return (
    <div className="row">
      <TableDashboardNewUserJustLoginComponent />
      <TableDashboardUserNewKYCAppComponent />
    </div>
  );
};

export default Dashboard;
