import React from 'react';

export const languages = {
  zhCn: {
    submit: '提交',
    switch: '切换语言'
  },
  en: {
    submit: 'submit',
    switch: 'toggle language'
  }
}

export const LanguageContext = React.createContext(
  languages.zhCn
);
