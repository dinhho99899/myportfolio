import React from 'react'
import styled from 'styled-components'
import { socialLinks } from '../components/icons'
const Hero = () => {
  return (
    <Wrapper className='section section-center'>
      <div className='hero-content'>
        <div className='underline'></div>
        <h1>Hi, I'm Dinh</h1>
        <h3>Front-end Developer</h3>
        <p>Welcome to my portfolio</p>
        <a href='#contact'>
          <button className='btn'>Hire Me</button>
        </a>
        <div className='social-icons'>
          {socialLinks.map((item, index) => {
            return (
              <a href='#' className='socials-btn' key={index}>
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
      <div className='hero-img'>
        <img src='./images/hero.png' alt='hero'></img>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 4.5rem);
  box-shadow: var(--dark-shadow);

  h3 {
    font-size: 1.5rem;
    text-transform: capitalize;
    letter-spacing: 0.25rem;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 1.1rem;
    letter-spacing: 0.25rem;
  }
  .social-icons {
    display: flex;
    padding-top: 1rem;
    column-gap: 1rem;
  }
  .hero-img {
    display: none;
    max-width: 500px;
  }
  img {
    width: 100%;
    position: relative;
    border-radius: 0.5rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    .hero-img {
      display: block;
      position: relative;
    }
    .hero-img::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid var(--grey-200);
      top: 2rem;
      right: -2rem;
      border-radius: var(--radius);
    }
    img {
      width: 100%;
      border-radius: 0.5rem;
    }
  }
`
export default Hero
