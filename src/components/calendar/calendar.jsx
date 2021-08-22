import React from "react";
import PropTypes from "prop-types";

const Calendar = ({onClick, value}) => {
  return (
      <>
        <button className="converter__calendar" type="button" onClick={onClick}>
          {value}
        </button>
      </>
  );
};

Calendar.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Calendar.displayName = `Calendar`;
export default Calendar;
