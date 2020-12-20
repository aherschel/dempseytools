import React, { lazy, Suspense } from "react";
import Amplify from "aws-amplify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import awsExports from "./aws-exports";

const ToolsPage = lazy(() => import("./pages/ToolsPage"));
const AppHeader = lazy(() => import("./components/AppHeader"));
const AppFooter = lazy(() => import("./components/AppFooter"));

Amplify.configure(awsExports);

const renderLoader = () => <p>Loading</p>;

/**
 * The top-level App component is responsible for a few key things, including setting up
 * authentication, routing, and other global state required for the app.
 */
const App = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Router>
        <div>
          <AppHeader />
          <Container>
            <Switch>
              <Route path="/">
                <ToolsPage />
              </Route>
            </Switch>
          </Container>
          <AppFooter />
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
