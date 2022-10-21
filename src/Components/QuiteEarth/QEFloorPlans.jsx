import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import H20 from "./FloorPlans/H20";
import L21 from "./FloorPlans/L21";
import U10 from "./FloorPlans/U10";
import U20 from "./FloorPlans/U20";
import V35 from "./FloorPlans/V35";

const QEFloorPlans = () => {
  const [key, setKey] = useState("U10");
  return (
    <div>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-block d-md-none">
        In That Quiet Earth - Floor Plans
      </h2>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-none d-md-block">
        Total Environment In That Quite Earth - Floor Plans
      </h2>
      {/* <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark px-2"
      >
        <Tab eventKey="U10" title="U10" className="text-dark px-2">
          <U10 />
        </Tab>
        <Tab eventKey="H20" title="H20" className="text-dark px-2">
          <H20 />
        </Tab>
        <Tab eventKey="U20" title="U20" className="text-dark px-2">
          <U20 />
        </Tab>
        <Tab eventKey="V35" title="V35" className="text-dark px-2">
          <V35 />
        </Tab>
      </Tabs> */}
      <L21 />
      <U10 />
      <H20 />
      <U20 />
      <V35 />
    </div>
  );
};

export default QEFloorPlans;
