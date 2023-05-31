import { Link } from "../Link.jsx";

export default function AboutPage(){
    return (
      <>
        <h1>About</h1>
        <div>
          <img src="https://media.licdn.com/dms/image/D4D03AQH51zPQu7GH9w/profile-displayphoto-shrink_400_400/0/1685478616013?e=1691020800&v=beta&t=-EzCCWGOA5H_xPL0CEeBgac-Y5yRarlCCFTh8-6strw" alt="Mateo's photo" />
          <p>I'm mateo</p>
        </div>
        <Link to='/'>Home</Link>
      </>
    )
  }