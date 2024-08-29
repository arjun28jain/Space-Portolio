"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[40px] text-white font-bold mt-[10px] text-center mb-[15px]'
        >
             Making applications with modern technologies
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[30px] text-gray-200 mb-10 mt-[5px] text-center'
        >
            Never miss a task, deadline or idea !
        </motion.div>
    </div>
  )
}

export default SkillText