import axios from "axios";
import on from "/src/assets/icons/on-off/on.svg";
import config from "../../../config";


interface HymasOffProps {
  onStatusChange: () => void;
}

const Hymas_on: React.FC<HymasOffProps> = ({ onStatusChange }) => {
  const sendMotorStatus = async () => {
    try {
      const response = await axios.post(
        `${config.BACKEND_API_DOMAIN}/backend/api/on.php`,
        {
          status: "on",
        }
      );

      if (response.data.success) {
        alert("Perangkat berhasil dinyalakan!");
        onStatusChange(); // Panggil callback untuk memperbarui status
      } else {
        alert("Gagal menyalakan perangkat.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div
      onClick={sendMotorStatus}
      className="flex items-center bg-hijau-tua rounded-2xl px-4 py-2 uppercase text-white cursor-pointer"
    >
      <img className="w-9 h-9 mr-2 text-white" src={on} alt="on" />
      <div>
        <span className="block text-sm -mb-1">nyalakan</span>
        <div className="text-xxxs">
          <span className="block">hymas</span>
        </div>
      </div>
    </div>
  );
};

export default Hymas_on;
