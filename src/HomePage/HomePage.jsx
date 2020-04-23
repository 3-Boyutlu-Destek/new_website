import React from 'react';

import { userService, authenticationService } from '@/_services';
import { Redirect } from 'react-router-dom';
const divHome = {
    backgroundImage: `url(public/group.svg)`,
    width:'100%',
    height:'600px',
    backgroundSize: 'cover',
    marginTop:'-70px'
}

const uretimeBaslaButton = {
    borderRadius: '20px',
    backgroundColor: '#FF4933',
    borderStyle: 'none',
    width: '25%',
    height: '35px',
    textAlign: 'center',
    color: 'white',
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div style={divHome}>
                <div className="col-md-6 offset-md-6" style={{paddingTop:'150px'}}>
                     <h1 style={{fontWeight:'700'}}>Covid-19 ile mücadeleye tam destek</h1> 
                     <p>3 Boyutlu yazıcıda oluşturulmuş parçalar, ihtiyaç anında orjinal parçaların yerini daha kısa sürede alır</p>
                     <button style={uretimeBaslaButton}>Üretime Başla</button>
                </div>
                 
            </div>
        );
    }
}

export { HomePage };