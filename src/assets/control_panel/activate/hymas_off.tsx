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
        `${config.BACKEND_API_DOMAIN}/backend/api/off.php`,
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
      className="flex items-center bg-white rounded-2xl px-4 py-4 uppercase text-hijau-tua cursor-pointer"
    >
      
      <div className="flex flex-row items-center">
        <img className="w-7 h-9 text-hijau-muda mr-2" src={off} alt="off" />
          <div>
            <span className="block text-sm -mb-1">matikan hymas</span>
          </div>
      </div>


    </div>
  );
};

export default Hymas_off;
