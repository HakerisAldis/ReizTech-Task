import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import Home from './pages/home';
import ErrorBoundary from './errorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
