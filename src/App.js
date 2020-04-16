import React, { useEffect } from "react";

// Router
import {
  Route,
  Switch,
  useHistory,
  Redirect,
  withRouter
} from "react-router-dom";

//Pages
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

//Auth
import Auth from "./Auth";

function App() {
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      Auth.onLogin(() => {
        history.push("/dashboard");
      });
    } else {
      Auth.onLogout(() => history.push("/"));
    }
  }, [history]);

  return (
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {
            (Auth.isLogin)?<MainPage />:<Redirect to="/" />
          }
        </Switch>
  );
}

export default withRouter(App);
