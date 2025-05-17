import React from 'react';
import cup1 from '../assets/cups/Rectangle 9.png'
import cup2 from '../assets/cups/Rectangle 10.png'
import cup3 from '../assets/cups/Rectangle 11.png'
import cup4 from '../assets/cups/Rectangle 12.png'
import cup5 from '../assets/cups/Rectangle 13.png'
import cup6 from '../assets/cups/Rectangle 14.png'
import cup7 from '../assets/cups/Rectangle 15.png'
import cup8 from '../assets/cups/Rectangle 16.png'

const Social = () => {
    return (
        <div className='w-2/3 mx-auto py-10'>
            <p className='raleway text-center my-3'>Follow Us Now</p>
            <h2 className='text-center text-5xl my-5'>Follow on Instagram</h2>
          <div className='grid grid-cols-4 gap-4'>
              <div>
                <img className='' src={cup1} alt="" />
            </div>
            <div>
                <img src={cup2} alt="" />
            </div>
            <div>
                <img src={cup3} alt="" />
            </div>
            <div>
                <img src={cup4} alt="" />
            </div>
            <div>
                <img src={cup5} alt="" />
            </div>
            <div>
                <img src={cup6} alt="" />
            </div>
            <div>
                <img src={cup7} alt="" />
            </div>
            <div>
                <img src={cup8} alt="" />
            </div>
          </div>
        </div>
    );
};

export default Social;