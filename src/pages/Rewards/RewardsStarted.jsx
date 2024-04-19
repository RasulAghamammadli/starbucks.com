// import React from 'react'
import { Link } from "react-router-dom";

// Images
import num1 from "../../assets/images/getting-num1.webp";
import num2 from "../../assets/images/getting-num2.webp";
import num3 from "../../assets/images/getting-num3.webp";

const RewardsStarted = () => {
  return (
    <section className="rewards-started">
      <div className="container">
        <div className="started-inner">
          <div className="header">
            <h2 className="title">Getting started is easy</h2>
            <p className="text">
              Earn Stars and get rewarded in a few easy steps.
            </p>
          </div>
          <div className="star-cards">
            <div className="card">
              <div className="num">
                <img src={num1} alt="" />
              </div>
              <div className="card-content">
                <h3 className="subtitle">Create an account</h3>
                <p className="subtext">
                  To get started, <Link to="/register">join now</Link>. You can
                  also <Link to="/app">join in the app</Link> to get access to
                  the full range of Starbucks® Rewards benefits.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="num">
                <img src={num2} alt="" />
              </div>
              <div className="card-content">
                <h3 className="subtitle">Order and pay how you’d like</h3>
                <p className="subtext">
                  Use cash, credit/debit card or save some time and pay right
                  through the app. You’ll collect Stars all ways.{" "}
                  <Link to="/pay">Learn how</Link>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="num">
                <img src={num3} alt="" />
              </div>
              <div className="card-content">
                <h3 className="subtitle">Earn Stars, get Rewards</h3>
                <p className="subtext">
                  As you earn Stars, you can redeem them for Rewards—like free
                  food, drinks, and more. Start redeeming with as little as 25
                  Stars!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsStarted;
