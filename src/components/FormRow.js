import styled from 'styled-components'
const FormRow = ({ name, type, username, handle, value }) => {
  return (
    <Wrapper>
      <label htmlFor={name} className='label'>
        {name}
      </label>
      <input
        type={type}
        id={name}
        className='form-input'
        name={username}
        onChange={handle}
        value={value}
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .label {
    text-transform: capitalize;
  }
`
export default FormRow
