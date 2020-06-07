import React from "react";
import "./style.scss";
import Api from "../_services/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cities from "../BaskiDestekForm/components/Cities";

class HammaddeDestekForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      contact_name: "",
      donator_name: "",
      phone: "",
      city: "",
      material: [],
      quantity: "",
      details: "",
      checkedMaterialItems: new Map(),
      isOtherMaterial: false,
      otherMaterial: ""
    };
    this.myRef = React.createRef();
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  componentDidMount(){
    this.myRef = window.scrollTo(0,0);
}
  handleCityChange(e) {
    const value = e.target.value;
    this.setState({
      city: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      contact_name: this.state.contact_name,
      donator_name: this.state.donator_name,
      phone: this.state.phone,
      city: parseInt(this.state.city, 10),
      material: this.state.material && this.state.material.join(","),
      details: this.state.details,
      quantity: parseInt(this.state.quantity, 10)
    };
    // console.log("data", JSON.stringify(data));
    if (
      !data.email ||
      !data.contact_name ||
      !data.donator_name ||
      !data.city ||
      data.city <= 0 ||
      !data.material ||
      !data.quantity
    ) {
      toast.error(
        "* ile işaretli olan alanlar boş bırakılamaz!  Lütfen işaretli alanları doldurunuz."
      );
      return;
    }

    const methodUrl = "anonymous/donation";

    Api(methodUrl, data).then(response => {
      console.log(response.status);
      if (response) {
        toast.success("Başarıyla kaydedildi");
      } else {
        toast.error("İşlem başarısız oldu. Lütfen tekrar deneyin.");
      }
    });
  }
  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "email":
        this.setState({
          email: value
        });
        break;
      case "contact_name":
        this.setState({
          contact_name: value
        });
        break;
      case "donator_name":
        this.setState({
          donator_name: value
        });
        break;
      case "phone":
        this.setState({
          phone: value
        });
        break;
      case "quantity":
        this.setState({
          quantity: value
        });
        break;
      case "details":
        this.setState({
          details: value
        });
        break;
      default:
        break;
    }
  }
  handleMaterialChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    const list = this.state.material || [];
    if (item === "other") {
      this.setState({
        isOtherMaterial: isChecked
      });
      return;
    }
    if (isChecked) {
      list.push(item);
      this.setState({
        material: list
      });
    } else {
      this.setState({
        material: list.filter(i => i !== item)
      });
    }
  }

  render() {
    return (
      <div className="HammaddeDestekForm" ref={this.myRef}>
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
                name="donator_name"
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
                style={{ textIndent: "45px", paddingLeft: "0" }}
                defaultValue=""
              >
                <option value="" disabled key="0">
                  Şehir Seçiniz*
                </option>
                {Cities.map(item => (
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <label className="container-input HammaddeDestekForm-form-row-bagislanacakhammaddeseciniz-label">
                  <span className="input-text">Filament</span>
                  <input
                    className="HammaddeDestekForm-form-row-bagislanacakhammaddeseciniz-input"
                    type="checkbox"
                    name="filament"
                    checked={this.state.checkedMaterialItems.get("filament")}
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
                    checked={this.state.checkedMaterialItems.get("other")}
                    onChange={this.handleMaterialChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
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
              {this.state.isOtherMaterial && (
                <textarea
                  rows="4"
                  cols="50"
                  className="form-section-big BaskiDestekForm-form-row-kacAdetYaziciyaSahipsiniz"
                  type="text"
                  name="details"
                  placeholder="Filament dışında başka malzeme bağışlıyorsanız lütfen detaylarını giriniz"
                  onChange={this.handleInputChange}
                />
              )}
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
