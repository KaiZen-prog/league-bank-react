import React from 'react';
import {useAppSelector} from '../../hooks/hooks';
import {CreditPurpose, OfferTypes, SubmitButtonTypes} from '../../const';
import {divideNumberToSpace} from '../../utils/common';
import {OfferBlock, Title, List, Item, Value, Name, SubmitButton} from './offer.styled';

const Offer: React.FunctionComponent = () => {
  const state = useAppSelector((store) => store.calculator);

  return (
    <>
      {state.creditAmount >= state.paramsCredit.minCreditAmount && (
        <OfferBlock>
          <Title>Наше предложение</Title>
          <List>
            <Item>
              <Value>
                {divideNumberToSpace(state.creditAmount)} рублей
              </Value>
              <Name>Сумма ипотеки</Name>
            </Item>

            <Item>
              <Value>{state.percent}%</Value>
              <Name>Процентная ставка</Name>
            </Item>

            <Item>
              <Value>
                {divideNumberToSpace(state.monthlyPayment)} рублей
              </Value>
              <Name>Ежемесячный платеж</Name>
            </Item>

            <Item>
              <Value>
                {divideNumberToSpace(state.requiredIncome)} рублей
              </Value>
              <Name>Необходимый доход</Name>
            </Item>
          </List>
          <SubmitButton
            $type={SubmitButtonTypes.preorder}
            type="submit"
          >
            Оформить заявку
          </SubmitButton>
        </OfferBlock>
      )}
      {state.creditAmount < state.paramsCredit.minCreditAmount && (
        <OfferBlock $type={OfferTypes.refusal}>
          <Title $type={OfferTypes.refusal}>
            Наш банк не выдаёт{' '}
            {state.purpose === CreditPurpose.mortgage.type ? 'ипотечные кредиты' : 'автокредиты'}{' '}
            меньше {divideNumberToSpace(state.paramsCredit.minCreditAmount)} рублей.
          </Title>
          <Name $type={OfferTypes.refusal}>
            Попробуйте использовать другие параметры для расчёта.
          </Name>
        </OfferBlock>
      )}
    </>
  );
}

Offer.displayName = 'Offer';

export default Offer ;
