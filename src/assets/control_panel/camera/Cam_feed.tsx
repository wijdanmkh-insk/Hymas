import { useState, useEffect } from "react";

const CameraFeed = () => {
  const [esp32Ip, setEsp32Ip] = useState("192.168.1.25"); // Replace with your ESP32's IP

  useEffect(() => {
    // You can fetch the ESP32 IP dynamically if you implement a discovery method
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img
        src={`http://${esp32Ip}:81/stream`}
        alt="ESP32 Camera Stream"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CameraFeed;
