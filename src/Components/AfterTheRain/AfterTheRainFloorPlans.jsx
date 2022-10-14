import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import V30 from "./FloorPlans/V30";
import V50 from "./FloorPlans/V50";

const AfterTheRainFloorPlans = () => {
  const [key, setKey] = useState("V30");
  return (
    <div>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-block d-md-none">
        After The Rain - Floor Plans
      </h2>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-none d-md-block">
        Total Environment After The Rain - Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark px-2"
      >
        <Tab eventKey="V30" title="V30" className="text-dark px-2">
          <V30 />
        </Tab>
        <Tab eventKey="V50" title="V50" className="text-dark px-2">
          <V50 />
        </Tab>
      </Tabs>
    </div>
  );
};

export default AfterTheRainFloorPlans;
