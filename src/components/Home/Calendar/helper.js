export const style = {
  div: 'flex h-24 min-w-[92px] shrink-0 snap-start flex-col items-center justify-center rounded-3xl border border-slate-300 px-1 hover:border-orange-400 hover:text-orange-400 md:min-w-[15%] lg:min-w-[10%]',
  currentDiv:
    'flex h-24 min-w-[92px] shrink-0 snap-start flex-col items-center justify-center rounded-3xl border border-orange-400 px-1 text-orange-400 md:min-w-[15%] lg:min-w-[10%]',
  tasksComplete: 'h-3 w-3 rounded-full bg-orange-200',
  tasksRemain: 'h-3 w-3 rounded-full bg-orange-500',
};

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const countTasks = (props, date, month) => {
  let completedTasks = 0;
  let totalTasks = 0;

  props.todos
    .filter((todo) => todo.date.day === date && todo.date.month === month + 1)
    .map((todo) => {
      if (todo.completed) {
        completedTasks++;
      }
      totalTasks++;
    });
  return [completedTasks, totalTasks];
};
