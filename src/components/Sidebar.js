import React from 'react'
import styled from 'styled-components'
import { iconLinks, socialLinks } from './data'
import { useGlobalContext } from '../context'
export const Sidebar = () => {
  const { isSidebarOpen, setSidebar } = useGlobalContext()
  return (
    <Wrapper>
      <button
        className='close-btn'
        onClick={() => {
          setSidebar(!isSidebarOpen)
        }}
      >
        x
      </button>
      <ul class='sidebar-links'>
        {iconLinks.map((link, index) => {
          const { text, icon } = link
          return (
            <li key={index}>
              <a
                href={`#${text}`}
                onClick={() => {
                  setSidebar(!isSidebarOpen)
                }}
              >
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul class='social-icons'>
        {socialLinks.map((item, index) => {
          const { text, icon, link } = item
          return (
            <li key={index}>
              <a href={link}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.aside`
  position: fixed;
  background: var(--body-color);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  transition: all 0.2s linear;
  z-index: 2;

  .close-btn {
    position: absolute;
    right: 2rem;
    top: 0.15rem;
    background: transparent;
    border: none;
    font-size: 2rem;
    color: red;
    cursor: pointer;
  }
  .sidebar-links {
    padding-top: 2.7rem;
  }
  .sidebar-links li a {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    font-size: 1.6rem;
    text-transform: capitalize;
    padding: 1.2rem 2rem;
    color: var(--title-color);
    cursor: pointer;
    width: 100%;
  }
  .sidebar-links li a:hover {
    background: var(--text-color-light);

    padding-left: 2rem;
  }
  .social-icons {
    display: flex;
    justify-content: center;
  }
  .social-icons li a {
    display: flex;
    align-items: center;
    column-gap: 0.2rem;
    font-size: 1rem;
    margin: 0.5rem;
    text-transform: capitalize;
    padding: 1rem 0;
    color: var(--text-color);
  }
  .social-icons li a:hover {
    color: var(--first-color);
  }
  @media screen and (min-width: 992px) {
    width: 550px;
  }
`
