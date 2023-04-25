import './App.css';
import Routers from './routes/Routers';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import Header from './components/Header/Header';

function App() {
  return (
    <AppProvider i18n={translations}>
    <Header />
   <Routers />
    </AppProvider>
  );
}

export default App;
