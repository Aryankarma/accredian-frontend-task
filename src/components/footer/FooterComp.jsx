import React from "react";
import { Button, Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import logo from "../../assets/whitelogo.png";

function FooterComp() {
  return (
    <div className='w-full bg-[#282828]'>
      <Footer container className='w-full bg-[#282828]'>
        <div className='max-w-4xl mx-auto md:w-full'>
          <div className='flex justify-between items-center'>
            <img src={logo} alt='logo' className='h-12 ' />
            <div className='flex flex-col justify-center items-center'>
              <Button color={"light"} className='focus:ring-0' size='xs'>
                Schedule 1-on-1 Call Now
              </Button>
              <p className='text-white text-xs'>
                Speak with our Learning Advisor
              </p>
            </div>
          </div>
          <Footer.Divider />
          <div className='grid md:grid-cols-5 md:gap-6 md:mt-0 mt-4 grid-cols-1 gap-6'>
            <div className='md:col-span-2'>
              <Footer.Title title='Programs' className='text-white' />
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href='#'>
                  <span className='flex justify-between items-center'>
                    Data Science & AI
                    <span className='text-xl font-bold'>+</span>
                  </span>
                </Footer.Link>
                <Footer.Link href='#'>
                  <span className='flex justify-between items-center'>
                    Product Management
                    <span className='text-xl font-bold'>+</span>
                  </span>
                </Footer.Link>
                <Footer.Link href='#'>
                  <span className='flex justify-between items-center'>
                    Business Analytics
                    <span className='text-xl font-bold'>+</span>
                  </span>
                </Footer.Link>
                <Footer.Link href='#'>
                  <span className='flex justify-between items-center'>
                    Digital Transformation
                    <span className='text-xl font-bold'>+</span>
                  </span>
                </Footer.Link>
                <Footer.Link href='#'>
                  <span className='flex justify-between items-center'>
                    Business Management
                    <span className='text-xl font-bold'>+</span>
                  </span>
                </Footer.Link>
                <Footer.Link href='#'>
                  <span className='flex justify-between items-center'>
                    Project Management
                    <span className='text-xl font-bold'>+</span>
                  </span>
                </Footer.Link>
                <Footer.Link href='#'>
                  <span className='flex justify-between items-center'>
                    Strategy & Leadership
                    <span className='text-xl font-bold'>+</span>
                  </span>
                </Footer.Link>
                <Footer.Link href='#'>
                  <span className='flex justify-between items-center'>
                    Senior Management
                    <span className='text-xl font-bold'>+</span>
                  </span>
                </Footer.Link>
                <Footer.Link href='#'>
                  <span className='flex justify-between items-center'>
                    Fintech
                    <span className='text-xl font-bold'>+</span>
                  </span>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className='md:col-span-2'>
              <Footer.Title title='Contact Us' className='text-white' />
              <div className='text-white text-xs flex flex-col gap-2'>
                <span>
                  Email us (For Data Science Queries): admissions@accredian.com
                </span>
                <span href='#'>
                  Email us (For Product Management Queries):pm@accredian.com
                </span>
                <span href='#'>
                  Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
                </span>
                <span href='#' className='text-white text-xs'>
                  Product Management Admission Helpline:+91 9625811095
                </span>
                <span href='#' className='text-white text-xs'>
                  Enrolled Student Helpline: +91 7969322507
                </span>
                <span href='#' className='text-white text-xs'>
                  Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                  18, Gurugram, Haryana 122015
                </span>
              </div>
              <h2 className='text-white mt-2'>Why Accredian</h2>
              <div>
                <h2 className='text-white my-2'>Follow Us</h2>
                <div className='flex justify-start gap-4 '>
                  <Footer.Icon
                    href='#'
                    icon={BsFacebook}
                    className='text-white'
                  />
                  <Footer.Icon
                    href='#'
                    icon={BsInstagram}
                    className='text-white'
                  />
                  <Footer.Icon
                    href='#'
                    icon={BsTwitter}
                    className='text-white'
                  />
                  <Footer.Icon
                    href='#'
                    icon={BsGithub}
                    className='text-white'
                  />
                  <Footer.Icon
                    href='#'
                    icon={BsDribbble}
                    className='text-white'
                  />
                </div>
              </div>
            </div>
            <div className='md:col-span-1'>
              <Footer.Title title='Accredian' className='text-white' />
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href='#'>About</Footer.Link>
                <Footer.Link href='#'>Career</Footer.Link>
                <Footer.Link href='#'>Blog</Footer.Link>
                <Footer.Link href='#'>Admission Policy</Footer.Link>
                <Footer.Link href='#'>Referral Policy</Footer.Link>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms Of Service</Footer.Link>
                <Footer.Link href='#'>Master FAQs</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>

          <div className='w-full flex justify-center mt-6'>
            <Footer.Copyright
              href='/'
              by='Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved™'
              year={new Date().getFullYear()}
              className='text-white'
            />
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default FooterComp;
