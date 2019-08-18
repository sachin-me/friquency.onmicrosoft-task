import React from 'react';

const Event = (props) => {
  const { event } = props;
  return (
    <div>
      <div>{event.eventname}</div>
    </div>
  )
}

export default Event;