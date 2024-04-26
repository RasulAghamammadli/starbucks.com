// import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Images
import bg6 from "../../assets/images/home6.jpg";
import bg1 from "../../assets/images/home1.webp";
import bg2 from "../../assets/images/home2.webp";
import bg3 from "../../assets/images/home3.webp";
import bg4 from "../../assets/images/home4.webp";
import bg5 from "../../assets/images/home5.webp";

// components
import ProgressLinear from "../../components/Loading/ProgressLinear";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Starbucks Home Coffee Company</title>
      </Helmet>
      <ProgressLinear />
      <section className="home">
        <div className="container">
          <div className="home-inner">
            <div className="home-card-section">
              <div className="content-side">
                <div className="content-in">
                  <h2 className="title">Hop into half off</h2>
                  <p className="text">
                    This week, play the Spring It On Scavenger Hunt game to earn
                    50% off a spring treat—like a refreshing Lavender Lemonade.
                  </p>
                  <Link to="/rewards" className="btn">
                    Join the fun
                  </Link>
                </div>
              </div>
              <div className="img-side">
                <img src={bg6} alt="" />
              </div>
            </div>
            <div className="home-card-section">
              <div className="content-side">
                <div className="content-in">
                  <h2 className="title">Ooh la lavender</h2>
                  <p className="text">
                    Vibe into spring with the new caffeine-free Lavender Oatmilk
                    Chill, featuring subtle floral notes and real dragonfruit
                    pieces. Here for a limited time.
                  </p>
                  <Link to="/menu" className="btn">
                    Order now
                  </Link>
                </div>
              </div>
              <div className="img-side">
                <img src={bg1} alt="" />
              </div>
            </div>
            <div className="home-card-section">
              <div className="content-side">
                <div className="content-in">
                  <h2 className="title">Personal cups for good</h2>
                  <p className="text">
                    Your choice is a positive and responsible one—because
                    bringing your clean reusable cup helps our planet.
                  </p>
                  <Link to="/press" className="btn">
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="img-side">
                <img src={bg2} alt="" />
              </div>
            </div>
            <div className="home-card-section">
              <div className="content-side">
                <div className="content-in">
                  <h2 className="title">Positively delicious</h2>
                  <p className="text">
                    Go for a nondairy pick-me-up with 150 calories or less in a
                    grande. Choose the new Hazelnut Oatmilk Shaken Espresso or
                    classic Brown Sugar Oatmilk Shaken Espresso.
                  </p>
                  <Link to="/menu" className="btn">
                    Order now
                  </Link>
                </div>
              </div>
              <div className="img-side">
                <img src={bg3} alt="" />
              </div>
            </div>
            <div className="home-card-section">
              <div className="content-side">
                <div className="content-in">
                  <h2 className="title">Satisfying favorite</h2>
                  <p className="text">
                    The protein-packed Turkey Bacon, Cheddar & Egg White
                    Sandwich is such a tasty way to power your day.
                  </p>
                  <Link to="/menu" className="btn">
                    Order now
                  </Link>
                </div>
              </div>
              <div className="img-side">
                <img src={bg4} alt="" />
              </div>
            </div>
            <div className="home-card-section">
              <div className="content-side">
                <div className="content-in">
                  <h2 className="title">
                    Relax with a refreshing delivery deal
                  </h2>
                  <p className="text">
                    Get up? Please! Stay right where you are and enjoy 25% off
                    Starbucks orders of $20+ on Uber Eats, 4/8-4/14. Enjoy
                    unlimited redemptions, up to $7 off per order.*
                  </p>
                  <Link to="/menu" className="btn">
                    Order now
                  </Link>
                </div>
              </div>
              <div className="img-side">
                <img src={bg5} alt="" />
              </div>
            </div>
            <div className="inner-bottom">
              <div className="content">
                *25% off your Starbucks order on Uber Eats from 4/8-4/14. Max
                discount of $7. Fees and taxes still apply. Menu limited. See
                the Uber Eats app for availability & restrictions.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
