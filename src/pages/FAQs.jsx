import { Accordion, Button } from "flowbite-react";
import React from "react";

function FAQs() {
  const [selectedBtn, setSelectedBtn] = React.useState("eligibility");

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='font-[400] text-[20px] leading-[32px] md:font-[600] md:text-[27.66px] md:leading-[43px] text-[#1A202C] text-center mt-6 mb-8'>
        Frequently Asked <span className='text-[#1a73e8]'>Questions</span>
      </h2>
      <div className='grid grid-cols-4 gap-20'>
        <div className='flex flex-col gap-4 col-span-1'>
          <Button
            type='button'
            color='light'
            className={`text-gray-500 ${
              selectedBtn === "eligibility" &&
              "text-[#1a73e8] border-none shadow-lg bg-gray-100"
            } focus:ring-transparent`}
            onClick={() => setSelectedBtn("eligibility")}
          >
            Eligibility
          </Button>
          <Button
            type='button'
            color='light'
            className={`text-gray-500 ${
              selectedBtn === "use" &&
              "text-[#1a73e8] border-none shadow-lg bg-gray-100"
            } focus:ring-transparent`}
            onClick={() => setSelectedBtn("use")}
          >
            How to Use?
          </Button>
          <Button
            type='button'
            color='light'
            className={`text-gray-500 ${
              selectedBtn === "terms" &&
              "text-[#1a73e8] border-none shadow-lg bg-gray-100"
            } focus:ring-transparent`}
            onClick={() => setSelectedBtn("terms")}
          >
            Terms & Conditions
          </Button>
        </div>

        {/* Eligibility section */}
        {selectedBtn === "eligibility" && (
          <div className='col-span-3'>
            <Accordion className='border-none'>
              <Accordion.Panel>
                <Accordion.Title className='py-1 text-blue-600 focus:ring-transparent'>
                  Do I need to have prior Product Management and Project
                  Management experience to enroll in the program?
                </Accordion.Title>
                <Accordion.Content>
                  <p className='mb-2 text-gray-500 dark:text-gray-400'>
                    No, the program is designed to be inclusive of all levels of
                    experience. All topics will be covered from the basics,
                    making it suitable for individuals from any field of work.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel>
                <Accordion.Title className='py-1 border-none text-blue-600 focus:ring-transparent'>
                  What is the minimum system configuration required?
                </Accordion.Title>
                <Accordion.Content>
                  <p className='mb-2 text-gray-500 dark:text-gray-400'>
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        )}

        {/* Use section */}
        {selectedBtn === "use" && (
          <div className='col-span-3'>
            <Accordion className='border-none'>
              <Accordion.Panel>
                <Accordion.Title className='py-1 text-blue-600 focus:ring-transparent'>
                  How do I get started with the program?
                </Accordion.Title>
                <Accordion.Content>
                  <p className='mb-2 text-gray-500 dark:text-gray-400'>
                    The program is designed to be inclusive of all levels of
                    experience. All topics will be covered from the basics,
                    making it suitable for individuals from any field of work.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        )}

        {/* Terms section */}
        {selectedBtn === "terms" && (
          <div className='col-span-3'>
            <Accordion className='border-none'>
              <Accordion.Panel>
                <Accordion.Title className='py-1 text-blue-600 focus:ring-transparent'>
                  What is the minimum system configuration required?
                </Accordion.Title>
                <Accordion.Content>
                  <p className='mb-2 text-gray-500 dark:text-gray-400'>
                    The main difference is that the core components from
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQs;
