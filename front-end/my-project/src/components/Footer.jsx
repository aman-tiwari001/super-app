import { FaSuperpowers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black w-full min-h-52 text-white text-lg text-center flex flex-col justify-center'>
      <div className='flex items-start justify-between px-10'>
        <div className='flex flex-col items-start'>
          <h2 className='text-2xl flex items-center'>
            <FaSuperpowers />
            Super App
          </h2>
          <p>8th Floor, DLF Phase 3, Noida, UP</p>
          <p>+91 XXXXXXXXXX</p>
          <p>support@superapp.co.in</p>
        </div>
        <div className='flex flex-col items-start list-none'>
          <Link to={'#'}>
            <li>Services</li>
          </Link>
          <Link to={'#'}>
            <li>Home</li>
          </Link>
          <Link to={'#'}>
            <li>Account</li>
          </Link>
          <Link to={'#'}>
            <li>Support</li>
          </Link>
        </div>
      </div>
      <p>&copy; Copyright 2024, All rights reserved.</p>
    </div>
  );
};

export default Footer;
