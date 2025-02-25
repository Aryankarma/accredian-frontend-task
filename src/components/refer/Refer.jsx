import React from "react";
import referImg from "../../assets/refer.png";
import { Button } from "@mui/material";
import { MdPersonAddAlt1 } from "react-icons/md";
import { PiClipboardTextFill } from "react-icons/pi";
import { GiWallet } from "react-icons/gi";
import Referral from "../../pages/Referral";

function Refer() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <Referral openModal={openModal} setOpenModal={setOpenModal} />
      <div className='bg-[#EEF5FF] flex flex-col justify-center items-center py-6'>
        <h1 className='font-[400] text-[20px] leading-[32px] md:font-[600] md:text-[27.66px] md:leading-[43px] text-[#1A202C]'>
          How Do I <span className='text-[#1a73e8]'>Refer</span>?
        </h1>
        <div className='relative'>
          <div className='h-24 w-24 sm:h-32 sm:w-32 md:h-[13%] md:w-[13%] absolute left-16 top-12 sm:left-24 sm:top-20 md:left-64 md:top-32'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <MdPersonAddAlt1 className='w-[40px] h-[30px] sm:w-[60px] sm:h-[40.96px] md:w-[88px] md:h-[66.96px] text-[#1A73E8] text-center' />
              <p className='font-[400] text-[8px] sm:text-[12px] md:text-[14px] md:leading-[22px] text-center'>
                Submit referrals easily via our website’s referral section.
              </p>
            </div>
          </div>
          <div className='h-24 w-24 sm:h-32 sm:w-32 md:h-[13%] md:w-[13%] absolute left-52 top-12 sm:left-[305px] sm:top-20 md:left-[552px] md:top-32'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <PiClipboardTextFill className='w-[40px] h-[30px] sm:w-[60px] sm:h-[40.96px] md:w-[88px] md:h-[66.96px] text-[#1A73E8] text-center' />
              <p className='font-[400] text-[8px] sm:text-[12px] md:text-[14px] md:leading-[22px] text-center'>
                Earn rewards once your referral joins an Accredian program.
              </p>
            </div>
          </div>
          <div className=' h-24 w-24 sm:h-32 sm:w-32 md:h-[13%] md:w-[13%] absolute right-16 top-12 sm:right-24 sm:top-20  md:right-64 md:top-32'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <GiWallet className='w-[40px] h-[30px] sm:w-[60px] sm:h-[40.96px] md:w-[88px] md:h-[66.96px] text-[#1A73E8] text-center' />
              <p className='font-[400] text-[8px] sm:text-[12px] md:text-[14px] md:leading-[22px] text-center'>
                Both parties receive a bonus 30 days after program enrollment.
              </p>
            </div>
          </div>
          <img src={referImg} alt='refer' width={"100%"} className='md:px-24' />
        </div>
        <Button
          variant='contained'
          className='font-[400] text-[20px] leading-[24px] px-5 py-1'
          type='button'
          onClick={() => setOpenModal(true)}
        >
          Refer Now
        </Button>
      </div>
    </>
  );
}

export default Refer;
