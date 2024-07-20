import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[20rem] h-auto"
        alt="hero"
        width={200}
        height={300}
        src={require('../../../public/assets/picture/boy.jpeg')}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-5 leading-relaxed">
        Hello My Name is AbdulRehman and i Completed Typescript And Started Next.Js and i Study Class 9th At Aim Academy OF Education Thank You So Much...
      </p>
      <p className="mb-5 leading-relaxed">
        Phone Number: +92 321-236-1880
        <br />
        Email: rahmangamer122@gmail.com
        <br />
        Address: Ahmed Shah bukhari Road Madarsa And Masjid Lyari, Karichi
      </p>
      <div className="flex justify-center">
        <a href={"/assets/cv/cv.pdf"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Veiw CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
