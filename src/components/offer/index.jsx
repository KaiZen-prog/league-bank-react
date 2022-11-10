import React from 'react';
import {useSelector} from 'react-redux';
import {CreditPurpose, OfferTypes, SubmitButtonTypes} from '../../const';
import {divideNumberToSpace} from '../../utils/common';
import Block from './offer.styled';

function Offer() {
  const state = useSelector((store) => store.CALCULATOR);

  return (
    <>
      {state.creditAmount >= state.paramsCredit.minCreditAmount && (
        <Block>
          <Block.OfferTitle>Наше предложение</Block.OfferTitle>
          <Block.OfferList>
            <Block.OfferItem>
              <Block.OfferValue>
                {divideNumberToSpace(state.creditAmount)} рублей
              </Block.OfferValue>
              <Block.OfferName>Сумма ипотеки</Block.OfferName>
            </Block.OfferItem>

            <Block.OfferItem>
              <Block.OfferValue>{state.percent}%</Block.OfferValue>
              <Block.OfferName>Процентная ставка</Block.OfferName>
            </Block.OfferItem>

            <Block.OfferItem>
              <Block.OfferValue>
                {divideNumberToSpace(state.monthlyPayment)} рублей
              </Block.OfferValue>
              <Block.OfferName>Ежемесячный платеж</Block.OfferName>
            </Block.OfferItem>

            <Block.OfferItem>
              <Block.OfferValue>
                {divideNumberToSpace(state.requiredIncome)} рублей
              </Block.OfferValue>
              <Block.OfferName>Необходимый доход</Block.OfferName>
            </Block.OfferItem>
          </Block.OfferList>
          <Block.SubmitButton
            $type={SubmitButtonTypes.preorder}
            type="submit"
          >
            Оформить заявку
          </Block.SubmitButton>
        </Block>
      )}
      {state.creditAmount < state.paramsCredit.minCreditAmount && (
        <Block $type={OfferTypes.refusal}>
          <Block.OfferTitle $type={OfferTypes.refusal}>
            Наш банк не выдаёт{' '}
            {state.purpose === CreditPurpose.mortgage.type ? 'ипотечные кредиты' : 'автокредиты'}{' '}
            меньше {divideNumberToSpace(state.paramsCredit.minCreditAmount)} рублей.
          </Block.OfferTitle>
          <Block.OfferName $type={OfferTypes.refusal}>
            Попробуйте использовать другие параметры для расчёта.
          </Block.OfferName>
        </Block>
      )}
    </>
  );
}

Offer.displayName = 'Offer';

export default Offer ;
