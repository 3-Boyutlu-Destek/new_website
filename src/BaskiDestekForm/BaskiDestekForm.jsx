import React from 'react';
import "./style.scss"

class BaskiDestekForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption:""
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  render() {
    return <div className="BaskiDestekForm">
          <form className="BaskiDestekForm-form">
            <div className="BaskiDestekForm-form-row">
                 <div className="BaskiDestekForm-form-row-inputDiv">
                     <input className="BaskiDestekForm-form-row-inputDiv-input" type="email" name="email" placeholder="Email" />
                 </div>
                 <div className="BaskiDestekForm-form-row-inputDiv">
                     <input className="BaskiDestekForm-form-row-inputDiv-input" type="text" name="name" placeholder="Kişi ya da Kurum Adı" />
                 </div>
            </div>
            <div className="BaskiDestekForm-form-row">
                 <div className="BaskiDestekForm-form-row-inputDiv">
                     <input className="BaskiDestekForm-form-row-inputDiv-input" type="text" name="telefon" placeholder="Telefon No" />
                 </div>
                 <div className="BaskiDestekForm-form-row-inputDiv">
                     <input className="BaskiDestekForm-form-row-inputDiv-input" type="text" name="name" placeholder="Şehir Seçiniz" />
                 </div>
            </div>
            <div className="BaskiDestekForm-form-row">
                 <div className="BaskiDestekForm-form-row-3Boyutluyaziciyasahipmisiniz">
                   <label>
                   3 Boyutlu yazıcıya sahip misiniz?
                   </label>
                   <br/>
                   <label>
                     Evet
                   <input className="BaskiDestekForm-form-row-inputDiv-input" 
                          type="radio" 
                          name="evet"
                          value="evet"
                          checked={this.state.selectedOption === 'evet'}
                          onChange={this.handleOptionChange}/>
                   </label>
                    <label>
                      Hayır
                    <input className="BaskiDestekForm-form-row-inputDiv-input" 
                           type="radio" 
                           name="hayır"
                           value="hayır"
                           checked={this.state.selectedOption === 'hayır'}
                           onChange={this.handleOptionChange} />
                    </label>
                     
                 </div>
                 <div className="BaskiDestekForm-form-row-inputDiv">
                     <input className="BaskiDestekForm-form-row-inputDiv-input" type="text" name="name" placeholder="Şehir Seçiniz" />
                 </div>
            </div>
         
         </form>
    </div>;
  }
}

export { BaskiDestekForm };
2