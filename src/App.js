import React, { Suspense } from 'react';
import './App.css';
import Form from './Form';
import { ThemeContext, themes } from './theme-context';
import { LanguageContext, languages } from './language-context';

const BuyButton = React.lazy(() => import('./BuyButton'));

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <LanguageContext.Provider value={languages.zhCn}>
        <Suspense fallback={<div>loading...</div>}>
          <div className="App">
            <BuyButton/>
            <Form/>
          </div>
        </Suspense>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
