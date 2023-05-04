import React from 'react';
import styled from 'styled-components';
import { FiAlignJustify, CiDark } from './icons';
import { useGlobalContext } from '../context';
import { iconLinks } from './icons';
const Navbar = () => {
  const {isSidebarOpen,setSidebar} = useGlobalContext()
  return (
    <Wrapper>
      <div className='nav-header'>
        <div className='nav-center '>
          <img src='./images/logo1.png'></img>
          <h1>
            Van<span> Dinh</span>
          </h1>
        </div>
        <ul className='nav-links'>
        {iconLinks.map((link, index) => {
          const { text, icon } = link;
          return (
            <li key={index}>
              <a href={`#${text}`}>
                {text}
              </a>
            </li>
          );
        })}
        </ul>
        <div className='btn-container'>
          <button className='dark-light-btn'>
            <CiDark />
          </button>
          <button className='toggle-btn' onClick={()=>{setSidebar(!isSidebarOpen)}}>
            <FiAlignJustify />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
padding-top:1rem ;
padding-bottom:1rem ;
  width: 100%;
  background: var(--grey-100);
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
  }
  .nav-center {
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
  img {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-size: 1.5rem;
    color: var(--grey-500);
    letter-spacing: var(--spacing);
    padding-left: 1rem;
  }
  .nav-links {
    display: none;
    justify-content: space-between;
    height: 0.8rem;
  }
  .dark-light-btn {
    border: transparent;
    background: transparent;
    cursor: pointer;
    font-size: 1.8rem;
  }
  .toggle-btn {
    background: transparent;
    border: transparent;
    font-size: 2rem;
    color: var(--clr-grey-5);
    cursor: pointer;
    padding-right: 1rem;
  }

  @media screen and (min-width: 992px) {
    .toggle-btn {
      display: none;
    }
    .nav-header {
      max-width: 1176px;
      margin: 0 auto;
      justify-content: space-around;
    }
    .nav-links {
      width: 500px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      color: var(--clr-grey-1);
      cursor: pointer;
      font-size: 1rem;
    }
  }
`;

export default Navbar;
