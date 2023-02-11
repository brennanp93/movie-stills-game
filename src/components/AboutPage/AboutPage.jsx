export default function AboutPage({setAboutPage}) {

  
  return (
    <>
      <div>
        <h2>Greetings!</h2>
        <h3>Looks like this is your first time playing! (Or you recently cleared your local storage!)</h3>
        <h3>Take a look at the below information to help you get started playing this game.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae, quia praesentium itaque quasi aperiam. Est minus aperiam, harum doloremque consequatur vitae quis repellendus quaerat iusto officia ratione dolores quo?</p>
        <button onClick={() => setAboutPage(true)}>Let's Play!</button>
      </div>

    </>
  )
}