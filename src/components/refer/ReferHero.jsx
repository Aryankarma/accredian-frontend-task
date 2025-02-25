import React from "react";
import referHeroImg from "../../assets/referHero.png";
import money from "../../assets/money.png";
import { Button } from "@mui/material";
import "./Refer.css";
import ReferBenefits from "../benefits/ReferBenefits";
import FAQs from "../../pages/FAQs";
import Support from "../../pages/Support";
import Referral from "../../pages/Referral";

function ReferHero() {
  const [selectedBtn, setSelectedBtn] = React.useState("refer");
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <Referral openModal={openModal} setOpenModal={setOpenModal} />
      <div className='max-w-4xl mx-auto my-5 '>
        <div className='flex justify-center mb-5 '>
          <div className='flex gap-10 justify-center px-10 bg-[#eef5ff] rounded-full py-1'>
            <button type='button' onClick={() => setSelectedBtn("refer")}>
              {selectedBtn === "refer" ? (
                <span className='text-[#1a73e8]'>Refer</span>
              ) : (
                "Refer"
              )}
            </button>
            <button type='button' onClick={() => setSelectedBtn("benefits")}>
              {selectedBtn === "benefits" ? (
                <span className='text-[#1a73e8]'>Benefits</span>
              ) : (
                "Benefits"
              )}
            </button>
            <button type='button' onClick={() => setSelectedBtn("faqs")}>
              {selectedBtn === "faqs" ? (
                <span className='text-[#1a73e8]'>FAQs</span>
              ) : (
                "FAQs"
              )}
            </button>
            <button type='button' onClick={() => setSelectedBtn("support")}>
              {selectedBtn === "support" ? (
                <span className='text-[#1a73e8]'>Support</span>
              ) : (
                "Support"
              )}
            </button>
          </div>
        </div>
        {selectedBtn === "refer" && (
          <div className='grid grid-cols-5 bg-[#eef5ff] rounded-lg px-5 relative overflow-hidden'>
            <img
              src={money}
              alt='money'
              className='absolute -top-3 right-3 h-14 w-14 rotate-180'
            />
            <img
              src={money}
              alt='money'
              className='hidden md:block absolute -top-3 left-0 h-14 w-14 rotate-90'
            />
            <div className='col-span-2'>
              <div className='flex flex-col gap-5 justify-center h-full'>
                <h1 className='text-[#1A202C] leading-[30px] text-[30px] font-[500] sm:leading-[40px] sm:text-[40px] sm:font-[600] md:leading-[65px] md:text-[65px] md:font-[700]'>
                  Let’s Learn
                  <br />& Earn
                </h1>
                <h3 className='text-[#1A202C] leading-[30px] text-[20px] font-[300] sm:leading-[40px] sm:text-[24px] sm:font-[400] md:leading-[55px] md:text-[30px] md:font-[400]'>
                  Get a chance to win <br />
                  up-to
                  <span className='text-[#1A73E8] leading-[30px] text-[25px] font-[500] sm:leading-[40px] sm:text-[30px] sm:font-[600] md:leading-[55px] md:text-[40px] md:font-[700]'>
                    Rs. 15,000
                  </span>
                </h3>
                <div>
                  <Button
                    variant='contained'
                    className='font-[400] text-[20px] leading-[24px] px-5 py-1'
                    type='button'
                    onClick={() => setOpenModal(true)}
                  >
                    Refer Now
                  </Button>
                </div>
              </div>
            </div>
            <div className='col-span-3 relative'>
              <img src={referHeroImg} alt='refer-hero' className='z-40' />
              <img
                src={money}
                alt='money'
                className='hidden md:block absolute bottom-10 left-16 h-14 w-14 rotate-90'
              />
              <img
                src={money}
                alt='money'
                className='hidden md:block absolute top-8 left-48 h-14 w-14 rotate-180'
              />
            </div>
          </div>
        )}
        {selectedBtn === "benefits" && <ReferBenefits />}
        {selectedBtn === "faqs" && <FAQs />}
        {selectedBtn === "support" && <Support />}
      </div>
    </>
  );
}

export default ReferHero;
