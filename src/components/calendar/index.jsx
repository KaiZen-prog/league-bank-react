import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionType} from '../../store/actions/converter';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Block from './calendar.styled';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar() {
  const currentDate = useSelector((store) => store.converter.date);

  const dispatch = useDispatch();

  const onDateChange = (date) => {
    const formatDate = moment(date).format('YYYY-MM-DD');
    dispatch({type: ActionType.CHANGE_DATE, payload: formatDate});
  };

  return (
    <Block>
      <DatePicker
        selected={new Date(currentDate)}
        minDate={new Date(moment().utc().subtract(1, 'week').format('YYYY-MM-DD'))}
        maxDate={new Date(moment().utc().format('YYYY-MM-DD'))}
        onChange={onDateChange}
        dateFormat={'d.MM.yyyy'}
        customInput={
          <Block.Button type='button'>
            {moment(currentDate).format('DD.MM.YYYY')}
          </Block.Button>
        }
      />
    </Block>
  );
}

Calendar.displayName = 'Calendar';
export default Calendar;
