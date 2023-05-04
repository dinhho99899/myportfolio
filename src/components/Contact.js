import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const Contact = () => {
  return (
    <Wrapper className='section section-center'>
      <Title title='Get In Touch' />
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='phone'>
            <AiOutlinePhone />
            <p>0837139604</p>
          </div>
          <div>
            <GoLocation />
            <p className='address'>
              73/10, 46 street, Hiep Binh Chanh district, Thu Duc ward, Ho Chi
              Minh City
            </p>
          </div>
          <div>
            <AiOutlineMail />
            <p>dinhho99899@gmail.com</p>
          </div>
        </div>
        <form className='contact-form' id='contact'>
          <label htmlFor='name'>Name</label>
          <input type='text' className='form-input' id='name'></input>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' className='form-input'></input>
          <label htmlFor='message'>Message</label>
          <textarea type='text' id='message' className='form-input'></textarea>
          <button className='btn'>Send</button>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .contact-container {
    display: grid;
    align-items: center;
    font-size: 1rem;
    padding: 1rem 2rem;
  }
  .contact-info {
    font-size: 1.3rem;
  }
  .contact-info div {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  .address {
    text-transform: capitalize;
  }
  .form-input {
    display: block;
    width: 100%;
    margin: 1rem 0;
    padding: 0.7rem 0.4rem;
    outline: none;
    font-size: 1.1rem;
    border: none;
    border-radius: 0.3rem;
    background: var(--grey-100);
  }
  .form-input::placeholder {
    padding-left: 1rem;
  }
  @media screen and (min-width: 992px) {
    .contact-container {
      grid-template-columns: 1fr 1fr;
      column-gap: 1.2rem;
    }
  }
`
export default Contact
