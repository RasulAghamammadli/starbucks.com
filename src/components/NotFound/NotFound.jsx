// import React from 'react'
import { Link } from "react-router-dom";

// Images
import ntFndImg from "../../assets/images/not-found.png";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found-content">
          <h1 className="title">
            We can&#39;t find the page you&#39;re looking for.
          </h1>
          <p className="text">
            Don&#39;t worry, it&#39;s just a little spilled Coffee. Let us help
            you clean that up and find your way! Mop up the spill to reveal
            something underneath.
          </p>
          <div className="content-bottom">
            <div className="image">
              <img src={ntFndImg} alt="" />
            </div>
            <div className="back-to-site">
              <h2 className="title-to">Would you like to:</h2>
              <ul>
                <li>
                  <Link to="/menu">Place an order</Link>
                </li>
                <li>
                  <Link to="/gift">Check a gift card</Link>
                </li>
                <li>
                  <Link to="/">Return to home page</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
