import { CalendarDay } from './CalendarDay';
import { useState } from 'react';

export const Calendar = (props) => {
  const [showDays, setShowDays] = useState(31);

  const calendarDays = Array.from({ length: showDays }, (v, index) => (
    <CalendarDay
      key={index}
      todos={props.todos}
      changePickedDay={props.changePickedDay}
      pickedDay={props.pickedDay}
      pickedMonth={props.pickedMonth}
      dayIndex={index}
    />
  ));

  const handleScroll = (e) => {
    if (e.target.scrollLeft >= 2580) {
      setShowDays(62);
    }
  };

  return (
    <div
      className='custom-scroll mx-2 flex select-none snap-x gap-3 overflow-x-scroll py-3 md:mt-16 lg:max-w-none xl:mt-28'
      onScroll={(e) => handleScroll(e)}
    >
      {calendarDays}
    </div>
  );
};
