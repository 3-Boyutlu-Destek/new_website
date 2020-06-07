import React from "react";
import "./style.scss";
import Api from "../_services/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cities from "../BaskiDestekForm/components/Cities";

class TalepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      contact_name: "",
      contact_email: "",
      requester_name: "",
      section: "",
      phone: "",
      city: "",
      product: [],
      quantity: "",
      details: "",
      checkedProductItems: new Map(),
      isOtherProduct: false,
      otherProduct: ""
    };
    this.myRef = React.createRef();
    this.handleProductChange = this.handleProductChange.bind(this);
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
      contact_email: this.state.contact_email,
      requester_name: this.state.requester_name,
      section: this.state.section,
      phone: this.state.phone,
      city: this.state.city,
      product: this.state.product && this.state.product.join(","),
      details: this.state.details,
      quantity: this.state.quantity
    };
    if (
      !data.email ||
      !data.contact_name ||
      !data.contact_email ||
      !data.requester_name ||
      !data.section ||
      !data.city ||
      data.city <= 0 ||
      !data.product ||
      !data.quantity
    ) {
      toast.error(
        "* ile işaretli olan alanlar boş bırakılamaz! Lütfen işaretli alanları doldurunuz."
      );
      return;
    }
    const methodUrl = "anonymous/request";
    Api(methodUrl, data).then(response => {
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
      case "contact_email":
        this.setState({
          contact_email: value
        });
        break;
      case "requester_name":
        this.setState({
          requester_name: value
        });
        break;
      case "section":
        this.setState({
          section: value
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
  handleProductChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    const list = this.state.product || [];
    if (item === "other") {
      this.setState({
        isOtherProduct: isChecked
      });
      return;
    }
    if (isChecked) {
      list.push(item);
      this.setState({
        product: list
      });
    } else {
      this.setState({
        product: list.filter(i => i !== item)
      });
    }
  }

  render() {
    return (
      <div className="TalepForm" ref={this.myRef}>
        <img src="form-top-blue.png" className="TalepForm-top" alt="" />
        <h1 className="TalepForm-title">Medikal Parça</h1>
        <p className="TalepForm-subtitle">
          Lütfen ihtiyacınız kadar malzeme talebinde bulunun. 3 Boyutlu Destek
          Hareketi tamamen GÖNÜLLÜ insanlar tarafından yürütülmekte olup, talep
          edilen ürünler ÜCRETSİZ (Bağış) olarak sağlanmaktadır. Ücret karşılığı
          satılmaz.
        </p>
        <ToastContainer />
        <form className="TalepForm-form" onSubmit={this.handleSubmit}>
          <div className="TalepForm-form-row">
            <div className="form-relative TalepForm-form-row-contactNameDiv">
              <img
                src="form-person-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <input
                className="form-input TalepForm-form-row-contactNameDiv-input"
                type="text"
                name="contact_name"
                placeholder="İletişim Kurulacak kişi*"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-relative TalepForm-form-row-contactEmailDiv">
              <img
                src="form-mail-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <input
                className="form-input TalepForm-form-row-contactEmailDiv-input"
                type="email"
                name="contact_email"
                placeholder="İletişim için e-posta adresi*"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="TalepForm-form-row">
            <div className="form-relative TalepForm-form-row-requesterNameDiv">
              <img
                src="form-person-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <input
                className="form-input TalepForm-form-row-requesterNameDiv-input"
                type="text"
                name="requester_name"
                placeholder="Talep eden kurumun adı*"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-relative TalepForm-form-row-sectionDiv">
              <img src="form-printer-icon.svg" className="form-icon" alt="" />
              <input
                className="form-input TalepForm-form-row-sectionDiv-input"
                type="text"
                name="section"
                placeholder="Hangi bölümde görev alıyorsunuz?*"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="TalepForm-form-row">
            <div className="form-relative TalepForm-form-row-emailDiv">
              <img
                src="form-mail-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <input
                className="form-input TalepForm-form-row-emailDiv-input"
                type="email"
                name="email"
                placeholder="Email*"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-relative TalepForm-form-row-phoneNumberDiv">
              <img
                src="form-phone-icon.svg"
                className="form-icon icon-small"
                alt=""
              />
              <input
                className="form-input TalepForm-form-row-phoneNumberDiv-input"
                type="text"
                name="phone"
                placeholder="Telefon No"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="TalepForm-form-row">
            <div className="form-relative TalepForm-form-row-cityDiv">
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
          <div className="TalepForm-form-row">
            <div className="form-relative form-section-big TalepForm-form-row-talepEdilenMalzeme">
              <img
                src="form-printer-count-tech.svg"
                className="form-icon"
                alt=""
              />
              <label className="center">
                Talep edeceğiniz medikal parçayı seçiniz*
              </label>
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <label className="container-input TalepForm-form-row-talepEdilenMalzeme-label">
                  <span className="input-text">Yüz kalkanı</span>
                  <input
                    className="TalepForm-form-row-talepEdilenMalzeme-input"
                    type="checkbox"
                    name="face_shield"
                    checked={this.state.checkedProductItems.get("face_shield")}
                    onChange={this.handleProductChange}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="container-input TalepForm-form-row-bagislanacakhammaddeseciniz-label">
                  <span className="input-text">Diğer</span>
                  <input
                    className="TalepForm-form-row-bagislanacakhammaddeseciniz-input"
                    type="checkbox"
                    name="other"
                    checked={this.state.checkedProductItems.get("other")}
                    onChange={this.handleProductChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="TalepForm-form-row">
            {this.state.isOtherProduct && (
              <div className="form-relative form-section-big TalepForm-form-row-details">
                <img
                  src="form-printer-count-level.svg"
                  className="form-icon"
                  alt=""
                />
                <label className="center">
                  Yüz kalkanı dışında bir medikal parça talep ediyorsanız,
                  lütfen detaylarını giriniz.
                </label>
                <br />
                <input
                  className="input-small TalepForm-form-row-details-input"
                  type="text"
                  name="details"
                  onChange={this.handleInputChange}
                />
              </div>
            )}{" "}
            <div className="form-relative form-section-big  TalepForm-form-row-kacAdetMedicalParcayaIhtiyacinizVar">
              <img
                src="form-printer-count-icon.svg"
                className="form-icon"
                alt=""
              />
              <label className="center">
                Kaç adet medical parçaya ihtiyacınız var?*
              </label>
              <br />
              <input
                className="input-small TalepForm-form-row-kacAdetMedicalParcayaIhtiyacinizVar-input"
                type="number"
                name="quantity"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="TalepFrom-form-row">
            <p className="TalepForm-bottom-text">
              Bu belge, kitle destekli bir belgedir, bu nedenle iletişim
              bilgilerinizin herkes tarafından ulaşılabilir olacağını bilerek,
              kendi sorumluluğunuzda paylaşın.
            </p>
          </div>
          <div className="TalepForm-form-row">
            <input
              type="submit"
              className="TalepForm-form-row-formGonderButton"
              value="Formu Gönder"
            />
          </div>
          <img src="form-bottom-blue.png" className="TalepForm-bottom" alt="" />
        </form>
      </div>
    );
  }
}

export { TalepForm };
