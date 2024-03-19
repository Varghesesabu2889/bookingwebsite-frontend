import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'react-bootstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customationImg from '../assets/images/customization.png';

const servicesData = () => [
  {
    imageUrl: weatherImg,
    title: 'Calculate Weather',
    desc: 'This service uses the OpenWeather Map API to provide you with real-time weather information for any city in the world.',
  },
  {
    imageUrl: guideImg,
    title: 'Best Tour Guide',
    desc: 'Embark on unforgettable journeys with our service, offering the best tour guides tailored to your travel needs',
  },
  {
    imageUrl: customationImg,
    title: 'Customization',
    desc: 'Customization tailors products or services to specific preferences. In travel, it lets travelers personalize experiences.',
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData().map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
