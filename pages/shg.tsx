import { useCallback, useContext, useEffect, useState } from 'react';
// File imports
import AddToForum from '../components/shg/AddToForum';
import Approved from '../components/shg/Approved';
import Details from '../components/shg/Details';
import Requests from '../components/shg/Requests';
import RequestBank from '../components/shg/RequestBank';

import YogdaanLogo from '../assets/yogdaan_logo.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { YogdaanContext } from '../utils/YogdaanContext';
import { Interface } from 'readline';

export default function Shg() {
  const [page, setPage] = useState(0);
  const { state } = useContext(YogdaanContext);

  interface SHGMember {
    userid: number;
    name: string;
  }

  const [shg, setSHG] = useState<SHG>();
  const [members, addMembers] = useState<SHGMember[]>([]);

  const loadMembers = useCallback(async () => {
    if (state) {
      try {
        const shg = await state.Contract.methods.shgs(state.id).call({
          from: state.account,
        });
        setSHG(shg);

        for (var i = 0; i < shg.users.length; i++) {
          var id = shg.users[i];
          const user = await state.Contract.methods.users(id).call({
            from: state.account,
          });
          var member: SHGMember = { userid: shg.users[i], name: user.name };
          addMembers((members) => [...members, member]);
        }

        console.log('SHG Members', members);
      } catch (err) {
        throw err;
      }
    }
  }, [state, members]);

  useEffect(() => {
    if (state?.account && members.length! > 0) {
      loadMembers();
    }
  });

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
        <div className=' font-bold'>
          <Link href='/'>
            <Image
              className=' rounded-xl  cursor-pointer'
              height={50}
              width={100}
              src={YogdaanLogo}
              alt='Yogdaan logo'
            />
          </Link>
        </div>
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
            setPage(0);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Add to Forum
        </button>
        <button
          onClick={() => {
            setPage(1);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Approved
        </button>
        <button
          onClick={() => {
            setPage(2);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          User Requests
        </button>
        <button
          onClick={() => {
            setPage(3);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Bank{' '}
        </button>
        <button
          onClick={() => {
            setPage(4);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          SHG details
        </button>
      </div>
      <div className=' flex flex-row space-x-2 justify-between'>
        <div className=' w-2/6 bg-grey border-2 border-solid rounded-xl h-full'>
          {members && members.length > 0 ? (
            <div>
              {members.map((item, index) => {
                return (
                  <div key={index}>
                    <div className=' m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-darkblue text-body text-center font-bold'>
                      {item.name}
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className=' w-4/6 bg-grey border-2 border-solid rounded-xl'>
          <h1 className=' text-green mx-auto font-bold text-xl p-2'>
            {Component[page].title}
          </h1>
          <hr />
          <div className=' flex flex-row justify-around mx-auto p-2'>
            {Component[page].link}
          </div>
        </div>
      </div>
    </div>
  );
}
