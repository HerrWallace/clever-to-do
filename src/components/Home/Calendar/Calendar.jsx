import { CalendarDay } from './CalendarDay';
import { useState } from 'react';

export const Calendar = (props) => {
  let date = new Date();
  const [showDays, setShowDays] = useState(31);

  const createCalendarDays = () => {
    const calendarDaysArray = [];

    for (let i = 0; i <= showDays; i++) {
      calendarDaysArray.push(
        <CalendarDay
          key={i}
          day={date.getDay()}
          date={date.getDate()}
          month={date.getMonth()}
          changePickedDay={props.changePickedDay}
          pickedDay={props.pickedDay}
          pickedMonth={props.pickedMonth}
        />
      );
      date.setDate(date.getDate() + 1);
    }
    return calendarDaysArray;
  };

  const calendarDays = createCalendarDays().map((day) => {
    return day;
  });

  const handleScroll = (e) => {
    if(e.target.scrollLeft === 2590) {
      setShowDays(showDays + 31);
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
