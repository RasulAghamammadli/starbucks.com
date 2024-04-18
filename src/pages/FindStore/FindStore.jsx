// import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Icons
import { IoSearchOutline } from "react-icons/io5";
import { GrShare } from "react-icons/gr";

const FindStore = () => {
  return (
    <>
      <Helmet>
        <title>Store Locator: Starbucks Coffee Company</title>
      </Helmet>
      <section className="store-locator">
        <div className="locator-main">
          <div className="content-side">
            <div className="search-box">
              <div className="form-group">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Find a store"
                />
                <IoSearchOutline className="icon" />
              </div>
              <button className="submit-btn">Filter</button>
            </div>
            <div className="section-info">
              <div className="info-header">
                <div className="header-content">
                  <h3 className="title">
                    We are unable to access your exact location
                  </h3>
                  <p className="text">
                    To find a Starbucks store, use the search feature, navigate
                    using the map, or turn on location services.
                  </p>
                </div>
              </div>
              <div className="info-bottom">
                <ul className="list">
                  <li>
                    <Link to="/">
                      Privacy Notice <GrShare className="icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Terms of Use <GrShare className="icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Do Not Share My Personal Information{" "}
                      <GrShare className="icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="map-side">
            <div className="search-box-mobile">
              <div className="form-group">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Find a store"
                />
                <IoSearchOutline className="icon" />
              </div>
              <button className="submit-btn">Filter</button>
            </div>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d194495.207695448!2d49.869535290963505!3d40.386966983821125!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1713473309264!5m2!1saz!2saz"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindStore;
