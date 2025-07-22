import React from 'react'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">Boulder Builders</h1>
          <p className="hero-subtitle">Where community meets technology</p>
          <p className="hero-description">
            We're a community of Boulderites gathering to build solutions for our city. 
            Through collaborative design sessions, we explore local challenges and create 
            together—with technology as our tool and community as our strength.
          </p>
          <div className="hero-cta">
            <div className="next-meetup">
              <span className="meetup-label">Next Gathering</span>
              <span className="meetup-date">Tuesday, July 29th • 6:30 PM</span>
            </div>
            <a 
              href="https://lu.ma/boulder-builders" 
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us →
            </a>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="principles">
        <div className="container">
          <div className="principles-grid">
            <div className="principle">
              <h3>Give First</h3>
              <p>We show up to support one another. Every gathering starts with generosity—sharing skills, ideas, and encouragement.</p>
            </div>
            <div className="principle">
              <h3>Start Small</h3>
              <p>Simple solutions first. We build incrementally, testing and learning as we go, rather than over-engineering from the start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Emerging Section */}
      <section className="emerging">
        <div className="container">
          <h2>What's Emerging</h2>
          <p className="section-intro">
            Coming soon: This is where we'll showcase the projects and solutions we build together.
          </p>
          <div className="emerging-grid">
            <div className="emerging-item">
              <span className="emerging-category">Coming Soon</span>
              <h4>Your Project Here</h4>
              <p>Join us at our next gathering to start building something meaningful for Boulder.</p>
            </div>
            <div className="emerging-item">
              <span className="emerging-category">Coming Soon</span>
              <h4>Community Solutions</h4>
              <p>Together we'll identify challenges and create tools that serve our neighbors.</p>
            </div>
            <div className="emerging-item">
              <span className="emerging-category">Coming Soon</span>
              <h4>Shared Learning</h4>
              <p>Every session brings new skills and connections as we grow together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Build Section */}
      <section className="how-we-build">
        <div className="container">
          <h2>How We Build Together</h2>
          <div className="build-process">
            <div className="process-item">
              <h3>
                <a href="https://www.localasterisk.agency/post/the-who-behind-the-why-work" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{color: 'inherit', textDecoration: 'none'}}
                >
                  Communal* Design
                </a>
              </h3>
              <p>
                We practice <a href="https://www.localasterisk.agency/post/the-who-behind-the-why-work" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{color: 'inherit', textDecoration: 'underline'}}
                >Communal* Design</a>—bringing diverse perspectives together 
                to understand problems deeply before jumping to solutions.
              </p>
            </div>
            <div className="process-item">
              <h3>Technology as a Team Member</h3>
              <p>
                We embrace AI and modern tools as collaborators, not replacements. 
                Technology amplifies our human creativity and connection.
              </p>
            </div>
            <div className="process-item">
              <h3>Everyone Can Build</h3>
              <p>
                No coding experience? No problem. We believe everyone has something 
                valuable to contribute—ideas, feedback, connections, or enthusiasm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="join">
        <div className="container">
          <h2>Ready to Build with Us?</h2>
          <p className="join-description">
            Our gatherings are welcoming, collaborative, and focused on real impact. 
            Come as you are—bring your curiosity, your ideas, and your desire to 
            make Boulder better.
          </p>
          <a 
            href="https://lu.ma/boulder-builders" 
            className="cta-button cta-button-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Upcoming Events →
          </a>
          <p className="join-note">
            Every Boulder Builders meetup is unique, but we always teach practical skills 
            and help you learn to use technology to bring your visions to life.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Boulder Builders • Where community meets technology</p>
          <p className="footer-links">
            <a href="https://lu.ma/boulder-builders">Events</a>
            {/* Add more links as needed */}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App