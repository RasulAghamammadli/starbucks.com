// import React from 'react'

// icons
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignBox = () => {
  return (
    <section className="sign">
      <h1 className="title">Sign in or create an account</h1>
      <div className="box">
        <div className="box-inner">
          <form action="">
            <p className="text">* indicates required field</p>
            <div className="form-group">
              <div className="group-in">
                <div className="field">
                  <input
                    type="text"
                    className="input"
                    placeholder="Username or email address"
                  />
                  <label className="top-label">
                    *Username or email address
                  </label>
                </div>
              </div>
              <div className="group-in">
                <div className="field">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <label className="top-label">*Password</label>
                  <FaRegEyeSlash className="icon" />
                </div>
              </div>
            </div>
            <div className="check">
              <input type="checkbox" id="check" className="checkbox" />
              <label className="check-label" htmlFor="check">
                Keep me signed in.
              </label>
              <Link>Details</Link>
            </div>
            <div className="links">
              <Link>Forgot your username?</Link>
              <Link>Forgot your password?</Link>
            </div>
            <div className="button-side">
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
      <div className="join-side">
        <h2 className="subhead">JOIN STARBUCKS® REWARDS</h2>
        <p className="text">
          Join Starbucks® Rewards to earn free food and drinks, get free
          refills, pay and order with your phone, and more.
        </p>
        <Link to="/register">Join now</Link>
      </div>
    </section>
  );
};

export default SignBox;
