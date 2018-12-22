import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import Top from '../components/Top';
import About from '../components/About';
import Skills from '../components/Skills';
import Product from '../components/Products';
import '../App.css';

import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
          <Header />
          <Profile />
          <Route exact path="/" component={Top} />
          <Route path="/About" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/products" component={Product} />
          <Footer />
          </React.Fragment>
        </BrowserRouter>

    );
  }
}

export default App;
