import React from 'react';
import ScrollToTop from "./Components/scrollToTop";

import './Css/normalize.css';
import './Css/App.css';
import './Css/fontAwesome.css';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";


import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Cookies from "./Components/Cookies";
import Error404 from "./Components/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main role="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Cookies" component={Cookies} />
          <Route component={Error404} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
