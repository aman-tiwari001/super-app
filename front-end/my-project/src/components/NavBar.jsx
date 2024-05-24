import { FaSuperpowers } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='bg-black w-full h-20 flex items-center justify-between px-8 text-white fixed'>
      <div className='flex items-center'>
        <FaSuperpowers size={43} />
        <h2 className='text-4xl'>Super App</h2>
      </div>
      <div className='flex gap-7 list-none text-xl max-md:hidden'>
        <li>Services</li>
        <li>Home</li>
        <li>Account</li>
        <li>Support</li>
      </div>
    </div>
  );
};

export default NavBar;
