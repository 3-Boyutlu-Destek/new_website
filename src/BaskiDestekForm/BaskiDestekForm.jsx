import React from 'react';
import "./style.scss"
import threeDTypes from './components/3DTypes';
import skills from './components/Skills';
import Api from '../_services/Api';
import { empty } from 'rxjs';

class BaskiDestekForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      name:"",
      phone:"",
      city:"",
      has_printer: true,
      printer_count: 0,
      experience: 0,
      level:"",
      technologies:[],
      skills:[],
      design_and_engineering:"",
      details:"",
      checked3DTypeItems: new Map(),
      checkedSkilsItems: new Map(),
      isOther3DType : false,
      other3DTypes: ""
    };
    this.handleHasPrinterChange = this.handleHasPrinterChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handle3DTypesChange = this.handle3DTypesChange.bind(this);
    this.handleSkilsChange = this.handleSkilsChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      case 'name':
        this.setState({
          name: value
        })
      break;
      case 'phone':
        this.setState({
          phone: value
        })
        break;
      case 'city':
        this.setState({
          city: value
        })
        break;
      case 'printerCount':
        this.setState({
          printer_count: value
        })
        break;
      case 'design_and_engineering':
        this.setState({
          design_and_engineering: value
        })
        break;
      case 'experience':
        this.setState({
          experience: value
        })
        break;
      case 'details':
          this.setState({
            details: value
          })
          break; 
      case 'other_3D_types':
        this.setState({
           other3DTypes: value
        })
        break;
      default:
        break;
    }
  }

  handleSubmit(e){ 
    e.preventDefault();
    var technologies = this.state.technologies && this.state.technologies.join(',');
    if(this.state.isOther3DType){
        technologies = technologies? technologies.concat(",",this.state.other3DTypes): this.state.technologies;
    }
    const data = {
      email: this.state.email,
      name:this.state.name,
      phone : this.state.phone,
      city: this.state.city,
      has_printer: this.state.has_printer,
      printer_count: this.state.printer_count,
      experience: this.state.experience,
      level: this.state.level,
      technologies: technologies,
      skills: this.state.skills && this.state.skills.join(','),
      design_and_engineering: this.state.design_and_engineering,
      details: this.state.details
    }
    const methodUrl = 'anonymous/production';
    const response = Api(methodUrl, data);
    console.log("response",response)
  }
  handleSkilsChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    const list = this.state.skills;
    if(isChecked){
      list.push(item);
      this.setState({
        skills:list
      })
    }else{
      this.setState({
        skills:list.filter(i=>i!==item)
      })
    }
  }
  handle3DTypesChange(e) {
    const item = e.target.name;
    const value = e.target.value;
    const isChecked = e.target.checked;
    const list = this.state.technologies?? [];
      if(item ==='other'){
        this.setState({
          isOther3DType:isChecked
      })
      return;
   }
    if(isChecked){
      list.push(value);
      this.setState({
        technologies:list
      })
    }else{
      this.setState({
        technologies:list.filter(i=>i!==value)
      })
    }
  }
  handleHasPrinterChange(changeEvent) {
    this.setState({
      has_printer: changeEvent.target.value
    });
  }

  handleLevelChange(changeEvent){
    this.setState({
      level: changeEvent.target.value
    })
  }

  handleLevelChange(changeEvent){
    this.setState({
      level: changeEvent.target.value
    })
  }

  render() {
    return <div className="BaskiDestekForm">
          <form className="BaskiDestekForm-form" onSubmit={this.handleSubmit}>
            <div className="BaskiDestekForm-form-row">
                 <div className="BaskiDestekForm-form-row-emailDiv">
                     <input className="BaskiDestekForm-form-row-emailDiv-input" 
                            type="email"
                            name="email" 
                            placeholder="Email" 
                            onChange={this.handleInputChange}/>
                 </div>
                 <div className="BaskiDestekForm-form-row-nameDiv">
                     <input className="BaskiDestekForm-form-row-nameDiv-input"
                            type="text"
                            name="name" 
                            placeholder="Kişi ya da Kurum Adı*" 
                            onChange={this.handleInputChange}/>
                 </div>
            </div>
            <div className="BaskiDestekForm-form-row">
                 <div className="BaskiDestekForm-form-row-phoneNumberDiv">
                     <input className="BaskiDestekForm-form-row-phoneNumberDiv-input"
                            type="text" 
                            name="phone" 
                            placeholder="Telefon No"
                            onChange={this.handleInputChange} />
                 </div>
                 <div className="BaskiDestekForm-form-row-cityDiv">
                     <input className="BaskiDestekForm-form-row-cityDiv-input" 
                     type="text" 
                     name="city" 
                     placeholder="Şehir Seçiniz"
                     onChange={this.handleInputChange} />
                 </div>
            </div>
            <div className="BaskiDestekForm-form-row">
                 <div className="BaskiDestekForm-form-row-3Boyutluyaziciyasahipmisiniz">
                   <label>
                   3 Boyutlu yazıcıya sahip misiniz?*
                   </label>
                   <br/>
                   <label className="BaskiDestekForm-form-row-3Boyutluyaziciyasahipmisiniz-label">
                    <span> Evet </span>
                   <input className="BaskiDestekForm-form-row-3Boyutluyaziciyasahipmisiniz-input" 
                          type="radio" 
                          name="evet"
                          value = {true}
                          checked={this.state.has_printer === 'true' }
                          onChange={this.handleHasPrinterChange}/>
                   </label>
                    <label className="BaskiDestekForm-form-row-3Boyutluyaziciyasahipmisiniz-label">
                      <span> Hayır </span>
                    <input className="BaskiDestekForm-form-row-3Boyutluyaziciyasahipmisiniz-input" 
                           type="radio" 
                           name="hayır"
                           value={false}
                           checked={this.state.has_printer === 'false' }
                           onChange={this.handleHasPrinterChange} />
                    </label>
                     
                 </div>
                 <div className="BaskiDestekForm-form-row-kacAdetYaziciyaSahipsiniz">
                   <label>
                   Kaç adet yazıcıya sahipsiniz?*
                   </label>
                   <br/>
                    <input className="BaskiDestekForm-form-row-kacAdetYaziciyaSahipsiniz-input" 
                           type="number" 
                           name="printerCount"
                           onChange={this.handleInputChange}
                           />
                     
                 </div>
            </div>
            <div className="BaskiDestekForm-form-row">
                 <div className="BaskiDestekForm-form-row-hangiTurYaziciTeknolojisineSahipsiniz">
                   <label>
                   Hangi tür 3D yazıcı teknolojilerine sahipsiniz?*
                   </label>
                   <br/>
                  {
                     threeDTypes.map(item => (
                      <label key={item.key} className="BaskiDestekForm-form-row-hangiTurYaziciTeknolojisineSahipsiniz-label">
                        <input type="checkbox" 
                               name={item.name} 
                               className="BaskiDestekForm-form-row-hangiTurYaziciTeknolojisineSahipsiniz-input"
                               checked={this.state.checked3DTypeItems.get(item.name)} 
                               value={item.label}
                               onChange={this.handle3DTypesChange} />
                        {item.label}
                      </label>
                    ))
                   
                  }
                  {
                     this.state.isOther3DType &&  <input className="BaskiDestekForm-form-row-hangiTurYaziciTeknolojisineSahipsiniz-other" 
                     type="text" 
                     name="other_3D_types" 
                     onChange={this.handleInputChange} />
                  }
                    
                 </div>
                 <div className="BaskiDestekForm-form-row-3DYaziciyiHangiSeviyedeKullanıyorsunuz">
                   <label>
                   3 Boyutlu Yazıcıyı Hangi Seviyede Kullanıyorsunuz?*
                   </label>
                   <br/>
                   <label className="BaskiDestekForm-form-row-3DYaziciyiHangiSeviyedeKullanıyorsunuz-label">
                   <input className="BaskiDestekForm-form-row-3DYaziciyiHangiSeviyedeKullanıyorsunuz-input" 
                          type="radio" 
                          name="hobi"
                          value="hobi"
                          checked={this.state.level === 'hobi' }
                          onChange={this.handleLevelChange} />
                          <span>Hobi</span>
                   </label>
                    <label className="BaskiDestekForm-form-row-3DYaziciyiHangiSeviyedeKullanıyorsunuz-label">
                    <input className="BaskiDestekForm-form-row-3DYaziciyiHangiSeviyedeKullanıyorsunuz-input" 
                           type="radio" 
                           name="mfj"
                           value="mfj"
                           checked={this.state.level === 'mfj' }
                           onChange={this.handleLevelChange}
                            />
                           <span>MFJ</span> 
                    </label>
                    <label className="BaskiDestekForm-form-row-3DYaziciyiHangiSeviyedeKullanıyorsunuz-label">
                   <input className="BaskiDestekForm-form-row-3DYaziciyiHangiSeviyedeKullanıyorsunuz-input" 
                          type="radio" 
                          name="sla"
                          value="sla" 
                          checked={this.state.level === 'sla' }
                          onChange={this.handleLevelChange}/>
                          <span>SLA</span>
                   </label>
                 </div>
            </div>
            <div className="BaskiDestekForm-form-row">
                 <div className="BaskiDestekForm-form-row-hangiBeceriyeSahipsiniz">
                   <label>
                   Aşağıdaki hangi beceriye sahipsiniz?*
                   </label>
                   {
                     skills.map(item => (
                      <label key={item.key} className="BaskiDestekForm-form-row-hangiBeceriyeSahipsiniz-label">
                        <input type="checkbox" 
                               name={item.label} 
                               className="BaskiDestekForm-form-row-hangiBeceriyeSahipsiniz-input"
                               checked={this.state.checkedSkilsItems.get(item.name)} 
                               onChange={this.handleSkilsChange} />
                        {item.label}
                      </label>
                    ))
                  }
                  
                 </div>
                 <div className="BaskiDestekForm-form-row-kacAdetYaziciyaSahipsiniz">
                   <label>
                    Tasarım veya mühendislik becerileriniz var mı?*
                   </label>
                   <br/>
                    <input className="BaskiDestekForm-form-row-kacAdetYaziciyaSahipsiniz-input" 
                           type="text" 
                           name="design_and_engineering"
                           onChange={this.handleInputChange}
                           />
                     
                 </div>
            </div>
            <div className="BaskiDestekForm-form-row">
                 <div className="BaskiDestekForm-form-row-emailDiv">
                     <input className="BaskiDestekForm-form-row-emailDiv-input" 
                            type="text"
                            name="experience" 
                            placeholder="Kaç yıl deneyiminiz var?" 
                            onChange={this.handleInputChange}/>
                 </div>
                 <div className="BaskiDestekForm-form-row-nameDiv">
                     <input className="BaskiDestekForm-form-row-nameDiv-input"
                            type="text"
                            name="details" 
                            placeholder="Ayrıca belirtmek istedikleriniz" 
                            onChange={this.handleInputChange}/>
                 </div>
            </div>
            <div className="BaskiDestekForm-form-row">
                   <label className="BaskiDestekForm-form-row-aciklamaLabel">
                     Bu belge, kitle destekli bir belgedir, bu nedenle iletişim bilgilerinizin herkes tarafından ulaşılabilir 
                     olacağını bilerek, kendi sorumluluğunuzda paylaşın.
                   </label>
            </div>
            <div className="BaskiDestekForm-form-row">
                <input type="submit" 
                       className="BaskiDestekForm-form-row-formGonderButton"
                       value="Formu Gönder" />
            </div>
         </form>
    </div>;
  }
}

export { BaskiDestekForm };
