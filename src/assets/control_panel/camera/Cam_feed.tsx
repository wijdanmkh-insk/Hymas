import React, { useState } from "react";
import Cam_on from "./Cam_on";

const Cam_feed: React.FC<{ esp32Ip: string }> = ({ esp32Ip }) => {
  const [isCameraOn, setIsCameraOn] = useState(false);

  const toggleCamera = async () => {
    const endpoint = isCameraOn ? "off" : "on";
    await fetch(`http://${esp32Ip}/camera/${endpoint}`);
    setIsCameraOn(!isCameraOn);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Camera Feed */}
      {isCameraOn && (
        <div className="relative w-full max-w-md border">
          <img
            src={`http://${esp32Ip}:81/stream`}
            alt="ESP32 Camera Stream"
            className="w-full h-auto"
          />

          {/* Overlay when Camera is On */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-lg">
            <p>📷 Camera is Live</p>
          </div>
        </div>
      )}

      {/* Cam_on Button, passing toggleCamera as onClick */}
      <Cam_on onClick={toggleCamera} />
    </div>
  );
};

export default Cam_feed;
