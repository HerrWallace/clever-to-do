export const CalendarDay = (props) => {
  return (
    <div className='flex h-24 min-w-[25%] shrink-0 snap-start flex-col items-center justify-center rounded-3xl border border-slate-300 px-1 hover:border-orange-400 hover:text-orange-400 lg:min-w-[10%]'>
      <p>{props.day}</p>
      <p className=' font-bold'>{props.date}</p>
    </div>
  );
};
