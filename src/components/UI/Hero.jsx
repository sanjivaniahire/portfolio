import React from 'react';
import heroImg from '../../assets/images/SanjuImg.jpg';
import CountUp from 'react-countup';
import './Hero.css';
const Hero = () => {
  return (
    <section className='pt-0' id='about'>
      <div className='container pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          <div className='w-full md:basis-1/2'>
            <h2
              data-aos="fade-right"
              data-aos-duration='1500'
              className='text-headingColor font-[600] text-[16p]'
            >
              Hello Welcome!
            </h2>
            <h1
              data-aos="fade-up"
              data-aos-duration='1500'
              className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
            >
              I'm Sanjivani Ahire <br />Web Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration='1800'
              data-aos-delay="200"
              className='flex items-center gap-6 mt-7'
            >
              <a href='#contact'>
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                  <i className="ri-mail-line"></i>Hire Me
                </button>
              </a>
              <a
                href='#portfolio'
                className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration='1500'
              className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'
            >
              <span>
                <i className='ri-apps-2-line'></i>
              </span>
              Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions.
            </p>
            <div className='flex items-center gap-9 mt-14'>
              <span className='text-smallTextColor text-[15px] font-[600]'>Follow Me:</span>
              <span>
                <a
                  href='https://www.youtube.com/channel/UCzxWz85QVY8nUdh6DRPZc5Q'
                  className='text-smallTextColor text-[18px] font-[600]'
                >
                  <i className='ri-youtube-line'></i>
                </a>
              </span>
              <span>
                <a
                  href='https://github.com/sanjivaniahire'
                  className='text-smallTextColor text-[18px] font-[600]'
                >
                  <i className='ri-github-fill'></i>
                </a>
              </span>
              <span>
                <a
                  href='https://www.facebook.com/sanjivani.ahire.35'
                  className='text-smallTextColor text-[18px] font-[600]'
                >
                  <i className='ri-facebook-line'></i>
                </a>
              </span>
              <span>
                <a
                  href='https://www.instagram.com/sanjivini_ahire/'
                  className='text-smallTextColor text-[18px] font-[600]'
                >
                  <i className='ri-instagram-line'></i>
                </a>
              </span>
            </div>
          </div>
          <div className='basis-1/3 mt-10 sm:mt-0'>
            <figure className='flex item-center justify-center'>
              <img src={heroImg} alt='' />
            </figure>
          </div>
          <div className='md:basis-1/5 flex justify-between text-color mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
            <div className='mb-10'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={6} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>Months of Experience</h4>
            </div>
            <div className='mb-10'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={100} duration={2} suffix='%' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>Success Rate</h4>
            </div>
            <div className='mb-10'>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={20} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px]'>Projects Done</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
