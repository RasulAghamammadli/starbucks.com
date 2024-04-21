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
      {/* section */}
    </>
  );
};

export default RewardsQuestions;
