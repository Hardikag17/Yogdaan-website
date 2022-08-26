import { useCallback, useContext, useEffect, useState } from 'react';
// File imports
import AddToForum from '../components/shg/AddToForum';
import Approved from '../components/shg/GrantLoan';
import Details from '../components/shg/Details';
import Requests from '../components/shg/Requests';
import RequestBank from '../components/shg/RequestBank';

import YogdaanLogo from '../assets/yogdaan_logo.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { YogdaanContext } from '../utils/YogdaanContext';
import { UserType } from '../utils/enums';
import Deposit from '../components/shg/Deposit';
export default function Shg() {
  const [page, setPage] = useState(0);
  const { state } = useContext(YogdaanContext);

  interface SHGMember {
    userid: number;
    name: string;
    designation: UserType;
  }

  const [shg, setSHG] = useState<SHG>();
  const [members, addMembers] = useState<SHGMember[]>([]);
  const [balance, setBalance] = useState(0);

  const loadMembers = useCallback(async () => {
    if (state) {
      try {
        const shg = await state.Contract.methods.shgs(state.id).call({
          from: state.account,
        });
        setSHG(shg);

        const shgMembers = await state.Contract.methods
          .getSHGMembers(state.id)
          .call({
            from: state.account,
          });

        const tmp = [];
        for (var i = 0; i < shgMembers.length; i++) {
          const user = await state.Contract.methods.users(shgMembers[i]).call({
            from: state.account,
          });
          var member: SHGMember = {
            userid: shgMembers[i],
            name: user.name,
            designation: user.userType,
          };
          tmp.push(member);
        }
        console.log('tmp:', tmp);
        addMembers(tmp);

        console.log('SHG Members', members);
      } catch (err) {
        throw err;
      }
    }
  }, [state, members]);

  const getBalance = async () => {
    var total =
      parseFloat(
        await state.web3.utils.fromWei(
          await state.web3.eth.getBalance(state?.account),
          'ether'
        )
      ) * 80;

    setBalance(total);
  };

  useEffect(() => {
    if (state?.account && members.length < 1) {
      loadMembers();
    }
    if (balance == 0) {
      getBalance();
    }
  });

  const Component = [
    {
      title: 'Add To Forum',
      link: <AddToForum />,
    },
    // {
    //   title: 'Approved',
    //   link: <Approved />,
    // },
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
    {
      title: 'Deposit',
      link: <Deposit />,
    },
  ];

  return (
    <div className=' m-5'>
      {/* Navbar */}
      <div className=' m-2 p-2 bg-whiteish bg-opacity-25 shadow-lg rounded-xl flex flex-row justify-between text-center items-center'>
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
          <div className=' font-bold'>Current balance: {balance}</div>
          <div>
            <div>shgid: {state?.id}</div>
          </div>
          <div className='bg-green h-[50px] w-[50px] hover:scale-105 cursor-pointer hover:brightness-125 rounded-full'></div>
        </div>
      </div>
      {/* Body */}
      <div className=' flex justify-end'>
        <button
          onClick={() => {
            setPage(4);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Deposit
        </button>
        <button
          onClick={() => {
            setPage(0);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Add to Forum
        </button>
        {/* <button
          onClick={() => {
            setPage(1);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Approved
        </button> */}
        <button
          onClick={() => {
            setPage(1);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          User Requests
        </button>
        <button
          onClick={() => {
            setPage(2);
          }}
          className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Bank{' '}
        </button>
        <button
          onClick={() => {
            setPage(3);
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
                      {item.name} - {Object.keys(UserType)[item.designation]}
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
