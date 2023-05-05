import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FiAlignJustify, CiDark } from './data'
import { useGlobalContext } from '../context'
import { iconLinks } from './data'
const Navbar = () => {
  const { isSidebarOpen, setSidebar } = useGlobalContext()
  const getLocaltheme = () => {
    let theme = localStorage.getItem('theme')
    if (theme) {
      theme = JSON.parse(localStorage.getItem('theme'))
    } else {
      theme = 'dark-theme'
    }
    return theme
  }
  const [theme, setTheme] = useState(getLocaltheme())
  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    }
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])
  return (
    <Wrapper>
      <div className='nav-header'>
        <div className='nav-center '>
          <img src='./images/logo1.png' alt='logo'></img>
          <h1>
            Van<span> Dinh</span>
          </h1>
        </div>
        <ul className='nav-links'>
          {iconLinks.map((link, index) => {
            const { text } = link
            return (
              <li key={index}>
                <a href={`#${text}`}>{text}</a>
              </li>
            )
          })}
        </ul>
        <div className='btn-container'>
          <button className='dark-light-btn' onClick={toggleTheme}>
            <CiDark />
          </button>
          <button
            className='toggle-btn'
            onClick={() => {
              setSidebar(!isSidebarOpen)
            }}
          >
            <FiAlignJustify />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  background: var(--backgound-grey);
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
    color: var(--first-color);
  }
  .dark-light-btn:hover {
    color: var(--first-color-alt);
  }
  .toggle-btn {
    background: transparent;
    border: transparent;
    font-size: 1.8rem;
    color: var(--title-color);
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
      color: var(--text-color);

      cursor: pointer;
    }
    .nav-links li a {
      color: var(--text-color);
      font-size: var(--small-font-size);
    }
    .nav-links li a:hover {
      color: var(--first-color);
    }
  }
`

export default Navbar
