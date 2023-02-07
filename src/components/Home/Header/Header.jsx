import { BellSVG } from './BellSVG';
import { Burger } from './Burger';
import { SignOut } from '../../SignOut/SignOut';

export const Header = () => {
  return (
    <div className='my-5 mx-5 flex justify-between'>
      <h1 className='text-4xl font-bold'>Tassker</h1>
      <div className='flex items-center justify-between gap-4'>
        <SignOut />
        <BellSVG />
        <Burger />
      </div>
    </div>
  );
};
