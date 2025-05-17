import React from 'react';
import bgImage from '../assets/15.jpg';
import logo from '../assets/logo1.png';
import Hero from './Hero';
import Social from './Social';

const Header = () => {
    return (
        
       <div className=''>
         <div className="w-full h-[100px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <nav  className='flex justify-center gap-6 items-center pt-5'>
                <div>
                    <img className='w-[60px]' src={logo} alt="" />
                </div>
                <div>
                    <h1 className='font-semibold text-4xl'>Espresso Emporium</h1>
                </div>

            </nav>
        </div>
        
       </div>
        
    );
};

export default Header;