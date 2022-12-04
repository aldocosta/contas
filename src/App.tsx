import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import dark from "./styles/theme/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <GlobalStyle />
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
