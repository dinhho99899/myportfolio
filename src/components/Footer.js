import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return <Wrapper>
      <p>&copy; <span id="date"></span> Van Dinh. All rights reserved.</p>
</Wrapper>
}
const Wrapper = styled.footer`
background: #222;
padding: 2rem;
color:white; display: grid;
  place-items: center;`
export default Footer