import { Bell } from './Bell';
import { Burger } from './Burger';

export const Header = () => {
  return (
    <div className='my-5 mx-5 flex justify-between'>
      <h1 className='text-4xl font-bold'>Tassker</h1>
      <div className='flex w-28 items-center justify-between'>
        <Bell />
        <Burger />
      </div>
    </div>
  );
};
