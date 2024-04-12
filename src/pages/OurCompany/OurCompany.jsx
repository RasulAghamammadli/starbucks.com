// import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Images
import comp1 from "../../assets/images/company1.jpg";
import comp2 from "../../assets/images/company2.jpg";
import comp3 from "../../assets/images/company3.webp";
import comp4 from "../../assets/images/company4.jpg";

const OurCompany = () => {
  return (
    <>
      <Helmet>
        <title>About Us: Starbucks Coffee Company</title>
      </Helmet>
      <section className="company-section">
        <div className="container">
          <div className="company-inner">
            <div className="content">
              <h1 className="title">Our Company</h1>
              <div className="img">
                <img src={comp1} alt="" />
              </div>
              <h2 className="subtitle">Our Heritage</h2>
              <p className="text">
                Our story begins in 1971 along the cobblestone streets of
                Seattle’s historic Pike Place Market. It was here where
                Starbucks opened its first store, offering fresh-roasted coffee
                beans, tea and spices from around the world for our customers to
                take home. Our name was inspired by the classic tale,
                “Moby-Dick,” evoking the seafaring tradition of the early coffee
                traders.
              </p>
              <p className="text">
                Ten years later, a young New Yorker named Howard Schultz would
                walk through these doors and become captivated with Starbucks
                coffee from his first sip. After joining the company in 1982, a
                different cobblestone road would lead him to another discovery.
                It was on a trip to Milan in 1983 that Howard first experienced
                Italy’s coffeehouses, and he returned to Seattle inspired to
                bring the warmth and artistry of its coffee culture to
                Starbucks. By 1987, we swapped our brown aprons for green ones
                and embarked on our next chapter as a coffeehouse.
              </p>
              <p className="text">
                Starbucks would soon expand to Chicago and Vancouver, Canada and
                then on to California, Washington, D.C. and New York. By 1996,
                we would cross the Pacific to open our first store in Japan,
                followed by Europe in 1998 and China in 1999. Over the next two
                decades, we would grow to welcome millions of customers each
                week and become a part of the fabric of tens of thousands of
                neighborhoods all around the world. In everything we do, we are
                always dedicated to Our Mission: With every cup, with every
                conversation, with every community - we nurture the limitless
                possibilities of human connection.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="company-section">
        <div className="container">
          <div className="company-inner">
            <div className="content">
              <div className="img">
                <img src={comp2} alt="" />
              </div>
              <h2 className="subtitle">Coffee & Craft</h2>
              <p className="text">
                It takes many hands to craft the perfect cup of coffee – from
                the farmers who tend to the red-ripe coffee cherries, to the
                master roasters who coax the best from every bean, and to the
                barista who serves it with care. We are committed to the highest
                standards of quality and service, embracing our heritage while
                innovating to create new experiences to savor.
              </p>
              <Link to="/menu" className="btn">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="company-section">
        <div className="container">
          <div className="company-inner">
            <div className="content">
              <div className="img">
                <img src={comp3} alt="" />
              </div>
              <h2 className="subtitle">Our Partners</h2>
              <p className="text">
                We like to say that we are not in the coffee business serving
                people, but in the people business serving coffee. Our employees
                – who we call partners – are at the heart of the Starbucks
                experience. We are committed to making our partners proud and
                investing in their health, well-being and success and to
                creating a culture of belonging where everyone is welcome.
              </p>
              <Link to="/careers" className="btn">
                Explore Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="company-section">
        <div className="container">
          <div className="company-inner">
            <div className="content">
              <div className="img">
                <img src={comp4} alt="" />
              </div>
              <h2 className="subtitle">
                We Believe in the Pursuit of Doing Good
              </h2>
              <p className="text">
                As it has been from the beginning, our purpose goes far beyond
                profit. We believe Starbucks can, and should, have a positive
                impact on the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="company-section people">
        <div className="container">
          <div className="company-inner">
            <div className="content">
              <h3 className="subtitle sb-head">People</h3>
              <p className="text planet-text">
                Our aspiration is to be people positive – investing in humanity
                and the well-being of everyone we connect with, from our
                partners to coffee farmers to the customers in our stores and
                beyond.
              </p>
              <Link to="/people" className="btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="company-section people">
        <div className="container">
          <div className="company-inner">
            <div className="content">
              <h3 className="subtitle sb-head">Planet</h3>
              <p className="text planet-text">
                We are striving to become resource positive – giving back more
                than we take from the planet. We are working to store more
                carbon than we emit, replenish more freshwater than we use, and
                eliminate waste. We know we can’t do it alone. It takes all of
                us.
              </p>
              <Link to="/planet" className="btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="more-about-us">
        <div className="container">
          <div className="more-about-inner">
            <div className="content">
              <h1 className="title">Learn More About Us</h1>
              <div className="about">
                <h3 className="subtitle">Stories & News</h3>
                <p className="text">
                  Behind every cup of coffee is a story. Enjoy some of our
                  favorites along with all the latest news from the storytellers
                  at Starbucks Stories.
                </p>
                <Link to="/stories" className="btn">
                  Check out Starbucks Stories
                </Link>
              </div>
              <div className="about">
                <h3 className="subtitle">Company Profile</h3>
                <p className="text">Here’s a closer look at our company.</p>
                <Link to="/" className="btn">
                  Learn more
                </Link>
              </div>
              <div className="about">
                <h3 className="subtitle">Company Timeline</h3>
                <div className="text">
                  Read a brief history of Starbucks, from 1971 through today.
                </div>
                <Link to="/ethics" className="btn">
                  Learn more
                </Link>
              </div>
              <div className="about">
                <h3 className="subtitle">Ethics & Compliance</h3>
                <Link to="/ethics" className="btn">
                  Learn more
                </Link>
              </div>
              <div className="about">
                <h3 className="subtitle">Corporate Governance</h3>
                <Link to="/ethics" className="btn">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCompany;
