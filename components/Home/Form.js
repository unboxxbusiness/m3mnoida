import React from 'react'

const Form = () => {
  return (
    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
  <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
      Enquiry Now
    </h3>
    <form action="https://formsubmit.co/m3mnoidaprojects@gmail.com" method="POST">
      <div className="mb-1 sm:mb-2">
        <label
          htmlFor="firstName"
          className="inline-block mb-1 font-medium"
        >
          First name
        </label>
        <input
          placeholder="Mohan"
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="firstName"
          name="firstName"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label
          htmlFor="lastName"
          className="inline-block mb-1 font-medium"
        >
          Last name
        </label>
        <input
          placeholder="Kumar"
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="lastName"
          name="lastName"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label
          htmlFor="email"
          className="inline-block mb-1 font-medium"
        >
          E-mail
        </label>
        <input
          placeholder="mohan@example.org"
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label
          htmlFor="mobileNumber"
          className="inline-block mb-1 font-medium"
        >
          Mobile number
        </label>
        <input
          placeholder="123-456-7890"
          required
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="mobileNumber"
          name="mobileNumber"
        />
      </div>
      <div className="mt-4 mb-2 sm:mb-4">
        <button
          type="submit"
          className="animate-bounce inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Enquiry Now
        </button>
      </div>
      <p className="text-xs text-gray-600 sm:text-sm">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  </div>
</div>

  )
}

export default Form