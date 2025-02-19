import React, { useState, useEffect } from "react";
import Hymas_on from "../control_panel/activate/hymas_on";
import Hymas_off from "../control_panel/activate/hymas_off";
import Schedule from "../control_panel/schedule/Schedule";
import Schedule_overlay from "../others/Schedule_overlay";
import Info_kondisi from "./Info_kondisi";
import config from "../../config";
import Cam_feed from "../control_panel/camera/Cam_feed";

const Atur_perangkat: React.FC = () => {
  const esp32Ip = "http://192.168.1.25";
  const [motorStatus, setMotorStatus] = useState<"ON" | "OFF" | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);

  const fetchMotorStatus = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${config.BACKEND_API_DOMAIN}/backend/api/MotorController.php`
      );
      const text = await response.text();

      console.log("Respons Server:", text); // Debugging respons server

      try {
        const data = JSON.parse(text);
        if (response.ok && data?.motor_status) {
          setMotorStatus(data.motor_status); // Update status
        } else {
          setError(data?.message || "Gagal memuat status motor.");
        }
      } catch (parseError) {
        setError("Respons server tidak valid. Periksa format JSON.");
        console.error("Error parsing JSON:", text);
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan jaringan.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMotorStatus();
  }, []);

  const handleStatusChange = () => {
    fetchMotorStatus();
  };

  const handleOpenOverlay = () => {
    setIsOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
  };

  const renderContent = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div className="text-red-500">Error: {error}</div>;
    }

    return (
      <>
        {motorStatus === "ON" ? (
          <Hymas_off onStatusChange={handleStatusChange} />
        ) : (
          <Hymas_on onStatusChange={handleStatusChange} />
        )}
      </>
    );
  };

  return (
    <div className="border-putih border-4 rounded-xl p-4">
      <div className="mt-4 flex flex-col w-full h-full">
        <Info_kondisi />
        <div className="flex flex-col mt-4 space-y-4">
          <div>{renderContent()}</div>
          
          <button onClick={handleOpenOverlay}>
              <Schedule></Schedule>
          </button>

          <div>
            <Cam_feed esp32Ip={esp32Ip}/>
          </div>         
          
        </div>
      </div>
      <Schedule_overlay isVisible={isOverlayVisible} onClose={handleCloseOverlay} />
    </div>
  );
};

export default Atur_perangkat;
