import React, { useState } from 'react'
import styled from 'styled-components'
import Title from './Title'
import { aboutInfo } from './data'
const About = () => {
  const [index, setIndex] = useState(0)
  const { text } = aboutInfo[index]
  return (
    <Wrapper>
      <section className='section section-center'>
        <div className='about-section' id='about'>
          <div className='about-img'>
            <img src='./images/teamwork.png' alt='teamwork'></img>
          </div>
          <div className='about-content'>
            <Title title='About Me' />
            <div className='about-center'>
              <div className='btn-container'>
                {aboutInfo.map((about, aindex) => {
                  return (
                    <button
                      key={aindex}
                      onClick={() => {
                        setIndex(aindex)
                      }}
                      className={`about-btn ${
                        index === aindex && 'active-btn'
                      } `}
                    >
                      {about.title}
                    </button>
                  )
                })}
              </div>
              <div className='about'>
                <p className='info'>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--backgound-grey);
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
    font-size: 1.1rem;
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 0rem 0.8rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: var(--text-color);
  }
  .about-btn:hover {
    color: var(--first-color);
  }
  .active-btn {
    box-shadow: 0 2px var(--text-color);
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
      grid-template-columns: auto 1fr;
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
