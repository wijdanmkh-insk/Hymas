import info from "/src/assets/icons/other/Info.svg" ;

const Brief_info = () => {
  return (
    <div className="">
        <div className="uppercase text-white -mb-3">
                    <p className="text-lg">kondisi perangkat</p>
        </div>
        <div className="flex items-center justify-center text-center mt-4 text-white">
        <img className="w-10 h-10 mr-2" src={info} alt="info icon" />
        <div className="text-xs uppercase text-justify">
            Bagian ini digunakan untuk melihat kondisi perangkat hymas, dimulai dari baterai, kondisi tong sampah, dll.
        </div>
        </div>
    </div>
  );
};

export default Brief_info;
