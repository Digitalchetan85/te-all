import React from 'react'
import { useState } from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Image1 from '../../Images/projects/pursuit/floor-plans/l45p-type-1.png'
import Image2 from '../../Images/projects/pursuit/floor-plans/l45p-type-2.png'
import Image3 from '../../Images/projects/pursuit/floor-plans/l45p-type-3.png'
import PersuitPriceModal from '../PersuitPriceModal'
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'

const L45P = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const images = [
    {
      id: 1,
      name: 'L45 P - Type 1',
      img: Image1,
      alt: '',
      unit: 'Penthouse',
      price: '14.19Cr',
      sale: '9869',
      carpet: '5428',
      built: '7895',
      space: '2268'
    },
    {
      id: 2,
      name: 'L45 P - Type 2',
      img: Image2,
      alt: '',
      unit: 'Penthouse',
      price: '14.19Cr',
      sale: '9869',
      carpet: '5428',
      built: '7895',
      space: '2268'
    },
    {
      id: 3,
      name: 'L45 P - Type 3',
      img: Image3,
      alt: '',
      unit: 'Penthouse',
      price: '14.19Cr',
      sale: '9869',
      carpet: '5428',
      built: '7895',
      space: '2268'
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
                        This Home, comprising 9,869 sq. ft. reference saleable
                        area has a wire-cut brick exterior which, besides being
                        beautiful, is natural and gains character over time.
                        Inside, the home wraps around a open to sky central
                        courtyard with visual access from all key areas. This
                        keeps the Home always connected to the nature outside.
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

export default L45P
