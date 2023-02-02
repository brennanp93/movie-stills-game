import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='game-box' >
        &copy; {new Date().getFullYear()} Copyright:
        <a 
        // className='text-dark' href='https://github.com/brennanp93'
        >
          &nbsp; Brennan Perez
        </a>
      </div>
    </footer>
  )
}