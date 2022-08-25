import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { YogdaanContext, initialState } from '../utils/YogdaanContext';

const Layout = ({ children }) => {
  const router = useRouter();

  const [state, setState] = useState({
    account: '0x0',
    walletConnected: false,
    web3: '',
    Contract: '',
    accountType: 0,
  });

  useEffect(() => {
    if (state.loaded == false) {
      alert('wallet not connected');
      router.push('/');
    }
  }, [state, router]);

  return (
    <YogdaanContext.Provider value={{ state, setState }}>
      <div>{children}</div>
    </YogdaanContext.Provider>
  );
};

export default Layout;
