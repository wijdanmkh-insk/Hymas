import axios from "axios";
import off from "/src/assets/icons/on-off/off.svg";
import config from "../../../config";


interface HymasOffProps {
  onStatusChange: () => void;
}

const Hymas_off: React.FC<HymasOffProps> = ({ onStatusChange }) => {
  const sendMotorStatus = async () => {
    try {
      const response = await axios.post(
        `${config.BACKEND_API_DOMAIN}/hymas/backend/api/off.php`,
        {
          status: "off",
        }
      );

      if (response.data.success) {
        alert("Perangkat berhasil dimatikan!");
        onStatusChange(); // Panggil callback untuk memperbarui status
      } else {
        alert("Gagal mematikan perangkat.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div
      onClick={sendMotorStatus}
      className="flex items-center bg-white rounded-2xl px-4 py-2 uppercase text-hijau-tua cursor-pointer"
    >
      <img className="w-9 h-9 mr-2 text-hijau-muda" src={off} alt="off" />
      <div>
        <span className="block text-sm -mb-1">matikan</span>
        <div className="text-xxxs">
          <span className="block">hymas</span>
        </div>
      </div>
    </div>
  );
};

export default Hymas_off;
