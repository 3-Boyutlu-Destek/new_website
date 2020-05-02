import React from 'react';
import { Router } from 'react-router-dom';
import { history } from '@/_helpers';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import Header from '../HomePage/components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <PrivateRoute exact path="/" component={HomePage} />

        </div>
      </Router>
    );
  }
}

export { App };
