import React from 'react';
import {useAppDispatch} from '../../../hooks/hooks';
import {ActionType} from '../../../store/actions/converter';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalendarBlock,
  Button
} from './calendar.styled';

interface Props {
  currentDate: string
}

const Calendar: React.FunctionComponent<Props> = (props) => {
  const {currentDate} = props;

  const dispatch = useAppDispatch();

  const onDateChange = (date: Date) => {
    const formatDate = moment(date).format('YYYY-MM-DD');
    dispatch({type: ActionType.CHANGE_CURRENT_DATE, payload: formatDate});
  };

  return (
    <CalendarBlock>
      <DatePicker
        selected={new Date(currentDate)}
        minDate={new Date(moment().utc().subtract(1, 'week').format('YYYY-MM-DD'))}
        maxDate={new Date(moment().utc().format('YYYY-MM-DD'))}
        onChange={onDateChange}
        dateFormat={'d.MM.yyyy'}
        customInput={
          <Button type='button'>
            {moment(currentDate).format('DD.MM.YYYY')}
          </Button>
        }
      />
    </CalendarBlock>
  );
}

Calendar.displayName = 'Calendar';
export default Calendar;
