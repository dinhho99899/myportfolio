import { FiAlignJustify } from 'react-icons/fi'
import { CiDark } from 'react-icons/ci'
import { DiCss3 } from 'react-icons/di'
import { RiReactjsFill } from 'react-icons/ri'
import { TbBrandVscode } from 'react-icons/tb'
import { SiRedux, SiJavascript } from 'react-icons/si'

import {
  AiFillHome,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillHtml5,
} from 'react-icons/ai'
import { BsFillInfoSquareFill, BsPersonWorkspace } from 'react-icons/bs'
import { MdPermContactCalendar } from 'react-icons/md'

export const socialLinks = [
  {
    link: 'https://www.facebook.com/profile.php?id=100077177542719',
    text: 'facebook',
    icon: <AiFillFacebook />,
  },
  {
    link: 'https://github.com/dinhho99899/',
    text: 'github',
    icon: <AiFillGithub />,
  },
  {
    link: 'https://twitter.com/MrKrenka',
    text: 'twitter',
    icon: <AiFillTwitterCircle />,
  },
  {
    link: 'https://www.linkedin.com/in/dinh-ho-b62128166/',
    text: 'Linkedin',
    icon: <AiFillLinkedin />,
  },
]
export const iconLinks = [
  {
    text: 'home',
    icon: <AiFillHome />,
  },
  {
    text: 'about',
    icon: <BsFillInfoSquareFill />,
  },
  {
    text: 'projects',
    icon: <BsPersonWorkspace />,
  },
  {
    text: 'contact',
    icon: <MdPermContactCalendar />,
  },
]
export const skillsIcons = [
  {
    text: 'contact',
    icon: <AiFillHtml5 />,
    color: 'hsl(23, 100%, 50%)',
  },
  {
    text: 'contact',
    icon: <DiCss3 />,
    color: '#2196F3',
  },
  {
    text: 'contact',
    icon: <SiJavascript />,
    color: '#F0DB4F',
  },
  {
    text: 'contact',
    icon: <RiReactjsFill />,
    color: 'hsl(191, 100%, 50%)',
  },
  {
    text: 'contact',
    icon: <TbBrandVscode />,
    color: '#0065A9',
  },
  {
    text: 'contact',
    icon: <AiFillGithub />,
    color: '#5C6BC0',
  },
  {
    text: 'contact',
    icon: <SiRedux />,
    color: 'hsl(274, 100%, 50%)',
  },
]
export const projects = [
  {
    id: 1,
    link: 'https://react-ecommerce-react.netlify.app/',
    sourcecode: 'https://github.com/dinhho99899/ecommerce-project',
    name: 'Ecommerce website',
    image: './images/ecomerceprojects.jpg',
    info: 'A website has some pages: all products page, single product page,checkout page and some features like add to cart, sort, search, and filter for products...',
    language: ['React'],
  },
  {
    id: 2,
    link: 'https://jobterdashboard.netlify.app/',
    sourcecode: 'https://github.com/dinhho99899/jobterdashboard',
    name: 'Admin Dashboard Page',
    image: './images/job.jpg',
    info: 'User can register, login, logout, add job, delete job, edit and get all jobs from server. Based on some API endpoints to pratice this project',
    language: ['React', 'Redux Toolkit'],
  },
  {
    id: 3,
    link: 'https://vandinhportfolio.netlify.app/',
    sourcecode: 'https://github.com/dinhho99899/myportfolio',
    name: 'My Portfolio',
    image: './images/myportfolio.jpg',
    info: 'My fortfolio. I make this project to introduce myself to everyone. This is my first project so it could have some redundant. My appologize. ',
    language: ['React'],
  },
]
export const aboutInfo = [
  {
    id: 1,

    title: 'my info',
    text: "Hello. My name is Ho Van Dinh. I have a degree in food technology engineer, but my passion is coding and building products. That's why I've spent a lot of time learning coding, both frontend, and backend. So I'm looking for a suitable job where I can collaborate, learn and develop my skills.",
    language: ['Html', 'Css', 'Javascript'],
  },
  {
    id: 2,
    title: 'my goal',
    text: 'I hope to work in a professional environment, where I can develop my professional skills, learn new programming knowledge to successfully complete assigned work. A full-stack developer is my career goal.',
  },
  {
    id: 3,
    title: 'interests',
    text: 'Programming, playing soccer, participating social actives, listening to music',
  },
]

export { CiDark, FiAlignJustify }
