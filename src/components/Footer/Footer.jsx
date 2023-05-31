export default function Footer() {
  return (
    <footer className="footy">
      <div>
        &copy;{new Date().getFullYear()}
        &nbsp;Brennan Perez&nbsp;|&nbsp;
        <a href="mailto:namethatmovie@brennanperez.com" >Submit Feedback or Suggestions</a>
      </div>
    </footer>
  );
}
