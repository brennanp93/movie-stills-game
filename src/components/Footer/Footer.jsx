export default function Footer() {
  return (
    <footer>
      <div className='text-center p-3' >
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