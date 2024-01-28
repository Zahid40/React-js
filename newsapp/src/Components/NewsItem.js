import React, { Component } from 'react'


export class NewsItem extends Component {

  render() {
    let { title, desc, imgurl } = this.props;
    return (
      <>
        <div className="group hover:h-auto hover:flex-col w-full h-24 flex flex-row items-center hover:relative  rounded-2 ">
          <img className="w-24 aspect-square min-w-24 min-h-24 max-w-auto max-h-auto group-hover:w-full group-hover:aspect-video  rounded-[15px] bg-cover group-hover:bg-gradient-to-r from-indigo-500" src={imgurl} alt="news"/> 
          {/* <a href={}></a> */}

          <div className='p-2 flex flex-col justify-end rounded-[15px] w-full group-hover:h-full group-hover:bg-gradient-to-t from-zinc-900 group-hover:absolute group-hover:bottom-0'>
            <p className="w-full h-10  text-black text-sm  font-semibold overflow-hidden group-hover:text-white">{title}</p>
            <p className="w-full h-10  text-zinc-500 text-[8px] font-semibold overflow-hidden group-hover:text-zinc-200">{desc}</p>
          </div>
        </div>
      </>

    )
  }
}
export default NewsItem
