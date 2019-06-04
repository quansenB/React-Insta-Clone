import React from "react";
import moment from "moment";

function Moment(props) {
  return (
    <div className={props.className}>
        {moment(Date.parse(props.time)).fromNow()}
    </div>
  );
}

export default Moment;
