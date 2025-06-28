// src/components/VideoCard.jsx
import React from "react";
import { FaMusic } from "react-icons/fa";

const VideoCard = ({ thumbnail, title, duration }) => {
  return (
    <div className="relative w-full rounded overflow-hidden">
      <img src={thumbnail} alt={title} className="w-full object-cover" />

      

      {/* Vevo logo (optional): 
      <img src="/vevo.svg" className="absolute bottom-2 left-2 h-4" alt="Vevo" /> */}
    </div>
  );
};

export default VideoCard;
