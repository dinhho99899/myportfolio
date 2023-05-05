import React, { useState } from 'react'
import styled from 'styled-components'
import { projects } from './data'
import Title from './Title'
import Project from './Project'
const Projects = () => {
  const [allProjects, setProject] = useState(projects)
  const handleClick = (id) => {
    const temPProjects = allProjects.filter((item) => item.id !== id)
    setProject(temPProjects)
  }
  return (
    <Wrapper id='projects'>
      <section className='section section-center'>
        {allProjects.length > 0 && <Title title='Projects' />}
        <section className='projects-section'>
          {allProjects.map((item) => {
            return <Project key={item.id} handleClick={handleClick} {...item} />
          })}
        </section>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--backgound-grey);
  .projects-section {
    margin-top: 2rem;
    display: grid;
    gap: 1.5rem;
    align-items: flex-start;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  }
`
export default Projects
