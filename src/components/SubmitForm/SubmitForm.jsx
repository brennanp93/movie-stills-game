// import './SubmitForm.css'
// import styled from "styled-components";

export default function SubmitForm({ handleSubmit, incomingGuess, handleChange, minLengthAnswer }) {

//   const StyledButton = styled.button`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <input
        className='mb-4'
        autoComplete="off"
        name="Guess"
        value={incomingGuess}
        placeholder="Enter Your Guess"
        onChange={handleChange}
        minLength={minLengthAnswer}
        required={true}
      />

      <button type="submit"> Submit Answer</button>
    </form>
    </div>
  )
}