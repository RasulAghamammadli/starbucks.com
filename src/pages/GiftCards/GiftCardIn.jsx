// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  //   console.log(giftCategory);

  return (
    <div>
      <img src={gift?.img} alt="" />
    </div>
  );
};

export default GiftCardIn;
