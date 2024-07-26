// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

// Images
import drinkSize from "../../assets/images/drink-size.svg";

// Icons
import { CiLocationOn } from "react-icons/ci";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import { IoStar, IoChevronDownCircleOutline } from "react-icons/io5";
import { PiShootingStar } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io";

// Components
import FixedCart from "../Cart/FixedCart";

// Context
import { useMainContext } from "../../utils/MainContext";

// SnackBar Components
import SnackBar from "../../components/SnackBar/SnackBar";

// Loading
import ProgressLinear from "../../components/Loading/ProgressLinear";
import SizeAlert from "../../components/SnackBar/SizeAlert";

const ProductInner = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  // size active
  const [activeItem, setActiveItem] = useState(null);

  // context
  const {
    count,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    setSelectedSize,
  } = useMainContext();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/coffee?id=${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => (err, "Məhsulun daxili səhifəsində error var!!!"));
  }, [id]);

  const grandeData = product.find((item) =>
    item.sizes.some((size) => size.size === "Grande")
  );

  // activeSize func
  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <>
      <ProgressLinear />
      {product.map((item) => (
        <div key={item.name}>
          <Helmet>
            <title>{item.name}: Starbucks Coffee Company</title>
          </Helmet>
          {/* nav */}
          <nav className="product-breadcrumbs">
            <ul>
              <li>
                <Link to="/menu">Menu</Link>
                <span>/</span>
              </li>
              <li>
                <Link to={`/menu/drinks/${item.subcategory}`}>
                  {item.subcategory}
                </Link>
                <span>/</span>
              </li>
              <li>
                <p className="bold">{item.name}</p>
              </li>
            </ul>
          </nav>
          {/* nav */}

          {/* img */}
          <section className="product-head">
            <div className="head-inner">
              <div className="img">
                <div className="img-block">
                  <img src={item.img} alt="" />
                </div>
              </div>
              <div className="product-name">
                <h1 className="title">{item.name}</h1>
                <p className="text">
                  {
                    grandeData.sizes.find((size) => size.size === "Grande")
                      .calories
                  }{" "}
                  <IoIosInformationCircleOutline className="icon" />
                </p>
              </div>
            </div>
          </section>
          {/* img */}

          {/* options */}
          <section className="product-options">
            <div className="options-block">
              <div className="block-inner">
                <div className="size-options">
                  <h2 className="head">
                    <span>Size options</span>
                  </h2>
                  <ul className="size-list">
                    {item.sizes.map((size, sizeIndex) => (
                      <li key={sizeIndex} onClick={() => setSelectedSize(size)}>
                        <div
                          className={
                            activeItem === sizeIndex ? "active" : "prod-size"
                          }
                          onClick={() => handleClick(sizeIndex)}
                        >
                          <div className="circle"></div>
                          <img src={drinkSize} alt="" />
                          <div className="info">
                            <p className="text">{size.size}</p>
                            <span className="size">{size.capacity}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link to="/find-store" className="link">
                    <CiLocationOn className="icon" />
                    Select a store to view availability
                  </Link>
                </div>
                <div className="include-options">
                  <h2 className="head">
                    <span>What&apos;s included</span>
                  </h2>
                  <div className="form-group">
                    <div className="group-in">
                      <div className="field">
                        <select name="" id="">
                          <option value="">Extra Water</option>
                          <option value="">Light Water</option>
                          <option value="">No Water</option>
                        </select>
                        <label>Add-ins</label>
                        <IoChevronDownCircleOutline className="select-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="group-in">
                      <div className="field">
                        <label>Espresso Options</label>
                        <IoChevronDownCircleOutline className="select-icon" />
                        <select name="" id="">
                          <option value="">Signature Espresso Roast</option>
                          <option value="">Blonde Espresso Roast</option>
                          <option value="">1/2 Decaf Espresso Roast</option>
                          <option value="">2/3 Decaf Espresso Roast</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="group-in">
                      <div className="field shot-field">
                        <label>Espresso & Shot Options</label>
                        <div className="count-box">
                          <span>Shots</span>
                          <div className="box">
                            <LuMinusCircle
                              className="icon"
                              onClick={() => decreaseQuantity(item.id)}
                            />
                            <span className="count">{count}</span>
                            <LuPlusCircle
                              className="icon"
                              onClick={() => increaseQuantity(item.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-side">
                    <Link className="customize">
                      <PiShootingStar className="icon" />
                      Customize
                    </Link>
                  </div>
                </div>
              </div>
              <div className="add-to-cart">
                <button className="btn" onClick={() => addToCart(item)}>
                  Add to Order
                </button>
              </div>
            </div>
          </section>
          {/* options */}

          {/* info */}
          <section className="prod-bottom">
            <div className="bottom-inner">
              <div className="content">
                <p className="gold">
                  200
                  <IoStar className="icon" /> item
                </p>
                <p className="text">
                  Espresso shots topped with hot water create a light layer of
                  crema culminating in this wonderfully rich cup with depth and
                  nuance.
                </p>
                <p className="info">
                  {
                    grandeData.sizes.find((size) => size.size === "Grande")
                      .calories
                  }
                  , 0g sugar, 0g fat
                </p>
                <Link className="btn">Full nutrition & ingredients list</Link>
              </div>
            </div>
          </section>
          {/* info */}

          {/* Snackbar */}
          <SnackBar productName={item.name} />
          {/* Snackbar */}

          {/* Fixed Cart */}
          <FixedCart />
          {/* Fixed Cart */}

          <SizeAlert />
        </div>
      ))}
    </>
  );
};

export default ProductInner;
