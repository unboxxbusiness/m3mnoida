import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Testi = () => {
  return (
   
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gray-950">
                    Customer Testimonials
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-purple-950 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">*</span>
                  </span>{' '}
                 Rohit Kapoor
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                Exceptional counseling at M3M Noida! Insightful guidance, professional team. Confident I am investing in more than a property – its a lifestyle. Highly recommended!
                </p>
              </div>
              <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                <Image
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                  src="/10.jpeg"
                  alt=""
                  width={1920}
                  height={1280}
                />
              </div>
              <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
              Explore for a more insightful counseling session. Inquire now by clicking the link below.
              </p>
              <Link
                href="tel:+919650833378"
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
          </div>
      
  )
}

export default Testi