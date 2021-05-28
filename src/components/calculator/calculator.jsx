import React from "react";
import {CreditPurpose} from "../../const";
import withCalculator from "../../hocs/with-calculator/with-calculator";
import {divideNumberToSpace} from "../../utils/common";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";
import {servicesSlides} from "../../mocks/mocks";

const Calculator = (props) => {
  const {
    state,
    onSelectOpen,
    onSelectClose,
    onPurposeChange,
    onInputFocus,
    onInputBlur,
    onInputChange,
    onCostChange,
    onInitialFeeChange,
    onTermChange,
    onInputRangeChange,
    onAdditionalChange,
    onCostChangeSign,
    onMakeRequest,
    onSubmit,
    onPopupClose,
    onRegApplicationChange,
    onChangePhone,
    requestNumber,
  } = props;

  const {
    step,
    purpose,
    isPurposeSelectOpened,
    paramsCredit,

    cost,
    initialFee,
    term,

    maternalCapital,
    casco,
    lifeInsurance,

    creditAmount,
    percent,
    monthlyPayment,
    requiredIncome
  } = state;

  const getRangeValuePosition = () => {
    let position = ((initialFee * 100 / cost) - paramsCredit.minInitialFee) * 100 / (100 - paramsCredit.minInitialFee);
    if (position < 0) position = 0;
    if (position > 100) position = 100;

    return position;
  }

  return (
      <section className="calculator">
        <a name="calculator"></a>
        <form action="#" className="calculator__form" onSubmit={onMakeRequest}>
          <h2 className="calculator__title">Кредитный калькулятор</h2>
          <div className="calculator__flex-container">
            <div className="calculator__container">
              <fieldset className="calculator__purpose">
                <h3 className="calculator__step">Шаг 1. Цель кредита</h3>
                <div
                    className={`calculator__purpose-select${isPurposeSelectOpened ? ' calculator__purpose-select--opened' : ''}`}
                    onClick={isPurposeSelectOpened ? onSelectClose : onSelectOpen}
                >
                  <span className="calculator__select-title">{CreditPurpose[purpose]}</span>
                  <ul className={`calculator__purpose-list${isPurposeSelectOpened ? '' : ' calculator__purpose-list--hidden'}`}>
                    <li className="calculator__purpose-item" id="mortgage" onClick={onPurposeChange}>Ипотечное кредитование</li>
                    <li className="calculator__purpose-item" id="car" onClick={onPurposeChange}>Автомобильное кредитование</li>
                  </ul>
                </div>
              </fieldset>
              {step >= 2 && (
                  <fieldset className="credit-calculator__params">
                    <h3 className="credit-calculator__step credit-calculator__step--params">Шаг 2. Введите параметры кредита</h3>
                    <label className="credit-calculator__label credit-calculator__label--cost">
                      <h4 className="credit-calculator__field-title">Стоимость {paramsCredit.type === `mortgage` ? `недвижимости` : `автомобиля`}</h4>

                      <span className="credit-calculator__minus-icon" id="minus" onClick={onCostChangeSign}></span>
                      <input
                          type="number"
                          className="credit-calculator__input"
                          name="cost"
                          min={paramsCredit.minCost}
                          max={paramsCredit.maxCost}
                          value={cost}
                          onBlur={onCostChange}
                          onChange={onInputChange}
                      />
                      <div className="credit-calculator__input credit-calculator__input--show" tabIndex="0" onFocus={onInputFocus}>{typeof cost === `string` ? cost : divideNumberToSpace(cost) + ` рублей`}</div>
                      <span className="credit-calculator__plus-icon" id="plus" onClick={onCostChangeSign}></span>

                      <p className="credit-calculator__help-text">От {divideNumberToSpace(paramsCredit.minCost)} &nbsp;до {divideNumberToSpace(paramsCredit.maxCost)} рублей</p>
                    </label>

                    <label className="credit-calculator__label credit-calculator__label--initial-fee">
                      <h4 className="credit-calculator__field-title">Первоначальный взнос</h4>

                      <input
                          type="number"
                          className="credit-calculator__input credit-calculator__input--initial-fee"
                          name="initialFee"
                          min={paramsCredit.minCost * paramsCredit.minInitialFee / 100}
                          max={paramsCredit.maxCost}
                          value={initialFee}
                          onBlur={onInitialFeeChange}
                          onChange={onInputChange}
                      />
                      <div className="credit-calculator__input credit-calculator__input--show credit-calculator__input--initial-fee" tabIndex="0" onFocus={onInputFocus}>{divideNumberToSpace(initialFee)} рублей</div>

                      <input
                          type="range"
                          className="credit-calculator__input-range"
                          name="initialFee"
                          min={paramsCredit.minInitialFee}
                          max="100"
                          step="5"
                          value={initialFee * 100 / cost}
                          onChange={onInputRangeChange}
                      />
                      <span
                          className="credit-calculator__range-value"
                          style={{
                            marginLeft: getRangeValuePosition() + `%`,
                            transform: `translateX(-${getRangeValuePosition() / 2}%)`
                          }}
                      >{isNaN(Math.floor(initialFee * 100 / cost)) ? 0 : Math.floor(initialFee * 100 / cost)}%</span>
                    </label>

                    <label className="credit-calculator__label credit-calculator__label--term">
                      <h4 className="credit-calculator__field-title">Срок кредитования</h4>

                      <input
                          type="number"
                          className="credit-calculator__input credit-calculator__input--term"
                          name="term"
                          min={paramsCredit.minTerm}
                          max={paramsCredit.maxTerm}
                          value={term}
                          onBlur={onTermChange}
                          onChange={onInputChange}
                      />
                      <div className="credit-calculator__input credit-calculator__input--show credit-calculator__input--term" tabIndex="0" onFocus={onInputFocus}>{term} лет</div>

                      <input
                          type="range"
                          className="credit-calculator__input-range credit-calculator__input-range--term"
                          name="term"
                          min={paramsCredit.minTerm}
                          max={paramsCredit.maxTerm}
                          step="1"
                          value={term}
                          onChange={onInputRangeChange}
                      />
                      <div className="credit-calculator__term-container">
                        <span className="credit-calculator__range-value">{paramsCredit.minTerm} {paramsCredit.minTerm === 1 ? `год` : `лет`}</span>
                        <span className="credit-calculator__range-value">{paramsCredit.maxTerm} лет</span>
                      </div>
                    </label>

                    {paramsCredit.maternalCapitalValue && (
                        <label className="credit-calculator__additional">
                          <input type="checkbox" name="maternalCapital" className="credit-calculator__input-checkbox visually-hidden" onChange={onAdditionalChange}/>
                          <span className="credit-calculator__checkbox-icon"></span>
                          Использовать материнский капитал
                        </label>
                    )}
                    {paramsCredit.additionalToCar && (
                        <>
                          <label className="credit-calculator__additional">
                            <input type="checkbox" name="casco" className="credit-calculator__input-checkbox visually-hidden" onChange={onAdditionalChange}/>
                            <span className="credit-calculator__checkbox-icon"></span>
                            Оформить КАСКО в нашем банке
                          </label>
                          <label className="credit-calculator__additional">
                            <input type="checkbox" name="lifeInsurance" className="credit-calculator__input-checkbox visually-hidden" onChange={onAdditionalChange}/>
                            <span className="credit-calculator__checkbox-icon"></span>
                            Оформить Страхование жизни в нашем банке
                          </label>
                        </>
                    )}
                  </fieldset>
              )}
            </div>
            {step >= 2 && (
                <>
                  {creditAmount >= paramsCredit.minCreditAmount && (
                      <div className="credit-calculator__offer">
                        <h3 className="credit-calculator__offer-title">Наше предложение</h3>
                        <ul className="credit-calculator__offer-list">
                          <li className="credit-calculator__offer-item">
                            <p className="credit-calculator__offer-value">{divideNumberToSpace(creditAmount)} рублей</p>
                            <p className="credit-calculator__offer-name">Сумма ипотеки</p>
                          </li>
                          <li className="credit-calculator__offer-item credit-calculator__offer-item--monthly-payment">
                            <p className="credit-calculator__offer-value">{divideNumberToSpace(monthlyPayment)} рублей</p>
                            <p className="credit-calculator__offer-name">Ежемесячный платеж</p>
                          </li>
                          <li className="credit-calculator__offer-item credit-calculator__offer-item--interest-rate">
                            <p className="credit-calculator__offer-value">{percent}%</p>
                            <p className="credit-calculator__offer-name">Процентная ставка</p>
                          </li>
                          <li className="credit-calculator__offer-item credit-calculator__offer-item--income">
                            <p className="credit-calculator__offer-value">{divideNumberToSpace(requiredIncome)} рублей</p>
                            <p className="credit-calculator__offer-name">Необходимый доход</p>
                          </li>
                        </ul>
                        <button type="submit" className="credit-calculator__submit-btn">Оформить заявку</button>
                      </div>
                  )}
                  {creditAmount < paramsCredit.minCreditAmount && (
                      <div className="credit-calculator__offer credit-calculator__offer--refusal">
                        <h3 className="credit-calculator__offer-title credit-calculator__offer-title--refusal">Наш банк не выдаёт ипотечные кредиты меньше {divideNumberToSpace(paramsCredit.minCreditAmount)} рублей.</h3>
                        <p className="credit-calculator__offer-name credit-calculator__offer-name--refusal">Попробуйте использовать другие параметры для расчёта.</p>
                      </div>
                  )}
                </>
            )}
          </div>
        </form>
        {step >= 3 && (
            <form action="#" className="credit-calculator__reg-application reg-application" onSubmit={onSubmit}>
              <h3 className="reg-application__title">Шаг 3. Оформление заявки</h3>
              <table className="reg-application__table">
                <tbody>
                <tr className="reg-application__param-field">
                  <td className="reg-application__field-name">Номер заявки</td>
                  <td className="reg-application__field-value">№ {(`0000` + requestNumber).slice(-4)}</td>
                </tr>
                <tr className="reg-application__param-field">
                  <td className="reg-application__field-name">Цель кредита</td>
                  <td className="reg-application__field-value">{purpose === `mortgage` ? `Ипотека` : `Автокредит`}</td>
                </tr>
                <tr className="reg-application__param-field">
                  <td className="reg-application__field-name">Стоимость {purpose === `mortgage` ? `недвижимости` : `автомобиля`}</td>
                  <td className="reg-application__field-value">{divideNumberToSpace(cost)} рублей</td>
                </tr>
                <tr className="reg-application__param-field">
                  <td className="reg-application__field-name">Первоначальный взнос</td>
                  <td className="reg-application__field-value">{divideNumberToSpace(initialFee)} рублей</td>
                </tr>
                <tr className="reg-application__param-field">
                  <td className="reg-application__field-name">Срок кредитования</td>
                  <td className="reg-application__field-value">{term} лет</td>
                </tr>
                </tbody>
              </table>
              <div className="reg-application__input-container">
                <input
                    type="text"
                    name="fullname"
                    className="reg-application__input reg-application__input--full-name"
                    placeholder="ФИО"
                    onChange={onRegApplicationChange}
                    onInvalid={(evt) => {
                      shakeEffect(evt.target);
                    }}
                    value={localStorage.getItem(`fullname`) !== null ? localStorage.getItem(`fullname`) : ``}
                    autoFocus
                    required/>
                <InputMask
                    mask="+7 (999) 999-9999"
                    maskChar=""
                    type="tel"
                    name="tel"
                    minLength={17}
                    className="reg-application__input reg-application__input--phone"
                    placeholder="Телефон"
                    onChange={onChangePhone}
                    onInvalid={(evt) => {
                      shakeEffect(evt.target);
                    }}
                    value={localStorage.getItem(`tel`) !== null ? localStorage.getItem(`tel`) : ``}
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="reg-application__input"
                    placeholder="E-mail"
                    onChange={onRegApplicationChange}
                    onInvalid={(evt) => {
                      shakeEffect(evt.target);
                    }}
                    value={localStorage.getItem(`email`) !== null ? localStorage.getItem(`email`) : ``}
                    required/>
              </div>
              <button type="submit" className="reg-application__submit-btn">Отправить</button>
            </form>
        )}
        {step >= 4 && (
            <div className="popup-feedback" onClick={onPopupClose}>
              <div className="popup-feedback__container" onClick={(evt) => evt.stopPropagation()}>
                <button className="popup-feedback__close-btn" onClick={onPopupClose}></button>
                <h2 className="popup-feedback__title">Спасибо за обращение в наш банк.</h2>
                <p className="popup-feedback__content">Наш менеджер скоро свяжется с вами по указанному номеру телефона.</p>
              </div>
            </div>
        )}
      </section>
  );
};

Calculator.propTypes = {

};

Calculator.displayName = `Calculator`;

export default withCalculator(Calculator);
