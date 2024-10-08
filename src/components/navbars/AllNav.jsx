// SecondNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import FirstNav from './FirstNav';
import NewsNav from './NewsNav';
import ShoppingNav from './ShoppingNav';
import EducationNav from './EducationNav';
import ChocolateNav from './ChocolateNav';
import TechCompanyNav from './TechCompanyNav';
import FitnessNav from './FitnessNav';
import PortfolioNav from './PortfolioNav';

const AllNav = () => {
  return (
    <div className='bg-slate-300'>
      
      <FirstNav/><br/>
      <ShoppingNav/><br/>
      <EducationNav/><br/>
      <ChocolateNav/><br/>
      <TechCompanyNav/><br/>
      <FitnessNav/><br/>
      <NewsNav/><br/>
      <PortfolioNav/><br/>  
</div>

  );
};

export default AllNav;
      

      