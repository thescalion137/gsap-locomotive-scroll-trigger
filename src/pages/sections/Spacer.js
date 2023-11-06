import React from "react";

import "./Spacer.css";

const Spacer = (props) => {

  const text = props.text

  return (
    <section className="spacer">
      {text}
    </section>
  );
};

export default Spacer;