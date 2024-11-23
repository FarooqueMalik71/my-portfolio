
import React from 'react'
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white py-2 mt-8">
      <div className="container mx-auto text-center">
        <p className="mb-10 text-2xl">Connect with me:</p>
        <div className="flex justify-center space-x-6">

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/farooquemalik/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={40} />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/farooque-malik871/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={40} />
          </a>

          {/* Email Link */}
          <a
            href="mailto:farooquemalik50871@gmail.com"
            className="hover:text-gray-600 flex gap-1 items-center"
          >
            <MdOutlineMail size={40} />
          </a>
        </div>

        {/* Footer text */}
        <div className='mt-16 py-6 text-center bg-Byzantine'>
          © Farooque | All Rights Reserved 2025.
        </div>
      </div>
    </div>




  )
}

export default Footer





