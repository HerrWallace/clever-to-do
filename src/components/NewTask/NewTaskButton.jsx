export const NewTaskButton = () => {
  return (
    <div className=' sticky bottom-5 mt-20 flex items-end justify-center 2xl:bottom-16'>
      <button className='h-14 w-80 rounded-full bg-orange-500 text-lg text-white hover:bg-orange-400'>
        + Add a new task
      </button>
    </div>
  );
};
