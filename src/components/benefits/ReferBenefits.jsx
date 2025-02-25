import { ListGroup, Table } from "flowbite-react";
import React from "react";
import BenefitsData from '../../data/data.json';
import { HiAcademicCap } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { Button as Btn } from "flowbite-react";
import Referral from "../../pages/Referral";

function ReferBenefits() {
  const [selectedBtn, setSelectedBtn] = React.useState("all");
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div className='max-w-4xl mx-auto py-7'>
      <Referral openModal={openModal} setOpenModal={setOpenModal} />
      <h2 className='text-center font-[600] text-[20px] leading-[32px] md:text-[27.66px] md:leading-[43px] text-[#1A202C]'>
        What Are The <span className='text-[#1a73e8]'>Referral Benefits</span>?
      </h2>
      <div className='flex justify-end'>
        <Switch checked={true} name='loading' color='primary' />
      </div>
      <div className=' grid grid-cols-3 gap-5'>
        <div className='col-span-1'>
          <ListGroup className='w-52 shadow-md'>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => setSelectedBtn("all")}
              active={selectedBtn === "all"}
            >
              ALL PROGRAMS
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => setSelectedBtn("strategy")}
              active={selectedBtn === "strategy"}
            >
              Strategy & Leadership
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => setSelectedBtn("business")}
              active={selectedBtn === "business"}
            >
              Business Management
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => setSelectedBtn("product")}
              active={selectedBtn === "product"}
            >
              Product Management
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => setSelectedBtn("fintech")}
              active={selectedBtn === "fintech"}
            >
              Fintech
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => setSelectedBtn("senior")}
              active={selectedBtn === "senior"}
            >
              Senior Management
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => setSelectedBtn("data")}
              active={selectedBtn === "data"}
            >
              Data Science
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => setSelectedBtn("digital")}
              active={selectedBtn === "digital"}
            >
              Digital Transformation
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
            <ListGroup.Item
              href='#'
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => setSelectedBtn("business-analytics")}
              active={selectedBtn === "business-analytics"}
            >
              Business Analytics
              <FaAngleRight className='w-5 h-5' />
            </ListGroup.Item>
          </ListGroup>
        </div>
        {selectedBtn === "all" && (
          <div className='overflow-x-auto shadow-md col-span-2'>
            <Table>
              <Table.Head>
                <Table.HeadCell className='bg-[#afcef7] text-[#1350A0] text-[16px] font-[600] leading-[20px] capitalize border-solid border-r-[1px] border-gray-400 py-1'>
                  Programs
                </Table.HeadCell>
                <Table.HeadCell className='bg-[#afcef7] text-[#1350A0] text-[16px] font-[600] leading-[20px] capitalize border-solid border-r-[1px] border-gray-400 py-1 '>
                  Referrer Bonus
                </Table.HeadCell>
                <Table.HeadCell className='bg-[#afcef7] text-[#1350A0] text-[16px] font-[600] leading-[20px] capitalize py-1'>
                  Referee Bonus
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className='divide-y'>
                {BenefitsData.map((data) => (
                  <Table.Row
                    className='bg-white dark:border-gray-700 dark:bg-gray-800 '
                    key={data.id}
                  >
                    <Table.Cell className='border-solid border-r-[1px] border-gray-400 py-1'>
                      <span className='flex gap-1'>
                        <HiAcademicCap className='text-[#1350A0] h-4 w-4 mt-1' />
                        {data.program}
                      </span>
                    </Table.Cell>
                    <Table.Cell className='border-solid border-r-[1px] border-gray-400 py-1'>
                      {data.referrer}
                    </Table.Cell>
                    <Table.Cell className='py-1'>{data.referee}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        )}
        {selectedBtn === "strategy" && (
          <div className='col-span-2'>
            <div className='flex justify-center items-center'>
              <h1>Strategy & Leadership</h1>
            </div>
          </div>
        )}
        {selectedBtn === "business" && (
          <div className='col-span-2'>
            <div className='flex justify-center items-center'>
              <h1>Business Management</h1>
            </div>
          </div>
        )}
        {selectedBtn === "product" && (
          <div className='col-span-2'>
            <div className='flex justify-center items-center'>
              <h1>Product Management</h1>
            </div>
          </div>
        )}
        {selectedBtn === "fintech" && (
          <div className='col-span-2'>
            <div className='flex justify-center items-center'>
              <h1>Fintech</h1>
            </div>
          </div>
        )}
        {selectedBtn === "senior" && (
          <div className='col-span-2'>
            <div className='flex justify-center items-center'>
              <h1>Senior Management</h1>
            </div>
          </div>
        )}
        {selectedBtn === "data" && (
          <div className='col-span-2'>
            <div className='flex justify-center items-center'>
              <h1>Data Science</h1>
            </div>
          </div>
        )}
        {selectedBtn === "digital" && (
          <div className='col-span-2'>
            <div className='flex justify-center items-center'>
              <h1>Digital Transformation</h1>
            </div>
          </div>
        )}
        {selectedBtn === "business-analytics" && (
          <div className='col-span-2'>
            <div className='flex justify-center items-center'>
              <h1>Business Analytics</h1>
            </div>
          </div>
        )}
      </div>
      <div className='flex justify-end py-1'>
        <Btn color='light' size='xs' outline>
          <span className='flex justify-center items-center gap-2'>
            Show More
            <FaChevronDown className='h-3 w-3 text-gray-500' />
          </span>
        </Btn>
      </div>
      <div className='flex justify-center pb-5'>
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
  );
}

export default ReferBenefits;
