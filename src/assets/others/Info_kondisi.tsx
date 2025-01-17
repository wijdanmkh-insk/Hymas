import info from "/src/assets/icons/other/Info.svg" ;

const Info_kondisi = () => {
    return (
      <div className="">
          <div className="uppercase text-white -mb-3">
                      <p className="text-lg">Atur perangkat</p>
          </div>
          <div className="flex items-center justify-center text-center mt-4 text-white">
          <img className="w-10 h-10 mr-2" src={info}/>
          <div className="text-xs uppercase text-justify">
            BAGIAN INI DIGUNAKAN UNTUK MENGATUR KAPAN PERANGKAT HYMAS BEKERJA SEHINGGA PERANGKAT HYMAS DAPAT BEKERJA DENGAN OPTIMAL
          </div>
          </div>
      </div>
    );
  };
  
  export default Info_kondisi;
  