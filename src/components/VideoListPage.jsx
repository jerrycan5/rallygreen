// src/pages/VideoListPage.jsx
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import VideoCard from "../components/VideoCard";

const videos = [
  {
    thumbnail: "/video1.jpeg",
    title: "DON’T MIND IF I DO",
    duration: "3:43",
  },
  {
    thumbnail: "/video2.jpeg",
    title: "Song Title 2",
    duration: "3:45",
  },
  {
    thumbnail: "/video3.jpeg",
    title: "Song Title 3",
    duration: "4:41",
  },
  {
    thumbnail: "/video4.jpeg",
    title: "Song Title 4",
    duration: "3:59",
  },
];

function VideoListPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-dark font-sans px-4 py-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-white font-semibold mb-6"
      >
        <FaArrowLeft className="mr-2" />
        <span>Back</span>
      </button>

      <div className="space-y-6">
        {videos.map((video, idx) => (
          <VideoCard
            key={idx}
            thumbnail={video.thumbnail}
            title={video.title}
            duration={video.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoListPage;
