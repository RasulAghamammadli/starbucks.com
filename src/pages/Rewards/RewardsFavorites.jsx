// import React from 'react'
import { useState } from "react";

// Material UI
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// Icons
import StarRateIcon from "@mui/icons-material/StarRate";

// Images
import tab1 from "../../assets/images/25.webp";
import tab2 from "../../assets/images/100.webp";
import tab3 from "../../assets/images/200.webp";
import tab4 from "../../assets/images/300.webp";
import tab5 from "../../assets/images/400.webp";

const RewardsFavorites = () => {
  // Tab
  const [value, setValue] = useState("1");
  // Tab Change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="favorites">
      <div className="favorites-inner">
        <div className="head">
          <h2 className="title">Get your favorites for free</h2>
        </div>
        <div className="content">
          <TabContext value={value}>
            <TabList
              className="tab-list"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="25" icon={<StarRateIcon />} value="1" />
              <Tab label="100" icon={<StarRateIcon />} value="2" />
              <Tab label="200" icon={<StarRateIcon />} value="3" />
              <Tab label="300" icon={<StarRateIcon />} value="4" />
              <Tab label="400" icon={<StarRateIcon />} value="5" />
            </TabList>
            <div className="panels">
              <TabPanel value="1">
                <div className="img">
                  <img src={tab1} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">Customize your drink</h3>
                  <p className="text">
                    Make your drink just right with an extra espresso shot,
                    nondairy milk or a dash of your favorite syrup.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="img">
                  <img src={tab2} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">
                    Brewed hot or iced coffee or tea, bakery item, packaged
                    snack and more
                  </h3>
                  <p className="text">
                    Treat yourself to an iced coffee, buttery croissant, bag of
                    chips and more.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div className="img">
                  <img src={tab3} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">
                    Handcrafted drink (Cold Brew, lattes and more) or hot
                    breakfast
                  </h3>
                  <p className="text">
                    Turn good mornings great with a delicious handcrafted drink
                    of your choice, breakfast sandwich or oatmeal on us.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value="4">
                <div className="img">
                  <img src={tab4} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">
                    Sandwich, protein box or at-home coffee
                  </h3>
                  <p className="text">
                    Enjoy a PM pick-me-up with a lunch sandwich, protein box or
                    a bag of coffee—including Starbucks VIA Instant®.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value="5">
                <div className="img">
                  <img src={tab5} alt="" />
                </div>
                <div className="content">
                  <h3 className="title">Select Starbucks® merchandise </h3>
                  <p className="text">
                    Take home a signature cup, drink tumbler or your choice of
                    coffee merch up to $20.
                  </p>
                </div>
              </TabPanel>
            </div>
          </TabContext>
        </div>
      </div>
    </section>
  );
};

export default RewardsFavorites;
