import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#44095c',
    },
    secondary: {
      main: '#0b1fe6',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
