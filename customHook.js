import { useState, useEffect } from 'react';

let listeners = [];
let state = { portfolioValue: 10000, rank: 10, portfolioChange: 5.3 }

const setState = (newState) => {
  state = { ...state, ...newState };
  listeners.forEach(listener => {
    listener(state);
  });
};

const useCustom = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
  }, []);

  return [state, setState];
};

export default useCustom;