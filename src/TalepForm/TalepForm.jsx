import React from 'react';
import './style.scss'
import Api from '../_services/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cities from '../BaskiDestekForm/components/Cities';

class TalepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email:"",
          contact_name:"",
          contact_email:"",
          requester_name:"",
          section:"",
          phone:"",
          city:"",
          product:[],
          quantity:"",
          details:"",
          checkedProductItems: new Map(),
          isOtherProduct: false,
          otherProduct:''
        };
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
      }
      handleCityChange(e){
        const value = e.target.value;
        this.setState({
          city:value
        })
      }
      handleSubmit(e){ 
        e.preventDefault();
        var product = this.state.product && this.state.product.join(',');
        if(this.state.isOtherProduct){
            product = product.length? product.concat(",",this.state.otherProduct):this.state.otherProduct;
        }
        const data = {
          email: this.state.email,
          contact_name:this.state.contact_name,
          contact_email:this.state.donater_name,
          requester_name : this.state.requester_name,
          section: this.state.section,
          phone : this.state.phone,
          city: this.state.city,
          product: product,
          details: this.state.details,
          quantity:this.state.quantity
        }
        if(!data.email || !data.contact_name || !data.contact_email || !data.requester_name || !data.section || !data.city
           || data.city<=0 || !data.product || !data.quantity){
          toast.error("* ile işaretli olan alanlar boş bırakılamaz! Lütfen işaretli alanları doldurunuz.");
          return;
        }
        const methodUrl = 'anonymous/request';
        const response = Api(methodUrl, data);
        console.log("response",response)
      }
      handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
          case 'email' : 
          this.setState({
            email: value
          })
          break;
          case 'contact_name':
            this.setState({
              name: value
            })
          break;
          case 'contact_email':
            this.setState({
              contact_email: value
            })
          break;
          case 'requester_name':
            this.setState({
              requester_name: value
            })
          break;
          case 'section':
            this.setState({
                section: value
            })
          break;
          case 'phone':
            this.setState({
              phone: value
            })
            break;
          case 'quantity':
            this.setState({
              quantity: value
            })
            break;
          case 'details':
              this.setState({
                details: value
              })
              break; 
          case 'other_product':
              this.setState({
                  otherProduct:value
              })
              break;
          default:
            break;
        }
      }
      handleProductChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        const value = e.target.value;
        const list = this.state.product && [];
        if(item ==='other'){
            this.setState({
              isOtherProduct:isChecked
          })
          return;
       }
        if(isChecked){
          list.push(value);
          this.setState({
            product:list
          })
        }else{
          this.setState({
            product:list.filter(i=>i!==value)
          })
        }
      }

      render() {
        return <div className="TalepForm">
             <ToastContainer/>
              <form className="TalepForm-form" onSubmit={this.handleSubmit}>
                <div className="TalepForm-form-row">
                     <div className="TalepForm-form-row-contactNameDiv">
                         <input className="TalepForm-form-row-contactNameDiv-input"
                                type="text"
                                name="contact_name" 
                                placeholder="İletişim Kurulacak kişinin adı ve soyadı*" 
                                onChange={this.handleInputChange}/>
                     </div>
                     <div className="TalepForm-form-row-contactEmailDiv">
                         <input className="TalepForm-form-row-contactEmailDiv-input" 
                                type="email"
                                name="contact_email" 
                                placeholder="İletişim için e-posta adresi*" 
                                onChange={this.handleInputChange}/>
                     </div>
                </div>
                <div className="TalepForm-form-row">
                     <div className="TalepForm-form-row-requesterNameDiv">
                         <input className="TalepForm-form-row-requesterNameDiv-input"
                                type="text"
                                name="requester_name" 
                                placeholder="Talep eden kurumun adı*" 
                                onChange={this.handleInputChange}/>
                     </div>
                     <div className="TalepForm-form-row-sectionDiv">
                         <input className="TalepForm-form-row-sectionDiv-input" 
                                type="text"
                                name="section" 
                                placeholder="Hangi bölümde görev alıyorsunuz?*" 
                                onChange={this.handleInputChange}/>
                     </div>
                </div>
                <div className="TalepForm-form-row">
                    <div className="TalepForm-form-row-emailDiv">
                         <input className="TalepForm-form-row-emailDiv-input" 
                                type="email"
                                name="email" 
                                placeholder="Email*" 
                                onChange={this.handleInputChange}/>
                     </div>
                     <div className="TalepForm-form-row-phoneNumberDiv">
                         <input className="TalepForm-form-row-phoneNumberDiv-input"
                                type="text" 
                                name="phone" 
                                placeholder="Telefon No"
                                onChange={this.handleInputChange} />
                     </div>
                </div>
                <div className="TalepForm-form-row">
                  <div className="TalepForm-form-row-talepEdilenMalzeme">
                   <label>
                      Talep edeceğiniz medikal parçayı seçiniz*
                   </label>
                   <br/>
                   <label className="TalepForm-form-row-talepEdilenMalzeme-label">
                   <input className="TalepForm-form-row-talepEdilenMalzeme-input" 
                          type="checkbox" 
                          name="yuz_kalkanı"
                          value="Yüz Kalkanı"
                          checked={this.state.checkedProductItems.get('yuz_kalkanı') }
                          onChange={this.handleProductChange}/>
                          <span> Yüz kalkanı </span>
                   </label>
                    <label className="TalepForm-form-row-bagislanacakhammaddeseciniz-label">
                    <input className="TalepForm-form-row-bagislanacakhammaddeseciniz-input" 
                           type="checkbox" 
                           name="other"
                           value="Diğer"
                           checked={this.state.checkedProductItems.get('other')} 
                           onChange={this.handleProductChange} />
                          <span> Diğer </span>
                          {
                        this.state.isOtherProduct && 
                         <input className="HammaddeDestekForm-form-row-bagislanacakhammaddeseciniz-other" 
                                 type="text" 
                                 name="other_product" 
                                 onChange={this.handleInputChange} />
                      }
                    </label>
                 </div>
                  <div className="TalepForm-form-row-cityDiv">
                  <select name="city" className="HammaddeDestekForm-form-row-cityDiv-input" onChange={this.handleCityChange}>
                        <option value="0" key="0">Şehir Seçiniz*</option>
                       {
                         Cities.map(item =>(
                         <option value={item.id} key={item.id}>{item.city}</option>
                         ))
                       }
                    </select>
                  </div>
                </div>
                <div className="TalepForm-form-row">
                  
                <div className="TalepForm-form-row-details">
                   <label>
                   Yüz kalkanı dışında bir medikal parça talep ediyorsanız, lütfen detaylarını giriniz.
                   </label>
                   <br/>
                    <input className="TalepForm-form-row-details-input" 
                           type="text" 
                           name="details"
                           onChange={this.handleInputChange}
                           />
                     
                 </div>
                <div className="TalepForm-form-row-kacAdetMedicalParcayaIhtiyacinizVar">
                   <label>
                   Kaç adet medical parçaya ihtiyacınız var?*
                   </label>
                   <br/>
                    <input className="TalepForm-form-row-kacAdetMedicalParcayaIhtiyacinizVar-input" 
                           type="number" 
                           name="quantity"
                           onChange={this.handleInputChange}
                           />
                     
                 </div>
                </div>
                <div className="TalepForm-form-row">
                    <input type="submit" 
                           className="TalepForm-form-row-formGonderButton"
                           value="Formu Gönder" />
                </div>
               
                
             </form>
        </div>;
      }
}


export { TalepForm };