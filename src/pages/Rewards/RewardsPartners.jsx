// import React from 'react'
import { Link } from "react-router-dom";

// Images
import box1 from "../../assets/images/delta-skymiles.webp";
import box2 from "../../assets/images/bank-of-america.webp";
import star1 from "../../assets/images/star-left.png";
import star2 from "../../assets/images/star-right.png";

// Icons
import { RiShareBoxFill } from "react-icons/ri";

const RewardsPartners = () => {
  return (
    <section className="partners">
      <div className="outer-bg">
        <div className="inner-box">
          <div className="container">
            <div className="content">
              <div className="star">
                <img src={star1} alt="" />
              </div>
              <div className="content-inner">
                <div className="header">
                  <h2 className="title">Keep the Rewards Coming</h2>
                  <p className="text">
                    The Rewards don&apos;t stop at your morning coffee. Join
                    Starbucks® Rewards and unlock perks from our partners, all
                    while earning more Stars.
                  </p>
                </div>
                <div className="boxes">
                  <div className="box">
                    <div className="img">
                      <img src={box1} alt="" />
                    </div>
                    <p className="text">
                      <Link>
                        Link your Delta SkyMiles®{" "}
                        <RiShareBoxFill className="icon" />
                      </Link>{" "}
                      and Starbucks® Rewards accounts to earn 1 mile per $1
                      spent at Starbucks and double Stars on Delta travel days.1
                    </p>
                  </div>
                  <div className="box">
                    <div className="img">
                      <img src={box2} alt="" />
                    </div>
                    <p className="text">
                      <Link>
                        Link your Bank of America{" "}
                        <RiShareBoxFill className="icon" />
                      </Link>{" "}
                      eligible card and Starbucks® Rewards account to earn 2%
                      Cash Back and Bonus Stars on qualifying Starbucks in-app
                      purchases.2
                    </p>
                  </div>
                </div>
                <div className="button-side">
                  <Link to="/register" className="btn">
                    Join Starbucks® Rewards
                  </Link>
                </div>
              </div>
              <div className="star">
                <img src={star2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsPartners;
