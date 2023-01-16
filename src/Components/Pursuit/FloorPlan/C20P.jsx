import React from 'react'
import { useState } from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Image1 from '../../Images/projects/pursuit/floor-plans/c20p-lower.png'
import Image2 from '../../Images/projects/pursuit/floor-plans/c20p-upper.png'
import PersuitPriceModal from '../PersuitPriceModal'
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'

const C20P = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const images = [
    {
      id: 1,
      name: 'C20P',
      img: Image1,
      alt: '',
      unit: 'Penthouse',
      price: '8.09Cr',
      sale: '5385',
      carpet: '3357',
      built: '4308',
      space: '534'
    },
    {
      id: 2,
      name: 'C20P',
      img: Image2,
      alt: '',
      unit: 'Penthouse',
      price: '8.09Cr',
      sale: '5385',
      carpet: '3357',
      built: '4308',
      space: '534'
    }
  ]

  const options = {
    rewind: true,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false,
        loop: false
      }
    }
  }

  return (
    <div className='p-3 bg-info'>
      <SimpleReactLightbox>
        <SRLWrapper>
          <OwlCarousel options={options}>
            {images.map((item, index) => (
              <Row className='g-3 justify-content-center' key={index}>
                <Col md={6} xs={12} sm={12}>
                  <div className='m-1 text-center p-1 rounded bg-info'>
                    <a href={item.img}>
                      <Image src={item.img} alt='alt' className='img-fluid' />
                    </a>
                  </div>
                </Col>
                <Col md={6} className='align-self-center'>
                  <div className='px-3'>
                    <h2 className='text-white'>{item.name}</h2>

                    <div className=''>
                      <p className='text-white'>
                        Comprising 2753 sq. ft. saleable area, the exterior of
                        this Home is clad with wire-cut brick. Besides being
                        beautiful, wire-cut bricks are natural and gain
                        character over time. Inside, the Home wraps around a
                        terrace garden which is visible from all key areas. This
                        keeps the residents connected to nature through their
                        day.
                      </p>
                    </div>
                    <Row className='g-3'>
                      <h2 className='text-center fs-3 mb-0 text-white'>
                        {item.unit} Price @ ₹ {item.price}* Onwards
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className='list-unstyled text-center text-white'>
                          <li>Reference Saleable Area : {item.sale} sq.ft.</li>

                          <li>Carpet Area : {item.carpet} sq.ft.</li>

                          <li>Built up Area : {item.built} sq.ft.</li>

                          <li>Outdoor Spaces : {item.space} sq.ft.</li>
                        </ul>
                      </Col>
                      <Col md={6} xs={6} sm={6}>
                        <div className=''>
                          <Button
                            variant='light'
                            onClick={handleShow}
                            className='w-100'
                          >
                            Price Breakup
                          </Button>
                        </div>
                      </Col>
                      <Col md={6} xs={6} sm={6}>
                        <div className=''>
                          <Button
                            variant='light'
                            onClick={handleShow}
                            className='w-100'
                          >
                            3 D Virtual Tour
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            ))}
          </OwlCarousel>
        </SRLWrapper>
      </SimpleReactLightbox>
      <PersuitPriceModal
        show={show}
        handleClose={handleClose}
        title='Download Pricesheet'
        projectid='57a99891-ec20-472a-b230-187e20fee71f'
      />
    </div>
  )
}

export default C20P
