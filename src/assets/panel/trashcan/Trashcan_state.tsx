import React, { useState, useEffect } from "react";
import Trashcan_full from "./Trashcan_full";
import Trashcan_empty from "./Trashcan_empty";

const TrashcanState: React.FC = () => {
  const [state, setState] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/get_status")
        .then((response) => response.json()) // Expect JSON response
        .then((data) => {
          if (data.state >= 4095) {
            setState("full");
          } else if (data.state <= 0) {
            setState("empty");
          } else {
            setState(null);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {state === "full" && <Trashcan_full />}
      {state === "empty" && <Trashcan_empty />}
      {state === null && <div>Loading...</div>}
    </div>
  );
};

export default TrashcanState;
