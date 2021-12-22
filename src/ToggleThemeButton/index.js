import { ThemeContext } from '../theme-context';
import { LanguageContext } from '../language-context';

export default function ToggleThemeButton() {
  return <ThemeContext.Consumer>
    {
      ({theme, toggleTheme}) => (
        <LanguageContext.Consumer>
          {
            (language) => (
              <button
                onClick={toggleTheme}
                style={{
                  backgroundColor: theme.background,
                  color: theme.foreground
                }}
              >
                {language.switch}
                <div>{JSON.stringify(language)}</div>
              </button>
            )
          }
        </LanguageContext.Consumer>
      )
    }
  </ThemeContext.Consumer>
}
