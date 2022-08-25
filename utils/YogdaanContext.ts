import { createContext, useContext } from 'react';

interface iYogdaanContextInterface {
  state: YogdaanContextInterface | null;
  setState: React.Dispatch<
    React.SetStateAction<YogdaanContextInterface | null>
  >;
}

const initialState = {
  state: null,
  setState: () => {},
};

export const YogdaanContext =
  createContext<iYogdaanContextInterface>(initialState);
