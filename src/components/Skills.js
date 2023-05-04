import React from 'react'
import styled from 'styled-components'
import { skillsIcons } from './icons'
const Skills = () => {
  return (
    <Wrapper className='section-center section'>
      <div className='skills-section'>
        <div className='section-title'>
          <h2>Skills</h2>
          <div className='underline'></div>
        </div>
        <ul className='skills'>
          {skillsIcons.map((item, index) => {
            return <li key={index}>{item.icon}</li>
          })}
        </ul>
      </div>
      <div className='experiences-content'>
        <div className='section-title'>
          <h2>Experience</h2>
          <div className='underline'></div>
        </div>
        <article className='exprerience'>
          <div className='number'></div>
          <div className='exp-title'>
            <span>2022 - Present</span>
            <p>Self-study from Udemy, Youtube,FreeCodeCamp,W3Schools</p>
          </div>
        </article>
        <article className='exprerience'>
          <div className='number'></div>
          <p>Lorem</p>
        </article>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 2rem;
  }
  li {
    font-size: 2.8rem;
  }
  .experiences-content {
    width: 100%;
    margin: 0 0.5rem;
  }
  .exp-title {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  span {
    padding: 0.375rem 0.8rem;
    text-align: center;
    min-width: 120px;
    background: var(--grey-100);
    border-radius: 1rem;
  }
  .exprerience {
    border-left: 2px dashed black;
    margin: 0;
    margin-bottom: 1rem;
    padding: 2rem 2rem;
    position: relative;
  }
  .number {
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translate(-50%, -50%);
    margin-bottom: 0;
    background: black;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
  }
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export default Skills
