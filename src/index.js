import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GobalStyled = createGlobalStyle`
* {
  margin : 0px;
  padding : 0px;
  box-sizing : border-box;
  font-family: 'Noto Sans KR', sans-serif;
}

body {
  background-color : #DCDCDC;
  text-align : center;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GobalStyled/>
    <App />
  </React.StrictMode>
);