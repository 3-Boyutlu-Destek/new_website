import React from 'react';
import './style.scss';
import Api from '../_services/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cities from '../BaskiDestekForm/components/Cities';

class HammaddeDestekForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      contact_name: '',
      donater_name: '',
      phone: '',
      city: '',
      material: [],
      quantity: '',
      details: '',
      checkedMaterialItems: new Map(),
      isOtherMaterial: false,
      otherMaterial: '',
    };
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  handleCityChange(e) {
    const value = e.target.value;
    this.setState({
      city: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    var material = this.state.material && this.state.material.join(',');
    if (this.state.isOtherMaterial) {
      material = material
        ? material.concat(',', this.state.otherMaterial)
        : this.state.otherMaterial;
    }
    const data = {
      email: this.state.email,
      contact_name: this.state.contact_name,
      donater_name: this.state.donater_name,
      phone: this.state.phone,
      city: this.state.city,
      material: material,
      details: this.state.details,
      quantity: this.state.quantity,
    };
    if (
      !data.email ||
      !data.contact_name ||
      !data.donater_name ||
      !data.city ||
      data.city <= 0 ||
      !data.material ||
      !data.quantity
    ) {
      toast.error(
        '* ile işaretli olan alanlar boş bırakılamaz!  Lütfen işaretli alanları doldurunuz.'
      );
      return;
    }
    const methodUrl = 'anonymous/donation';
    const response = Api(methodUrl, data);
  }
  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'email':
        this.setState({
          email: value,
        });
        break;
      case 'contact_name':
        this.setState({
          contact_name: value,
        });
        break;
      case 'donater_name':
        this.setState({
          donater_name: value,
        });
        break;
      case 'phone':
        this.setState({
          phone: value,
        });
        break;
      case 'quantity':
        this.setState({
          quantity: value,
        });
        break;
      case 'details':
        this.setState({
          details: value,
        });
        break;
      case 'other_material':
        this.setState({
          otherMaterial: value,
        });
      default:
        break;
    }
  }
  handleMaterialChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    const value = e.target.value;
    const list = this.state.material ?? [];
    if (item === 'other') {
      console.log('edfsdfsd');
      console.log(this.state.isOtherMaterial);
      this.setState({
        isOtherMaterial: isChecked,
      });
      return;
    }
    if (isChecked) {
      list.push(value);
      this.setState({
        material: list,
      });
    } else {
      this.setState({
        material: list.filter((i) => i !== value),
      });
    }
  }

  render() {
    return (
      <div className="HammaddeDestekForm">
        <img src="form-top-red.png" className="BaskiDestekForm-top" alt="" />
        <ToastContainer />
        <h1 className="BaskiDestekForm-main-title">
          Kolektif Üretim Hareketine <br /> Destek Ol
        </h1>
        <form className="HammaddeDestekForm-form" onSubmit={this.handleSubmit}>
          <div className="HammaddeDestekForm-form-row">
            <div className="form-relative HammaddeDestekForm-form-row-contactNameDiv">
              <img
                src="form-person-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <input
                className="form-input"
                type="text"
                name="contact_name"
                placeholder="İletişim Kurulacak kişi*"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-relative HammaddeDestekForm-form-row-donaterNameDiv">
              <img
                src="form-person-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <input
                className="form-input"
                type="text"
                name="donater_name"
                placeholder="Bağış yapan kişi/kurumun adı*"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="HammaddeDestekForm-form-row">
            <div className="form-relative HammaddeDestekForm-form-row-emailDiv">
              <img
                src="form-mail-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Email*"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-relative HammaddeDestekForm-form-row-phoneNumberDiv">
              <img
                src="form-phone-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <input
                className="form-input"
                type="text"
                name="phone"
                placeholder="Telefon No"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="HammaddeDestekForm-form-row">
            <div className="form-relative HammaddeDestekForm-form-row-cityDiv">
              <img
                src="form-location-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <select
                required
                name="city"
                className="form-input"
                onChange={this.handleCityChange}
                style={{ textIndent: '45px', paddingLeft: '0' }}
              >
                <option value="" selected disabled key="0">
                  Şehir Seçiniz*
                </option>
                {Cities.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="HammaddeDestekForm-form-row">
            <div className="form-relative form-section-big HammaddeDestekForm-form-row-bagislanacakhammaddeseciniz">
              <img src="form-printer-icon.svg" className="form-icon" alt="" />
              <label className="center">
                Bağışlayabileceğiniz hammaddeyi seçiniz*
              </label>
              <br />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <label className="container-input HammaddeDestekForm-form-row-bagislanacakhammaddeseciniz-label">
                  <span className="input-text">Filament</span>
                  <input
                    className="HammaddeDestekForm-form-row-bagislanacakhammaddeseciniz-input"
                    type="checkbox"
                    name="filament"
                    value="Filament"
                    checked={this.state.checkedMaterialItems.get('filament')}
                    onChange={this.handleMaterialChange}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="container-input HammaddeDestekForm-form-row-bagislanacakhammaddeseciniz-label">
                  <span className="input-text">Diğer</span>
                  <input
                    className="HammaddeDestekForm-form-row-bagislanacakhammaddeseciniz-input"
                    type="checkbox"
                    name="other"
                    value="Diğer"
                    checked={this.state.checkedMaterialItems.get('other')}
                    onChange={this.handleMaterialChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              {this.state.isOtherMaterial && (
                <input
                  className="form-input"
                  type="text"
                  name="other_material"
                  onChange={this.handleInputChange}
                />
              )}
            </div>
          </div>
          <div className="HammaddeDestekForm-form-row">
            <div className="form-relative HammaddeDestekForm-form-row-donaterNameDiv">
              <img
                src="form-printer-count-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <input
                className="form-input"
                type="number"
                name="quantity"
                placeholder="Bağış yapılacak madde miktarı*"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-relative HammaddeDestekForm-form-row-contactNameDiv">
              <textarea
                rows="4"
                cols="50"
                className="form-section-big BaskiDestekForm-form-row-kacAdetYaziciyaSahipsiniz"
                type="text"
                name="details"
                placeholder="Filament dışında başka malzeme bağışlıyorsanız lütfen detaylarını giriniz"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="HammaddeDestekForm-form-row">
            <input
              type="submit"
              className="BaskiDestekForm-form-row-formGonderButton HammaddeDestekForm-form-row-formGonderButton"
              value="Formu Gönder"
            />
          </div>
          <img
            src="form-bottom-red.png"
            className="BaskiDestekForm-bottom"
            alt=""
          />
        </form>
      </div>
    );
  }
}

export { HammaddeDestekForm };
