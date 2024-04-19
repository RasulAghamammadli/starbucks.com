// import React from 'react'
import { Link } from "react-router-dom";

// Icons
import {
  FaSpotify,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { IoCheckmarkSharp } from "react-icons/io5";

// Footer's component
import AccordionNav from "../../components/Footer/AccordionNav";

const CustomerFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-in">
          <div className="footer-nav">
            <div className="column">
              <h2 className="subhead">About Us</h2>
              <ul>
                <li>
                  <Link to="/about-us">Our Company</Link>
                </li>
                <li>
                  <Link to="/our-coffee">Our Coffee</Link>
                </li>
                <li>
                  <Link>Stories and News</Link>
                </li>
                <li>
                  <Link>Starbucks Archive</Link>
                </li>
                <li>
                  <Link>Investor Relations</Link>
                </li>
                <li>
                  <Link to="/customer-service">Customer Service</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h2 className="subhead">Careers</h2>
              <ul>
                <li>
                  <Link>Culture and Values</Link>
                </li>
                <li>
                  <Link>Inclusion, Diversity, and Equity</Link>
                </li>
                <li>
                  <Link>College Achievement Plan</Link>
                </li>
                <li>
                  <Link>Alumni Community</Link>
                </li>
                <li>
                  <Link>U.S. Careers</Link>
                </li>
                <li>
                  <Link>International Careers</Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h2 className="subhead">Social Impact</h2>
              <ul>
                <li>
                  <Link to="/people">People</Link>
                </li>
                <li>
                  <Link to="/planet">Planet</Link>
                </li>
                <li>
                  <Link>Environmental and Social Impact Reporting</Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h2 className="subhead">For Business Partners</h2>
              <ul>
                <li>
                  <Link>Landlord Support Center</Link>
                </li>
                <li>
                  <Link>Suppliers</Link>
                </li>
                <li>
                  <Link>Corporate Gift Card Sales</Link>
                </li>
                <li>
                  <Link>Office and Foodservice Coffee</Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h2 className="subhead">Order and Pick Up</h2>
              <ul>
                <li>
                  <Link>Order on the App</Link>
                </li>
                <li>
                  <Link>Order on the Web</Link>
                </li>
                <li>
                  <Link>Delivery</Link>
                </li>
                <li>
                  <Link>Order and Pick Up Options</Link>
                </li>
                <li>
                  <Link>Explore and Find Coffee for Home</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Footer Nav */}
          <AccordionNav />
          {/* Mobile Footer Nav */}

          <ul className="social">
            <li>
              <Link to="www.spotify.com">
                <FaSpotify className="icon-spotify" />
                <span></span>
              </Link>
            </li>
            <li>
              <Link to="www.facebook.com">
                <FaFacebookF className="icon" />
                <span></span>
              </Link>
            </li>
            <li>
              <Link to="www.pinterest.com">
                <FaPinterestP className="icon" />
                <span></span>
              </Link>
            </li>
            <li>
              <Link to="www.instagram.com">
                <FaInstagram className="icon" />
                <span></span>
              </Link>
            </li>
            <li>
              <Link to="www.youtube.com">
                <AiFillYoutube className="icon" />
                <span></span>
              </Link>
            </li>
            <li>
              <Link to="www.twitter.com">
                <AiOutlineTwitter className="icon" />
                <span></span>
              </Link>
            </li>
          </ul>
          <div className="content-foot">
            <div className="region">
              <div className="title">Usa:</div>
              <Link className="lang active-lang">
                English <IoCheckmarkSharp className="active-icon" />
              </Link>
            </div>
            <div className="region">
              <div className="title">Canada:</div>
              <Link className="lang">English</Link>
              <Link className="lang">Français</Link>
            </div>
          </div>
          <ul className="privacy-customer">
            <li>
              <Link>Privacy Notice</Link>
            </li>
            <span></span>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <span></span>
            <li>
              <Link>CA Supply Chain Act</Link>
            </li>
          </ul>
          <p className="copyright">
            © 2024 Starbucks Coffee Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CustomerFooter;
