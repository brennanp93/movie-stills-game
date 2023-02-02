import './SubmitForm.css'

export default function SubmitForm({ handleSubmit, incomingGuess, handleChange, minLengthAnswer }) {
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
      />
      <button type="submit"> Submit Answer</button>
    </form>
    </div>
  )
}