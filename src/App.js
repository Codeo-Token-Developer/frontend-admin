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
import UserManagement from "./pages/UserManagement";
import CMSUpdate from "./pages/CMSUpdate";
import Ledger from "./pages/Ledger";
import KYCApproval from "./pages/KYCApproval";

//Auth
import auth from "./Auth";
import Dashboard from "./pages/Dashboard";

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
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/mainpage">
                        <MainPage />
                    </Route>
                    <Route path="/userManagement">
                        <UserManagement />
                    </Route>
                    <Route path="/cmsUpdate">
                        <CMSUpdate />
                    </Route>
                    <Route path="/ledger">
                        <Ledger />
                    </Route>
                    <Route path="/kycApproval">
                        <KYCApproval />
                    </Route>
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
