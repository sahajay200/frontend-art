/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
import "assets/css/landingpage.css";
import "assets/css/portfolio.css";

// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LandingPage from "views/examples/LandingPage.js";
import Portfolio from "views/examples/Portfolio";
// others

Amplify.configure(awsExports);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <LandingPage {...props} />} />
      {/* <Route path="/" render={(props) => <LandingPage {...props} />} /> */}
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      {/* <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      /> */}
      {/* <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      /> */}
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
       <Route
        path="/portfolio"
        render={(props) => <Portfolio {...props} />}
      />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
