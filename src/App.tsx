import React from 'react';
import Home from './Pages/Home/Index';
import NormalizedStyles from './utils/NormalizedStyles';

const App: React.FC = () => {
  return (
    <>
      <NormalizedStyles />
      <Home />
    </>
  );
};

export default App;
