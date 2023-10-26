import React, { useState } from 'react'
import "../Styles/About.css";
function About() {
  const [activeState, setActiveState] = useState('Skills')
  function activeTab(tab) {
    setActiveState(tab)
  }
  return (
    <div className='container-fluid aboutSection'>
      
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-1'></div>

          <div className='col-md-3'>
            <div className='photoBg border-dark rounded-2 bg-dark'>
              <img className='aboutPhoto' src={process.env.PUBLIC_URL + "/assets/aboutImage.png"} alt="" />
            </div>
          </div>

          <div className='col-md-1'></div>

          <div className='col-md-5'>
            <h2>About Me</h2>
            <p className='text-secondary'>I am a web developer 👨‍💻 with 1.5 years of experience in the IT industry, specializing in building web applications using JavaScript, React.js, Bootstrap, and various other libraries and frameworks. I enjoy designing websites and making them functional. I am constantly expanding my skills and knowledge to build websites with new technologies.
            </p>

            {/* Skills , Experience , Education */}
            <div className='allSkillsSet'>
              <div className='text-secondary'>
                <b><p className={`skillsSets d-inline-block me-2 ${activeState === 'Skills' ? 'active' : ''}`}
                  onClick={() => activeTab('Skills')}>Skills</p></b>
                <b><p className={`skillsSets d-inline-block mx-2 ${activeState === 'Experience' ? 'active' : ''}`} onClick={() => activeTab('Experience')}>Experience</p></b>
                <b><p className={`skillsSets d-inline-block mx-2 ${activeState === 'Education' ? 'active' : ''}`}
                  onClick={() => activeTab('Education')}>Education</p></b>
              </div>
              {activeState === "Skills" ?
                <div className='webDevelopmentSkill text-secondary text-uppercase'>
                  <p><b>Languages: <span>HTML5 , CSS3 , Javascript</span></b></p>
                  <p><b>Frameworks: <span>React JS , Bootstrap , Tailwind CSS</span></b></p>
                  <p><b>Source Controls: <span>Git / Github</span></b></p>
                  <p><b>Designing Tool: <span>Canva</span></b></p>
                </div> :
                activeState === "Experience" ?
                  <div className='experience text-secondary'>
                    <div className='d-flex align-items-center'>
                      <div className='logos'>
                      <img className='companyLogo' src={process.env.PUBLIC_URL + "/assets/codeHuddleImage.jpg"} alt="ch-pic" />
                    </div>
                    <div>
                      <p className='px-2 m-0'><b>Code Huddle: <span>October-2021 to August-2022</span></b></p>
                      <p className='px-2 m-0'>Frontend Web Developer</p>
                    </div>
                    </div>

                    <div className='d-flex align-items-center py-2'>
                      <div className='logos'>
                      <img className='companyLogo' src={process.env.PUBLIC_URL + "/assets/codSoftLogo.jpg"} alt="ch-pic" />
                    </div>
                    <div>
                      <p className='px-2 m-0'><b>CodSoft: <span>October-2023</span></b></p>
                      <p className='px-2 m-0'>Web Development Internship</p>
                    </div>
                    </div>
                    <div className='d-flex align-items-center'>
                      <div className='logos'>
                      <img className='companyLogo' src={process.env.PUBLIC_URL + "/assets/fahadTechSolImg.jpg"} alt="ch-pic" />
                    </div>
                    <div>
                      <p className='px-2 m-0'><b>Fahad Tech Solution: <span>May-2023 to Present</span></b></p>
                      <p className='px-2 m-0'>Frontend Developer</p>
                    </div>
                    </div>
                  </div> :
                  <div className='education text-secondary text-uppercase'>
                    <p className='courseYear mb-0'><b>2021</b></p>
                    <p className='courseTitle'><b>Frontend Develpment Training from PITB Lahore</b></p>
                    <p className='courseYear mb-0'><b>2017</b></p>
                    <p className='courseTitle'><b>B.S<span className='text-lowercase'>c </span>Mechanical Engineering Technology from UET Lahore</b></p>
                  </div>
              }

            </div>

          </div>
          <div className='col-md-2'></div>

        </div>
      </div>
     
    </div>
  )
}

export default About
