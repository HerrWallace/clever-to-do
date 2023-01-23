const style = {
  div: 'flex h-24 min-w-[92px] shrink-0 snap-start flex-col items-center justify-center rounded-3xl border border-slate-300 px-1 hover:border-orange-400 hover:text-orange-400 md:min-w-[15%] lg:min-w-[10%]',
  currentDiv:
    'flex h-24 min-w-[92px] shrink-0 snap-start flex-col items-center justify-center rounded-3xl border border-orange-400 px-1 text-orange-400 md:min-w-[15%] lg:min-w-[10%]',
  tasksComplete: 'h-3 w-3 rounded-full bg-orange-200',
  tasksRemain: 'h-3 w-3 rounded-full bg-orange-500',
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

  let completedTasks = 0;
  let totalTasks = 0;

  const filterTasks = () => {
    const todaysTasks = props.todos
      .filter(
        (todo) => todo.date.day === props.date && todo.date.month === props.month + 1
      )
      .map((todo) => {
        if (todo.completed) {
          completedTasks++;
        }
        totalTasks++;
      });
    return todaysTasks;
  };

  filterTasks();

  return (
    <div className='flex min-w-[92px] shrink-0 flex-col md:min-w-[15%] lg:min-w-[10%]'>
      <div
        onClick={() => props.changePickedDay(props.date, props.month)}
        className={isActive ? style.currentDiv : style.div}
      >
        <p>{days[props.day]}</p>
        <p className='font-bold'>{props.date}</p>
      </div>

      <div className='mt-1 flex justify-center gap-1'>
        <div
          className={
            completedTasks === totalTasks && totalTasks !== 0
              ? style.tasksRemain
              : 'hidden'
          }
        ></div>
        <div className={completedTasks ? style.tasksComplete : 'hidden'}></div>
        <div className={totalTasks ? style.tasksRemain : ''}></div>
      </div>
    </div>
  );
};
