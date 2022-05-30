import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Header, Segment, Sidebar } from 'semantic-ui-react'



const CalendarSideBar = () => {

  const [date, setDate] = useState(new Date());

  return (
    <>
        <Sidebar.Pushable as={Segment}>
            <Sidebar.Pusher>
                <Segment.Group>
                    <Segment>
                    <Header as='h3'>Calendar</Header>
                    </Segment>
                    <Segment secondary>
                    <div className='app'>
                      <div className='calendar-container'>
                        <Calendar 
                          onChange={setDate} 
                          value={date} 
                          selectRange={false}
                        />
                      </div>
                      <p className='text-center'>
                        {date.length > 0 ? (
                          <p className='text-center'>
                            <span className='bold'>Start:</span>{' '}
                            {date[0].toDateString()}
                            <br />
                            <span className='bold'>End:&nbsp;&nbsp;</span> {date[1].toDateString()}
                          </p>
                        ) : (
                          <p className='text-center'>
                            <span className='bold'>Default selected date:</span>{' '} <br />
                            {date.toDateString()}
                          </p>
                        )}
                      </p>
                    </div>
                    </Segment>
                </Segment.Group>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    </>
  )
}

export default CalendarSideBar;