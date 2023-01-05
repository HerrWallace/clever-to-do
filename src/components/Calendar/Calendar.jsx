import { CalendarDay } from './CalendarDay';

export const Calendar = () => {
  return (
    <div className='custom-scroll container mx-2 flex max-w-3xl snap-x gap-3 overflow-x-scroll py-3 md:mt-16 lg:max-w-none xl:mt-28'>
      <CalendarDay day={'Wednesday'} date={4} />
      <CalendarDay day={'Thursday'} date={5} />
      <CalendarDay day={'Friday'} date={6} />
      <CalendarDay day={'Saturday'} date={7} />
      <CalendarDay day={'Sunday'} date={8} />
      <CalendarDay day={'Monday'} date={9} />
      <CalendarDay day={'Tuesday'} date={10} />
      <CalendarDay day={'Wednesday'} date={11} />
      <CalendarDay day={'Thursday'} date={12} />
      <CalendarDay day={'Friday'} date={13} />
      <CalendarDay day={'Saturday'} date={14} />
      <CalendarDay day={'Sunday'} date={15} />
      <CalendarDay day={'Monday'} date={16} />
    </div>
  );
};
