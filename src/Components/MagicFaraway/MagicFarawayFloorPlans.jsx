import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import C20 from "./FloorPlans/C20";
import D35 from "./FloorPlans/D35";
const MagicFarawayFloorPlans = () => {
  const [key, setKey] = useState("D60");
  return (
    <div>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-block d-md-none">
        The Magic Faraway Tree - Floor Plans
      </h2>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-none d-md-block">
        Total Environment The Magic Faraway Tree - Floor Plans
      </h2>
      <C20 />
      <D35 />
    </div>
  );
};

export default MagicFarawayFloorPlans;
