import './App.css';
import Routers from './routes/Routers';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <AppProvider i18n={translations}>
      <Navbar />
      <Routers />
      <Footer />
    </AppProvider>
  );
}

export default App;
