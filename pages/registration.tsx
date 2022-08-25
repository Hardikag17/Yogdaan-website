import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';

export default function Regsitration() {
  const [members, addMembers] = useState([]);

  const addMember = () => {};
  return (
    <div className=' p-5 '>
      <Navbar />
      <div className=' text-body font-bold text-center py-4'>
        <span className=' p-2 bg-grey rounded-2xl shadow-xl text-green text-2xl font-extrabold'>
          SHG Registration
        </span>
        <br />
        <h1 className=' text-left mx-8'>SHG details</h1>
        <div className=' mx-8 my-5 bg-grey rounded-xl flex flex-row justify-start items-center'>
          <div className=' w-1/5'>
            <div className=' bg-white rounded-full h-[200px] w-[200px] border-2 border-solid flex flex-wrap text-center mx-auto flex-shrink-0'></div>
          </div>
          <div className=' w-4/5'>
            <div className=' bg-grey rounded-xl p-5 m-5 flex flex-col'>
              <div className=' flex justify-start m-1'>
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  id='search'
                  type='text'
                  placeholder='SHG Name'
                />
              </div>
              <div className=' flex flex-row m-1'>
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  id='search'
                  type='text'
                  placeholder='State'
                />
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  id='search'
                  type='text'
                  placeholder='District'
                />
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  id='search'
                  type='text'
                  placeholder='Block'
                />
              </div>
              <div className=' flex justify-start m-1'>
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  id='search'
                  type='text'
                  placeholder='Panchayat Name'
                />
              </div>
              <div className=' flex justify-start m-1'>
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  id='search'
                  type='text'
                  placeholder='Village Name'
                />
              </div>
              <div className=' flex justify-start m-1'>
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  id='search'
                  type='text'
                  placeholder='Date of formation'
                />
              </div>
            </div>
          </div>
          <div className=' bg-grey rounded-xl'></div>
        </div>
        <h1 className=' text-left mx-8'>Member details</h1>
        <div>
          <table className='table-auto bg-grey border-2 border-solid shadow-xl my-5 space-y-2'>
            <thead>
              <tr>
                <th>SR.NO</th>
                <th>User id</th>
                <th>Father/Husband Name</th>
                <th>Designation</th>
                <th>Social Category</th>
                <th>Gender</th>
                <th>Wallet address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>
                  {' '}
                  <input
                    className=' rounded-xl px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                    id='search'
                    type='text'
                    placeholder='User id'
                  />
                </td>
                <td>
                  {' '}
                  <input
                    className=' rounded-xl px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                    id='search'
                    type='text'
                    placeholder='Husband/Father Name'
                  />
                </td>
                <td>
                  {' '}
                  <input
                    className=' rounded-xl px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                    id='search'
                    type='text'
                    placeholder='Designation'
                  />
                </td>
                <td>
                  {' '}
                  <input
                    className=' rounded-xl px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                    id='search'
                    type='text'
                    placeholder='Social Category'
                  />
                </td>
                <td>
                  {' '}
                  <input
                    className=' rounded-xl px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                    id='search'
                    type='text'
                    placeholder='Gender'
                  />
                </td>
                <td>
                  {' '}
                  <input
                    className=' rounded-xl px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                    id='search'
                    type='text'
                    placeholder='Wallet address'
                  />
                </td>
                <td>
                  <button className='bg-blue m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className='bg-blue m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Finish
        </button>
      </div>
    </div>
  );
}
