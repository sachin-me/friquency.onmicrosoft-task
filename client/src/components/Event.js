import React from 'react';

const Event = (props) => {
  const { event } = props;
  const date = event.eventdate.split('T')[0].split('-').reverse().join('-');
  return (
    <div className="event-card">
      <div>
        <span className='event-info'>Event Name</span>
        <span className='dash'>-</span>
        <span>{event.eventname}</span>
      </div>
      <div>
        <span className='event-info'>Event Place</span>
        <span className='dash'>-</span>
        <span>{event.eventplace}</span>
      </div>
      <div>
        <span className='event-info'>Event Date</span>
        <span className='dash'>-</span>
        <span>{date}</span>
      </div>
      <div>
        <span className='event-info'>Event Host</span>
        <span className='dash'>-</span>
        <span>{event.eventhost}</span>
      </div>
    </div>
  )
}

export default Event;