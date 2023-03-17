import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import App from './components/app';
import GlobalStyles from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
