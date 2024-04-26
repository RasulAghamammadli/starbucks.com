// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Icons
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

// components
import ProgressLinear from "../../components/Loading/ProgressLinear";

const GiftCardIn = () => {
  const { id, category } = useParams();

  // states
  const [gift, setGift] = useState([]);
  const [giftCategory, setGiftCategory] = useState([]);

  // Api request
  useEffect(() => {
    axios
      .get(`http://localhost:3000/giftcard?category=${category}`)
      .then((res) => {
        setGiftCategory(res.data);
        console.log(res.data);
        setGift(res.data[0]?.cards?.find((item) => item.id === id));
      });
  }, [id]);

  console.log(giftCategory);

  return (
    <>
      <ProgressLinear />
      <section className="gift-card-in">
        <div className="content">
          <nav className="breadcrumbs">
            <Link to="/gift">Gift</Link>
            <span>/</span>
            <p>Create eGift</p>
          </nav>
          <h1 className="title">Create eGift</h1>
          <div className="img">
            <img src={gift.img} alt="" />
          </div>
          <form action="">
            <p className="text">* indicates required field</p>
            <div className="form-main">
              <h2 className="head">
                <span>Gift amount</span>
              </h2>
              <div className="form-group">
                <div className="group-in">
                  <div className="field">
                    <select name="" id="">
                      <option value="">$25</option>
                      <option value="">$10</option>
                      <option value="">$25</option>
                      <option value="">$50</option>
                      <option value="">$100</option>
                      <option value="">Custom Amount</option>
                    </select>
                    <label>*Select gift amount</label>
                    <IoChevronDownCircleOutline className="select-icon" />
                  </div>
                </div>
              </div>
              <h2 className="head">
                <span>Who are you gifting to?</span>
              </h2>
              <div className="form-group">
                <div className="group-in">
                  <div className="field">
                    <input type="text" placeholder="Recipient Name" />
                    <label>*Recipient Name</label>
                  </div>
                </div>
                <div className="group-in">
                  <div className="field">
                    <input type="text" placeholder="Recipient Email" />
                    <label>*Recipient Email</label>
                  </div>
                </div>
              </div>
              <div className="add-group">
                <p className="text">Maximum of 10 recipients</p>
                <Link className="btn">Add another recipient</Link>
              </div>
              <h2 className="head">
                <span>Personal note</span>
              </h2>
              <div className="form-group">
                <div className="group-in">
                  <div className="field">
                    <textarea
                      cols="30"
                      rows="10"
                      placeholder="Message (optional)"
                    ></textarea>
                  </div>
                </div>
              </div>
              <h2 className="head">
                <span>From</span>
              </h2>
              <div className="form-group">
                <div className="group-in">
                  <div className="field">
                    <input type="text" placeholder="*Sender Name" />
                    <label>*Sender Name</label>
                  </div>
                </div>
                <div className="group-in">
                  <div className="field">
                    <input type="text" placeholder="*Sender Email" />
                    <label>*Sender Email</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="terms">
        <div className="content">
          <p className="text">
            <BsStars className="stars-icon" />
            By purchasing this eGift, I have read and agree to the Starbucks
            Card Terms & Conditions.
          </p>
          <Link className="btn">
            Card Terms & Conditions <RiShareBoxLine className="icon" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default GiftCardIn;
