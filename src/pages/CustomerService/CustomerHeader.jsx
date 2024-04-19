import { useEffect } from "react";
import { useState } from "react";

// Components
import CustomerMainMenu from "../../components/Header/CustomerMainMenu";
import CustomerMobileMenu from "../../components/Header/CustomerMobileMenu";

const CustomerHeader = () => {
  // burgerState
  const [isOpen, setIsOpen] = useState(false);

  // preventScroll
  const handleScroll = (e) => {
    if (isOpen) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header onScroll={handleScroll}>
      <CustomerMainMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <CustomerMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default CustomerHeader;
