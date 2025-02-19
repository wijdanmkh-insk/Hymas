
import React, { useState, useEffect } from "react";
import Hymas_on from "../control_panel/activate/hymas_on";
import Hymas_off from "../control_panel/activate/hymas_off";
import Cam_on from "../control_panel/camera/camera_on";
import Info_kondisi from "./Info_kondisi";
import config from "../../config";

const Atur_perangkat: React.FC = () => {
  const [motorStatus, setMotorStatus] = useState<"ON" | "OFF" | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  // Panggil fetchMotorStatus saat komponen pertama kali dimuat
  useEffect(() => {
    fetchMotorStatus();
  }, []);

  const handleStatusChange = () => {
    fetchMotorStatus(); // Panggil ulang fetch untuk memperbarui status
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
        {/* Berikan callback handleStatusChange ke Hymas_off dan Hymas_on */}
        {motorStatus === "ON" ? (
          <Hymas_off onStatusChange={handleStatusChange} />
        ) : (
          <Hymas_on onStatusChange={handleStatusChange} />
        )}
        <Cam_on />
      </>
    );
  };

  return (
    <div className="border-putih border-4 rounded-xl p-4">
      <div className="mt-4 flex flex-col w-full h-full">
        <Info_kondisi />
        <div className="flex justify-between mt-4 space-x-4 flex-grow">
          {renderContent()
        </div>
      </div>
    </div>
  );
};

export default Atur_perangkat;
