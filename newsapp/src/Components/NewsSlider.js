import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { Component } from 'react'
import LcData from '../rsponse.json'

export default class NewsSlider extends Component {
  constructor() {
    super();
    this.state = {
      aritcle: LcData.articles,
    }
  }
  render() {
    return (
      <div className='pl-4 py-4'>
        <Swiper className='rounded-l-[15px]' // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1.1}
          loop={true}
        // pagination={{ clickable: true , dynamicBullets:true}} 
        >
          {this.state.aritcle.map((e) => {
            return (<SwiperSlide key={e.image}>
              <div className='relative'>
                <img className='w-auto aspect-video rounded-[15px]' src={e.image} alt="" />
                <div className='p-2 flex flex-col justify-end rounded-[15px] absolute bottom-0 h-full w-full bg-gradient-to-t from-zinc-900'>
                  <p className="w-full h-10  text-white text-sm  font-semibold overflow-hidden">{e.title}</p>
                  <p className="w-full h-10  text-zinc-200 text-[8px] font-semibold overflow-hidden">{e.description}</p>
                </div>
              </div>
            </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    )
  }
}

