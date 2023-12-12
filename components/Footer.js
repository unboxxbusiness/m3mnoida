import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
<>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
      <div className="relative lg:w-1/2">
        <Image
          src="/10.jpeg"
          alt=""
          width={1920}
          height={1280}
          className="object-cover w-full lg:absolute h-80 lg:h-full"
        />
        <svg
          className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
          viewBox="0 0 20 104"
          fill="currentColor"
        >
          <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
        </svg>
      </div>
      <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-white uppercase rounded-full bg-gray-950">
            Luxury Apartments
          </p>
        </div>
        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
        M3M The Cullinan
        </h5>
        <p className="mb-5 text-gray-800">
          <span className="font-bold">High Demand Luxury Project </span> Trust of 1.2 lac people, timely delivery of 2 cr sq ft, 18.5 lakh+ sq.m, expertise from 45+ projects.
        </p>
        <div className="flex items-center">
         <Link href="/m3m"> <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
           Explore
          </button></Link>
          <Link
            href="tel:+919650833378"
            aria-label=""
            className="animate-bounce inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
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
    </div>
  </div>



    <section className="py-12 bg-gray-950">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
            <div className="xl:flex xl:items-center xl:justify-start">
               <Link href="/"><Image className="w-auto mx-auto h-15" src="/logo1.png" alt="" width={100} height={100} /></Link> 

                <p className="mt-5 text-sm text-white xl:ml-6 xl:mt-0">© Copyright 2023 M3M Noida Projects</p>
            </div>

            <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
                <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                    <li>
                        <Link href="/about" title="" className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> About </Link>
                    </li>

                    <li>
                        <Link href="/m3m" title="" className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Projects Detail </Link>
                    </li>

                    <li>
                        <Link href="/privacy" title="" className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Privacy Policy </Link>
                    </li>

                    <li>
                        <Link href="/terms" title="" className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms & Conditions </Link>
                    </li>

                    <li>
                        <Link href="tel:+919650833378" title="" className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Enquiry Now </Link>
                    </li>
                </ul>

                <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

                <ul className="flex items-center justify-center space-x-8 xl:justify-end">
                    <li>
                        <Link href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </Link>
                    </li>

                    <li>
                        <Link href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                        </Link>
                    </li>

                    <li>
                        <Link href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path
                                    d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                ></path>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Footer