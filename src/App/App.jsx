import React from 'react';
import { Router, Route, Link, img } from 'react-router-dom';
import { history } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
//import { style } from '@/App';

const titleStyle={
    color: 'black',
     fontWeight: '600',
     padding: '5px',
     fontSize: '20px',
     marginLeft:'20px'
 }
 const destekOlTitleStyle = {
    color: 'white',
    fontWeight: '600',
    padding: '5px',
    fontSize: '18px', 
    marginLeft:'20px',
    backgroundColor: '#FF4933',
    borderRadius : '25px',
    width: '140px',
    textAlign: 'center'
 }
 const talepEtTitleStyle = {
    color: 'white',
    fontWeight: '600',
    padding: '5px',
    fontSize: '18px', 
    marginLeft:'20px',
    backgroundColor: 'black',
    borderRadius : '25px',
    width: '120px',
    textAlign: 'center'
 }
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

    render() {
        const { currentUser } = this.state;
        

        return (
            <Router history={history}>
                <div>
                    {
                        <nav className="navbar navbar-expand navbar-dark" style={{width:'95%'}}>
                            <Link to="/" className="nav-item" style={titleStyle}><img className="nav-item nav-link" src="public/logo.png" alt="Ana Sayfa"></img></Link>
                            <div className="navbar-nav" style={{marginLeft:'auto'}}>
                                <div style={titleStyle} >Hakkımızda</div>
                                <a style={titleStyle} className="nav-item" target="_blank" >Destekçiler</a>
                                <a  className="nav-item" style={titleStyle} >Ürünler</a>
                                <a  className="nav-item" style={destekOlTitleStyle} >Destek Ol</a>
                                <a  className="nav-item" style={talepEtTitleStyle} >Talep Et</a>
                            </div>
                        </nav>
                    }
                    <div className="jumbotron" style={{backgroundColor:'white'}}> 
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <PrivateRoute exact path='/' component={HomePage} />
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