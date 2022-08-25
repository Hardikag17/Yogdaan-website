import { useState } from 'react';

export default function RequestBank() {
  const [formInput, updateFormInput] = useState({
    shgid: '',
    amount: '',
    loanTime: '',
  });

  const createRequestForBank = async () => {
    const { shgid, amount, loanTime } = formInput;
    if (!shgid || !amount || !loanTime) return;
    const data = JSON.stringify({
      shgid,
      amount,
      loanTime,
    });
    try {
      sendRequestToBank(data);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  };

  async function sendRequestToBank(data: string) {}

  return (
    <div className=' font-semibold text-center'>
      <div>
        <div className='bg-white flex items-center rounded-lg border-4 border-solid border-green shadow-xl'>
          <label className=' text-black  border-2 border-green border-solid  focus:outline-none w-36 h-12 flex items-center justify-center'>
            {' '}
            SHG id
          </label>
          <input
            className=' bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
            type='text'
            onChange={(e) =>
              updateFormInput({ ...formInput, shgid: e.target.value })
            }
            placeholder='shgid'
          />
          <button className=' text-black border-2 border-solid border-green focus:outline-none w-36 h-12 flex items-center justify-center'>
            check
          </button>
        </div>
        <br />
        <div className='bg-white flex flex-col rounded-lg items-center border-4 border-solid border-green shadow-xl'>
          <div className=' bg-white w-full h-12 mx-2 items-center border-2 border-solid border-green shadow-xl flex flex-nowrap flex-row justify-around'>
            <label className=' text-black h-full  border-2 border-solid border-green focus:outline-none w-36 flex items-center justify-center'>
              {' '}
              Amount
            </label>
            <input
              className=' h-full bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
              type='number'
              onChange={(e) =>
                updateFormInput({ ...formInput, loanTime: e.target.value })
              }
              placeholder='5000 INR'
            />
            <button className=' text-black border-2 border-solid border-green focus:outline-none w-36 h-12 flex items-center justify-center'>
              ~ 50 MATIC
            </button>
          </div>
        </div>
        <br />
        <div className='bg-white flex flex-row rounded-lg items-center border-4 border-solid border-green shadow-xl'>
          <div className=' bg-white w-full h-12 items-center border-2 border-solid border-green shadow-xl flex flex-nowrap flex-row justify-around'>
            <label className=' text-black h-full  border-2 border-solid border-green focus:outline-none w-36 flex items-center justify-center '>
              {' '}
              loan time
            </label>
            <input
              className=' h-full bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
              type='number'
              onChange={(e) =>
                updateFormInput({ ...formInput, loanTime: e.target.value })
              }
              placeholder='6 months'
            />
            <div className=' text-black border-2 border-solid border-green focus:outline-none w-36 h-12 flex items-center justify-center'>
              Months
            </div>
          </div>
        </div>
        <div className=' py-10 flex justify-center'>
          <button
            onClick={createRequestForBank}
            className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-2 lg:py-3 p-3 text-white font-semibold lg:text-2xl text-xl text-center'>
            Request
          </button>
        </div>
      </div>
    </div>
  );
}
