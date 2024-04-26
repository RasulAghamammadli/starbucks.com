// import React from 'react'

// icons
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const JoinBox = () => {
  return (
    <section className="sign">
      <h1 className="title">Create an account</h1>
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
                    placeholder="First Name"
                  />
                  <label className="top-label">
                    *First Name
                  </label>
                </div>
              </div>
              <div className="group-in">
                <div className="field">
                  <input
                    type="text"
                    className="input"
                    placeholder="Last Name"
                  />
                  <label className="top-label">
                    *Last Name
                  </label>
                </div>
              </div>
              <div className="group-in">
                <div className="field">
                  <input
                    type="email"
                    className="input"
                    placeholder="Email Address"
                  />
                  <label className="top-label">
                    *Email Address
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
                I agree to the Starbucks® Rewards Terms.
              </label>
              <Link>Details</Link>
            </div>
            <div className="button-side">
              <button type="submit">Create account</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinBox;
