export const Input = () => {
  return (
    <>
      <label className='flex w-full flex-col text-zinc-500'>
        Email
        <input className='rounded-md border-2 border-zinc-200 p-1' type='email' />
      </label>

      <label className='flex w-full flex-col text-zinc-500'>
        Password
        <input className='rounded-md border-2 border-zinc-200 p-1' type='password' />
      </label>

      <button className='mt-8 w-full rounded-md border-2 bg-orange-400 p-1 font-medium text-white hover:bg-orange-400 hover:text-white'>
        Submit
      </button>
    </>
  );
};
