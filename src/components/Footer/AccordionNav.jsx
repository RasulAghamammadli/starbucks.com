// import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const AccordionNav = () => {
  return (
    <div className="mobile-footer-nav">
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>About Us</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link>Our Company</Link>
              </li>
              <li>
                <Link>Our Coffee</Link>
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
                <Link>Customer Service</Link>
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
                <Link>People</Link>
              </li>
              <li>
                <Link>Planet</Link>
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
  );
};

export default AccordionNav;
