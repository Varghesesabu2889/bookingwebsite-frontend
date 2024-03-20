import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'react-bootstrap'
import heroVideo from '../assets/images/hero-video.mp4'
import heroVideo2 from '../assets/images/herovideo2.mp4'
import heroVideo3 from '../assets/images/herovideo3.mp4'
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
                <h1>Traveling opens the door of creating
                  <span className="highlight">
                    memories </span></h1>
                    <p>
                    One of my favorite travel memories is from a trip to Kyoto, Japan. 
                    The city is steeped in rich history and culture, and everywhere you look, 
                    there's something fascinating to discover.</p><p>During my time in Kyoto, I visited the 
                    stunning Fushimi Inari Taisha, a Shinto shrine famous for its thousands of vibrant red
                     torii gates. Walking through the winding path of gates surrounded by lush greenery was a 
                     truly mesmerizing experience.
                    </p>
                  </div>
          </Col>
          <Col lg="2">
            <div className="hero__img_box">
              <video src={heroVideo} alt="" autoPlay loop controls/>
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