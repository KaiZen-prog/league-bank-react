import React, {useState, useEffect} from 'react';
import {loadExchangeRate} from '../../store/actions/api-actions';
import {connect, useSelector, useDispatch} from 'react-redux';
import {ActionType} from '../../store/actions/converter';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Block from './calendar.styled';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar(props) {
  const currentDate = useSelector((store) => store.converter.currentDate);
  const isFetchingExchangeRates = useSelector((store) => store.converter.isFetchingExchangeRates);

  const dispatch = useDispatch();
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    if(isFetchingExchangeRates) {
      props.loadData(date);
    }
  }, [isFetchingExchangeRates])

  const onDateChange = (date) => {
    const formatDate = moment(date).format('YYYY-MM-DD');
    setDate(formatDate);
    dispatch({type: ActionType.FETCH_DATA});
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

const mapDispatchToProps = (dispatch) => ({
  loadData(date) {
    dispatch(loadExchangeRate(date));
  },
});

Calendar.displayName = 'Calendar';
export default connect(null, mapDispatchToProps)(Calendar);
