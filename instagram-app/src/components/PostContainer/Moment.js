import React from "react";
import moment from "moment";
import propTypes from "prop-types"

function Moment(props) {
  return (
    <div className={props.className}>
        {moment(Date.parse(props.time)).fromNow()}
    </div>
  );
}

Moment.propTypes = {
    className: propTypes.string,
}

Moment.defaultProps = {
  className : "",
};

export default Moment;
