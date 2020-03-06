import React, { useEffect } from "react";

// Router
import { Route, Switch, useHistory, Redirect } from "react-router-dom";

//Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import CMSUpdate from "./pages/CMSUpdate";
import Ledger from "./pages/Ledger";
import KYCApproval from "./pages/KYCApproval";

//Auth
import auth from "./Auth";
import Header from "./component/headerComponent/Header";
import NavLeft from "./component/navbarComponent/NavLeft";

function App() {
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("codeoToken")) {
      auth.login(() => {
        history.push("/dashboard");
      });
    } else {
      auth.logout(() => {
        history.push("/");
      });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <NavLeft/>

        <div className="page-content">
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/userManagement" component={UserManagement} />
              <Route path="/cmsUpdate" component={CMSUpdate} />
              <Route path="/ledger" component={Ledger} />
              <Route path="/kycApproval" component={KYCApproval} />
            </Switch>
          </div>
        </div>
      </div>

    </>
  );
}

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
}

export default App;
