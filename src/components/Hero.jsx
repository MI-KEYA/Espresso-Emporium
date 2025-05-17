import React from 'react';
import bg from '../assets/6.jpeg';
import icon1 from '../assets/icons/1.png';
import icon2 from '../assets/icons/2.png';
import icon3 from '../assets/icons/3.png';
import icon4 from '../assets/icons/4.png';

const Hero = () => {
    return (
        <div>
            <div
                className="hero h-[500px]"
                style={{
                    backgroundImage:
                        ` url(${bg})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 raleway text-sm">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!!
                            Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="btn  bg-[#E3B577]">Learn More</button>
                    </div>
                </div>
            </div>
            <div className='bg-[#ECEAE3] h-[180px] py-10 flex justify-around gap-5 items-center text-[#331A15] px-5 '>
                <div className=''>
                    <img src={icon1} alt="" />
                    <h2>Awsome Aroma</h2>
                    <p>You will definitely be a fan of the design <br/>& aroma of your coffee</p>
                </div>
                <div>
                    <img src={icon2} alt="" />
                    <h2>High Quality</h2>
                    <p>YWe served the coffee to you maintaining<br/> the best quality</p>
                </div>
                <div>
                    <img src={icon3} alt="" />
                    <h2>Pure Grades</h2>
                    <p>The coffee is made of the green coffee<br/> beans which you will love</p>
                </div>
                <div>
                    <img src={icon4} alt="" />
                    <h2>Proper Roasting</h2>
                    <p>Your coffee is brewed by first roasting<br/> the green coffee beans</p>
                </div>

            </div>
        </div>
    );
};

export default Hero;