const style = {
  div: 'flex h-24 min-w-[92px] w-[20%] shrink-0 snap-start flex-col items-center justify-center rounded-3xl border border-slate-300 px-1 hover:border-orange-400 hover:text-orange-400 md:min-w-[15%] lg:min-w-[10%]',
  currentDiv:
    'flex h-24 min-w-[92px] w-[20%] shrink-0 snap-start flex-col items-center justify-center rounded-3xl border border-orange-400 px-1 text-orange-400 md:min-w-[15%] lg:min-w-[10%]',
};

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const CalendarDay = (props) => {
  const isActive =
    props.pickedDay === props.date && props.pickedMonth === props.month;

  return (
    // <div className='flex min-w-[25%] shrink-0 flex-col'>
    <div
      onClick={() => props.changePickedDay(props.date, props.month)}
      className={isActive ? style.currentDiv : style.div}
    >
      <p>{days[props.day]}</p>
      <p className='font-bold'>{props.date}</p>
    </div>

    //  <div className='mt-1 flex justify-center gap-1'>
    //   <div className='h-3 w-3 rounded-full bg-orange-200'></div>
    //   <div className='h-3 w-3 rounded-full bg-orange-500'></div>
    // </div>
    // </div>
  );
};
