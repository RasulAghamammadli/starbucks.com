// import React from 'react'
import { Link } from "react-router-dom";

const RewardsHero = () => {
  return (
    <>
      <div className="banner" >
        <div className="container">
          <div className="banner-in">
            <h1 className="subhead">Starbucks® Rewards</h1>
            <Link to="/app" className="btn">
              Join in the app
            </Link>
          </div>
        </div>
      </div>
      <section className="hero">
        <div className="desktop-hero">
          <div className="container">
            <div className="desktop-inner">
              <div className="content-side">
                <div className="content">
                  <h2 className="title">
                    FREE COFFEE <br /> IS A TAP AWAY
                  </h2>
                  <p className="text">Join now to start earning Rewards.</p>
                  <div className="join-box">
                    <Link to="/register" className="btn">
                      Join now
                    </Link>
                    <p className="text">
                      Or <Link to="/app">join in the app</Link> for the best
                      experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-hero">
          <div className="container">
            <div className="mobile-inner">
              <div className="content">
                <h2 className="title">
                  FREE COFFEE <br /> IS A TAP AWAY
                </h2>
                <p className="text">Join now to start earning Rewards.</p>
                <div className="join-box">
                  <Link to="/app" className="btn">
                    Join in the app
                  </Link>
                  <p className="text">
                    <Link to="/register">Or join online</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RewardsHero;
