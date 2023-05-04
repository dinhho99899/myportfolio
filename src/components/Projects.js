import React, { useState } from 'react'
import styled from 'styled-components'
import { projects } from './icons'
import Title from './Title'
import Project from './Project'
const Projects = () => {
    const [allProjects,setProject] = useState(projects)
    const handleClick = (id)=>{
        const temPProjects = allProjects.filter((item)=>item.id!==id)
        setProject(temPProjects)
    }
return <Wrapper  id='projects' className='section section-center'>
    {allProjects.length>0 && <Title title="Projects"/>}
    <section className='projects-section'>
    {allProjects.map((item)=>{
return <Project handleClick={handleClick} {...item} />})}
</section>
</Wrapper>
}
const Wrapper = styled.section`
.projects-section{
display: grid;
gap: 1.5rem;
grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));}
.single-project{
    width:100%;
 max-width:500px;
margin-bottom: 2rem;
border-radius:0.5rem;
background: white;
box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
padding-bottom: 0.5rem;
}
p{
margin:0
}
 img{
width:100%;
object-fit:cover;
border-top-left-radius:0.5rem;
border-top-right-radius:0.5rem}
.img-container{position:relative; 
}
.modal-img{  
opacity: 0;
position:absolute;
background:transparent;
top:0;  
display: grid;
place-items:center;
transition: all 0.5s linear;
width:100%;
height:100%;
border-top-left-radius:0.5rem;
border-top-right-radius:0.5rem
}
.modal-content{
    display: grid;
    gap: 1rem;
}
.modal-img:hover{
    opacity: 1;
}

.project-info{
    padding: 0.2rem 1.5rem;
 }
.language{padding: 0.8rem 0}
.language span {
    font-size: 1rem; margin-right: 1rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.4rem;
    background: var(--grey-200)
 }
 .btn-container{
display:flex;
align-items: center;
justify-content: space-between}
.btn-container button{
border: none; 
font-size:1rem;
padding: 0.5rem 0.8rem;
border-radius: 0.6rem;  
cursor:pointer;
}
 .btn-container span{
    color: var(--grey-500);
    text-transform: capitalize;
    cursor:pointer;
    font-size:1rem;
    text-decoration: underline;
 }
 `
export default Projects