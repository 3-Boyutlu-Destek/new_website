import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { history } from '@/_helpers';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { BaskiDestekForm } from '@/BaskiDestekForm';
import { HammaddeDestekForm } from '@/HammaddeDestekForm';
import { TalepForm } from '@/TalepForm';
import { Urunler } from '@/Urunler';
import { UrunDetail } from '@/UrunDetail';
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
        <Favicon url="logo.png" />
        <div>
          <Header />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute path="/baski-destek-form" component={BaskiDestekForm} />
          <PrivateRoute path="/hammadde-destek-form" component={HammaddeDestekForm} />
          <PrivateRoute path="/talep-form" component={ TalepForm } />
          <PrivateRoute path="/urunler" component={ Urunler } />
          <PrivateRoute path="/urun-detail/:id" component={ UrunDetail } />
          <Footer />
        </div>
      </Router>
    );
  }
}

export { App };
