import React,{useRef} from 'react'
import { motion } from "framer-motion"
// import { Skills } from './data/Links'
import { Skills } from './data/data'
import Exp from './Exp'



function About() {
  return (
    <motion.div 
    id= 'About'
    initial={{y:100, opacity:0}}
    animate={{ y:0, opacity:1 }}
    transition={{delay:0.7}}
    className='flex flex-col items-start justify-center gap-8 sm:gap-20'
    >
      <div className='flex flex-col gap-6 sm:gap-10'> 
      <h1 className='text-[18px] font-[400] sm:text-[22px]'>About</h1>
        <p className='text-[14px] font-[400] sm:text-[16px] dark:text-[#bbbbbb]'>
        Hello, I'm Kutam Raju, a passionate software developer based in India. I  completed my Bachelor's degree in Information Technology.
        I find joy in the creative process of crafting solutions Whether it's building web applications, designing user interfaces.
        I'm on the lookout for exciting opportunities to use my skills, work on cool projects, and continue growing in the tech world. 
        Let's chat and see what awesome things we can build together
        </p>
      </div>
        
        <div className='flex mt-30 flex-col gap-8 sm:gap-10'>
        <h2 className='text-[18px] font-[400] sm:text-[22px]'> Skills</h2>
        <div className='flex flex-wrap gap-[6px] text-[12px] sm:gap-[7px] sm:text-[14px]'> 
        {Skills.map((item,i)=>
        <motion.span key={item.hash} className="p-[8px] border border-solid border-green-500 text-green-700  bg-[#40cf8f0f]" initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{
          duration:0.3,
          delay:i * 0.5,
        }}
        >{item.name}</motion.span>)}
        </div>
        </div>
        <Exp />
      
    </motion.div>
  )
}

export default About
