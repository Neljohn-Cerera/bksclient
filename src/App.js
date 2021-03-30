import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
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
import { EditProfile } from "./components";

// Create a client
const queryClient = new QueryClient();

function App(props) {
  const { isLoggedInState } = props;

  return (
    <QueryClientProvider client={queryClient}>
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
              <ProtectedRoute
                isLoggedInState={isLoggedInState}
                path="/account-edit"
                component={EditProfile}
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
    </QueryClientProvider>
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
