import { Link } from 'react-router-dom';

const Card = ({ Icon, title, desc, link }) => {
  return (
    <Link to={link} className='border-2 border-black rounded-2xl p-6 text-black hover:scale-105 transition-transform duration-300'>
      <div>
        {Icon}
        <h2 className='text-2xl my-2'>{title}</h2>
        <p>{desc}</p>
      </div>
    </Link>
  );
};

export default Card;
