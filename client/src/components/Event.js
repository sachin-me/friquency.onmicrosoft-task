import React from 'react';

const Event = (props) => {
  const { event } = props;
  const date = event.eventdate.split('T')[0];
  return (
    <div className="event-card">
      <div>
        <span>Event Name</span>
        <span className='dash'>-</span>
        <span>{event.eventname}</span>
      </div>
      <div>
        <span>Event Place</span>
        <span className='dash'>-</span>
        <span>{event.eventplace}</span>
      </div>
      <div>
        <span>Event Date</span>
        <span className='dash'>-</span>
        <span>{date}</span>
      </div>
      <div>
        <span>Event Host</span>
        <span className='dash'>-</span>
        <span>{event.eventhost}</span>
      </div>
    </div>
  )
}

export default Event;