// import React from 'react'

// Images
import cash1 from "../../assets/images/cash1.png";
import cash2 from "../../assets/images/cash2.png";
import cash3 from "../../assets/images/cash3.png";
import cash4 from "../../assets/images/cash4.png";

const RewardsCash = () => {
  return (
    <section className="rewards-cash">
      <div className="cash-colored">
        <div className="container">
          <div className="cash-inner">
            <div className="header">
              <h2 className="title">Cash or card, you earn Stars</h2>
              <p className="text">
                No matter how you pay, you can earn Stars with your morning
                coffee. Those Stars add up to (really delicious) Rewards.
              </p>
            </div>
            <div className="cash-content">
              <div className="content-head">
                <h1 className="title">
                  1<span>★</span> per dollar
                </h1>
                <p className="text">Pay as you go</p>
              </div>
              <div className="content-main">
                <div className="item">
                  <div className="img">
                    <img src={cash1} alt="" />
                  </div>
                  <div className="info">
                    <h3 className="subhead">Scan and pay separately</h3>
                    <p className="subtext">
                      Use cash or credit/debit card at the register.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    <img src={cash2} alt="" />
                  </div>
                  <div className="info">
                    <h3 className="subhead">Save payment in the app</h3>
                    <p className="subtext">
                      Check-out faster by saving a credit/debit card or PayPal
                      to your account. You’ll be able to order ahead or scan and
                      pay at the register in one step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cash-content">
              <div className="content-head">
                <h1 className="title">
                  2<span>★</span> per dollar
                </h1>
                <p className="text">Add funds in the app</p>
              </div>
              <div className="content-main">
                <div className="item">
                  <div className="img">
                    <img src={cash3} alt="" />
                  </div>
                  <div className="info">
                    <h3 className="subhead">Preload</h3>
                    <p className="subtext">
                      To save time and earn Stars twice as fast, add money to
                      your digital Starbucks Card using any payment option. Scan
                      and pay in one step or order ahead in the app.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="img">
                    <img src={cash4} alt="" />
                  </div>
                  <div className="info">
                    <h3 className="subhead">Register your gift card</h3>
                    <p className="subtext">
                      Then use it to pay through the app. You can even
                      consolidate balances from multiple cards in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsCash;
