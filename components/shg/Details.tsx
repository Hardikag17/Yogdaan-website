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
        updateSHGData(shg);
      } catch (err) {
        throw err;
      }
    }
  }, [state]);

  useEffect(() => {
    if (shg && shg.users.length > 0) {
      loadSHGData();
    }
  });
  return (
    <div>
      {shg && shg.users.length > 0 ? (
        <div>
          <h1>id: {shg?.id}</h1>
          <h1>users: {shg?.users}</h1>
          <h1>name: {shg?.name}</h1>
          <div>
            <h1>
              location: {shg?.location.state}, {shg.location.district},{' '}
              {shg.location.villageName}, {shg.location.blockName},{' '}
              {shg.location.panchyatName}{' '}
            </h1>
          </div>
          <h1>dateOfFormation: {shg?.dateOfFormation} </h1>
          <h1>currentBalance: {shg?.currentBalance}</h1>
          <h1>owedBalance: {shg?.owedBalance}</h1>
          <h1>loansGiven: {shg?.loansGiven}</h1>
          <h1>loansTaken: {shg?.loansTaken}</h1>
          <h1>baseIntrest: {shg?.baseIntrest} </h1>
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
