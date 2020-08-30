import React from "react";

import "./App.css";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import SingleBlog from "./Components/SingleBlog/SingleBlog";
import Layout from "./Components/Menubar/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import Aboutauthor from "./Components/About-Author/Aboutauthor";
import Aboutproject from "./Components/About-project/Aboutproject";

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Layout />
        <Switch>
          {/* <Route
            exact
            path="/Medium-Blogs-on-React#"
            component={Blog}
            basename={`Medium-Blog-On-React-App#/`}
            // render={() => <Redirect to="//Medium-Blogs-on-React#" />}
          /> */}
{/* <Route exact path="/Medium-Blog-On-React-App/" render={() => (<Redirect to="#/" />)} /> */}
          <Route path="/about-author" exact component={Aboutauthor}></Route>

          <Route path="/about-project" exact component={Aboutproject}></Route>
          <Route path="/:id" exact component={SingleBlog}></Route>
          <Route path="/" exact component={Blog}></Route>
          {/* <Route exact path="/" render={() => <Redirect to="/Medium-Blog-On-React-App#/" />} /> */}
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
