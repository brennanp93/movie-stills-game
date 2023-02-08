// import './Footer.css'

export default function Footer() {
  return (
    <footer className="footy">
      <div >
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