import './Projects.css';
import proj1 from '../assets/work1.png';
import proj2 from '../assets/work2.png';
import proj3 from '../assets/work3.png';
import websiteMockup from '../assets/555.png';
import automationMockup from '../assets/777.png';

export default function Projects() {
  return (
    <section className="section projects-section" id="work">
      {/* SECTION 1: Mobile Apps (Visuals on Right) */}
      <div className="container project-row">
        <div className="projects-header">
          <div>
            <span className="section-number">02</span>
            <h2 className="text-sans text-large">Mobile Apps</h2>
            <ul className="project-bullets">
              <li>&mdash; React Native App, built with Google Antigravity, deployed to Vercel</li>
            </ul>
          </div>
        </div>

        <div className="projects-grid">
          <div className="project-item">
            <div className="iphone-bezel-wrapper">
              <div className="iphone-bezel">
                <div className="iphone-screen">
                  <img src={proj1} alt="Meal Planner App" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="project-item">
            <div className="iphone-bezel-wrapper">
              <div className="iphone-bezel">
                <div className="iphone-screen">
                  <img src={proj2} alt="Productivity App" />
                </div>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="iphone-bezel-wrapper">
              <div className="iphone-bezel">
                <div className="iphone-screen">
                  <img src={proj3} alt="Smart Explorer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Websites (Visuals on Left - row-reverse) */}
      <div className="container project-row row-reverse">
        <div className="projects-header">
          <div>
            <span className="section-number">03</span>
            <h2 className="text-sans text-large">Websites</h2>
            <ul className="project-bullets">
              <li>&mdash; Volunteer project supporting Ukrainian businesses, built with React and Vite, deployed to Vercel</li>
            </ul>
          </div>
        </div>

        <div className="single-project-wrapper">
          <div className="single-project-item">
            <div className="browser-mockup">
              <img src={websiteMockup} alt="Buy Ukrainian in Canada Landing Page Mockup" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Workflow Automation (Visuals on Right) */}
      <div className="container project-row">
        <div className="projects-header">
          <div>
            <span className="section-number">04</span>
            <h2 className="text-sans text-large">Workflow Automation</h2>
            <ul className="project-bullets">
              <li>&mdash; Image optimization and delivery pipeline dashboard automatically exporting assets to Slack</li>
            </ul>
          </div>
        </div>

        <div className="single-project-wrapper">
          <div className="single-project-item">
            <div className="browser-mockup">
              <img src={automationMockup} alt="Automated Graphic Work Dashboard" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
