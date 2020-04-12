import React from 'react';
import { Router, Route, Link, img } from 'react-router-dom';
import { history } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { LoginPage } from '@/LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }


    render() {
        const { currentUser } = this.state;
        const titleStyle={
           color: 'black',
            fontWeight: '600',
            padding: '5px',
            fontSize: '20px'
        }

        return (
            <Router history={history}>
                <div>
                    { currentUser &&
                        <nav className="navbar navbar-expand navbar-dark">
                             <img className="nav-item nav-link" src="public/logo.png" alt="Ana Sayfa"></img>
                                <Link to="/" className="nav-item" style={titleStyle}>Anasayfa</Link>
                            <div className="navbar-nav" style={{marginLeft:'auto'}}>
                                <div style={titleStyle} >{currentUser.firstName +" "+ currentUser.lastName}</div>
                                <a onClick={this.logout} className="nav-item" style={titleStyle} >Çıkış</a>
                            </div>
                        </nav>
                    }
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <Route path="/login" component={LoginPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export { App }; 