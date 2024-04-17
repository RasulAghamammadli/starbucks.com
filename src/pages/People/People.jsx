// import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Images
import poeple1 from "../../assets/images/poeple1.jpg";
import poeple2 from "../../assets/images/people2.jpg";
import poeple3 from "../../assets/images/people3.jpg";

const People = () => {
  return (
    <>
      <Helmet>
        <title>
          Building Supportive & Sustainable Communities: Starbucks Coffee
          Company
        </title>
      </Helmet>
      <section className="people-info">
        <div className="container">
          <div className="info-in">
            <div className="content">
              <h1 className="title">PUTTING PEOPLE FIRST</h1>
              <p className="text">
                We’re investing in the well-being of those we connect with,
                working hard toward a better future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="people-info-cards">
        <div className="container">
          <div className="info-cards-in">
            <div className="card">
              <div className="img">
                <img src={poeple1} alt="" />
              </div>
              <div className="content">
                <div className="content-in">
                  <h2 className="title">Inclusion & Diversity</h2>
                  <p className="text">
                    Our commitment to equal opportunity means cultivating an
                    environment where differences are embraced and building a
                    culture that fosters a sense of belonging.
                  </p>
                  <Link to="/about-us" className="btn">
                    Find examples
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={poeple2} alt="" />
              </div>
              <div className="content">
                <div className="content-in">
                  <h2 className="title">Opportunity</h2>
                  <p className="text">
                    We put our partners (employees) first, empowering them by
                    providing meaningful opportunities to pursue their
                    aspirations.
                  </p>
                  <Link to="/our-coffee" className="btn">
                    Read stories
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={poeple3} alt="" />
              </div>
              <div className="content">
                <div className="content-in">
                  <h2 className="title">Community</h2>
                  <p className="text">
                    Across the globe, we serve to strengthen each community we
                    are part of by being the neighbor every neighborhood wants.
                  </p>
                  <Link to="/planet" className="btn">
                    See how
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="people-info">
        <div className="container">
          <div className="info-in">
            <div className="content">
              <h1 className="title">SEE WHAT’S NEXT</h1>
              <p className="text">
                Follow the latest ways we’re supporting and strengthening the
                people around us.
              </p>
              <Link to="/planet" className="btn">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
