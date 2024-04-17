// import React from 'react'
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import OurCompany from "./pages/OurCompany/OurCompany";
import OurCoffee from "./pages/OurCoffee/OurCoffee";
import CustomerService from "./pages/CustomerService/CustomerService";
import People from "./pages/People/People";
import Planet from "./pages/Planet/Planet";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* //  */}

          <Route exact path="/about-us" element={<OurCompany />} />
          <Route exact path="/our-coffee" element={<OurCoffee />} />
          <Route exact path="/customer-service" element={<CustomerService />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/planet" element={<Planet />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
