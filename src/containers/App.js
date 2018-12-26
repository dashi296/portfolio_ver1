import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import Top from '../components/Top';
import Skills from '../components/Skills';
import Products from '../components/Products';
import Contact from '../components/Contact';
import '../App.css';

import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <React.Fragment>
          <Header />
          <Profile />
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Top} />
          <Route path={process.env.PUBLIC_URL + "/skills"} component={Skills} />
          <Route path={process.env.PUBLIC_URL + "/products"} component={Products} />
          <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
          <Footer />
          </React.Fragment>
        </BrowserRouter>

    );
  }
}

export default App;
