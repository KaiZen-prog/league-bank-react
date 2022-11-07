import styled from 'styled-components';
import theme from '../../theme/theme';

import iconCalendar from '../../img/icon-calendar.svg';

const Calendar = styled.div`
  width: 390px;

  .react-datepicker-wrapper {
    display: block;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    width: 100%;
  }
`;

Calendar.Button = styled.button`
  position: relative;

  width: 100%;
  height: 60px;

  font-family: "Roboto", "Arial", sans-serif;
  font-size: 24px;
  line-height: 34px;
  color: #000000;

  margin-right: 20px;
  margin-bottom: 30px;
  padding: 5px 70px 0 22px;

  background-color: #ffffff;
  border: 1px solid #1F1E25;

  box-sizing: border-box;
  border-radius: 4px;

  &::after {
    position: absolute;
    content: "";

    display: block;

    top: 5px;
    right: 18px;

    width: 41px;
    height: 44px;

    background-image: url(${iconCalendar});
    background-repeat: no-repeat;
  }
`;

export default Calendar;
