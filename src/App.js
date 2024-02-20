import AppRouter from './components/AppRouter';
import {BrowserRouter} from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';


const App = () => {

  return (
    <>
    <BrowserRouter>
      {/* <Preloader /> */}
      <NavMenu />
      <AppRouter />
      <Footer />
    </BrowserRouter>
    </>
  );
};

export default App; 


