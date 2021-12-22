import React, { Suspense } from 'react';
import './App.css';
import Form from './Form';
import { ThemeContext, themes } from './theme-context';

const BuyButton = React.lazy(() => import('./BuyButton'));

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Suspense fallback={<div>loading...</div>}>
        <div className="App">
          <BuyButton/>
          <Form/>
        </div>
      </Suspense>
    </ThemeContext.Provider>
  );
}

export default App;
