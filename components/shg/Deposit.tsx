import { useContext, useState } from 'react';
import { YogdaanContext } from '../../utils/YogdaanContext';

export default function Deposit() {
  const { state } = useContext(YogdaanContext);
  const [amount, setAmount] = useState<string>(0);

  const DepositAmount = async () => {
    if (state) {
      try {
        await state.Contract.methods.addMoney(amount, state.id).send({
          from: state.account,
          value: amount,
        });
        alert('Congrats, your money is deposited successfully');
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className=' w-5/6'>
      <div className='bg-white flex items-center rounded-lg border-2 border-solid border-black shadow-xl'>
        <label className=' text-black  border-2 border-solid border-black focus:outline-none w-24 h-12 flex items-center justify-center'>
          Amount
        </label>
        <input
          className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
          type='text'
          onChange={(e) => setAmount(parseInt(e.target.value))}
          placeholder='Enter Deposit amount'
        />
      </div>
      <div className=' py-10 flex justify-center'>
        <button
          onClick={DepositAmount}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-10 lg:py-3 p-3 text-white font-semibold lg:text-2xl text-xl text-center'>
          Deposit - {amount}
        </button>
      </div>
    </div>
  );
}
