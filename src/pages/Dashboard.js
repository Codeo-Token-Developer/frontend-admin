import React,{useContext,useEffect,useState} from "react";
import {
  CardDashboardComponent,
  TableDashboardNewUserJustLoginComponent,
  TableDashboardUserNewKYCAppComponent
} from "../component/mainPageComponent/cardDashboardComponent/CardDashboardComponent";

//import { Route, useRouteMatch } from "react-router-dom";

import axios from "axios";
import {urlContext,adminContext} from "../Context";

function Dashboard() {
  const baseUrl=useContext(urlContext);

  const [status,setStatus]=useState(false);
  const [data,setData]=useState([{totalUsers:0,totalActiveUsers:0,totalGenerateWallets:0,totalVerifiedUsers:0,totalTransactions:0,totalActiveWallets:0}]);

function Main(data){
  useEffect(()=>{
    if(!status){
      data.Dashboard();
      //Your get getdata
      //all get data
    }
  },[data]);
}

Main({
  Dashboard:DashboardFunction,
});


function DashboardFunction() {
  let totalUsers=axios({
    url:`${baseUrl}/dashboard/totalUser`,
    method:'GET',
    headers:{
      adminToken:localStorage.getItem("adminToken")
    }
  });
  let totalActiveUser=axios({
    url:`${baseUrl}/dashboard/totalActiveUser`,
    method:'GET',
    headers:{
      adminToken:localStorage.getItem("adminToken")
    }
  });

  let totalGenerateWallet=axios({
    url:`${baseUrl}/dashboard/totalGenerateWallet`,
    method:'GET',
    headers:{
      adminToken:localStorage.getItem("adminToken")
    }
  });

  let totalVerifiedUser=axios({
    url:`${baseUrl}/dashboard/totalVerifiedUser`,
    method:'GET',
    headers:{
      adminToken:localStorage.getItem("adminToken")
    }
  });

  let totalTransaction=axios({
    url:`${baseUrl}/dashboard/totalTransaction`,
    method:'GET',
    headers:{
      adminToken:localStorage.getItem("adminToken")
    }
  });

  let totalActiveWallet=axios({
    url:`${baseUrl}/dashboard/totalActiveWallet`,
    method:'GET',
    headers:{
      adminToken:localStorage.getItem("adminToken")
    }
  });

  axios.all([totalUsers,totalActiveUser,totalGenerateWallet,totalVerifiedUser,totalTransaction,totalActiveWallet]).then(axios.spread((...res)=>{
    setData({
        totalUsers:res[0].data.total,totalActiveUsers:res[1].data.total,totalGenerateWallets:res[2].data.total,
        totalVerifiedUsers:res[3].data.total,totalTransactions:res[4].data.total,totalActiveWallets:res[5].data.total
    });
    setStatus(true);
  })).catch(err=>{
    console.log(err);
  });

}

  return (
      <adminContext.Provider value={data}>
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
      <CardDashboard
      totalUsers={(data===undefined||data===null)?"0":data.totalUsers}
      totalActiveUsers={(data===undefined||data===null)?"0":data.totalActiveUsers}
      totalGenerateWallets={(data===undefined||data===null)?"0":data.totalGenerateWallets}
      totalVerifiedUsers={(data===undefined||data===null)?"0":data.totalVerifiedUsers}
      totalTransactions={(data===undefined||data===null)?"0":data.totalTransactions}
      totalActiveWallets={(data===undefined||data===null)?"0":data.totalActiveWallets}
       />
    </adminContext.Provider>
  );
}


const CardDashboard = props => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <CardDashboardComponent
            titleData="Total User" /*====== Text Data For Card ======*/
            totalCount={(props.totalUsers===undefined)?"Loading ...":props.totalUsers} /*====== Total Count Data ======*/
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
            totalCount={(props.totalActiveUsers===undefined)?"Loading ...":props.totalActiveUsers} /*====== Total Count Data ======*/
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
            totalCount={(props.totalVerifiedUsers===undefined)?"Loading ...":props.totalVerifiedUsers} /*====== Total Count Data ======*/
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
            totalCount={(props.totalTransactions===undefined)?"Loading ...":props.totalTransactions} /*====== Total Count Data ======*/
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
            totalCount="-1" /*====== Total Count Data ======*/
            upDownClass="mdi mdi-trending-up" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="text-success" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="9%" /*====== Total Percent Up or Down Today ======*/
            textPercent="Up From Yesterday" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="danger" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-user-group" /*====== For Change Icon Can Change Here Using Dripicons ======*/
          />
        </div>
          {/*totalUsers:0,totalActiveUsers:0,totalGenerateWallets:0,totalVerifiedUsers:0,totalTransactions:0,totalActiveWallets:0*/}
        <div className="col-lg-3">
          <CardDashboardComponent
            titleData="Total Generate Wallet" /*====== Text Data For Card ======*/
            totalCount={(props.totalGenerateWallets===undefined)?"Loading ...":props.totalGenerateWallets} /*====== Total Count Data ======*/
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
            totalCount={(props.totalActiveWallets===undefined)?"Loading ...":props.totalActiveWallets} /*====== Total Count Data ======*/
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
