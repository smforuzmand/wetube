import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import data from "../../assets/data.json";
import "./index.scss";
const PlaybackScreen = () => {
  const { id } = useParams();

  const videoData = data.find((item) => +item.id === +id);

  if (!videoData) {
    return null;
  }

  return (
    <div className="playback-screen">
      <div className="video-player">
        <ReactPlayer
          url={videoData.videoId}
          controls
          width="100%"
          height="100%"
        />
      </div>
      <div className="info">
        <div className="video-name">{videoData.videoName}</div>
        <div className="views">{abbreviateNumber(+videoData.views)} views</div>
        <div className="row">
          <img
            src={`../channels/${videoData.channelThumbnail}`}
            alt={videoData.channelName}
            className="avatar"
          />
          <div className="channel-name">{videoData.channelName}</div>
        </div>
      </div>
    </div>
  );
};

export default PlaybackScreen;

var SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];

function abbreviateNumber(number) {
  // what tier? (determines SI symbol)
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return number;

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}
