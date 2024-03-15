import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import {motion} from "framer-motion"


const Navbar = () => {

  return (
        <ul className="flex flex-row item-center justify-between scroll-mt-28" >
        {/* Home Link */}
            <motion.li className='h-3/4 flex items-center justify-center' 
                initial={{y:-100,opacity:0}}
                animate={{ y:0, opacity:1 }}>
            <ScrollLink
            className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'
            to='Home' 
            smooth={true}
            duration={500}>
              Home
          </ScrollLink>
            </motion.li> 

            {/* About Link */}
            <motion.li className='h-3/4 flex items-center justify-center' 
            initial={{y:-100,opacity:0}}
      animate={{ y:0, opacity:1 }}>
        <ScrollLink
         className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'
            to='About' 
            smooth={true}
            duration={500}
          >
              About
        
          </ScrollLink>
            </motion.li>


               {/* Skills  */}
            <motion.li className='h-3/4 flex items-center justify-center' 
                 initial={{y:-100,opacity:0}}
                animate={{ y:0, opacity:1 }}>
                    <ScrollLink
                    to='About' 
                    smooth={true}
                    duration={500}
                    >
                        Skills
          </ScrollLink>
            </motion.li>

            {/* Project Link */}
            <motion.li className='h-3/4 flex items-center justify-center' 
            initial={{y:-100,opacity:0}}
            animate={{ y:0, opacity:1 }}>
            <ScrollLink
             className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'
            to='Project' 
            smooth={true}
            duration={500}
            >
                Project
            
          </ScrollLink>
            </motion.li>
        
            {/* Experice */}
            <motion.li className='h-3/4 flex items-center justify-center' 
                initial={{y:-100,opacity:0}}
                animate={{ y:0, opacity:1 }}>
            <ScrollLink
             className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'
            to='Exp' 
            smooth={true}
            duration={500}
            >
                Experience
           
          </ScrollLink>
            </motion.li>

            {/* Contact Link */}
            <motion.li className='h-3/4 flex items-center justify-center' 
            initial={{y:-100,opacity:0}}
            animate={{ y:0, opacity:1 }}>
            <ScrollLink
                          className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'

            to='Footer' 
            smooth={true}
            duration={500}
            >
                Contact

          </ScrollLink>
            </motion.li>


            
        </ul>
  )
  }
export default Navbar
