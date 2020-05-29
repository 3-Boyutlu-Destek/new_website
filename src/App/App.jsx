import React from 'react';
import { Router } from 'react-router-dom';
import { history } from '@/_helpers';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { DestekForm } from '@/DestekForm';
import { Urunler } from '@/Urunler';
import Header from '../HomePage/components/Header';
import Footer from '../HomePage/components/Footer';
import Favicon from 'react-favicon';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <Favicon url="logo.png" />,
        <div>
          <Header />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute path="/destek-form" component={DestekForm} />
          <PrivateRoute path="/urunler" component={ Urunler } />
          <Footer />
        </div>
      </Router>
    );
  }
}

export { App };
