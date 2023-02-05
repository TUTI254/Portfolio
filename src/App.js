/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import wave from "./assets/my.gif";
import me from "./assets/about.jpeg";

function App() {
  return (
    <>
      <div className="headerContainer">
        <div className="headerTextContainer">
            <h1 className="h1">
                <span className="hello"> Hello World!
                </span>
                <span className="name"> I am Collins Tuti </span>
            </h1>

            <div>
                <ul className="topNavigationContainer">
                    <li className="nav-list"><a href="#aboutContainer">About</a></li>
                    <li className="nav-list"><a id="portfolio"
                            // eslint-disable-next-line no-script-url
                            href="javascript:alert('Portfolio coming soon!')"
                            target="blank">Resume</a>
                    </li>
                    <li className="nav-list"><a id="contact" href="#contactContainer">Contact</a></li>
                </ul>
            </div>

        </div>

        <img src={me} alt=""/>

    </div>

    <section id="aboutContainer">

        <h3 className="aboutHeaderText">
        <img src={wave} alt="wave" width={40} height={40} />
            Get to know Who is Tuti ? 
        </h3>

        <h4>I am Software Engineer
        </h4>
        <p>Hi, I'm a 21-year-old software engineer from Nairobi, 🇰🇪 Kenya with a passion for <span className="sp">JavaScript</span>. I believe in the power of collaboration and am always eager to work with other engineers to create beautiful and impactful products. With my technical skills and team-focused mindset, I am confident in my ability to make a meaningful contribution to any project. Let's build something great together!  I am an excellent resource to have on your team. A <span className="sp">Software Engineer</span> with a hunger for success!</p>

        <p>I landed my first role in tech at a startup company when i was 19 With just  a few projects under my belt on my local machine but i was ready to dive into new the tech world and show my passion for learning and engineering.
        </p>

        <p>I am a music lover who enjoys listening to music while coding. My hobbies include spending time with friends and family, watching anime, trying new cuisines, and following the English Premier League.
        </p>

    </section>

    <section className="skills">
        <h3> Skills </h3>

        <p>
            JavaScript, HTML/CSS, Scss, React JS,
            Python, React Query, NodeJS, Express JS,
            PostgreSQL, MySQL, Git,
            GitHub, Php, Django, Flutter, Slack, Jira.
        </p>


    </section>


    <section id="contactContainer">

        <h3 className="contactHeaderText">Reach me:
        </h3>

        <ul className="contactNavContainer">

            <li className="contactNav"><a href="collinsamwayi254@gmail.com"> collinsamwayi254@gmail.com </a></li>
            <li className="contactNav"><a href="https://github.com/TUTI254" target="blank"> GitHub
                </a></li>
            <li className="contactNav"><a href="https://www.linkedin.com/in/collins-amwayi-578a96226/" target="blank"> LinkedIn
                </a></li>

        </ul>

    </section>
    </>
  );
}

export default App;
