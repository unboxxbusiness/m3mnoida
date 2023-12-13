import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Features = () => {
  return (
    
          <div>
            <div className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row">
              <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
                <h2 className="relative mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">M3M</span>
                  </span>{' '}
                  The Cullinan
                </h2>
                <p className="mb-4 text-gray-900 lg:mb-6">
                2 units per floor<br /> payment plan: 20:20:20:20:20 <br /> limited to 4 towers. <br /><span className='bg-blue-500 text-white py-1 px-1'>STARTING PRICE
₹ 6.50 CR*</span>
                </p>
                <Link href="tel:+919650833378"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
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
              <div className="flex-grow pt-1">
                <div className="flex items-center mb-3">
                  <span className="font-bold tracking-wide text-gray-900">
                  HIGHLIGHTS
                  </span>
                  <span className="ml-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                </div>
                <div className="grid grid-cols-2 row-gap-6 sm:grid-cols-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                      Gymnasium
                      </Link>
                    </li>
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                        Jogging Track
                      </Link>
                    </li>
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                        Club House
                      </Link>
                    </li>
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                        Food Court
                      </Link>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                        Mini Multiplexe
                      </Link>
                    </li>
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                        Landscaped Gardens
                      </Link>
                    </li>
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                        Noida-Greater Noida Expressway - 5 mins* Drive
                      </Link>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                        Akshardham Temple - 30 mins* Drive
                      </Link>
                    </li>
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                        Sector 18 Market - 20 mins* Drive
                      </Link>
                    </li>
                    <li>
                      <Link href="/"
                        className="transition-colors duration-300 hover:text-deep-purple-accent-700"
                      >
                       Mahamaya Flyover - 15 mins* Drive
                      </Link>
                    </li>
                  
                  </ul>
                  
                  
                 
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                className="object-cover w-full h-56 sm:h-96"
                src="/10.jpeg"
                alt=""
                width={1920}
                height={1280}
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
            </div>
          </div>
       
  )
}

export default Features