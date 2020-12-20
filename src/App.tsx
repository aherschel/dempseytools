import React from "react";
import Amplify from "aws-amplify";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import aws_exports from "./aws-exports";
import { ToolsPage } from "./pages";
import { AppHeader, AppFooter } from "./components";

Amplify.configure(aws_exports);

/**
 * The top-level App component is responsible for a few key things, including setting up
 * authentication, routing, and other global state required for the app.
 */
const App = () => {
  return (
    <Router>
      <div>
        <AppHeader />
        <Container>
          <Switch>
            <Route path="/tools">
              <ToolsPage />
            </Route>
            <Route path="/">
              <Redirect to="/tools" />
            </Route>
          </Switch>
        </Container>
        <AppFooter />
      </div>
    </Router>
  );
};

export default App;
