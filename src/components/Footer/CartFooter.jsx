// import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

// Icons
import { FaSpotify } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";

const CartFooter = () => {
  return (
    <footer className=" cart-footer">
      <div className="container new-container">
        <div className="footer-in new-footer-in">
          <div className="cart-footer-nav">
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>About Us</Accordion.Header>
                <Accordion.Body>
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
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Careers</Accordion.Header>
                <Accordion.Body>
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
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Social Impact</Accordion.Header>
                <Accordion.Body>
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
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>For Business Partners</Accordion.Header>
                <Accordion.Body>
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
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Order and Pick Up</Accordion.Header>
                <Accordion.Body>
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
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

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
          <ul className="privacy">
            <li>
              <Link>Privacy Notice</Link>
            </li>
            <li>
              <Link>Consumer Health Privacy Notice</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Do Not Share My Personal Information</Link>
            </li>
            <li>
              <Link>CA Supply Chain Act</Link>
            </li>
            <li>
              <Link>Accessibility</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
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

export default CartFooter;
