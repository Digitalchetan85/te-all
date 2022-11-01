import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import L20 from "./FloorPlan/L20";
import C20 from "./FloorPlan/C20";
import D35 from "./FloorPlan/D35";
import L22 from "./FloorPlan/L22";
import L30 from "./FloorPlan/L30";
import L45 from "./FloorPlan/L45";
import V50 from "./FloorPlan/V50";
import R25 from "./FloorPlan/R25";

const PursuitMasterPlan = () => {
  const [key, setKey] = useState("L20");
  return (
    <div>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-block d-md-none">
        Radical Rhapsody - Floor Plans
      </h2>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-none d-md-block">
        Total Environment Pursuit Of A Radical Rhapsody - Floor Plans
      </h2>
      {/* <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark px-2"
      >
        <Tab eventKey="L20" title="L20" className="text-dark px-2">
          <L20 />
        </Tab>
        <Tab eventKey="C20" title="C20" className="text-dark px-2">
          <C20 />
        </Tab>
        <Tab eventKey="D35" title="D35" className="text-dark px-2">
          <D35 />
        </Tab>
        <Tab eventKey="L22" title="L22" className="text-dark px-2">
          <L22 />
        </Tab>
        <Tab eventKey="L30" title="L30" className="text-dark px-2">
          <L30 />
        </Tab>
        <Tab eventKey="L45" title="L45" className="text-dark px-2">
          <L45 />
        </Tab>
        <Tab eventKey="V50" title="V50" className="text-dark px-2">
          <V50 />
        </Tab>
      </Tabs> */}
      <L20 />
      <L22 />
      <L30 />
      <C20 />
      <R25 />
      <D35 />
      <L45 />
      <V50 />
    </div>
  );
};

export default PursuitMasterPlan;
