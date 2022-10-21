import React from "react";

const items = ["Home", "Explore", "Shorts", "Subscriptions"];

const Side = () => {
  return (
    <div className="side">
      {items.map((item) => (
        <div className="item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Side;
