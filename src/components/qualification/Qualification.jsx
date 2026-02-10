import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }


  return (
    <section id="qualification" className="qualification section">
          <h2 className='section__title'>Qualification</h2>
          <span className='section__subtitle'>My Personal Journey</span>

          <div className='qualification__container container'>
              <div className='qualification__tabs'>
                  <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
                      <i className='uil uil-graduation-cap qualification__icon'></i>
                      Education
                  </div>

                  <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
                      <i className='uil uil-briefcase qualification__icon'></i>
                      Experience
                  </div>
              </div>

              <div className='qualification__sections'>
                  <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                      
                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Integrated M.Tech Computer Science Engineering with Specilization in Business Analytics</h3>
                              <span className='qualification__subtitle'>Vellore Institute of Technology - Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  2022 - Present
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>High School</h3>
                              <span className='qualification__subtitle'>John Dewey Mat. Hr. Sec. School</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  2019 - 2022
                              </div>
                          </div>

                          
                      </div>


                  </div>

                  <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                      {/* AIC */}
                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Founder & Vice President</h3>
                              <span className='qualification__subtitle'>Artificial Intelligence Community - VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  Feb 2024 - Present
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      {/* AI Agentic */}

                      <div className='qualification__data data qualification_data-right'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>AI Agentic Automation Developer Intern</h3>
                              <span className='qualification__subtitle'>Zuntra Digital, Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  May 2025 - Present
                              </div>
                          </div>

                          
                      </div>

                      {/* Huzzler */}

                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Product Analyst & Research Intern</h3>
                              <span className='qualification__subtitle'>Huzzler</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  Jun 2024 - Oct 2024
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                       {/* BA */}

                      <div className='qualification__data data qualification_data-right'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Business Analyst & Research Fellow</h3>
                              <span className='qualification__subtitle'>Zuntra Digital, Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  May 2024 - Aug 2024
                              </div>
                          </div>
                      </div>

                     {/* UIUX */}
                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>UI/UX Developer Intern</h3>
                              <span className='qualification__subtitle'>Jivan Health</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  Jun 2024 - July 2024
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                       {/* ML */}
                      <div className='qualification__data data qualification_data-right'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Machine Learning Intern</h3>
                              <span className='qualification__subtitle'>National Institute of Trichy</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  May 2024 - July 2024
                              </div>
                          </div>
                      </div>



                       {/* ML */}
                      <div className='qualification__data data qualification_data-right'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Deep Learning & Machine Learning Intern</h3>
                              <span className='qualification__subtitle'>Indian Space Research Organisation (ISRO)</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  Mar 2023 - Jun 2023
                              </div>
                          </div>
                      </div>



                  </div>
              </div>
          </div>
    </section>
    
  )
}

export default Qualification
