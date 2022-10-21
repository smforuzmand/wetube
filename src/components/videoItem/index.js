import React from "react";
import { useNavigate } from "react-router-dom";

const VideoItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="video-item"
      onClick={() => {
        navigate("/playback/" + item.id);
      }}
    >
      <img
        src={`../videos/${item.videoThumbnail}`}
        alt={item.videoName}
        className="thumbnail"
      />
      <div className="row">
        <img
          src={`../channels/${item.channelThumbnail}`}
          alt={item.channelName}
          className="avatar"
        />
        <div>
          <div className="video-name">{item.videoName}</div>
          <div className="channel-name">{item.channelName}</div>
          <div className="views">{abbreviateNumber(+item.views)} views</div>
        </div>
      </div>
    </div>
  );
};

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

export default VideoItem;
