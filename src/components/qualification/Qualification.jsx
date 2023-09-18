import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
   setToggleState(index);
  };
  return (
    <section className="qualification section" id='qualification'>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState  === 1 
            ? 
            "qualification__button qualification__active button--flex" 
            : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap 
              qualification__icon"></i>
              Education
          </div>

          <div className={toggleState  === 2 
            ? 
            "qualification__button qualification__active button--flex" 
            : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt 
              qualification__icon"></i>
              Experience
          </div>
        </div>
        
        <div className="qualification__sections">
          <div className={toggleState === 1 
          ? 
          "qualification__content qualification__content-active" 
          : "qualification__content"}>
            <div className="qualification__data">
              <div>
                  <h3 className="qualification__title">Computer System Technology</h3>
                  <span className="qualification__subtitle">
                    Canada - BCIT 
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2020 - 2022
                  </div>
              </div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

              <div>
                  <h3 className="qualification__title">XXX</h3>
                  <span className="qualification__subtitle">
                    Canada - BCIT 
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2019 - 2021
                  </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                  <h3 className="qualification__title">International Trade</h3>
                  <span className="qualification__subtitle">
                  Taiwan - Jinwen University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2015 - 2018
                  </div>
              </div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 
          ? 
          "qualification__content qualification__content-active" 
          : "qualification__content"}>
            <div className="qualification__data">
              <div>
                  <h3 className="qualification__title">My Social Media Web </h3>
                  <span className="qualification__subtitle">
                    A web-based platform that provides users with a centralized place to manage and interact with multiple social media accounts.                   
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2023 - Current
                  </div>
              </div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

              <div>
                  <h3 className="qualification__title">My Fitness Exercises Web</h3>
                  <span className="qualification__subtitle">
                    The platform typically offers workout plans and exercises tailored to specific goals
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2023 - 2023
                  </div>
              </div>
            </div>
            
            <div className="qualification__data">
              <div>
                  <h3 className="qualification__title">My YouTube App</h3>
                  <span className="qualification__subtitle">
                    A video-sharing platform that allows users to upload, view, and share videos. 
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2023 - 2023
                  </div>
              </div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

              <div>
                  <h3 className="qualification__title">AI Image Generation App</h3>
                  <span className="qualification__subtitle">
                    A software that uses artificial intelligence and machine learning algorithms to create new images
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2023 - 2023
                  </div>
              </div>
            </div>
            

            <div className="qualification__data">
              <div>
                  <h3 className="qualification__title">PetTreats-Ecommerce</h3>
                  <span className="qualification__subtitle">
                    An online platform that provides a convenient way to shop for and purchase pet treats.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2022 - 2022
                  </div>
              </div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
