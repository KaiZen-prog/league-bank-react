import React from 'react';
import {CreditPurpose, OfferTypes, SubmitButtonTypes} from '../../const';
import {divideNumberToSpace} from '../../utils/common';
import Block from './offer.styled';

function Offer(props) {
  const {
    purpose,
    creditAmount,
    minCreditAmount,
    percent,
    monthlyPayment,
    requiredIncome,
  } = props;

  return (
    <>
      {creditAmount >= minCreditAmount && (
        <Block>
          <Block.OfferTitle>Наше предложение</Block.OfferTitle>
          <Block.OfferList>
            <Block.OfferItem>
              <Block.OfferValue>
                {divideNumberToSpace(creditAmount)} рублей
              </Block.OfferValue>
              <Block.OfferName>Сумма ипотеки</Block.OfferName>
            </Block.OfferItem>

            <Block.OfferItem>
              <Block.OfferValue>{percent}%</Block.OfferValue>
              <Block.OfferName>Процентная ставка</Block.OfferName>
            </Block.OfferItem>

            <Block.OfferItem>
              <Block.OfferValue>
                {divideNumberToSpace(monthlyPayment)} рублей
              </Block.OfferValue>
              <Block.OfferName>Ежемесячный платеж</Block.OfferName>
            </Block.OfferItem>

            <Block.OfferItem>
              <Block.OfferValue>
                {divideNumberToSpace(requiredIncome)} рублей
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
      {creditAmount < minCreditAmount && (
        <Block $type={OfferTypes.refusal}>
          <Block.OfferTitle $type={OfferTypes.refusal}>
            Наш банк не выдаёт{' '}
            {purpose === CreditPurpose.mortgage.type ? 'ипотечные кредиты' : 'автокредиты'}{' '}
            меньше {divideNumberToSpace(minCreditAmount)} рублей.
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
