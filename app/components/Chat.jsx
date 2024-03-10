import React from 'react'
import userProfile from "../svg/YH5TFCE1QY-preview.png";
import Image from 'next/image';

const Chat = () => {
    return (
        <div className="w-5/12 max-h-full overflow-hidden bg-[#20232C]">
            <div className="mt-4  h-full">
                <div className="sticky top-0 z-50 rounded-t-2xl bg-[#000000] py-5 px-8 text-left text-sm  text-white">
                    <Image src={userProfile} alt="" className="float-left inline-block h-6 w-6 sm:h-10 sm:w-10  rounded-full" />
                    <h4 className=" inline-block py-1 ml-4 font-sans font-semibold normal-case">Ajju Bhai</h4>
                </div>
                <div className="flex-grow px-8 pt-8 text-left flex-col flex justify-end text-white bg-[#1B1E25] min-h-full pb-28">
                    <div className="relative mb-6 text-center">
                        <span className="relative  px-2 text-sm">Yesterday</span>
                    </div>

                    <div className="relative mb-6 text-left">
                        <div className="text-gray-700">
                            <div className="relative float-right inline-block rounded-2xl rounded-br-none bg-blue-700 py-3 px-4 text-white">
                                <p className="text-sm">Option congue nihil imperdiet mazim placerat facer possim.</p>
                            </div>
                        </div>
                        <div className="clear-both flex text-gray-700"></div>
                    </div>

                    <div className="relative mb-6 text-left">
                        <div className="text-gray-700">
                            <div className="absolute top-0 left-0">
                                <Image src={userProfile} alt="" className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full" />
                            </div>
                            <div className="relative float-left ml-8 sm:ml-16 inline-block rounded-2xl rounded-tl-none bg-gray-200 py-3 px-4">
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia optio accusamus.</p>
                            </div>
                        </div>
                        <div className="clear-both flex text-gray-700"></div>
                    </div>

                    <div className="relative mb-6 text-left">
                        <div className="text-gray-700">
                            <div className="relative float-right rounded-2xl rounded-br-none bg-blue-700 py-3 px-4 text-white">
                                <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                            </div>
                        </div>
                        <div className="clear-both flex text-gray-700"></div>
                    </div>
                    <div className="rounded-2xl flex h-10 items-center justify-start bg-[#16171C] leading-6">
                        <input placeholder="Hello" className="peer ml-4 flex-grow bg-transparent text-white outline-none" />
                        <button type="button" className="peer-focus:mr-4 z-20 cursor-pointer mr-2 text-[#E4EE97] outline-none duration-150 hover:scale-125">
                            <svg className="h-6 w-6 stroke-2" viewBox="0 0 32 32" fill="none">
                                <circle cx="15" cy="14" r="8" stroke="currentColor" fill="transparent"></circle>
                                <line x1="21.1514" y1="19.7929" x2="26.707" y2="25.3484" stroke="currentColor" fill="transparent"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
