import React from 'react'
import Accordion from "./Accordion"
import profile from "../svg/YH5TFCE1QY-preview.png"
import Image from 'next/image'

const secondleftmenu = () => {
  return (
    <div className="w-1/4 h-full bg-[#20232C]">
      <div className="rounded-2xl flex h-16 items-center justify-start mx-4 mt-5 bg-[#16171C] leading-10">
        <svg className="h-6 w-6 stroke-2 ml-4" viewBox="0 0 32 32" fill="none">
          <circle cx="15" cy="14" r="8" stroke="#E4EE97" fill="transparent"></circle>
          <line x1="21.1514" y1="19.7929" x2="26.707" y2="25.3484" stroke="#E4EE97" fill="transparent"></line>
        </svg>
        <input placeholder="Search" className="peer ml-2 flex-grow bg-transparent text-white outline-none" />
        <button type="button" className="peer-focus:mr-4 z-20 cursor-pointer mr-2 outline-none">
        </button>
      </div>
      <Accordion title="Unread">
        <div className='rounded-2xl text-white hover:bg-[#1A1D24] p-2 cursor-pointer'>
          <div className="flex w-full mx-2 items-center overflow-hidden ">
            <Image className="shrink-0  w-10  rounded-full" src={profile} />
            <div className="w-full">
              <div className='flex justify-between'>
                <p className="font-medium px-3">Abhinav Chauhan</p>
                <p className="font-medium text-xs leading-6 text-gray-400 px-3">19:10</p>
              </div>
              <p className="font-medium text-gray-400 text-xs px-3">+91 9634355530</p>
            </div>
          </div>
          <div className='ml-12 mt-1'>
          <p className=" font-medium text-gray-400 px-3">Hey, There?</p>
          </div>
        </div>
      </Accordion>
      <Accordion title="All Messages">
        <div className='rounded-2xl text-white hover:bg-[#1A1D24] p-2 cursor-pointer'>
          <div className="flex w-full mx-2 items-center overflow-hidden ">
            <Image className="shrink-0  w-10  rounded-full" src={profile} />
            <div className="w-full">
              <div className='flex justify-between'>
                <p className="font-medium px-3">Abhinav Chauhan</p>
                <p className="font-medium text-xs leading-6 text-gray-400 px-3">19:10</p>
              </div>
              <p className="font-medium text-gray-400 text-xs px-3">+91 9634355530</p>
            </div>
          </div>
          <div className='ml-12 mt-1'>
          <p className=" font-medium text-gray-400 px-3">Hey, There?</p>
          </div>
        </div>
      </Accordion>
    </div>

  )
}

export default secondleftmenu
