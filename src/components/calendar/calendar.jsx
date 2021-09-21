import React from 'react';
import PropTypes from "prop-types";

class Calendar extends React.Component {
  render() {
    const {onClick, value} = this.props;

    return (
      <>
        <button className="converter__calendar" type="button" onClick={onClick}>
          {value}
        </button>
      </>
    );
  }
}

Calendar.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

Calendar.displayName = `Calendar`;
export default Calendar;
