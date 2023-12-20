import React, { useState } from "react";
import "../Form/Form.css";
import TradeInfo from "../TradeInfo/TradeInfo";

const defaultFormState = {
  tcNo: { value: "", error: null },
  name: { value: "", error: null },
  lastName: { value: "", error: null },
  birthDate: { value: "", error: null },
  gsmNo: { value: "", error: null },
  email: { value: "", error: null },
  ibanInfo: { value: "", error: null },
  ibanNo: { value: "", error: null },
};

const Form = ({ setLocation }) => {
  const [formState, setFormState] = useState(defaultFormState);
  console.log(formState);
  const [success, setSuccess] = useState(false);

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseOver = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseOut = () => {
    setIsTooltipVisible(false);
  };

  const onChangeHandler = (field, value) => {
    setFormState({
      ...formState,
      [field]: {
        value: value,
        error: null,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = handleFormValidations();
    console.log("click");
    if (hasErrors) {
      setSuccess(false);
      return;
    }
    setSuccess(true);
  };

  const handleFormValidations = () => {
    let updatedState = { ...formState };
    let error = false;

    const { tcNo, name, lastName, birthDate, gsmNo, email, ibanInfo, ibanNo } =
      updatedState;

    const lengthOftcNo = tcNo.value?.length;

    if (
      lengthOftcNo !== 11 ||
      tcNo[lengthOftcNo - 2] % 2 !== 0 ||
      tcNo[lengthOftcNo - 1] % 2 !== 0
    ) {
      updatedState.tcNo.error = "Geçersiz TC No";
      error = true;
    }
    if (name.value?.length < 3) {
      updatedState.name.error = "İsim 3 harften kısa olamaz";
      error = true;
    }
    if (!lastName?.value) {
      updatedState.lastName.error = "lastName cannot be empty";
      error = true;
    }

    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!email?.value?.match(re)) {
      updatedState.email.error = "Geçersiz Email Adresi";
      error = true;
    }

    if (1900 < !birthDate?.value < 2020) {
      updatedState.birthDate.error = "Geçersiz Yıl";
      error = true;
    }

    setFormState({
      ...formState,
      ...updatedState,
    });
    return error;
  };

  return (
    <div className="form-content-wrapper">
      <button className="btn-back" onClick={() => setLocation("ResultPage")}>
        R
      </button>
      <div className="form-content">
        <div className="header-content">
          <p className="heading-large-bold-black">
            Kişisel bilgilerinizi doldurunuz{" "}
          </p>
          <p className="text-large-grey">
            Geri alım sürecinizi hızlı ve sorunsuz bir şekilde ilerletmek için
            bilgilerinizi eksiksiz bir şekilde doldurunuz.
          </p>
        </div>
        <form>
          <div className="form-column-wrapper">
            <div className="form-element">
              <label className="label text-small-grey">
                TC Kimlik Numarası
              </label>
              <input
                type="text"
                className="input text-medium-black"
                value={formState?.tcNo?.value}
                onChange={(e) => onChangeHandler("tcNo", e.target.value)}
                placeholder="12345678912"
              />
              {formState?.tcNo?.error && (
                <small className="error">{formState.tcNo.error}</small>
              )}
            </div>
            <div className="form-element">
              <label className="label text-small-grey">Ad</label>
              <input
                type="text"
                className="input text-medium-black"
                value={formState?.name?.value}
                onChange={(e) => onChangeHandler("name", e.target.value)}
                placeholder="Başak"
              />
              {formState?.name?.error && (
                <small className="error">{formState.name.error}</small>
              )}
            </div>
            <div className="form-element">
              <label className="label text-small-grey">Soyad</label>
              <input
                type="text"
                className="input text-medium-black"
                value={formState?.lastName?.value}
                onChange={(e) => onChangeHandler("lastName", e.target.value)}
                placeholder="Yılmaz"
              />
              {formState?.lastName?.error && (
                <small className="error">{formState.lastName.error}</small>
              )}
            </div>
            <div className="form-element">
              <label className="label text-small-grey">Doğum Yılı</label>
              <input
                type="text"
                className="input text-medium-black"
                value={formState?.birthDate?.value}
                onChange={(e) => onChangeHandler("birthDate", e.target.value)}
                placeholder="1990"
              />
              {formState?.birthDate?.error && (
                <small className="error">{formState.birthDate.error}</small>
              )}
            </div>
          </div>
          <div className="form-column-wrapper">
            <div className="form-element">
              <label className="label text-small-grey">GSM Numarası</label>
              <input
                type="text"
                className="input text-medium-black"
                value={formState?.gsmNo?.value}
                onChange={(e) => onChangeHandler("gsmNo", e.target.value)}
                placeholder="(532) 532 1881"
              />
              {formState?.gsmNo?.error && (
                <small className="error">{formState.gsmNo.error}</small>
              )}
            </div>
            <div className="form-element">
              <label className="label text-small-grey">E-posta Adresi</label>
              <input
                type="text"
                className="input text-medium-black"
                value={formState?.email?.value}
                onChange={(e) => onChangeHandler("email", e.target.value)}
                placeholder="basak.yilmaz@gmail.com"
              />
              {formState?.email?.error && (
                <small className="error">{formState.email.error}</small>
              )}
            </div>
            <div className="form-element">
              <label className="label text-small-grey">
                IBAN Sahibi Ad Soyad
              </label>
              <input
                type="text"
                className="input text-medium-black"
                value={formState?.ibanInfo?.value}
                onChange={(e) => onChangeHandler("ibanInfo", e.target.value)}
                placeholder="Başak Yılmaz"
              />
              {formState?.ibanInfo?.error && (
                <small className="error">{formState.ibanInfo.error}</small>
              )}
            </div>
            <div className="form-element-info">
              <div className="iban-content">
                <label className="label text-small-grey">
                  Paranın Yatırılacağı IBAN Numarası
                </label>
                <input
                  type="text"
                  className="input text-medium-black"
                  value={formState?.ibanNo?.value}
                  onChange={(e) => onChangeHandler("ibanNo", e.target.value)}
                  placeholder="TR12 3456 7890 1234 5678"
                />
              </div>

              <div
                className="info-icon"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src="assets/svg/info.svg" alt="info icon" />
                <div className={isTooltipVisible ? "tooltip" : "hiddenTooltip"}>
                  Teklifi kabul etmeniz durumunda belirlenen ücretin hesabınıza
                  yatırılması için IBAN numarınızı paylaşmanız gerekmektedir.
                </div>
              </div>
              {formState?.ibanNo?.error && (
                <small className="error">{formState.ibanNo.error}</small>
              )}
            </div>
          </div>
        </form>
        <div className="checkbox-wrapper">
          <div className="checkbox-content">
            <input
              type="checkbox"
              name="checkbox1"
              id="customCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />

            <label
              htmlFor="customCheckbox"
              className={isChecked ? `labelChecked` : `labelUnChecked`}
            >
              <a href="#" className="text-a-blue">
                Cihaz Aydınlatma Metnini
              </a>{" "}
              <span className="text-info-small-grey">
                okudum ve onaylıyorum.
              </span>
            </label>
          </div>
          <div className="checkbox-content">
            <input
              type="checkbox"
              name="checkbox1"
              id="customCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />

            <label
              htmlFor="customCheckbox"
              className={isChecked ? `labelChecked` : `labelUnChecked`}
            >
              <a href="#" className="text-a-blue">
                Ticari bilgilendirme Sözleşmesini
              </a>{" "}
              <span className="text-info-small-grey">
                okudum ve onaylıyorum.
              </span>
            </label>
          </div>
          <div className="checkbox-content">
            <input
              type="checkbox"
              name="checkbox1"
              id="customCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />

            <label
              htmlFor="customCheckbox"
              className={isChecked ? `labelChecked` : `labelUnChecked`}
            >
              <a href="#" className="text-a-blue">
                Geri Alım Sözleşmesini
              </a>{" "}
              <span className="text-info-small-grey">
                okudum ve onaylıyorum.
              </span>
            </label>
          </div>
        </div>
        <button
          className="btn-primary btn-form"
          type="submit"
          onSubmit={handleSubmit}
        >
          Geri Alım Talebini Tamamla
        </button>
      </div>
      <TradeInfo />
    </div>
  );
};

export default Form;
