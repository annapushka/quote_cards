import React from 'react';
import './styles/style.css'
import './styles/normalize.css'
import QuoteList from './components/QuoteList/QuoteList';
import SwitchSelected from './components/SwitchSelected/SwitchSelected';

const App = () => {
  return (
    <div className='app'>
      <SwitchSelected />
      <QuoteList />
    </div>
  );
};

export default App;