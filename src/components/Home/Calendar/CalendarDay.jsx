import { days, style, countTasks } from './helper';

export const CalendarDay = (props) => {
  let date = new Date();
  date.setDate(date.getDate() + props.dayIndex);

  let weekDay = date.getDay();
  let monthDay = date.getDate();
  let month = date.getMonth();

  const [completedTasks, totalTasks] = countTasks(props, monthDay, month);

  const isActive = props.pickedDay === monthDay && props.pickedMonth === month;

  const isAllTasksDone = completedTasks === totalTasks && totalTasks !== 0;

  return (
    <div className='flex min-w-[92px] shrink-0 flex-col md:min-w-[15%] lg:min-w-[10%]'>
      <div
        onClick={() => props.changePickedDay(monthDay, month)}
        className={isActive ? style.currentDiv : style.div}
      >
        <p>{days[weekDay]}</p>
        <p className='font-bold'>{monthDay}</p>
      </div>

      <div className='mt-1 flex justify-center gap-1'>
        {isAllTasksDone && <div className={style.tasksRemain} />}
        {completedTasks > 0 && <div className={style.tasksComplete} />}
        {totalTasks > 0 && <div className={style.tasksRemain} />}
      </div>
    </div>
  );
};
