import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import D60 from "./FloorPlans/D60";

const WindMillFloorPlans = () => {
  const [key, setKey] = useState("D60");
  return (
    <div>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-block d-md-none">
        Windmill of Your Mind - Floor Plans
      </h2>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-none d-md-block">
        Total Environment Windmill of Your Mind - Floor Plans
      </h2>
      <D60 />
    </div>
  );
};

export default WindMillFloorPlans;
