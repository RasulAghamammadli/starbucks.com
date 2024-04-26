// import React from 'react'
import { Link } from "react-router-dom";

// Images
import support from "../../assets/images/bulk-gift-cards.webp";

// Icons
import { RiShareBoxFill } from "react-icons/ri";

const GiftSupport = () => {
  return (
    <>
      <section className="gift-business">
        <div className="business-inner">
          <div className="img">
            <img src={support} alt="" />
          </div>
          <div className="content">
            <h2 className="title">Business gifting — simplified</h2>
            <p className="text">
              Bulk send physical or digital Starbucks Cards to gift, reward,
              incentivize, or show appreciation towards your customers, clients
              and team members. Minimum 15 cards per order.
            </p>
            <Link className="btn" to="/menu">
              Shop now <RiShareBoxFill className="icon" />
            </Link>
          </div>
        </div>
      </section>
      <section className="support">
        <div className="support-inner">
          <h2 className="title">GIFT CARD SUPPORT</h2>
          <p className="text">
            Use the links below to manage eGifts you have sent or received, or
            view our full Card Terms & Conditions.
          </p>
          <div className="buttons">
            <Link className="btn" to="/support">
              eGift Support <RiShareBoxFill className="icon" />
            </Link>
            <Link className="btn" to="/support">
              See Terms & Conditions <RiShareBoxFill className="icon" />
            </Link>
            <Link className="btn" to="/support">
              eGift FAQs <RiShareBoxFill className="icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GiftSupport;
