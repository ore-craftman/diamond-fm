import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/shared/Loader";
const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));
const ResetPassword = lazy(() => import("./components/ResetPassword"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const FePosts = lazy(() => import("./components/FePosts"));
const SinglePost = lazy(() => import("./components/SinglePost"));
const Home = lazy(() => import("./components/Home"));
const Policy = lazy(() => import("./components/Policy"));
const Contact = lazy(() => import("./components/shared/Contact"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts/type/:type" component={FePosts} />
          <Route path="/posts/:id" component={SinglePost} />
          <Route path="/df-new-keymaster" component={Signup} />
          <Route path="/df-login" component={Login} />
          <Route path="/reset-password/:userId" component={ResetPassword} />
          <Route path="/df-dashboard" component={Dashboard} />
          <Route path="/privacy-policy" component={Policy} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
