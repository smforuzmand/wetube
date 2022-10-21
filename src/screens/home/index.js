import React from "react";
import "./index.scss";

import data from "../../assets/data.json";
import VideoItem from "../../components/videoItem";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      {data.map((item) => (
        <VideoItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default HomeScreen;
