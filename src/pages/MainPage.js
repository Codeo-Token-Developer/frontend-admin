import React,{useEffect,useState,useContext} from 'react'
import { Switch, Route } from 'react-router-dom'

//Pages
import UserManagement from './UserManagement';
import CMSUpdate from './CMSUpdate';
import Ledger from './Ledger';
import KYCApproval from './KYCApproval';
import Dashboard from './Dashboard';

//Component
import Header from '../component/headerComponent/Header';
import NavLeft from '../component/navbarComponent/NavLeft';
import {urlContext,userContext} from "../Context";
import axios from "axios";

export default function MainPage() {
  const baseUrl=useContext(urlContext);
  let admin=useContext(userContext);

  const [status,setStatus]=useState(false);
  const [user,setUser]=useState([{totalUsers:0,totalActiveUsers:0,totalGenerateWallets:0,totalVerifiedUsers:0,totalTransactions:0,totalActiveWallets:0}]);
  const [data,setData]=useState({});


function Main(data){
  useEffect(()=>{
    if(!status){
      data.Dashboard();
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
    setUser({
      totalUsers:res[0].data.total,totalActiveUsers:res[1].data.total,totalGenerateWallets:res[2].data.total,
      totalVerifiedUsers:res[3].data.total,totalTransactions:res[4].data.total,totalActiveWallets:res[5].data.total
    });
    setStatus(true);
    setData({...data,"Dashboard":user});
  })).catch(err=>{
    console.log(err);
  });

}

    return (
        <userContext.Provider value={data}>
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
                        </Switch>
                    </div>
                </div>
            </div>
        </userContext.Provider>
    );
}
