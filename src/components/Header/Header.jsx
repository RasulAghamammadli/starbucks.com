import { useEffect } from "react";
import { useState } from "react";

// Header's Components
import MobileMenu from "./MobileMenu";
import MainMenu from "./MainMenu";

const Header = () => {
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
      <MainMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
