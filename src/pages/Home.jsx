import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'react-bootstrap'
import heroVideo2 from '../assets/images/hero-video3.mp4'
import heroVideo from '../assets/images/hero-video2.mp4'
import heroVideo3 from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.gif'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedToursList from '../components/Featured-Tours/FeaturedToursList'
import ImageGallery from '../Image-Gallery/ImageGallery'
import Newsletter from '../shared/Newsletter'
const Home = () => {
  return (
    <>
    {/* hero section */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt="" />
                </div>
                <h3>Discover India's Hidden Gems: Uncovering Rare and Remarkable Destinations with us
                   </h3>
                    <p>
                    During my travels through India's rare and stunning destinations,
                     I had the privilege of discovering a secluded village nestled amidst
                      the Western Ghats. The warm hospitality of the locals, coupled with 
                      breathtaking landscapes of tea plantations and misty mountains, created 
                      a mesmerizing and unforgettable experience.</p> <p> I'd like to express my gratitude to Journey Junction
                       website for inspiring me to explore India's rare and beautiful destinations,
                        leading me to discover hidden gems and create unforgettable memories during my travels.
                    </p>
                  </div>
          </Col>
          <Col lg="2">
            <div className="hero__img_box">
              <video src={heroVideo} alt="" autoPlay  loop controls/>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img_box">
              <video src={heroVideo2} alt="" autoPlay  loop controls style={{marginTop:"20px"}}/>
            </div>
          </Col><Col lg="2">
            <div className="hero__img_box">
              <video src={heroVideo3} alt="" autoPlay loop controls style={{marginTop:"40px"}}/>
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/*   Hero Section  */}
    <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h6 className="services__subtitle">What we serve</h6>
          <h2 className='services__title'>We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
    </section>
    {/* featured tour section  */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5' >
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">
              Our Featured  Tours
            </h2>
          
          </Col>
          <FeaturedToursList/>
        </Row>
      </Container>
    </section>
    {/* image gallery section */}
    <section> 
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery__title">
              Visit our Customers gallery
            </h2>
            <ImageGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default Home