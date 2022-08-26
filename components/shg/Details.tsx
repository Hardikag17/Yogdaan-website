import { useCallback, useContext, useEffect, useState } from 'react';
import { YogdaanContext } from '../../utils/YogdaanContext';

export default function Details() {
  const { state } = useContext(YogdaanContext);
  const [shg, updateSHGData] = useState<SHG>();

  const loadSHGData = useCallback(async () => {
    if (state) {
      try {
        const shg = await state.Contract.methods.shgs(state.id).call({
          from: state.account,
        });
        console.log(shg);
        updateSHGData(shg);
      } catch (err) {
        throw err;
      }
    }
  }, [state]);

  useEffect(() => {
    loadSHGData();
  });
  return (
    <div className=' font-bold text-2xl'>
      {shg ? (
        <div className=' flex flex-row w-full justify-between'>
          <div className=' px-8'>
            <h1>id: {shg?.id}</h1>
            <h1>users: {shg?.users}</h1>
            <h1>name: {shg?.name}</h1>
            <h1>dateOfFormation: {shg?.dateOfFormation} </h1>
            <h1>currentBalance: {parseFloat(shg?.currentBalance)}</h1>
            <h1>owedBalance: {shg?.owedBalance}</h1>
            <h1>baseIntrest: {shg?.baseIntrest} </h1>
          </div>
          <div className=' px-8'>
            location:
            <hr /> state{shg?.location.state}
            <br /> district: {shg.location.district}
            <br /> villageName: {shg.location.villageName}
            <br /> blockName: {shg.location.blockName}
            <br /> panchyatName: {shg.location.panchyatName}
            <br />
          </div>
          <div className=' px-8'>
            <h1>loansGiven: {shg?.loansGiven}</h1>
            <h1>loansTaken: {shg?.loansTaken}</h1>
          </div>
        </div>
      ) : (
        <div>
          {' '}
          <h1>This is SHG Details component.</h1>
        </div>
      )}
    </div>
  );
}
