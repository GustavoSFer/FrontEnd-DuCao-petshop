import { useState } from 'react';
import MyContext from './MyContext/MyContext';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes';
import './App.css';

function App() {

  const contextValue = {

  }
  
  return (
    <MyContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
