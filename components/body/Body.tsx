import { YogdaanContext } from '../../utils/YogdaanContext';
import YogdaanContract from '../../truffle/abis/Yogdaan.json';
import { NET_ID } from '../../utils/helpers';
import Web3 from 'web3';
import type { AbiItem } from 'web3-utils';
import { useContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Forum from './forum';
import Loader from '../loader/Loader';
import Image from 'next/image';
import SHGLOGO from '../../assets/shg_logo.png';

export default function Body() {
  const router = useRouter();
  const { state, setState } = useContext(YogdaanContext);

  const [forums, addForums] = useState<ForumMetadata[]>([]);

  const loadForums = useCallback(async () => {
    try {
      await axios
        .get('/api/mongoose')
        .then(function (response) {
          console.log(response.data);
          addForums(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log('error:', error);
    }
  }, [forums]);

  useEffect(() => {
    if (state.walletConnected && forums.length === 0) {
      loadForums();
    }
  });

  const connectToWallet = async (_accountType: number) => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      try {
        const isUnlocked = await window.ethereum._metamask.isUnlocked();
        if (!isUnlocked) throw new Error('Wallet Locked!');
        const web3 = new Web3(window.ethereum);
        const netId = await web3.eth.net.getId();
        if (netId !== NET_ID)
          alert('Wrong network, please switch to the Binance testnet!');
        else {
          const account = (await web3.eth.getAccounts())[0];
          const YogdaanContractAddress = await YogdaanContract.networks[netId]
            .address;
          const Yogdaan = new web3.eth.Contract(
            YogdaanContract.abi as AbiItem[],
            YogdaanContractAddress
          );

          console.log('Yogdaan Contract address:', YogdaanContractAddress);

          setState({
            account: account,
            walletConnected: true,
            web3: web3,
            Contract: Yogdaan,
            accountType: _accountType,
            id: 0,
          });

          if (state) {
            console.log(state.account);

            if (_accountType == 1) {
              var shgid = await state.Contract.methods
                .addressToSHGid(state.account)
                .call({
                  from: state.account,
                });

              setState({
                ...state,
                id: shgid,
              });

              console.log('shg exists:', shgid);

              if (shgid != 0) router.push('/shg');
              else router.push('/registration');
            } else if (_accountType == 2) {
              var bankid = await state.Contract.methods
                .addressToBankid(state.account)
                .call({
                  from: state.account,
                });

              setState({
                ...state,
                id: bankid,
              });

              if (bankid) router.push('/bank');
              else alert('Kindly contact the Platform Admins');
            } else {
              router.push('/admin');
            }
          }
        }
      } catch (e) {
        alert(e);
      }
    } else {
      alert('web3 not detected');
    }
  };

  return (
    <div className=' flex flex-row h-full '>
      <div className=' w-full m-auto flex flex-col justify-center py-16'>
        <div className=' text-black font-extrabold py-8 lg:px-2 text-7xl w-full'>
          Yogdaan ~ Let's come together!!
        </div>

        <div>
          <h1 className=' text-left font-bold py-8 px-2'>
            Choose your profile type
          </h1>
          <div className='flex flex-row justify-start items-center '>
            <button
              onClick={() => connectToWallet(1)}
              className='bg-blue m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-10 lg:py-2 text-white text-body text-center'>
              SHG
            </button>
            <button
              onClick={() => connectToWallet(2)}
              className='bg-blue m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-10 lg:py-2 text-white text-body text-center'>
              Bank
            </button>
            <button
              onClick={() => connectToWallet(3)}
              className='bg-blue m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-10 lg:py-2 text-white text-body text-center'>
              Admin
            </button>
          </div>
        </div>
      </div>
      <div className=' w-2/3 flex flex-col justify-center items-center '>
        {/* <h1 className=' text-3xl font-extrabold py-2'>Discussion forum</h1> */}
        <div className=' h-[300px] my-8  brightness-110 overflow-y-scroll snap snap-y snap-mandatory flex flex-row flex-wrap hide-scroll-bar justify-center'>
          {/* {forums.length > 0 ? (
            <div>
              {forums.map((item, index) => {
                return <Forum key={index} data={item} />;
              })}
            </div>
          ) : (
            <div className=' flex flex-col justify-center items-center'>
              <div>`Loading Forums`</div>
              <Loader />
            </div>
          )} */}
          <Image src={SHGLOGO} width={400} height={100} alt='shg logo' />
        </div>
      </div>
    </div>
  );
}
