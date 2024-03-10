import React from 'react';
import Accordion from './Accordion';
import Profile from '../svg/YH5TFCE1QY-preview.png';
import Image from 'next/image';

const RightSidemenu = () => {
    return (
        <div className="w-2/12 h-full rounded-br-3xl bg-[#20232C] flex flex-col">
            <div className='h-1/2 mx-3 mt-5 rounded-2xl bg-[#5852D6] flex justify-center'>
                <div className='mt-5 text-white justify-center'>
                    <Image className='w-28 h-28  rounded-full' src={Profile} alt="" />
                </div>
            </div>
            <Accordion title="Media" />
            <Accordion title="Links" />
        </div>
    );
};

export default RightSidemenu;
