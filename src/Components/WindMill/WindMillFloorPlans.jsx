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
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark px-2"
      >
        <Tab eventKey="D60" title="D60" className="text-dark px-2">
          <D60 />
        </Tab>
      </Tabs>
    </div>
  );
};

export default WindMillFloorPlans;
