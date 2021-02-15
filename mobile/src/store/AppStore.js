import React, { createContext, useState } from 'react';

const AppContext = createContext({
  ip: '',
  changeIp: () => {},
  render: {}
})

export const AppProvider = ({children}) => {
  const [ip, setIp] = useState('');

  const [data, setData] =  useState({
    "1": {"text": "aljhgajdkhgadg"},
    "2": {"text": "akhgadkgjhakjhg"},
  });

  const changeIp = (value) => {
    setIp(value);
  }

  return (
  <AppContext.Provider value={{ 
    ip,
    changeIp,
    data,
  }}>
    {children}
  </AppContext.Provider>
);
  }

export default AppContext;