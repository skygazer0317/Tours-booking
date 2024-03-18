import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {

const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autopalySpeed:2000,
    slidesToShow:3,

    responsive:[
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots:true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ]
}

  return <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
        <p>Fist want to thank Associate Priya for helping and planning for entire Maldives trip. She helped us from very beginning to the last day until we board the return flight. The place visited - Kandima Maldives, which is a great escape destination from the Male City. The place was entirely a luxury destination and the experience was unmatchable. Had a memorable stay ge I suggest GT Holiday for all sort of vacation planning.
        </p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className='w-25 h-25 rounded-2' alt=''/>
        <div>
            <h6 className='mb-0 mt-3'>Kishore</h6>
            <p>Customer</p>
        </div>
        </div> 

    </div>

    <div className='testimonial py-4 px-3'>
        <p>I saw Tour World through Instagram, they have various tour package option. I choose goa and customized the tour. Kalpana was their person who assisted me through out my trip, suggested me many hotels in goa. Even though it was a busy season and weekend all booking of flights, hotel's, was done hassle free by Kalpana. So my part was only enjoying the trip. With this awesome experience with tour world , next I will try my abroad trip. Thank you.
        </p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>
        <div>
            <h6 className='mb-0 mt-3'>Gautham</h6>
            <p>Customer</p>
        </div>
        </div> 

    </div>

    <div className='testimonial py-4 px-3'>
        <p>We went to Andaman last week. We had booked for 3N/4D package. thanks to Mr.Kumar for organizing an amazing trip which will be cherished forever. Everything was taken care properly. Flights, Resort, Transfer and other documents, all are arranged properly. Overall great service.
        </p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava03} className='w-25 h-25 rounded-2' alt=''/>
        <div>
            <h6 className='mb-0 mt-3'>Aravind Raj</h6>
            <p>Customer</p>
        </div>
        </div> 

    </div>
    
    <div className='testimonial py-4 px-3'>
        <p>We went to Andaman last week. We had booked for 3N/4D package. thanks to Mr.Kumar for organizing an amazing trip which will be cherished forever. Everything was taken care properly. Flights, Resort, Transfer and other documents, all are arranged properly. Overall great service.
        </p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>
        <div>
            <h6 className='mb-0 mt-3'>Rohit</h6>
            <p>Customer</p>
        </div>
        </div> 

    </div>
    
  </Slider>
}

export default Testimonial