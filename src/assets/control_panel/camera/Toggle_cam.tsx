import React, { useState } from 'react';
import Cam_on from '../control_panel/camera/Cam_on';
import Cam_off from '../control_panel/camera/Cam_off';

const Toggle_cam: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <div onClick={toggle} style={{ cursor: 'pointer' }}>
        {isOn ? <Cam_on /> : <Cam_off />}
      </div>
    </div>
  );
};

export default Toggle_cam;
