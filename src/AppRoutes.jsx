import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/firstNavPages/Homepage';
import Services from './pages/firstNavPages/Services';
import AboutUs from './pages/firstNavPages/AboutUs';
import ContactUs from './pages/firstNavPages/ContactUs';
import FirstNav from './components/navbars/FirstNav';
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
import AllNav from './components/navbars/AllNav';



const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        {/* First Navbar Routes */}
        <Route path="/" element={<><FirstNav /><Homepage/></>} />
        <Route path="/about" element={<><FirstNav /><AboutUs/></>} />
        <Route path="/services" element={<><FirstNav /><Services/></>} />
        <Route path="/contact" element={<><FirstNav /><ContactUs/></>} />

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

        {/* Second Navbar Routes */}
        <Route path="/allnav" element={<AllNav/>} />

      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
