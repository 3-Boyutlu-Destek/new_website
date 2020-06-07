import React from "react";
import "./style.scss";
import threeDTypes from "./components/3DTypes";
import skills from "./components/Skills";
import Cities from "./components/Cities";
import Api from "../_services/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class BaskiDestekForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      phone: "",
      city: "",
      has_printer: false,
      printer_count: 0,
      experience: 0,
      level: "",
      technologies: [],
      skills: [],
      design_and_engineering: "",
      details: "",
      checked3DTypeItems: new Map(),
      checkedSkilsItems: new Map(),
      isOther3DType: false,
      other3DTypes: ""
    };
    
    this.myRef = React.createRef() 
    this.handleHasPrinterChange = this.handleHasPrinterChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handle3DTypesChange = this.handle3DTypesChange.bind(this);
    this.handleSkilsChange = this.handleSkilsChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  componentDidMount(){
    this.myRef = window.scrollTo(0,0);
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
      case "name":
        this.setState({
          name: value
        });
        break;
      case "phone":
        this.setState({
          phone: value
        });
        break;
      case "printerCount":
        this.setState({
          printer_count: value
        });
        break;
      case "design_and_engineering":
        this.setState({
          design_and_engineering: value
        });
        break;
      case "experience":
        this.setState({
          experience: value
        });
        break;
      case "details":
        this.setState({
          details: value
        });
        break;
      case "other_3D_types":
        this.setState({
          other3DTypes: value
        });
        break;
      default:
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      email: this.state.email,
      name: this.state.name,
      phone: this.state.phone,
      city: parseInt(this.state.city, 10),
      has_printer: this.state.has_printer,
      printer_count: parseInt(this.state.printer_count, 10),
      experience: this.state.experience,
      level: this.state.level,
      technologies:
        this.state.technologies && this.state.technologies.join(","),
      skills: this.state.skills && this.state.skills.join(","),
      design_and_engineering: this.state.design_and_engineering,
      details: this.state.details
    };
    if (!data.email || !data.name || !data.city || data.city <= 0) {
      toast.error(
        "* ile işaretli olan alanlar boş bırakılamaz!  Lütfen işaretli alanları doldurunuz."
      );
      return;
    }
    const methodUrl = "anonymous/production";
    Api(methodUrl, data).then(response => {
      if (response) {
        toast.success("Başarıyla kaydedildi");
      } else {
        toast.error("İşlem başarısız oldu. Lütfen tekrar deneyin.");
      }
    });
  }
  handleCityChange(e) {
    const value = e.target.value;
    this.setState({
      city: value
    });
  }
  handleSkilsChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    const list = this.state.skills;
    if (isChecked) {
      list.push(item);
      this.setState({
        skills: list
      });
    } else {
      this.setState({
        skills: list.filter(i => i !== item)
      });
    }
  }
  handle3DTypesChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    const list = this.state.technologies || [];
    if (item === "other") {
      this.setState({
        isOther3DType: isChecked
      });
      return;
    }
    if (isChecked) {
      list.push(item);
      this.setState({
        technologies: list
      });
    } else {
      this.setState({
        technologies: list.filter(i => i !== item)
      });
    }
  }
  handleHasPrinterChange(changeEvent) {
    this.setState({
      has_printer: changeEvent.target.value
    });
  }

  handleLevelChange(changeEvent) {
    this.setState({
      level: changeEvent.target.value
    });
  }

  handleLevelChange(changeEvent) {
    this.setState({
      level: changeEvent.target.value
    });
  }

  render() {
    return (
      <div className="BaskiDestekForm" ref={this.myRef}>
        <img src="form-top-red.png" className="BaskiDestekForm-top" alt="" />
        <ToastContainer />
        <div className="BaskiDestekForm-main">
          <h1 className="BaskiDestekForm-main-title">
            Kolektif Üretim Hareketi
          </h1>
          <h2 className="BaskiDestekForm-main-subtitle">3D Kayıt Formu</h2>
          <form className="BaskiDestekForm-form" onSubmit={this.handleSubmit}>
            <div className="BaskiDestekForm-form-row">
              <div className="form-relative BaskiDestekForm-form-row-emailDiv">
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
              <div className="form-relative BaskiDestekForm-form-row-nameDiv">
                <img
                  src="form-person-icon.svg"
                  className="form-icon icon-small"
                  alt=""
                />
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Kişi ya da Kurum Adı*"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="BaskiDestekForm-form-row">
              <div className="form-relative BaskiDestekForm-form-row-phoneNumberDiv">
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
              <div className="form-relative BaskiDestekForm-form-row-cityDiv">
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
            <div className="BaskiDestekForm-form-row">
              <div className="form-relative form-section-big BaskiDestekForm-form-row-3Boyutluyaziciyasahipmisiniz">
                <img src="form-printer-icon.svg" className="form-icon" alt="" />
                <label className="center">
                  3 Boyutlu yazıcıya sahip misiniz?
                </label>
                <br />
                <div className="flex space-around">
                  <label className="container-input">
                    <span className="input-text">Evet</span>
                    <input
                      className=""
                      type="radio"
                      name="evet"
                      value={true}
                      checked={this.state.has_printer === "true"}
                      onChange={this.handleHasPrinterChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container-input">
                    <span className="input-text">Hayır</span>
                    <input
                      className=""
                      type="radio"
                      name="hayır"
                      value={false}
                      checked={this.state.has_printer === "false"}
                      onChange={this.handleHasPrinterChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="form-relative form-section-big BaskiDestekForm-form-row-kacAdetYaziciyaSahipsiniz">
                <img
                  src="form-printer-count-icon.svg"
                  className="form-icon"
                  alt=""
                />
                <label className="center">Kaç adet yazıcıya sahipsiniz?</label>
                <br />
                <input
                  className="input-small"
                  type="number"
                  name="printerCount"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="BaskiDestekForm-form-row">
              <div className="form-relative form-section-big BaskiDestekForm-form-row-hangiTurYaziciTeknolojisineSahipsiniz">
                <img
                  src="form-printer-count-tech.svg"
                  className="form-icon"
                  alt=""
                />
                <label className="center">
                  Hangi tür 3D yazıcı teknolojilerine sahipsiniz?
                </label>
                <br />
                <div className="flex">
                  {threeDTypes.map(item => (
                    <label
                      key={item.key}
                      className="container-input wide-input"
                    >
                      <span className="input-text">{item.label}</span>
                      <input
                        type="checkbox"
                        name={item.name}
                        className=""
                        checked={this.state.checked3DTypeItems.get(item.name)}
                        onChange={this.handle3DTypesChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                  ))}
                </div>
                {this.state.isOther3DType && (
                  <input
                    className="form-input"
                    type="text"
                    name="other_3D_types"
                    onChange={this.handleInputChange}
                  />
                )}
              </div>
              <div className="form-relative form-section-big BaskiDestekForm-form-row-3DYaziciyiHangiSeviyedeKullanıyorsunuz">
                <img
                  src="form-printer-count-level.svg"
                  className="form-icon"
                  alt=""
                />
                <label className="center">
                  3 Boyutlu Yazıcıyı Hangi Seviyede Kullanıyorsunuz?
                </label>
                <br />
                <div className="flex space-around">
                  <label className="container-input">
                    <span className="input-text">Hobi</span>
                    <input
                      className=""
                      type="radio"
                      name="hobby"
                      value="hobby"
                      checked={this.state.level === "hobby"}
                      onChange={this.handleLevelChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container-input">
                    <span className="input-text">Profesyonel</span>
                    <input
                      className=""
                      type="radio"
                      name="professional"
                      value="professional"
                      checked={this.state.level === "professional"}
                      onChange={this.handleLevelChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container-input">
                    <span className="input-text">Diğer</span>
                    <input
                      className=""
                      type="radio"
                      name="other"
                      value="other"
                      checked={this.state.level === "other"}
                      onChange={this.handleLevelChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="BaskiDestekForm-form-row">
              <div className="form-relative form-section-big BaskiDestekForm-form-row-hangiBeceriyeSahipsiniz">
                <img src="form-skills-icon.svg" className="form-icon" alt="" />
                <label className="center">
                  Aşağıdaki hangi beceriye sahipsiniz?
                </label>
                <div className="flex">
                  {skills.map(item => (
                    <label
                      key={item.key}
                      className="container-input wide-input"
                    >
                      <span className="input-text">{item.label}</span>
                      <input
                        type="checkbox"
                        name={item.label}
                        className=""
                        checked={this.state.checkedSkilsItems.get(item.name)}
                        onChange={this.handleSkilsChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-relative form-section-big BaskiDestekForm-form-row-kacAdetYaziciyaSahipsiniz">
                <img src="form-year-icon.svg" className="form-icon" alt="" />
                <label className="center">
                  Tasarım veya mühendislik becerileriniz var mı?
                </label>
                <br />
                <input
                  className="input-small"
                  type="text"
                  name="design_and_engineering"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="BaskiDestekForm-form-row">
              <input
                className="form-relative form-section-big BaskiDestekForm-form-row-kacAdetYaziciyaSahipsiniz"
                type="number"
                name="experience"
                placeholder="Kaç yıl deneyiminiz var?"
                onChange={this.handleInputChange}
              />
              <textarea
                rows="4"
                cols="50"
                className="form-relative form-section-big BaskiDestekForm-form-row-kacAdetYaziciyaSahipsiniz"
                type="text"
                name="details"
                placeholder="Ayrıca belirtmek istedikleriniz"
                onChange={this.handleInputChange}
              />
            </div>

            <div className="BaskiDestekForm-form-row">
              <label className="BaskiDestekForm-form-row-aciklamaLabel">
                Bu belge, kitle destekli bir belgedir, bu nedenle iletişim
                bilgilerinizin herkes tarafından ulaşılabilir olacağını bilerek,
                kendi sorumluluğunuzda paylaşın.
              </label>
            </div>
            <div className="BaskiDestekForm-form-row">
              <input
                type="submit"
                className="BaskiDestekForm-form-row-formGonderButton"
                value="Formu Gönder"
              />
            </div>
          </form>
          <img
            src="form-bottom-red.png"
            className="BaskiDestekForm-bottom"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export { BaskiDestekForm };
