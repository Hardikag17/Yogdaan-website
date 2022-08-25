import { useState } from 'react';
export default function Requests() {
  const [formInput, updateFormInput] = useState({
    SHGId: null,
    userId: null,
    amount: null,
    description: '',
    loanTime: null,
  });

  return (
    <div className=' shadow-xl hover:border-blue cursor-pointer p-2 w-full h-[300px] rounded-2xl flex flex-row m-5 flex-shrink-0 snap-always snap-center items-center'>
      <div className=' rounded-full h-[200px] w-[200px] border-2 border-solid flex flex-wrap text-center mx-auto flex-shrink-0'></div>
      <div className=' w-full flex flex-row items-center justify-around text-left font-bold text-xl'>
        <div className=' p-5'>
          <div>userid: </div>
          <div>amount:</div>
        </div>
        <div className=' p-5'>
          <div>description:</div>
          <div>loantime:</div>
        </div>
        <div className=' flex flex-col text-body'>
          <button className='bg-blue m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-2 lg:py-3 p-2 text-white font-semibold lg:text-2xl text-xl text-center'>
            Accept
          </button>
          <button className='bg-red m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-2 lg:py-3 p-2 text-white font-semibold lg:text-2xl text-xl text-center'>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
