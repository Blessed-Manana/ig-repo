"use client"
import { Grid } from "@mui/material";
import styles from "./Stories.css"
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';

const Stories = () => {
    const stories = [
      {
        picture:"Picture",
        text:"Text"

      },
      {
        picture:"Picture",
        text:"Text"

      },
      {
        picture:"Picture",
        text:"Text"

      },
      {
        picture:"Picture",
        text:"Text"

      },
      {
        picture:"Picture",
        text:"Text"

      },
      {
        picture:"Picture",
        text:"Text"

      },
      {
        picture:"Picture",
        text:"Text"

      }
    ]
    return ( 
      <Swiper
      // pagination={{
      //   type: 'fraction',
      // }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      id= "mswiper"
      
    >
      <SwiperSlide id="slide">
        {stories.map((story, index) => {
          return(
            <div key={index} className="story">
             <div className="imag"></div>
              <p>{story.text}</p>
            </div>
          
          )
        })}
        
      </SwiperSlide>

      <SwiperSlide id="slide">
      {stories.map((story, index) => {
          return(
            <div key={index} className="story">
             <div className="imag"></div>
              <p>{story.text}</p>
            </div>
          
          )
        })}
      </SwiperSlide>
      <SwiperSlide id="slide">
        {stories.map((story, index) => {
          return(
            <div key={index} className="story">
             <div className="imag"></div>
              <p>{story.text}</p>
            </div>
          
          )
        })}
      </SwiperSlide>
      <SwiperSlide id="slide">
      {stories.map((story, index) => {
          return(
            <div key={index} className="story">
             <div className="imag"></div>
              <p>{story.text}</p>
            </div>
          
          )
        })}
      </SwiperSlide>
      <SwiperSlide id="slide">{stories.map((story, index) => {
          return(
            <div key={index} className="story">
             <div className="imag"></div>
              <p>{story.text}</p>
            </div>
          
          )
        })}</SwiperSlide>
      <SwiperSlide id="slide">
      {stories.map((story, index) => {
          return(
            <div key={index} className="story">
             <div className="imag"></div>
              <p>{story.text}</p>
            </div>
          
          )
        })}
      </SwiperSlide>
      <SwiperSlide id="slide">
      {stories.map((story, index) => {
          return(
            <div key={index} className="story">
             <div className="imag"></div>
              <p>{story.text}</p>
            </div>
          
          )
        })}
      </SwiperSlide>
      <SwiperSlide id="slide">
      {stories.map((story, index) => {
          return(
            <div key={index} className="story">
             <div className="imag"></div>
              <p>{story.text}</p>
            </div>
          
          )
        })}
      </SwiperSlide>
     
    </Swiper>
     );
}
 
export default Stories;