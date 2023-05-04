import React, { useState } from 'react'
import styled from 'styled-components'
import Title from './Title'
import { aboutInfo } from './icons'
const About = () => {
  const [index, setIndex] = useState(0)
  const [content, setContent] = useState(aboutInfo)
  const { text } = content[index]
  return (
    <Wrapper className='section section-center'>
      <div className='about-section' id='about'>
        <div className='about-img'>
          <img src='./images/teamwork.png' alt='teamwork'></img>
        </div>
        <div className='about-content'>
          <Title title='About me' />
          <div className='about-center'>
            <div className='btn-container'>
              {content.map((about, aindex) => {
                return (
                  <button
                    key={aindex}
                    onClick={() => {
                      setIndex(aindex)
                    }}
                    className={`about-btn ${index === aindex && 'active-btn'} `}
                  >
                    {about.title}
                  </button>
                )
              })}
            </div>
            <div className='about'>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .about-section {
    max-width: var(--max-width);
    margin: 1rem auto;
    padding: 1rem;
    display: grid;
  }
  .about-img {
    max-width: 550px;
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.4rem 0.5rem;
  }
  .about-btn {
    font-size: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 0rem 0.5rem;
    margin-bottom: 0.5rem;
  }
  .active-btn {
    box-shadow: 0 2px var(--grey-500);
    color: var(--grey-500);
  }
  img {
    width: 100%;
    border-radius: var(--radius);
  }

  @media screen and (min-width: 992px) {
    .about-section {
      grid-template-columns: 2fr 3fr;
      column-gap: 0.5rem;
    }
  }
  @media screen and (min-width: 800px) {
    .about-center {
      display: grid;
      grid-template-columns: 110px 1fr;
      justify-content: start;
      column-gap: 0.7rem;
    }
    .btn-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .about-btn {
      margin-bottom: 0.6rem;
    }
  }
`

export default About
