import React from 'react'
import Form from './Form'
import Image from 'next/image'
import Link from 'next/link'
const Cta = () => {
  return (
    
          <div className="relative">
            <Image
              src="/10.jpeg"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
              width={1920}
              height={1280}
            />
            <div className="relative bg-opacity-75 bg-gray-950">
              <svg
                className="absolute inset-x-0 bottom-0 text-white"
                viewBox="0 0 1160 163"
              >
                <path
                  fill="currentColor"
                  d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                />
              </svg>
              <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                  <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                      M3M Luxury <br className="hidden md:block" />
                     Apartments 2/3/4 BHK
                    </h2>
                    <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                    M3M Noida: Experience luxury in our 2/3/4 BHK apartments, blending comfort and sophistication for elevated living.
                    </p>
                    <Link href="tel:+919650833378"
                      aria-label=""
                      className="animate-bounce inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                    >
                      Enquiry Now
                      <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                      </svg>
                    </Link>
                  </div>
                 <Form />
                </div>
              </div>
            </div>
          </div>
       
  )
}

export default Cta