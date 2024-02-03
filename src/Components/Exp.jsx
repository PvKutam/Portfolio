import React from 'react'
import { Project } from './data/Links'
import { motion } from "framer-motion"
function Exp() {
  return (
    <div 
    id= 'Exp'
    className='flex flex-col gap-[4px] scroll-mt-[100rem]'>
        <h1 className='text-[18px] font-[400] sm:text-[22px] '>Experience</h1>
        <div className='flex flex-col gap-2 md:flex-row md:justify-between my-[10px] '>
                <div className='flex flex-wrap leading-[1.5] text-[12px] w-1/3 md:pt-[3px]'>March 2023- july 2023</div>
            <div>
                <h2 className='text-[16px] mb-2 font-[400] '>Font-end Intern</h2>
                <p className='text-[14px] leading-2 mb-5 dark:text-[#bbbbbb]'>During my internship, I had the opportunity to collaborate closely with both the design and development teams. In this dynamic role,
                , I was hands-on in the creation of wireframes, not just as an assistant but making significant contributions. I was deeply involved in turning high-fidelity Figma wireframes into a seamless and user-friendly design.
                with a particular focus on pivotal components like the login page and dashboard. These projects were a testament to my hands-on involvement and collaborative approach, showcasing the tangible impact I had during this experience.
                </p>
                <div className='flex flex-wrap gap-[6px] sm:gap-[7px]'>{Project.map((item,i)=>
                        <motion.span  initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{
                          duration:0.3,
                          delay:i * 0.5,
                        }}
                        viewport={{
                          once:true
                        }}
                       
                        key={item.hash} className="flex  justify-center items-center text-[12px] p-[3px] px-[6px]  border border-solid border-green-500 text-green-700  bg-[#40cf8f0f]" >{item.name}</motion.span>)}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Exp
