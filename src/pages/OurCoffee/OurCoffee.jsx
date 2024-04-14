// import React from 'react'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Images
import coffee1 from "../../assets/images/coffee1.jpg";
import coffee2 from "../../assets/images/coffee2.webp";
import coffee3 from "../../assets/images/coffee3.webp";

const OurCoffee = () => {
  return (
    <>
      <Helmet>
        <title>
          The Best Coffee from Starbucks Coffee: Starbucks Coffee Company
        </title>
      </Helmet>
      <section className="coffee-section">
        <div className="container">
          <div className="coffee-inner">
            <div className="content">
              <h1 className="title">Let&apos;s talk coffee</h1>
              <p className="text">
                Whether you&apos;re searching for something new to warm your
                mug, seeking the best brew method for your favorite blend or
                exploring our rarest offerings, you’ve come to the right place.
              </p>
              <div className="img">
                <img src={coffee1} alt="" />
              </div>
              <h2 className="subtitle">Find your favorite at-home coffee</h2>
              <p className="text mini">
                From K-Cup pods to Starbucks® Premium Instant, we offer a wide
                selection of coffee to fill your cup.
              </p>
              <Link to="/menu" className="btn colored">
                Browse our coffees
              </Link>
              <div className="extra">
                <p className="text">
                  Still undecided? Our new Coffee Quiz makes it easy to find the
                  Starbucks® coffee that&apos;s made to be yours. Just answer
                  five questions to find the one.
                </p>
                <Link to="/quiz" className="btn colored">
                  Start Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="coffee-section">
        <div className="container">
          <div className="coffee-inner">
            <div className="content">
              <div className="img">
                <img src={coffee2} alt="" />
              </div>
              <h2 className="subtitle">
                The rarest, most extraordinary coffees Starbucks has to offer
              </h2>
              <p className="text mini">
                Exceptional coffees from around the world. Sourced for the
                season, roasted at Starbucks Reserve® Roasteries and crafted
                with care.
              </p>
              <Link to="/menu" className="btn">
                Explore Starbucks Reserve®
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="coffee-section">
        <div className="container">
          <div className="coffee-inner">
            <div className="content">
              <div className="img">
                <img src={coffee3} alt="" />
              </div>
              <h2 className="subtitle">How to brew </h2>
              <p className="text mini">
                Whether you’re a coffee novice or a seasoned pro, we have all
                the tools you need to bring your brewing game to the next level.
              </p>
              <Link to="/menu" className="btn">
                Learn to brew your perfect cup
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="more-coffee">
        <div className="container">
          <div className="more-inner">
            <div className="content">
              <p className="mini-text">
                Starbucks and the Starbucks logo are registered trademarks of
                Starbucks Corporation used under license by Nestlé.
              </p>
              <p className="mini-text">
                Keurig, K-Cup, and the Keurig trade dress are trademarks of
                Keurig Green Mountain, Inc., used with permission. Pike Place is
                a registered trademark of The Pike Place Market PDA, used under
                license.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCoffee;
