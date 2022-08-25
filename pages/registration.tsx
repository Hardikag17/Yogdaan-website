import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { UserType, Gender, RequestStatus } from '../utils/enums';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Regsitration() {
  const [members, updateMembers] = useState<MemberMetadata[]>([]);
  const [member, updateMember] = useState<MemberMetadata>({
    srno: 1,
    userid: '',
    designation: UserType.NONE,
    walletAddress: '0x0',
  });

  const options = [
    UserType.MEMBER,
    UserType.PRESIDENT,
    UserType.TREASURER,
    UserType.VICE_PRESIDENT,
  ];

  const [details, updateDetails] = useState<any>({
    id: 0,
    users: [],
    name: '',
    location: {
      state: '',
      district: '',
      blockName: '',
      panchyatName: '',
      villageName: '',
    },
    dateOfFormation: '',
    currentBalance: 0,
    owedBalance: 0,
    loansGiven: [],
    loansTaken: [],
    baseIntrest: 0,
  });

  const addMember = () => {
    updateMember({ ...member, srno: members.length + 2 });
    updateMembers((members) => [...members, member]);
  };

  const RegisterSHG = () => {};
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
                  onChange={(e) =>
                    updateDetails({ ...details, name: e.target.value })
                  }
                  type='text'
                  placeholder='SHG Name'
                />
              </div>
              <div className=' flex flex-row m-1'>
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  onChange={(e) =>
                    updateDetails({
                      ...details,
                      location: { ...location, state: e.target.value },
                    })
                  }
                  type='text'
                  placeholder='State'
                />
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  onChange={(e) =>
                    updateDetails({
                      ...details,
                      location: { ...location, district: e.target.value },
                    })
                  }
                  type='text'
                  placeholder='District'
                />
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  onChange={(e) =>
                    updateDetails({
                      ...details,
                      location: { ...location, block: e.target.value },
                    })
                  }
                  type='text'
                  placeholder='Block'
                />
              </div>
              <div className=' flex justify-start m-1'>
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  onChange={(e) =>
                    updateDetails({
                      ...details,
                      location: { ...location, panchyatName: e.target.value },
                    })
                  }
                  type='text'
                  placeholder='Panchayat Name'
                />
              </div>
              <div className=' flex justify-start m-1'>
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  onChange={(e) =>
                    updateDetails({
                      ...details,
                      location: { ...location, villageName: e.target.value },
                    })
                  }
                  type='text'
                  placeholder='Village Name'
                />
              </div>
              <div className=' flex justify-start m-1'>
                <input
                  className=' rounded-xl w-[500px] px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                  onChange={(e) =>
                    updateDetails({
                      ...details,
                      dateOfFormation: e.target.value,
                    })
                  }
                  type='text'
                  placeholder='Date of formation'
                />
              </div>
            </div>
          </div>
          <div className=' bg-grey rounded-xl'></div>
        </div>
        <h1 className=' text-left mx-8'>Member details</h1>
        <div className=' flex justify-center'>
          <table className='table-auto bg-grey border-2 border-solid shadow-xl my-5 space-y-2'>
            <thead>
              <tr>
                <th>SR.NO</th>
                <th>User id</th>
                <th>Designation</th>
                <th>Wallet address</th>
              </tr>
            </thead>
            <tbody>
              {members.length > 0 ? (
                <div>
                  {members.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.srno}</td>
                        <td>{item.userid}</td>
                        <td>{item.designation}</td>
                        <td>{item.walletAddress}</td>
                        <td>
                          <button className='bg-blue m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
                            -
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </div>
              ) : (
                <tr />
              )}
              <tr>
                <td>{members.length + 1}</td>
                <td>
                  {' '}
                  <input
                    className=' rounded-xl px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                    type='text'
                    onChange={(e) =>
                      updateMember({ ...member, userid: e.target.value })
                    }
                    placeholder='User id'
                  />
                </td>
                <td>
                  <Menu as='div' className='relative inline-block text-left'>
                    <div>
                      <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                        {member.designation}
                        <ChevronDownIcon
                          className='-mr-1 ml-2 h-5 w-5'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'>
                      <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='py-1'>
                          {options.map((item, index) => {
                            return (
                              <div key={index}>
                                <Menu.Item>
                                  <button
                                    onClick={() =>
                                      updateMember({
                                        ...member,
                                        designation: item,
                                      })
                                    }
                                    className='text-gray-700 block px-4 py-2 text-sm'>
                                    {item}
                                  </button>
                                </Menu.Item>
                              </div>
                            );
                          })}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
                <td>
                  {' '}
                  <input
                    className=' rounded-xl px-4 text-gray leading-tight focus:outline-none border-2 border-solid border-grey shadow-xl'
                    onChange={(e) =>
                      updateMember({ ...member, walletAddress: e.target.value })
                    }
                    placeholder='Wallet address'
                  />
                </td>
                <td>
                  <button
                    onClick={addMember}
                    className='bg-blue m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={RegisterSHG()}
          className='bg-blue m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-4 lg:py-2 text-white text-body text-center'>
          Finish
        </button>
      </div>
    </div>
  );
}
