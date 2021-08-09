import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Routes from '@pages/Routes';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';
import FontStyles from '@styles/fonts/fonts';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <FontStyles />
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
