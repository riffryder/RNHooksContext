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
  //new listener will be equals to a function that's similar to this.setState
  const newListener = useState()[1];
  console.log("new listener");
  useEffect(() => {
    //called just after the component mounts
    listeners.push(newListener);
    console.log("new listener added to array", listeners);
    return () => {
      //called just before the component unmounts
      listeners = listeners.filter(listener => listener !== newListener)
      console.log("listener removed from array", listeners)
    }
  }, []);

  return [state, setState];
};

export default useCustom;