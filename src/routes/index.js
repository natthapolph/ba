import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Project from "../pages/Project";
import Post from "../pages/Post";
import About from "../pages/About";
import Register from "../pages/Register";
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/Project" component={Project} />
    <Route exact path="/posts" component={Post} />
    <Route exact path="/register" component={Register} />
  </Switch>
);
