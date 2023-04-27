import './App.css';
import Routers from './routes/Routers';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AppProvider i18n={translations}>
      <Header />
      <Routers />
      <Footer/>
    </AppProvider>
  );
}

export default App;
