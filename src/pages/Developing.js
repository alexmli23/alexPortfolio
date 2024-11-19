import React from 'react'
import Navbar from '../components/Navbar'
import Webfolio from "../assets/Webfolio.png"
import Orange from "../assets/OrangeOpinon.png"
import Greyscale from "../assets/GreyScaleApp.png"

const Developing = () => {
  return (
<div
  style={{ backgroundColor: "#2C2C2C", height: "100vh", overflowY: "auto" }}
  className="flex flex-col items-center"
>
  <Navbar />
  <div className="grid gap-8 p-28">
    <div className="w-1/2 mx-auto py-8 group relative">
      <img
        className="h-auto max-w-full rounded-lg"
        src={Webfolio}
        alt="Featured"
      />
      <div
        className="absolute top-8 left-0 right-0 bottom-8 flex flex-col items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"
      >
        <h3 className="text-blue-900 text-xl font-bold">Webfolio</h3>
        <p className="text-blue-800 text-lg mt-1">The web version of me!</p>
        <p className="text-blue-800 text-lg mt-1">
          <span className="font-semibold">Used:</span> React, Tailwind CSS
        </p>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    <div className="relative group">
  <img className="h-auto max-w-full rounded-lg" src={Orange} alt="Gallery 1" />
      <div
        className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"
      >
        <h3 className="text-blue-900 text-xl font-bold">The Orange Opinion</h3>
        <p className="text-blue-800 text-lg mt-1">Social media for fiery hot or freezing cold takes</p>
        <p className="text-blue-800 text-lg mt-1">
          <span className="font-semibold">Used:</span> Next.js, Express.js, MongoDB
        </p>
      </div>
    </div>
      <div className='relative group'>
        <img className="h-auto max-w-full rounded-lg" src={Greyscale} alt="Gallery 2" />
        <div
        className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"
      >
        <h3 className="text-blue-900 text-xl font-bold">GreyScale</h3>
        <p className="text-blue-800 text-lg mt-1">Grey Out Distractions!</p>
        <p className="text-blue-800 text-lg mt-1">
          <span className="font-semibold">Used:</span> Javasript 
        </p>
      </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Developing