import { Link } from 'react-router-dom';

export const TrashCan = (props) => {
  return (
    <Link to={'/home'}>
      <button className='cursor-pointer' onClick={props.deleteClick}>
        <svg
          width='30px'
          height='30px'
          viewBox='0 0 1024 1024'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M692.2 182.2V72.9H327.8v109.3H145.6v72.9h728.8v-72.9H692.2z m-291.5 0v-36.4h218.6v36.4H400.7zM730.8 874.5H289.2l-34.3-548.8-72.8 4.5 38.6 617.2h578.6l38.6-617.2-72.8-4.5z'
            fill='#0F1F3C'
          />
          <path
            d='M400.7 400.8h72.9v437.3h-72.9zM546.4 400.8h72.9v437.3h-72.9z'
            fill='#0F1F3C'
          />
        </svg>
      </button>
    </Link>
  );
};
