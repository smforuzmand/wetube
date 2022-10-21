import React from "react";

import data from "../../assets/data.json";
import VideoItem from "../../components/videoItem";
import { useSearchParams } from "react-router-dom";

const SearchScreen = () => {
  const [urlParams] = useSearchParams();

  const searchedQuery = urlParams?.get("q");

  const dataToShow = data.filter((item) =>
    item.videoName.toLowerCase().includes(searchedQuery)
  );

  return (
    <div className="home-screen">
      {dataToShow.map((item) => (
        <VideoItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SearchScreen;
