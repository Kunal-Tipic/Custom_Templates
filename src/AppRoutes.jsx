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
import FirstFooter from './components/footer/FirstFooter';
import EducationFooter from './components/footer/EducationFooter';
import EducationAboutUs from './pages/education/EducationAboutUs';
import ChocolateFooter from './components/footer/ChocolateFooter';
import ChocolateAboutUs from './pages/chocolate/ChocolateAbout';
import TechCompanyAbout from './pages/techCompany/TechCompanyAbout';
import TechCompanyFooter from './components/footer/TechCompanyFooter';
import FitnessAbout from './pages/fitness/FitnessAbout';
import FitnessFooter from './components/footer/FitnessFooter';
import EducationContactUs from './pages/education/EducationContactUs';
import TechCompanyContactUs from './pages/techCompany/TechCompanyContactUs';
import FitnessContact from './pages/fitness/FitnessContact';
import NewsContact from './pages/news/NewsContact';
import NewsFooter from './components/footer/NewsFooter';
import ShoppingContact from './pages/shopping/ShoppigContact';
import ShoppingFooter from './components/footer/ShoppingFooter';



const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        {/* First Navbar Routes */}
        <Route path="/" element={<><FirstNav /><Homepage/></>} />
        <Route path="/about" element={<><FirstNav /><AboutUs/><FirstFooter/></>} />
        <Route path="/services" element={<><FirstNav /><Services/></>} />
        <Route path="/contact" element={<><FirstNav /><ContactUs/><FirstFooter/></>} />

        {/* shoping navbar */}
        <Route path='/shoppingHome' element={<><ShoppingNav/><ShoppingHome/></>}/>
        <Route path='/shoppingcontact' element={<><ShoppingNav/><ShoppingContact/><ShoppingFooter/></>}/>
     

        {/* Education navbar */}
        <Route path='/educationhome' element={<><EducationNav/><EducationHome/></>}/>
        <Route path='/abouttutors' element={<><EducationNav/><EducationAboutUs/><EducationFooter/></>}/>
        <Route path='/educationcontact' element={<><EducationNav/><EducationContactUs/><EducationFooter/></>}/>

        {/* chocolate navbar */}
        <Route path='/chocolatehome' element={<><ChocolateNav/><ChocolateHome/></>}/>
        <Route path='/chocolateabout' element={<><ChocolateNav/><ChocolateAboutUs/><ChocolateFooter/></>}/>
      

        {/* tech company  */}
        <Route path='/techcompanyhome' element={<><TechCompanyNav/><TechCompanyHome/></>}/>
        <Route path='/techcompanyabout' element={<><TechCompanyNav/><TechCompanyAbout/><TechCompanyFooter/></>}/>
        <Route path='/techcompanycontact' element={<><TechCompanyNav/><TechCompanyContactUs/><TechCompanyFooter/></>}/>

        {/* fitness home */}
        <Route path='/fitnesshome' element={<><FitnessNav/><FitnessHome/></>}/>
        <Route path='/fitnessabout' element={<><FitnessNav/><FitnessAbout/><FitnessFooter/></>}/>
        <Route path='/fitnesscontact' element={<><FitnessNav/><FitnessContact/><FitnessFooter/></>}/>

        {/* news route */}
        <Route path="/newshome" element={<><NewsNav/><NewsHome/></>}/>
        <Route path="/newscontact" element={<><NewsNav/><NewsContact/><NewsFooter/></>}/>

        {/* portfolio home */}
        <Route path='/portfoliohome' element={<><PortfolioNav/><PortfolioHome/></>}/>

        {/* Second Navbar Routes */}
        <Route path="/allnav" element={<AllNav/>} />

      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
