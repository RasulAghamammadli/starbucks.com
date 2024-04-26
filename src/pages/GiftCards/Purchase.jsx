// import React from 'react'
import { Link } from "react-router-dom";

// Images
import newGift from "../../assets/images/group-gift-cards.webp";

// Icons
import { RiShareBoxFill } from "react-icons/ri";

const Purchase = () => {
  return (
    <>
      <section className="new-gift">
        <div className="new-inner">
          <img src={newGift} alt="" />
          <p className="text">
            New! Effortlessly send up to 10 eGifts per purchase. Select a design
            to start!
          </p>
        </div>
      </section>
      <section className="recieved">
        <div className="recieved-inner">
          <div className="up-side">
            <h2 className="title">Received a gift card?</h2>
            <div className="box">
              <p className="text">Earns 2★ per $1</p>
              <div>
                <Link className="btn">Add or Reload</Link>
                <Link className="btn black">Check balance</Link>
              </div>
            </div>
          </div>
          <div className="bottom-side">
            <Link className="btn">
              Card Terms & Conditions <RiShareBoxFill className="icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
