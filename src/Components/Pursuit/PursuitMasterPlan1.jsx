import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Masterplan from '../Images/projects/pursuit/master-plan.jpg';

const PursuitMasterPlan1 = () => {
    const images = [
        { id: 1, imgName: Masterplan, alt: "", tag: "Master Paln" },
    ];

  return (
    <div className="pb-3">
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-block d-md-none">
        Radical Rhapsody - Master Plan
      </h2>
      <h2 className="text-center py-md-3 py-2 fs-3 text-info d-none d-md-block">
        Total Environment Pursuit Of A Radical Rhapsody - Master Plan
      </h2>
      <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3 justify-content-center">
              {images.map((item) => (
                <Col md={10} key={item.id}>
                  <div className="m-1 text-center p-1 rounded border border-3 border-info">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
    </div>
  )
}

export default PursuitMasterPlan1