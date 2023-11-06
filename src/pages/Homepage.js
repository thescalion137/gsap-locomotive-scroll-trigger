import React from "react";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Spacer from "./sections/Spacer";

const Homepage = () => {
  return (
    <div>
      <Spacer text='Start Scrolling' />
      <Hero />
      <About />
      <Spacer text='Thanks for Scrolling' />
    </div>
  );
};

export default Homepage;