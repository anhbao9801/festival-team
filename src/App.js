import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import MainMenu from './components/MainMenu/Index';
import Contact from './components/Contact/Index';
import HomePage from './components/HomePage/Index';
import AboutUs from './components/AboutUS/Index';
import HomePageDetail from './components/HomePage/HomePageList/index';
import Catology from './components/HomePage/Catology/Index';
import CatologyList from './components/HomePage/Catology/catologylist';
import Gallery from './Gallery';
import Store from './components/Store';
//import PageList from './components/HomePage/Catology/catologylist/index';
function App() {
  return (
    <div>
      <MainMenu />
      <Routes>
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<HomePageDetail />} />
          <Route path="/catologies/:id" element={<Catology />} />
          <Route path="/catology/:id" element={<CatologyList/>}/>
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Store" element={<Store />} />
      </Routes> 
      <Footer />
    </div>
  );
}
export default App;
