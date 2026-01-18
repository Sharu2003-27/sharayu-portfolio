import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <>
            <main className="home-main-section" >
                <section>
                    <div className='main-heading'>
                        <h1 className='heading-two'>Sharayu Borude</h1>
                        <h2 className='heading-three'>Full Stack Developer | MERN </h2>
                    </div>
                </section>

                <hr className='line-two'/>

                    <div className="para-wrapper">
                        <p>A dedicated learner exploring Full Stack Development and modern web technologies.</p>
                        <p>Building my full-stack development journey with React, Node.js, and MongoDB.</p>
                    </div>
                    <div className='home-page-buttons'>
                        <button className='first-btns'>
                            <a href="#contact">Contact Me</a>
                        </button>
                        <button className='second-btns'>
                            <a href="https://drive.google.com/file/d/1xvXFeOi582jyJYnR8xTw-x8ZSfAV8c0T/view?usp=sharing" target="_blank">Resume</a>
                        </button>
                    </div>
              

                  <hr className='line-two'/>

                <section className='info-two'>
                    <div>
                        <h2><strong>Teck Toolbox</strong></h2>
                        <p>Technologies and Tools I am familiar and work with</p>
                        <ul className='tech-list'>
                            <li className='tech-item'>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>

                            <li>JavaScript (ES6+)</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>Git</li>
                            
                            <li>Next.js</li>
                            <li>Mongoose</li>
                            <li>Vercel</li>
                            <li>CSS3</li>
                            
                            <li>GitHub</li>
                            <li>Bootstrap</li>
                            <li>Chrome DevTools</li>
                            <li>Postman</li>

                            <li>Context API</li>
                            <li>Vite</li>
                            <li>VS Code</li>
                            <li>npm / pnpm</li>

                            <li>Netlify</li>
                        </ul>
                    </div>
                </section>

                <hr className='line-two'/>

                <section id="contact" className="contact-section">
                    <h2><strong>Connect Me</strong></h2>

                    <div className="insta-icons">
                        <span className="insta-icon">
                          <Link to="https://www.linkedin.com/in/sharayuborude2003/" target="_blank" >
                             <img src="/assets/linkedin.png" alt="Linkedin" className="insta-icon-size" />
                          </Link>
                        </span>
                        <span className="insta-icon">
                          <Link to="https://github.com/Sharu2003-27" target="_blank" >
                             <img src="/assets/github.png" alt="Github" className="insta-icon-size" />
                          </Link>
                        </span>
                        <span className="insta-icon">
                          <Link to="https://x.com/BorudeShar86201" target="_blank" >
                             <img src="/assets/twitter.png" alt="Twitter" className="insta-icon-size" />
                          </Link>
                        </span>
                        <span className="insta-icon">
                          <Link to="https://www.instagram.com/sharu_2003?igsh=MTRlN3UxejA1NmNjNQ==" target="_blank" >
                             <img src="/assets/instagram.png" alt="Instagram" className="insta-icon-size" />
                          </Link>
                        </span>
                    </div>
                </section>
            </main> 
            <hr className='line-one'/>
        </>
    );
};      

export default Home;