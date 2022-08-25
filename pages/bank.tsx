import { useState } from 'react';

import Requests from '../components/bank/Requests';
import Approved from '../components/bank/Approved';
import Details from '../components/bank/Details';

export default function Bank() {
  const [state, setState] = useState(0);

  const Component = [
    {
      title: 'Requests',
      link: <Requests />,
    },
    {
      title: 'Approved',
      link: <Approved />,
    },
    {
      title: 'Details',
      link: <Details />,
    },
  ];

  return (
    <div className=' m-5'>
      {/* Navbar */}
      <div className=' m-2 p-2 bg-whiteish shadow-lg rounded-xl flex flex-row justify-between text-center items-center'>
        <div className=' font-bold'>Yogdaan</div>
        <div className=' flex flex-row space-x-6 items-center'>
          <div className=' font-bold'>
            Current balance: 5000 MATIC ~ 50,000 INR
          </div>
          <div>
            <div>bank id</div>
          </div>
          <div className='bg-green h-[50px] w-[50px] hover:scale-105 cursor-pointer hover:brightness-125 rounded-full'></div>
        </div>
      </div>
      {/* Body */}
      <div className=' flex justify-end'>
        <button
          onClick={() => {
            setState(0);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Requests
        </button>
        <button
          onClick={() => {
            setState(1);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Approved
        </button>
        <button
          onClick={() => {
            setState(2);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Details
        </button>
      </div>

      <div className=' bg-grey border-2 border-solid rounded-xl'>
        <h1 className=' text-green mx-auto font-bold text-xl p-2'>
          {Component[state].title}
        </h1>
        <hr />
        <div className=' m-5 flex flex-row justify-around text-white font-bold'>
          <div className=' bg-blue h-[120px] w-[300px] flex justify-center items-center rounded-xl shadow-lg'>
            Total Amount Lended
          </div>
          <div className=' bg-blue h-[120px] w-[300px] flex justify-center items-center rounded-xl shadow-lg'>
            Total Amount Requested
          </div>
        </div>

        <div className=' flex flex-row justify-around mx-auto p-2'>
          {Component[state].link}
        </div>
      </div>
    </div>
  );
}
