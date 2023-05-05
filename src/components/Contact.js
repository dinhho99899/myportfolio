import styled from 'styled-components'
import Title from './Title'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import ContactForm from './ContactForm'
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
        <ContactForm />
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
    gap: 1.5rem;
  }
  .contact-info {
    font-size: 1.3rem;
    display: grid;
    gap: 1rem;
  }
  .contact-info div {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  .address {
    text-transform: capitalize;
  }

  @media screen and (min-width: 992px) {
    .contact-container {
      grid-template-columns: 1fr 1fr;
      column-gap: 1.2rem;
    }
    .contact-info {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
`
export default Contact
