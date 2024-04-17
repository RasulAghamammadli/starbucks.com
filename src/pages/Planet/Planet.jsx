// import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Image
import planet from "../../assets/images/planet.webp";
import circle1 from "../../assets/images/planet1.webp";
import circle2 from "../../assets/images/planet2.webp";
import circle3 from "../../assets/images/planet3.webp";
import circle4 from "../../assets/images/planet4.webp";
import circle5 from "../../assets/images/planet5.webp";

const Planet = () => {
  return (
    <>
      <Helmet>
        <title>
          Striving for a Sustainable Future: Starbucks Coffee Company
        </title>
      </Helmet>
      <section className="planet-info">
        <div className="container">
          <div className="info-in">
            <div className="content">
              <h1 className="title">BECOMING RESOURCE POSITIVE</h1>
              <p className="text">
                We are committed to becoming resource positive – to give more
                than we take from the planet. We will store more carbon than we
                emit, eliminate waste and conserve and replenish more freshwater
                than we use.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="planet-info-cards">
        <div className="container">
          <div className="info-cards-in">
            <div className="card">
              <div className="img">
                <img src={planet} alt="" />
              </div>
              <div className="content">
                <div className="content-in">
                  <h2 className="title">2030 COMMITMENTS</h2>
                  <p className="text">
                    Starbucks set a multi-decade commitment to reduce our
                    carbon, our water and our waste footprints by half by 2030.
                  </p>
                  <Link to="/about-us" className="btn">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="planet-info">
        <div className="container">
          <div className="info-in">
            <div className="content">
              <h1 className="title">AREAS OF FOCUS</h1>
              <p className="text">
                We’re driving innovation at scale to achieve our 2030 targets
                through these five focus areas:
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="planet-circle">
        <div className="container">
          <div className="circle-inner">
            <div className="circle-section">
              <div className="img">
                <img src={circle1} alt="" />
              </div>
              <div className="content">
                <div className="content-in">
                  <p>
                    Expanding <span>plant-based menu options</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="circle-section">
              <div className="img">
                <img src={circle2} alt="" />
              </div>
              <div className="content">
                <div className="content-in">
                  <p>
                    Shifting away from single-use to{" "}
                    <span>reusable packaging</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="circle-section">
              <div className="img">
                <img src={circle3} alt="" />
              </div>
              <div className="content">
                <div className="content-in">
                  <p>
                    Investing in{" "}
                    <span>
                      regenerative agriculture, reforestation, forest
                      conservation and water replenishment
                    </span>{" "}
                    in our supply chain
                  </p>
                </div>
              </div>
            </div>
            <div className="circle-section">
              <div className="img">
                <img src={circle4} alt="" />
              </div>
              <div className="content">
                <div className="content-in">
                  <p>
                    Working on better ways to <span>manage our waste</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="circle-section">
              <div className="img">
                <img src={circle5} alt="" />
              </div>
              <div className="content">
                <div className="content-in">
                  <p>
                    Innovating with more <span>responsible stores</span>,
                    operations, manufacturing and delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="planet-info">
        <div className="container">
          <div className="info-in">
            <div className="content">
              <h1 className="title">PROGRESS TOWARD OUR COMMITMENTS</h1>
              <p className="text">
                Starbucks is committed to transparency. Learn more about our
                commitments to the planet and our progress on our Environmental
                and Social Impact Reporting Hub.
              </p>
              <Link to="/rewards" className="btn">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="planet-info">
        <div className="container">
          <div className="info-in">
            <div className="content">
              <h1 className="title">ETHICAL SOURCING STANDARDS</h1>
              <p className="text">
                Track the responsible ways we produce and purchase our coffee,
                tea, cocoa and manufactured goods.
              </p>
              <Link to="/menu" className="btn">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="planet-info">
        <div className="container">
          <div className="info-in">
            <div className="content">
              <h1 className="title">ALL THE LATEST</h1>
              <p className="text">
                Stay up to date with Starbucks commitment to environmental
                sustainability.
              </p>
              <Link to="/customer-service" className="btn">
                Get news now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Planet;
