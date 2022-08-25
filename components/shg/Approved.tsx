import { useState } from 'react';
import Loader from '../loader/Loader';

export default function Approved() {
  const [approved, updateApproved] = useState<ApprovedRequestMetadata[]>([]);
  return (
    <div>
      {approved.length > 0 ? (
        approved.map((item, index) => {
          return (
            <div
              key={index}
              className=' shadow-xl hover:border-blue cursor-pointer p-2 w-full h-[300px] rounded-2xl flex flex-row flex-shrink-0 snap-always snap-center items-center'>
              <div className=' rounded-full h-[200px] w-[200px] border-2 border-solid flex flex-wrap text-center mx-auto flex-shrink-0'></div>
              <div className=' w-full flex flex-row justify-around text-left font-bold text-xl mx-2 space-x-2 space-y-5 flex-wrap'>
                <div>
                  <div>userid: {item.userId}</div>
                  <div>amount: {item.amount}</div>
                  <div>loantime: {item.loanTime}</div>
                </div>
                <div>
                  <div>description: {item.description}</div>
                  <div>Last EMI: {item.lastEMI}</div>
                  <div>Next EMI: {item.nextEMI}</div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}
