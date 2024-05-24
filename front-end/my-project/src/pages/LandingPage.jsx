import {
  FaTaxi,
  FaUtensils,
  FaMoneyBillWave,
  FaNewspaper,
  FaTicketAlt,
  FaCalendarCheck,
  FaPlaneDeparture,
  FaSearch,
} from 'react-icons/fa';
import Card from '../components/Card';
import { FaEarthAsia, FaInternetExplorer } from 'react-icons/fa6';

const cardItems = [
  {
    title: 'Book a Cab',
    desc: 'Book a cab for your daily commute or special occasions.',
    Icon: <FaTaxi color='black' size={44} />,
    link: '/',
  },
  {
    title: 'Order Food',
    desc: 'Get your favorite meals delivered to your doorsteps.',
    Icon: <FaUtensils color='black' size={44} />,
    link: '/order-food',
  },
  {
    title: 'Make Payments',
    desc: 'Pay your bills and transfer money securely.',
    Icon: <FaMoneyBillWave color='black' size={44} />,
    link: '/make-payments',
  },
  {
    title: 'Read News',
    desc: 'Stay updated with the latest news from around the world.',
    Icon: <FaNewspaper color='black' size={44} />,
    link: '/read-news',
  },
  {
    title: 'Buy Tickets',
    desc: 'Purchase tickets for movies, concerts, and events.',
    Icon: <FaTicketAlt color='black' size={44} />,
    link: '/buy-tickets',
  },
  {
    title: 'Book Shows',
    desc: 'Reserve seats for theater shows and performances.',
    Icon: <FaCalendarCheck color='black' size={44} />,
    link: '/book-shows',
  },
  {
    title: 'Plan Trips',
    desc: 'Organize your travel plans and book flights.',
    Icon: <FaPlaneDeparture color='black' size={44} />,
    link: '/plan-trips',
  },
  {
    title: 'Connect',
    desc: 'Connect with the world, find friends, share online.',
    Icon: <FaEarthAsia color='black' size={44} />,
    link: '/plan-trips',
  },
];

const LandingPage = () => {
  return (
    <div className='w-full mx-auto px-8 mt-32'>
      <div className='flex items-center justify-center w-full gap-8 max-lg:flex-wrap'>
        <div className='space-y-6'>
          <h1 className='font-bold text-7xl'>One App for Your All Needs!</h1>
          <p className='text-xl'>
            Book Cabs, Order Food, Make Payments, Read News and Blogs, and Book
            Shows and Travel Tickets - All in one place.
          </p>
          <div className='flex border-2 border-black items-center w-full bg-white rounded-full text-black px-5 py-2 text-xl'>
            <input
             className='w-full text-xl bg-white focus:outline-none'
              type='text'
              placeholder='Search for services...'
            />
            <FaSearch size={30} className='cursor-pointer'/>
          </div>
        </div>
        <div>
          <img className='rounded-2xl' src='/super-app.webp' alt='super-app' />
        </div>
      </div>
      <div className='grid grid-cols-4 gap-10 my-16 max-md:grid-cols-1 max-lg:grid-cols-3'>
        {cardItems.map((item) => {
          return (
            <Card
              key={item.title}
              Icon={item.Icon}
              title={item.title}
              desc={item.desc}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
