import { useState, useContext } from 'react';
import { YogdaanContext } from '../../utils/YogdaanContext';

export default function Banks() {
  const { state } = useContext(YogdaanContext);
  const [bank, updateBank] = useState({
    name: '',
    walletAddress: '',
    code: '',
    intrestRate: '',
  });

  const createBank = async () => {
    if (state) {
      try {
        await state.Contract.methods
          .addBank(bank.name, bank.walletAddress, bank.code, bank.intrestRate)
          .send({
            from: state.account,
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className=' w-5/6'>
      <div className='bg-white flex items-center rounded-lg border-2 border-solid border-black shadow-xl'>
        <label className=' text-black  border-2 border-solid border-black focus:outline-none w-24 h-12 flex items-center justify-center'>
          {' '}
          name
        </label>
        <input
          className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
          type='text'
          onChange={(e) => updateBank({ ...bank, name: e.target.value })}
          placeholder='State Bank of India'
        />
      </div>
      <br />
      <div className='bg-white flex items-center rounded-lg border-2 border-solid border-black shadow-xl'>
        <label className=' text-black  border-2 border-solid border-black focus:outline-none w-24 h-12 flex items-center justify-center'>
          {' '}
          wallet address
        </label>
        <input
          className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
          type='text'
          onChange={(e) =>
            updateBank({ ...bank, walletAddress: e.target.value })
          }
          placeholder='0x34CFc5D2531462f7eA0990047bF7DE65255ED69F'
        />
      </div>
      <br />

      <div className='bg-white flex items-center rounded-lg border-2 border-solid border-black shadow-xl'>
        <label className=' text-black  border-2 border-solid border-black focus:outline-none w-24 h-12 flex items-center justify-center'>
          {' '}
          Branch code
        </label>
        <input
          className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
          type='text'
          onChange={(e) => updateBank({ ...bank, code: e.target.value })}
          placeholder='SBIN0033245'
        />
      </div>
      <br />
      <div className='bg-white flex items-center rounded-lg border-2 border-solid border-black shadow-xl'>
        <label className=' text-black  border-2 border-solid border-black focus:outline-none w-24 h-12 flex items-center justify-center'>
          {' '}
          intrestRate
        </label>
        <input
          className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
          type='text'
          onChange={(e) => updateBank({ ...bank, intrestRate: e.target.value })}
          placeholder='8'
        />
        <label className=' text-black  border-2 border-solid border-black focus:outline-none w-24 h-12 flex items-center justify-center'>
          {' '}
          %
        </label>
      </div>
      <br />

      <div className=' py-10 flex justify-center'>
        <button
          onClick={createBank}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-10 lg:py-3 p-3 text-white font-semibold lg:text-2xl text-xl text-center'>
          Add
        </button>
      </div>
    </div>
  );
}
