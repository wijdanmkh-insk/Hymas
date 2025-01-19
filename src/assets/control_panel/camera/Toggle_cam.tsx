import {useState} from 'react';
import Cam_on from "./camera_on";
import Cam_off from "./camera_off";

const Toggle_cam: React.FC = () =>{
    const [isOn, setIsOn] = useState<boolean>(true);

    const toggle =() =>{
        setIsOn(!isOn);
    };

    return(
        <div>
            <button onClick={toggle}>
                {isOn ? <Cam_on/> : <Cam_off/>}
            </button>
        </div>
    );
};

export default Toggle_cam;