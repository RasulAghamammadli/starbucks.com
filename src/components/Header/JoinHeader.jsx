// import React from 'react'
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/icons/starbucks-logo.svg";

const JoinHeader = () => {
  return (
    <header className="join-header">
      <div className="inner">
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
        </Link>
      </div>
    </header>
  );
};

export default JoinHeader;
