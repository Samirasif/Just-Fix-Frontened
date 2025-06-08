import { Link } from "react-router-dom";


const Card = ({service}) => {
    const {_id,category,description,service_title,min_price,max_price}=service || {};
    return (
      <Link to={`/service/${_id}`} className='bg-fuchsia-200 w-full max-w-sm px-4 py-3  rounded-md shadow-md hover:scale-[1.05] transition-all'>
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          Deadline: 20/12/2024
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
         { category}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
            {service_title}
        </h1>

        <p className='mt-2 text-sm text-gray-600 '>
          {description}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Range: {min_price} - {max_price}
        </p>
      </div>
    </Link>
    );
};

export default Card;