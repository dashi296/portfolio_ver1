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
        <BrowserRouter>
          <React.Fragment>
          <Header />
          <Profile />
          <Route exact path="/" component={Top} />
          <Route path="/skills" component={Skills} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Footer />
          </React.Fragment>
        </BrowserRouter>

    );
  }
}

export default App;
