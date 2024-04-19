// import React from 'react'
import { Link } from "react-router-dom";

// Images
import extra1 from "../../assets/images/extra1.webp";
import extra2 from "../../assets/images/extra2.webp";
import extra3 from "../../assets/images/extra3.webp";

const RewardsExtras = () => {
  return (
    <section className="rewards-extras">
      <div className="container">
        <div className="extras-inner">
          <div className="header">
            <h2 className="title">Endless Extras</h2>
            <p className="text">
              Joining Starbucks® Rewards means unlocking access to exclusive
              benefits. Say hello to easy ordering, tasty Rewards and—yes, free
              coffee.
            </p>
          </div>
          <div className="extra-cards">
            <div className="card">
              <div className="img">
                <img src={extra1} alt="" />
              </div>
              <div className="card-content">
                <h3 className="subtitle">Fun freebies</h3>
                <p className="subtext">
                  Not only can you earn free coffee, look forward to a birthday
                  treat plus coffee and tea refills.
                </p>
                <Link to="/menu">Learn more</Link>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={extra2} alt="" />
              </div>
              <div className="card-content">
                <h3 className="subtitle">Order & pay ahead</h3>
                <p className="subtext">
                  Enjoy the convenience of in-store, curbside or drive-thru
                  pickup at select stores.
                </p>
                <Link to="/pay">Learn more</Link>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={extra3} alt="" />
              </div>
              <div className="card-content">
                <h3 className="subtitle">Get to free faster</h3>
                <p className="subtext">
                  Earn Stars even quicker with Bonus Star challenges, Double
                  Star Days and exciting games.
                </p>
                <Link to="/menu">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsExtras;
