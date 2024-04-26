// import React from 'react'
import { Link } from "react-router-dom";

// context
import { useMainContext } from "../../utils/MainContext";

// Progress
import ProgressLinear from "../../components/Loading/ProgressLinear";

const FeaturedInner = () => {
  // gift data
  const { giftItems } = useMainContext();

  // featured data
  const featureData = giftItems.find((item) => item.category === "Featured");

  return (
    <>
      <ProgressLinear />
      <section className="featured-inner">
        <p className="subtitle">Gift cards</p>
        <h1 className="title">{featureData?.category}</h1>
        <div className="card-list">
          {featureData?.cards?.map((item) => (
            <div className="list-item" key={item.id}>
              <Link to={`/gift/${item.id}`} className="item-in">
                <img src={item.img} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedInner;
