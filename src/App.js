// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Create from './Componets/Create';
// import ThemsPage from './Componets/ThemsPage';
// import Resume from './Componets/Resume';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

// AOS.init();

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <header>
//           <nav className="navbar">
//             <div className="logo">ResumePro</div>
//             <ul className="nav-links">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/themes">Themes</Link></li>
//               <li><Link to="/create">Create</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </nav>
//         </header>
//         <main>
//           <Switch>
//             <Route path="/" exact>
//               <section className="hero">
//                 <div className="hero-content" data-aos="fade-up">
//                   <h1>Build a <span>Stunning</span> Resume in Minutes</h1>
//                   <p>Stand out from the crowd with professional and creative resume templates.</p>
//                   <Link to="/create">
//                     <button className="cta-btn">Get Started</button>
//                   </Link>
//                 </div>
//               </section>

//               <section className="features" data-aos="fade-right">
//                 <h2>Why Choose ResumePro?</h2>
//                 <div className="feature-cards">
//                   <div className="card">
//                     <h3>Easy Customization</h3>
//                     <p>Quickly build your resume with drag-and-drop simplicity.</p>
//                   </div>
//                   <div className="card">
//                     <h3>Professional Templates</h3>
//                     <p>Choose from modern templates designed to impress recruiters.</p>
//                   </div>
//                   <div className="card">
//                     <h3>Instant Download</h3>
//                     <p>Download your resume as PDF with a single click.</p>
//                   </div>
//                 </div>
//               </section>

//               <section className="call-to-action" data-aos="fade-left">
//                 <h2>Ready to Land Your Dream Job?</h2>
//                 <p>Create your resume now with ResumePro.</p>
//                 <Link to="/create">
//                   <button className="cta-btn secondary">Start Now</button>
//                 </Link>
//               </section>
//             </Route>

//             <Route path="/create" component={Create} />
//             <Route path="/themes" component={ThemsPage} />
//             <Route path="/resume" component={Resume} />
//           </Switch>
//         </main>
//         <footer>
//           <div className="footer-content">
//             <p>&copy; 2024 ResumePro. All rights reserved.</p>
//             <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About</Link></li>
//               <li><Link to="/create">Create Resume</Link></li>
//               <li><Link to="/themes">Themes</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </div>
//         </footer>
//       </div>  
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Create from './Componets/Create';
import ThemesPage from './Componets/ThemsPage';
import Resume from './Componets/Resume';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <nav className="navbar">
            <div className="logo">ResumePro</div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/themes">Themes</Link></li>
              <li><Link to="/create">Create</Link></li>
              {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
          </nav>
        </header>

        <main>
          {/* 3D cartoon-like background elements */}
          <div className="background-3d">
            <div className="cartoon-element"></div>
            <div className="cartoon-element"></div>
            <div className="cartoon-element"></div>
          </div>

          <Switch>
            <Route path="/" exact>
              <section className="hero">
                <div className="hero-content" data-aos="fade-up">
                  <h1>Build a <span>Stunning</span> Resume in Minutes</h1>
                  <p>Stand out from the crowd with professional and creative resume templates.</p>
                  <Link to="/create">
                    <button className="cta-btn">Get Started</button>
                  </Link>
                </div>
              </section>

              <section className="features" data-aos="fade-right">
                <h2>Why Choose ResumePro?</h2>
                <div className="feature-cards">
                  <div className="card">
                    <h3>Easy Customization</h3>
                    <p>Quickly build your resume with drag-and-drop simplicity.</p>
                  </div>
                  <div className="card">
                    <h3>Professional Templates</h3>
                    <p>Choose from modern templates designed to impress recruiters.</p>
                  </div>
                  <div className="card">
                    <h3>Instant Download</h3>
                    <p>Download your resume as PDF with a single click.</p>
                  </div>
                </div>
              </section>

              {/* Call to Action Section */}
              <section className="call-to-action" data-aos="fade-left">
                <div className="cta-content">
                  <h2>Ready to Land Your Dream Job?</h2>
                  <p>Create your resume now with ResumePro.</p>
                  <Link to="/create">
                    <button className="cta-btn secondary">Start Now</button>
                  </Link>
                </div>
              </section>
            </Route>

            <Route path="/create" component={Create} />
            <Route path="/themes" component={ThemesPage} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </main>

        <footer>
          <div className="footer-content">
            <p>&copy; 2024 ResumePro. All rights reserved.</p>
            <ul>
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/about">About</Link></li> */}
              <li><Link to="/create">Create Resume</Link></li>
              <li><Link to="/themes">Themes</Link></li>
              {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
