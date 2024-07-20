import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-blue-50'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require('../../../public/assets/picture/1.png')} alt="my logo" width={100} height={100} className="w-[40px] rounded-md" />
      <span className="ml-3 text-xl">Abdul Rehman Coder</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Abdul Rehman Coder —
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={"https://www.facebook.com/profile.php?id=61554083063522"} target='_blank' className="text-gray-500">
      <FaFacebook className='text-4xl hover:text-blue-500' />
      </Link>
      <Link href={"https://www.youtube.com/@codingwithme987"} target='_blank' className="ml-3 text-gray-500">
      <FaYoutube className='text-4xl hover:text-red-500' />
      </Link>
      <Link href={"https://github.com/rahmangamer12"} target='_blank' className="ml-3 text-gray-500">
      <FaGithub className='text-4xl hover:text-black' />
      </Link>
      <Link href={"https://www.linkedin.com/in/abdulrehman-programer/"} target='_blank' className="ml-3 text-gray-500">
      <FaLinkedin className='text-4xl hover:text-blue-600' />
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
