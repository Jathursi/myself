import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
// import {TbBrandNextjs} from 'react-icons/tb'
import {TbBrandNodejs} from 'react-icons/tb'
import {SiHtml5} from 'react-icons/si'
import { IoLogoPython } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
// import {SiTailwindcss} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
// import {SiNodeDotJs} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
// import {SiGraphql} from 'react-icons/si'
// import {SiTypescript} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'
// import {SiNextDotJs} from 'react-icons/si'
import {motion} from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {y: 0, transition: {duration: duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse'}},
})
function Tech() {
  return (
    <div className='pb-24'>
        <motion.h2 whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:100}} transition={{duration:1.5}}
         className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div  variants={iconVariants(3)} initial='initial' animate='animate' className='p-4'>
                <SiHtml5 className='text-7xl text-red-500' />
            </motion.div>
            <motion.div  variants={iconVariants(5)} initial='initial' animate='animate' className='p-4'>
                <IoLogoPython className='text-7xl text-gradient-to-l from-blue-800 to-yellow-400' />
            </motion.div>
            <motion.div  variants={iconVariants(5)} initial='initial' animate='animate' className='p-4'>
                <SiJavascript className='text-7xl text-yellow-400' />
            </motion.div>
            <motion.div  variants={iconVariants(2)} initial='initial' animate='animate' className='p-4'>
                <TbBrandNodejs className='text-7xl text-green-400' />
            </motion.div>
            <motion.div  variants={iconVariants(6)} initial='initial' animate='animate' className='p-4'>
                <SiMongodb className='text-7xl text-green-400' />
            </motion.div>
            <motion.div  variants={iconVariants(3)} initial='initial' animate='animate' className='p-4'>
                <SiMysql className='text-7xl text-blue-400' />
            </motion.div>
            <motion.div  variants={iconVariants(4)} initial='initial' animate='animate' className='p-4'>
                <SiFirebase className='text-7xl text-yellow-400' />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Tech