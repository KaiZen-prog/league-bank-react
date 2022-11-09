import styled, {css} from 'styled-components';
import theme from '../../theme/theme';
import {OfferTypes} from '../../const';
import {submitButton} from '../../theme/mixins';

const Offer = styled.div`
  position: relative;

  margin-right: 3px;
  margin-left: 3px;
  padding: 35px 5px 91px 15px;

  background-color: ${theme.color.ghostWhite};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-right: 3px;
    margin-left: 3px;
    padding: 53px 5px 111px 60px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    align-self: flex-start;

    width: 500px;

    margin-top: 7px;
    margin-right: 0;
    padding: 53px 5px 111px 58px;
  }

  ${(props) => {
    if (props.$type === OfferTypes.refusal) {
      return css`
        padding: 35px 10px 34px 15px;

        @media (min-width: ${theme.tabletWidthMinThreshold}) {
           padding-top: 54px;
           padding-left: 61px;
           padding-bottom: 54px;
        }

        @media (min-width: ${theme.desktopWidthMinThreshold}) {
           padding: 54px 5px 55px 59px;
        }
      `;
    }
  }}
`;

Offer.OfferTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  margin-top: 0;
  margin-bottom: 23px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 22px;
    line-height: 31px;

    margin-bottom: 24px;
  }

  ${(props) => {
    if (props.$type === OfferTypes.refusal) {
      return css`
        width: 220px;
        margin-bottom: 12px;

        @media (min-width: ${theme.tabletWidthMinThreshold}) {
          width: 370px;
          margin-bottom: 13px;
        }
      `;
    }
  }}
`;

Offer.OfferList = styled.ul`
  list-style: none;

  margin-top: 0;
  margin-bottom: 29px;
  padding-left: 0;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 427px;

    margin-bottom: 8px;
  }
`;

Offer.OfferItem = styled.li`
  margin-bottom: 14px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 200px;

    margin-bottom: 26px;
  }
`;

Offer.OfferValue = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  margin: 0;

  color: ${theme.color.jaguar};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 22px;
    line-height: 31px;

    margin-bottom: 2px;
  }
`;

Offer.OfferName = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  margin: 0;

  color: ${theme.color.cello};

  ${(props) => {
    if (props.$type === OfferTypes.refusal) {
      return css`
        @media (min-width: ${theme.tabletWidthMinThreshold}) {
          width: 265px;
        }
      `;
    }
  }}
`;

Offer.SubmitButton = styled.button`
  ${submitButton()};
`;

export default Offer;
