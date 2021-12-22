import React from 'react';

export const languages = {
  zhCn: {
    submit: '提交'
  },
  en: {
    submit: 'submit'
  }
}

export const LanguageContext = React.createContext(
  languages.zhCn
);
