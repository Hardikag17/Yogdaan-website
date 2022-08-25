import YogdaanLogo from '../assets/yogdaan_logo.jpeg';
import Image from 'next/image';
import Link from 'next/link';
export default function Admin() {
  return (
    <div className=' m-5'>
      {/* Navbar */}
      <div className=' m-2 p-2 bg-whiteish shadow-lg rounded-xl flex flex-row justify-between text-center items-center'>
        <div className=' font-extrabold text-red flex items-center'>
          {' '}
          <Link href='/'>
            <Image
              className=' rounded-xl cursor-pointer'
              height={50}
              width={100}
              src={YogdaanLogo}
              alt='Yogdaan logo'
            />{' '}
            ~ Admin
          </Link>
        </div>
        <div className=' flex flex-row space-x-6 items-center'>
          <div className=' font-bold'>
            Current balance: 5000 MATIC ~ 50,000 INR
          </div>
          <div>
            <div>adminid</div>
          </div>
          <div className='bg-green h-[50px] w-[50px] hover:scale-105 cursor-pointer hover:brightness-125 rounded-full'></div>
        </div>
      </div>
      {/* Body */}
      <div className=' flex flex-row justify-between mx-5 py-5'>
        <div className='bg-white flex items-center rounded-lg border-4 border-solid border-black shadow-xl'>
          <label className=' text-black  border-2 border-solid border-black focus:outline-none w-24 h-12 flex items-center justify-center'>
            {' '}
            id:
          </label>
          <input
            className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
            type='text'
            placeholder='Search id'
          />
        </div>

        <div className=' flex justify-end'>
          <button className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
            Users
          </button>
          <button className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
            SHGs
          </button>
          <button className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
            Bank{' '}
          </button>
        </div>
      </div>
    </div>
  );
}
