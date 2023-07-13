import React, { useEffect, useRef, useState } from 'react';
import Chatbox from './Chatbox'; // Assuming you have a Chatbox component
import './Header.css'
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [showChatbox, setShowChatbox] = useState(false);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  const handleChatboxToggle = () => {
    setShowChatbox(!showChatbox);
  };

  return (
    <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[10px]'>
            <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
              S
            </span>
            <div className='leading-[20px]'>
              <h2 className='text-xl text-smallTextColor font-[700]'>Sanjivani</h2>
              <p className='text-smallTextColor text-[14px] font-[500]'>personal</p>
            </div>
          </div>
          <div className='menu' ref={menuRef} onClick={toggleMenu}>
            <ul className='flex items-center gap-10'>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href='#about'>
                  About
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href='#services'>
                  Services
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href='#portfolio'>
                  Portfolio
                </a>
              </li>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className='flex items-center gap-4'>
            <button
              className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'
              onClick={handleChatboxToggle}
            >
              <i className='ri-send-plane-line'></i>Let's Talk
            </button>
            <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
              <i className='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </div>

      {showChatbox && <Chatbox onClose={handleChatboxToggle} />} {/* Render the Chatbox component when showChatbox is true */}
    </header>
  );
};

export default Header;
