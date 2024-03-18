import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title:'Calculate Weather',
        desc:'We planed your itnernary according to weather and places',
    },
    {
        imgUrl:guideImg,
        title:'Best Tour Guide',
        desc:'We have best tour guide to guide you!!',
    },
    {
        imgUrl:customizationImg,
        title:'Customization',
        desc:'We Customise trip plan according to your choose',

    },
]

const ServiceList = () => {
  return (<>
  {servicesData.map((item,index)=>(
  <Col lg='3' key={index}>
    <ServiceCard item={item}/>
    </Col>
    ))}
  </>
  );
};


export default ServiceList;