import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
const Project = ({
  id,
  link,
  sourcecode,
  info,
  name,
  language,
  image,
  handleClick,
}) => {
  const [readMore, seReadMore] = useState(false)

  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={language}></img>
        <div className='modal-img'>
          <div className='modal-content'>
            <a href={link} className='btn link-btn'>
              Live Site
            </a>
            <a href={sourcecode} className='btn link-btn'>
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div className='project-info'>
        <h3>{name}</h3>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <span
            className='btns'
            onClick={() => {
              seReadMore(!readMore)
            }}
          >
            {readMore ? ' Show Less' : 'View More'}
          </span>
        </p>
        <div className='language'>
          {language.map((item, index) => {
            return (
              <span key={index} className='language-item'>
                {item}
              </span>
            )
          })}
        </div>
        <div className='btn-container'>
          <button type='button' className='readmore-btn'>
            Read More
          </button>
          <span
            onClick={() => {
              handleClick(id)
            }}
          >
            Not interested
          </span>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  width: 100%;
  max-width: 500px;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  background: var(--container-color);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  padding-bottom: 0.5rem;
  position: relative;
  :hover {
    transform: translateY(-3%);
    transition: all 0.4s linear;
  }
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  .img-container {
    position: relative;
  }
  .modal-img {
    opacity: 0;
    position: absolute;
    background: transparent;
    top: 0;
    display: grid;
    place-items: center;
    transition: all 0.5s linear;
    width: 100%;
    height: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  .modal-content {
    display: grid;
    gap: 1rem;
  }
  .modal-img:hover {
    opacity: 1;
  }

  .project-info {
    padding: 0.2rem 1.5rem;
  }
  .btns {
    color: var(--first-color);
  }
  .btns:hover {
    color: var(--first-color-alt);
  }
  .language {
    padding: 0.8rem 0;
  }

  .language-item {
    font-size: 1rem;
    margin-right: 1rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.4rem;
    background: var(--input-color2);
    color: var(--text-color);
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn-container button {
    border: none;
    font-size: 1rem;
    padding: 0.5rem 0.8rem;
    border-radius: 0.6rem;
    cursor: pointer;
  }
  .btn-container span {
    color: var(--first-color);
    text-transform: capitalize;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: underline;
  }
`
export default Project
