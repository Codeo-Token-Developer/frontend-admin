import React, { useEffect } from "react";

// Router
import { Route, Switch, useHistory, Redirect } from "react-router-dom";

//Pages
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

//Auth
import auth from "./Auth";

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
      
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={MainPage} />
        <Route path="/userManagement" component={MainPage} />
        <Route path="/cmsUpdate" component={MainPage} />
        <Route path="/ledger" component={MainPage} />
        <Route path="/kycApproval" component={MainPage} />
      </Switch>

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
