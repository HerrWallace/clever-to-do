export const Task = (props) => {
  return (
    <label className='checkbox-label my-5 cursor-pointer text-2xl'>
      <input className='mr-2' type='checkbox' value={props.taskName} />
      {props.taskName}
    </label>
  );
};
