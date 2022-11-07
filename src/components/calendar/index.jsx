import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Block from './calendar.styled';

class Calendar extends React.Component {
  render() {
    const { date, onChange } = this.props;

    return (
      <Block>
        <DatePicker
          selected={new Date(date)}
          minDate={new Date(moment().utc().subtract(1, 'week').format('YYYY-MM-DD'))}
          maxDate={new Date(moment().utc().format('YYYY-MM-DD'))}
          onChange={onChange}
          dateFormat={'d.MM.yyyy'}
          customInput={
            <Block.Button type='button'>
              {moment(date).format('DD.MM.YYYY')}
            </Block.Button>
          }
        />
      </Block>
    );
  }
}

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Calendar.displayName = 'Calendar';
export default Calendar;
