// import React from 'react'
import { Link } from "react-router-dom";

// Images
import contact from "../../assets/images/partnerGraphic.png";

// Icons
import { MdMessage } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";

const CustomerContact = () => {
  return (
    <section className="customer-contact">
      <div className="container">
        <div className="contact-inner">
          <div className="img">
            <img src={contact} alt="" />
          </div>
          <div className="content">
            <h2 className="title">Need to get in touch?</h2>
            <p className="subhead">
              Our customer care team is here to save the day!
            </p>
            <div className="contact">
              <Link to="/chat" className="contact-btn">
                <MdMessage className="icon" />
                Chat with us
              </Link>
              <Link to="/call" className="contact-btn">
                <BiSolidPhoneCall className="icon" />
                Give us a call
              </Link>
              <Link to="/chat" className="contact-btn">
                <SlEnvolopeLetter className="icon" />
                Send us a message
              </Link>
            </div>
            <p className="subhead">Customer Service Hours</p>
            <div className="table">
              <div className="table-row">
                <p className="bold">Chat</p>
                <p className="simple">7 days a week </p>
                <p className="simple">4:00 a.m.–10:00 p.m. (Pacific)</p>
              </div>
              <div className="table-row">
                <p className="bold">Phone</p>
                <p className="simple">7 days a week </p>
                <p className="simple">5:00 a.m.–8:00 p.m. (Pacific)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerContact;
