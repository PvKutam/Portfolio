import React from 'react'
import {motion} from "framer-motion"

export default function Home() {
  
  return (  
    <>
    <motion.div id="Home" className=' w-full top-[5rem] flex flex-col items-center justify-center text-black pt-5 md:pb-28 scroll-mt-28
    background-image: url("https://www.miraya.tech/assets/gradient-625d94e6.webp") bg-auto bg-no-repeat bg-center'
    initial={{y:-100, opacity:0}}
      animate={{ y:0, opacity:1 }}
    >
        <h1 className='flex flex-col  items-center justify-center z-[1] font-[400] text-[34px] mb-8 sm:text-[40px] md:text-[60px] lg:text-[75px] '>  
            <span className='bg-gradient-to-r from-[#9f9d9d] via-[#534f4f] to-[#9f9d9d] inline-block text-transparent bg-clip-text dark:from-[#4a4848] dark:via-[#333131] dark:to-[#534f4f]'>Hello I'm Kutam.</span>
            <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>A Digital Craftsman</span>
        </h1>
        <p className=' leading-1.8  m-auto max-w-[350px] text-[14px] sm:max-w-[400px] sm:text-[15px] md:max-w-[640px] lg:text-[20px] text-[#bbbbbb]  '>
        I'm passionate about creating experiences that are easy to use, accessible, and that meet the user's needs.
        </p>
    </motion.div>
    </>
  )
}


