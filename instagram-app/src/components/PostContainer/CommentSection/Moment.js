import React from "react";
import moment from "moment";
import propTypes from "prop-types";

function Moment(props) {

  const postTime = moment((props.time), 'MMMM Do YYYY, h:mm:ss a').fromNow()

  return (
    <div className="grey marginleft smaller">
      {postTime}
    </div>
  );
}

Moment.propTypes = {
  time: propTypes.string.isRequired
};

export default Moment;
