import { useState, useContext, useCallback, useEffect } from 'react';
import { YogdaanContext } from '../../utils/YogdaanContext';
import Loader from '../loader/Loader';
export default function Requests() {
  const { state } = useContext(YogdaanContext);
  const [userRequests, updateUserRequests] = useState<RequestMetadata[]>([]);

  const loadUserRequests = useCallback(async () => {
    if (state) {
      try {
        const Requests = await state.Contract.methods
          .userRequestsOfSHG(state.id)
          .call({
            from: state.account,
          });
        const promises = [];

        for (const id of Requests) {
          const promise = state.Contract.methods.userRequests(id).call();
          promises.push(promise);
        }
        const res = await Promise.all(promises);
        console.log('here', res);
        updateUserRequests(res);
      } catch (err) {
        throw err;
      }
    }
  }, [state]);

  useEffect(() => {
    if (state) {
      loadUserRequests();
    }
  }, [state, loadUserRequests]);

  const ApproveRequest = async (requestId: number) => {
    if (state) {
      try {
        await state.Contract.methods.approveRequest(requestId, state.id).send({
          from: state.account,
        });

        alert('Congrats, you approved the request successfully');
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      {userRequests.length > 0 ? (
        <div>
          {userRequests.map((item, index) => {
            return (
              <div
                key={index}
                className=' shadow-xl hover:border-blue cursor-pointer p-2 w-full h-[300px] rounded-2xl flex flex-row m-5 flex-shrink-0 snap-always snap-center items-center'>
                <div className=' rounded-full h-[200px] w-[200px] border-2 border-solid flex flex-wrap text-center mx-auto flex-shrink-0'></div>
                <div className=' w-full flex flex-row items-center justify-around text-left font-bold text-xl'>
                  <div className=' p-5'>
                    <div>userid: {item.userId} </div>
                    <div>amount: {item.amount}</div>
                  </div>
                  <div className=' p-5'>
                    <div>description: {item.description}</div>
                    <div>loantime: {item.loanTime}</div>
                  </div>
                  <div className=' flex flex-col text-body'>
                    {item.status == 0 ? (
                      <div className='bg-green m-2 rounded-xl lg:px-2 lg:py-3 p-2 text-white font-semibold lg:text-2xl text-xl text-center'>
                        Approved
                      </div>
                    ) : (
                      <div>
                        {' '}
                        <button
                          onClick={() => ApproveRequest(item.requestId)}
                          className='bg-blue m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-2 lg:py-3 p-2 text-white font-semibold lg:text-2xl text-xl text-center'>
                          Accept
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
