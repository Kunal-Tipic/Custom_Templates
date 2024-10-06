import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/ContactUs';
import Homepage from './pages/Homepage';
import FirstNav from './components/navbars/FirstNav';
import SecondNav from './components/navbars/SecondNav';
import SecondNavHome from './pages/secondNavPages/SecondNavHome';
import SecondNavAbout from './pages/secondNavPages/SecondNavAbout';
import ShoppingNav from './components/navbars/ShoppingNav';
import ShoppingHome from './pages/shopping/ShoppingHome';
import EducationNav from './components/navbars/EducationNav';
import EducationHome from './pages/education/EducationHome';
import TechCompanyNav from './components/navbars/TechCompanyNav';
import TechCompanyHome from './pages/techCompany/TechCompanyHome';
import ChocolateNav from './components/navbars/ChocolateNav';
import ChocolateHome from './pages/chocolate/ChocolateHome';
import FitnessNav from './components/navbars/FitnessNav';
import FitnessHome from './pages/fitness/FitnessHome';
import NewsNav from './components/navbars/NewsNav';
import NewsHome from './pages/news/NewsHome';
import PortfolioNav from './components/navbars/PortfolioNav';
import PortfolioHome from './pages/portfolio/PortfolioHome';


const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        {/* First Navbar Routes */}
        <Route path="/" element={<><FirstNav /><Homepage/></>} />
        <Route path="/about" element={<><FirstNav /><About/></>} />
        <Route path="/services" element={<><FirstNav /><Services/></>} />
        <Route path="/contact" element={<><FirstNav /><Contact/></>} />

        {/* Second Navbar Routes */}
        <Route path="/secondnavhomes" element={<><SecondNav /><SecondNavHome/></>} />
        <Route path="/secondnavabout" element={<><SecondNav /><SecondNavAbout/></>} />

        {/* shoping navbar */}
        <Route path='/shoppingHome' element={<><ShoppingNav/><ShoppingHome/></>}/>

        {/* Education navbar */}
        <Route path='/educationhome' element={<><EducationNav/><EducationHome/></>}/>

        {/* chocolate navbar */}
        <Route path='/chocolatehome' element={<><ChocolateNav/><ChocolateHome/></>}/>

        {/* tech company  */}
        <Route path='/techcompanyhome' element={<><TechCompanyNav/><TechCompanyHome/></>}/>

        {/* fitness home */}
        <Route path='/fitnesshome' element={<><FitnessNav/><FitnessHome/></>}/>

        {/* news route */}
        <Route path="/newshome" element={<><NewsNav/><NewsHome/></>}/>

        {/* portfolio home */}
        <Route path='/portfoliohome' element={<><PortfolioNav/><PortfolioHome/></>}/>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
