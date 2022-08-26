import { YogdaanContext } from '../../utils/YogdaanContext';
import { useContext, useCallback, useEffect, useState } from 'react';
import { TemplateIcon } from '@heroicons/react/solid';

export default function SHGs() {
  const { state } = useContext(YogdaanContext);
  const [SHGs, updateSHGs] = useState<SHG[]>([]);

  const loadAllSHGs = useCallback(async () => {
    if (state) {
      try {
        const totalNumSHGs = await state.Contract.methods.totalNumSHGs().call({
          from: state.account,
        });
        var tmp = [];
        for (var i = 0; i < totalNumSHGs; i++) {
          const shg = await state.Contract.methods.shgs(i).call({
            from: state.account,
          });
          tmp.push(shg);
        }

        updateSHGs(tmp);
        const promises = [];
      } catch (err) {
        throw err;
      }
    }
  }, [state]);

  useEffect(() => {
    if (state) {
      loadAllSHGs();
    }
  }, [state, loadAllSHGs]);

  return (
    <div>
      {SHGs.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
