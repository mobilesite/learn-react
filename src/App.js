import React, { Suspense } from 'react';
import './App.css';
import Form from './Form';
import ToggleThemeButton from './ToggleThemeButton';
import { ThemeContext, themes } from './theme-context';
import { LanguageContext, languages } from './language-context';

const BuyButton = React.lazy(() => import('./BuyButton'));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => {
        return {
          theme: state.theme === themes.dark
            ? themes.light
            : themes.dark
        }
      })
    };

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <LanguageContext.Provider value={languages.zhCn}>
          <Suspense fallback={<div>loading...</div>}>
            <div className="App">
              <BuyButton />
              <Form />
              <ToggleThemeButton/>
            </div>
          </Suspense>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
