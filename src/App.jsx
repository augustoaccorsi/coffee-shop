import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import CoffeeContextProvider from './context/CoffeeContext';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CoffeeContextProvider>
                    <Router />
                </CoffeeContextProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
