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
                            href="https://drive.google.com/file/d/1p5lglyXfWrG1Uqr05wnehktV4tdz4xCH/view?usp=sharing"
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

        <p>I am an excellent resource to have on your team. A <span className="sp">Software
                Engineer</span> with a Product and Startup Management background. I have built multiple web applications with Javascript, React, Redux, React Query, HTML, CSS and I have good familiarity
                with Nodejs, Express, MongoDB. </p>

        <p>I have managed International Accelerator programs as a Program Manager for Facebook, Airbus, GIZ, Google for Startups,
        EFInA and more, supporting over 60 technology startups.
        </p>

        <p>Looking to be a part of Engineering teams in Agile and Innovative Technology companies. Got any exciting
            opportunities?
            kindly send me an email - <span className="sp">rotimidokun@gmail.com</span>.
        </p>

    </section>

    <section className="skills">
        <h3> Skills </h3>

        <p>
            JavaScript, HTML/CSS, Scss, React JS,
            Redux, React Query, NodeJS, Express JS,
            MongoDB, Git,
            GitHub, PostgreSQL, Trello, Slack, Jira.
        </p>


    </section>


    <section id="contactContainer">

        <h3 className="contactHeaderText">Reach me:
        </h3>

        <ul className="contactNavContainer">

            <li className="contactNav"><a href="mailto:rotimidokun@gmail.com"> rotimidokun@gmail.com </a></li>
            <li className="contactNav"><a href="https://github.com/rotimidokun" target="blank"> GitHub
                </a></li>
            <li className="contactNav"><a href="https://www.linkedin.com/in/tosin-rotimidokun/" target="blank"> LinkedIn
                </a></li>
            <li className="contactNav"><a href="https://twitter.com/rotimidokun" target="blank"> Twitter </a></li>
            <li className="contactNav"><a href="https://web.facebook.com/Tdoks" target="blank"> Facebook </a></li>
            <li className="contactNav"><a href="https://www.instagram.com/rotimidokun/" target="blank"> Instagram</a>
            </li>

        </ul>

    </section>
    </>
  );
}

export default App;
