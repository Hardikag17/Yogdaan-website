import { useState } from 'react';
// File imports
import AddToForum from '../components/shg/AddToForum';
import Approved from '../components/shg/Approved';
import Details from '../components/shg/Details';
import Requests from '../components/shg/Requests';
import RequestBank from '../components/shg/RequestBank';

export default function Shg() {
  const [state, setState] = useState(0);

  const Component = [
    {
      title: 'Add To Forum',
      link: <AddToForum />,
    },
    {
      title: 'Approved',
      link: <Approved />,
    },
    {
      title: 'User Requests',
      link: <Requests />,
    },
    {
      title: 'Bank',
      link: <RequestBank />,
    },
    {
      title: 'SHG Details',
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
            <div>userid</div>
            <div>shg id</div>
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
          Add to Forum
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
          User Requests
        </button>
        <button
          onClick={() => {
            setState(3);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Bank{' '}
        </button>
        <button
          onClick={() => {
            setState(4);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          SHG details
        </button>
      </div>
      <div className=' flex flex-row space-x-2 justify-between'>
        <div className=' w-2/6 bg-grey border-2 border-solid rounded-xl h-full'>
          <div className=' m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-darkblue text-body text-center font-bold'>
            SHG Member
          </div>
          <hr />
          <div className=' m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-darkblue text-body text-center font-bold'>
            SHG Member
          </div>
          <hr />
          <div className=' m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-darkblue text-body text-center font-bold'>
            SHG Member
          </div>
          <hr />
        </div>
        <div className=' w-4/6 bg-grey border-2 border-solid rounded-xl'>
          <h1 className=' text-green mx-auto font-bold text-xl p-2'>
            {Component[state].title}
          </h1>
          <hr />
          <div className=' flex flex-row justify-around mx-auto p-2'>
            {Component[state].link}
          </div>
        </div>
      </div>
    </div>
  );
}
