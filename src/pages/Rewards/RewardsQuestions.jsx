// import React from 'react'
import { Link } from "react-router-dom";

// Icons
import { RiShareBoxFill } from "react-icons/ri";

const RewardsQuestions = () => {
  return (
    <>
      <section className="questions-head">
        <div className="container">
          <div className="head-inner">
            <div className="content">
              <h2 className="title">Questions?</h2>
              <p className="text">
                We want to help in any way we can. You can ask your barista
                anytime or we’ve answered the most commonly asked questions{" "}
                <Link to="/about-us">right over here</Link>{" "}
                <RiShareBoxFill className="icon" /> .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="main-questions">
        <div className="main-colored">
          <div className="container">
            <div className="questions-inner">
              <div className="text-box">
                <p className="text">
                  At participating stores. Restrictions apply.
                </p>
                <p className="text">
                  1Excludes taxes and gratuities. At participating stores. Some
                  restrictions apply. Flights purchased close to departure may
                  not earn double Stars. Stars and miles may not be earned on
                  purchases of alcohol, Starbucks Cards and Starbucks Card
                  reloads. For details, visit{" "}
                  <Link>
                    deltastarbucks.com/terms <RiShareBoxFill className="icon" />
                  </Link>{" "}
                  .↩
                </p>
                <p className="text">
                  2At participating stores only. Some restrictions apply. Linked
                  Card members will earn 2% Cash Back on the full purchase price
                  of every Qualifying Purchase. Extra Star offer excludes taxes
                  and tips. Stars may not be earned on purchases of alcohol or
                  on reloads of Starbucks Cards that are not registered. For
                  details, visit{" "}
                  <Link>
                    Terms and Conditions <RiShareBoxFill className="icon" />
                  </Link>{" "}
                  . Bank of America, N.A. Member FDIC.↩
                </p>
              </div>
              <div className="mini-box">
                <h3 className="title">EARNING STARS</h3>
                <p className="text">
                  Stars cannot be earned on purchases of alcohol, Starbucks
                  Cards or Starbucks Card reloads.
                </p>
                <p className="text">
                  Earn 1 Star per $1 spent when you scan your member barcode in
                  the app, then pay with cash, credit/debit cards or mobile
                  wallets at participating stores. You can also earn 1 Star per
                  $1 spent when you link a payment method and pay directly
                  through the app.
                </p>
                <p className="text">
                  Earn 2 Stars per $1 spent when you load funds and pay with
                  your digital Starbucks Card in the app. You can also earn 2
                  Stars per $1 spent when you pay in-person at a participating
                  store with your registered physical Starbucks Card or scan
                  your member barcode in the app, and then use any physical
                  Starbucks Card (regardless of whether it is registered) to
                  complete the purchase.
                </p>
              </div>
              <div className="mini-box">
                <h3 className="title">TERMS OF USE</h3>
                <p className="text">
                  For full program details visit{" "}
                  <Link>
                    starbucks.com/rewards/terms{" "}
                    <RiShareBoxFill className="icon" />
                  </Link>{" "}
                  .
                </p>
                <p className="text">
                  Starbucks® Rewards benefits are available at participating
                  Starbucks stores. Not all stores have the ability to honor
                  Rewards at this time. Visit the{" "}
                  <Link>
                    Starbucks Store Locator <RiShareBoxFill className="icon" />
                  </Link>{" "}
                  and search for locations honoring “Redeem Rewards”.
                </p>
              </div>
              <div className="mini-box">
                <h3 className="title">BENEFITS</h3>
                <p className="text">
                  Free refills available during same in-store visit only. To
                  qualify for the Birthday Reward, you must have made at least
                  one Star-earning transaction.
                </p>
              </div>
              <div className="mini-box">
                <h3 className="title">REDEEMING REWARDS</h3>
                <p className="text">
                  Rewards cannot be redeemed for alcoholic beverages or
                  multi-serve items. You pay the difference for any beverage
                  customization over $1 and/or merchandise item over $20. Not
                  all stores honor tiered Rewards. Select stores redeem 200
                  Stars for free food or drink items only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RewardsQuestions;
