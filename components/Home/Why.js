import React from 'react'
import Image from 'next/image'


const Why = () => {
  return (
 
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-sm md:text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-gray-950">
                A conveniently linked location
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-950 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">*</span>
                </span>{' '}
                Connected Comfort Zone
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Experience seamless living in a strategically located hub with direct links to Greater Noida, Noida, Ghaziabad, and NH-24. IGI Airport is 25 km away, and Noida Extension is just 6 km from Ghaziabad Railway Station.
              </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
              <div className="flex flex-col justify-center">
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                      <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5">
                    Step into your secure haven
                    </h6>
                    <p className="text-sm text-gray-950">
                    Step into your secure haven, prioritizing safety with fire protection features. Embrace a vibrant community where neighbors connect at various spaces for shared activities, creating a better life for all.
                    </p>
                    <hr className="w-full my-6 border-gray-300" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                      <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5">
                    Premium Residences and Business Spaces at M3M Noida
                    </h6>
                    <p className="text-sm text-gray-950">
                    Explore premium 3 BHK, 4 BHK, and 5 BHK living spaces alongside commercial and retail areas at M3M Noida. The thoughtfully designed floor plan ensures a premium experience. Enjoy lush green surroundings with landscaping, trees, and sustainable features like water conservation and energy efficiency, making it an environmentally conscious choice.
                    </p>
                    <hr className="w-full my-6 border-gray-300" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                      <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-2 font-semibold leading-5">
                    Comfort and Connectivity Hub
                    </h6>
                    <p className="text-sm text-gray-950">
                    Experience superior comfort and strategic location surrounded by vibrant Noida and Greater Noida. Direct connections to Greater Noida, Noida, Ghaziabad, and NH-24. IGI Airport is 25 km away, and Noida Extension is just 6 km from Ghaziabad Railway Station.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Image
                  className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                  src="/9.jpg"
                  alt=""
                  width={1920}
                  height={1280}
                />
                <Image
                  className="object-cover w-full h-48 rounded shadow-lg"
                  src="/20.jpeg"
                  alt=""
                  width={1920}
                  height={1280}
                />
                <Image
                  className="object-cover w-full h-48 rounded shadow-lg"
                  src="/12.jpeg"
                  alt=""
                  width={1920}
                  height={1280}
                />
              </div>
            </div>
          </div>
       
  )
}

export default Why