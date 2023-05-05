import React from 'react'
import styled from 'styled-components'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import FormRow from './FormRow'
import FormArea from './FormArea'
const ContactForm = () => {
  const [state, setState] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_huaovw9',
        'template_3cw2q6n',
        form.current,
        'ccKdFoveDcv-szoYT'
      )
      .then(
        (result) => {
          toast.success('Thank you! Your message has been sent')
          setState({
            user_name: '',
            user_email: '',
            message: '',
          })
        },
        (error) => {
          toast.error('Sorry! There was an error')
        }
      )
  }
  return (
    <Wrapper>
      <form
        className='contact-form'
        id='contact'
        ref={form}
        onSubmit={sendEmail}
      >
        <FormRow
          name='name'
          type='text'
          username='user_name'
          value={state.user_name}
          handle={handleChange}
        />
        <FormRow
          name='email'
          type='email'
          username='user_email'
          value={state.user_email}
          handle={handleChange}
        />
        <FormArea
          name='message'
          type='text'
          username='message'
          value={state.message}
          handle={handleChange}
        />

        <button type='submit' className='btn' value='Send' onSubmit={sendEmail}>
          Send
        </button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .form-input {
    display: block;
    width: 100%;
    margin: 1rem 0;
    padding: 0.7rem 0.4rem;
    outline: none;
    font-size: 1.1rem;
    border: none;
    border-radius: 0.3rem;
    background: var(--input-color);
    color: var(--text-color);
  }
  .form-input::placeholder {
    padding-left: 1rem;
  }
`
export default ContactForm
