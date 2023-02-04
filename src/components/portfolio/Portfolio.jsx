import React, { useState } from 'react'
import "./portfolio.css"

const Portfolio = () => {
    const [toggleState, setToggleState] = useState(0);
  
    const toggleTab = (index) => {
    setToggleState(index);
    };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          <div> 
            <div className="image__1 portfolio__img"></div>
            {/* <i className="uil uil-web-grid portfolio__icon"></i> */}
            <h3 className="portfolio__title">
              BookSearch <br/> Website
            </h3>
          </div>

          <span className="portfolio__button" onClick={() =>
          toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right 
            portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times 
              portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">Book Search Website</h3>
              <p className="portfolio__modal-description">Book Search Website is an online platform that allows users to search for and find books from a wide range of genres and authors. 
              </p>

              <ul className="portfolio__modal-portfolio grid">
                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle 
                  portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                  I develop the user interface.
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle 
                  portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                  Web page development.
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle 
                  portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                  I create ux element interactions.
                  </p>
                </li>
              </ul>
              <a className="portfolio__button2" href="https://vh5202002.github.io/book-app/"> Check it out</a>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <div className="image__2 portfolio__img"></div>
            {/* <i className="uil uil-arrow portfolio__icon"></i> */}
            <h3 className="portfolio__title">
            PetTreat <br /> E-Commerce
            </h3>
          </div>

          <span className="portfolio__button" onClick={() =>
          toggleTab(2)}>
            View More 
            <i className="uil uil-arrow-right 
            portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times 
              portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">PetTreat E-Commerce</h3>
              <p className="portfolio__modal-description">
                Pet treats e-commerce is an online platform that provides a convenient way to shop for and purchase pet treats
              </p>

              <ul className="portfolio__modal-portfolio grid">
                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle 
                  portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                  I develop the user interface and backend.
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle 
                  portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                  Create routes and Error handler middleware
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle 
                  portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                  Create actions, constant and reducers with Redux
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle 
                  portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                  Developed login, payment, cart, review and order functions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <div className="image__3 portfolio__img"></div>
            {/* <i className="uil uil-arrow portfolio__icon"></i> */}
            <h3 className="portfolio__title">
            AI Image Generation <br /> App
            </h3>
          </div>

          <span className="portfolio__button" onClick={() =>
          toggleTab(3)}>
            View More 
            <i className="uil uil-arrow-right 
            portfolio__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times 
              portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">AI Image Generation App</h3>
              <p className="portfolio__modal-description">
              AI image generation app is a software that uses artificial provides multiple payment options for customer convenience and intelligence and machine learning algorithms to create new images.
              </p>

              <ul className="portfolio__modal-portfolio grid">
                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle 
                  portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                  Using React, Vite, Node.js, OpanAI APIs, Cloudinary and
                  MongoDB.
                  </p>    
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle 
                  portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                  Developed search, upload and share functions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Portfolio;
