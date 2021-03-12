import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  HomePage,
  RequestPage,
  RecordsPage,
  GuideLinesPage,
  OfficialsPage,
  AboutPage,
  ContactPage,
  AccountPage,
  LoginPage,
} from "./pages";
import { ProtectedRoute, PublicRoute } from "./routes";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  const { isLoggedInState } = props;
  console.log("isLoggedInState ;", isLoggedInState);
 
  return (
    <Router>
      <>
        {/* <CircularProgress color="secondary" /> */}
        <Suspense fallback={<div>Loading....</div>}>
          <Switch>
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/home"
              component={HomePage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/request"
              component={RequestPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/records"
              component={RecordsPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/guides"
              component={GuideLinesPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/barangayOfficials"
              component={OfficialsPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/about"
              component={AboutPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/contact"
              component={ContactPage}
              exact={true}
            />
            <ProtectedRoute
              isLoggedInState={isLoggedInState}
              path="/account"
              component={AccountPage}
              exact={true}
            />
            {/* Public Route */}
            <PublicRoute
              isLoggedInState={isLoggedInState}
              path="/"
              component={LoginPage}
              exact={true}
            />
            <Route path="*">
              <h4>Not found</h4>
            </Route>
          </Switch>
        </Suspense>
      </>
    </Router>
  );
}

// redux setup
const mapStateToProps = (state) => {
  return {
    isLoggedInState: state.user.isLoggedInState,
    userAccount: state.user.userAccount,
  };
};
// export default App;
export default connect(mapStateToProps, null)(App);
