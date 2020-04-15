import React, { useEffect } from "react";

// Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect
} from "react-router-dom";

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
  }, [history]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute path="/dashboard" component={MainPage} />
          <ProtectedRoute path="/userManagement" component={MainPage} />
          <ProtectedRoute path="/cmsUpdate" component={MainPage} />
          <ProtectedRoute path="/ledger" component={MainPage} />
          <ProtectedRoute path="/kycApproval" component={MainPage} />
        </Switch>
      </Router>
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
