import React, { Suspense } from 'react';
import './App.css';
import Form from './Form';

const BuyButton = React.lazy(() => import('./BuyButton'));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="App">
        <BuyButton/>
        <Form/>
      </div>
    </Suspense>
  );
}

export default App;
