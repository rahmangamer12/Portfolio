"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='project'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/* Projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/Projects/facebook.png')}
            width={500}
            height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Facbook Login Page
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Login Page
            </h1>
            <p className="leading-relaxed line-clamp-2">
              I created Facebook Login Page Clone With Next.Js.
            </p>
            <Link target='_blank' href={"https://login-page-c6k4.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">Veiw Project..</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/Projects/mp3.png')}
            width={500}
            height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Music Player
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              MP3
            </h1>
            <p className="leading-relaxed line-clamp-2">
              I created MP3 with Html/Css/Javascript but one issue i public this project and mp3 not working.
            </p>
            <Link target='_blank' href={"https://rahmangamer12.github.io/Music-Player/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">Veiw Project..</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/Projects/image.png')}
            width={500}
            height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Image Gallery
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Gallery
            </h1>
            <p className="leading-relaxed line-clamp-2">
              I created Responsive Image Gallery With Html And Css.
            </p>
            <Link target='_blank' href={"https://rahmangamer12.github.io/Best-Responsive-Image-Gallery/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">Veiw Project..</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
