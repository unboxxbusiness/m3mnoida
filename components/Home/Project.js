import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Project = () => {
  return (
    
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-gray-950">
                  M3M Noida Sector 94
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Introducing</span>
                </span>{' '}
Residences with  3,4 & 5 BHK options
Starting at <strong className='animate-ping'>6.5 CR*</strong>
              </h2>
              <p className="text-base text-gray-950 md:text-lg">
              Approved by Uttar Pradesh RERA with the registration number UPRERAPRJ442214.
              </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
              <Image
                className="object-cover w-full h-56 rounded shadow-lg"
                src="/l1.jpg"
                alt=""
                width={1920}
                height={1280}
              />
              <Image
                className="object-cover w-full h-56 rounded shadow-lg"
                src="/l2.jpg"
                alt=""
                width={1920}
                height={1280}
              />
              <Image
                className="object-cover w-full h-56 rounded shadow-lg"
                src="/l3.jpg"
                alt=""
                width={1920}
                height={1280}
              />
              <Image
                className="object-cover w-full h-56 rounded shadow-lg"
                src="/l4.jpg"
                alt=""
                width={1920}
                height={1280}
              />
            </div>
            <div className="flex items-center sm:justify-center">
              
              <Link
                href="tel:+919650833378"
                aria-label=""
                className="animate-bounce inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-950 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Project Details
              </Link>
            </div>
          </div>
       
  )
}

export default Project