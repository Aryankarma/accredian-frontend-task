import { Button } from "flowbite-react";
import React from "react";
import { PiHeadsetFill } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";

function Support() {
  return (
    <div className='max-w-4xl mx-auto rounded-lg bg-[#1A73E8] p-6 flex justify-between items-center mt-16 mb-10'>
      <div className='flex justify-start items-center gap-5'>
        <div className='h-12 w-12 rounded-md bg-white flex justify-center items-center'>
          <PiHeadsetFill className='w-10 h-10 text-[#1A73E8]' />
        </div>
        <div className='flex flex-col justify-center items-center gap-1 text-white'>
          <h1 className='font-[600] text-[24px] leading-[28px]'>
            Want to delve deeper into the program?
          </h1>
          <p className='font-[500] text-[14px] leading-[24px]'>
            Share your details to receive expert insights from our program team!
          </p>
        </div>
      </div>
      <Button className='focus:ring-0 rounded-md' color='light' size='xs'>
        <span className='flex gap-1 justify-center items-center text-[#1A73E8]'>
          Get in touch
          <FaAngleRight className='w-4 h-4' />
        </span>
      </Button>
    </div>
  );
}

export default Support;
