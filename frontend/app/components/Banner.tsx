'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Banner =() => {
    const [text] = useTypewriter({
        words: ['Hi, My Name is Opssy', 'I am a Frontend Engineer'],
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 30,
        deleteSpeed: 10,
    })
  return (
    <div className="w-full bg-banner bg-center h-80">
      <div className="w-ful h-70 bg-black opacity-70 text-white z-(-1)">
        <div className="h-80 max-w-screen-2xl mx-auto flex flex-col justify-center items-center text-4xl md:text-5xl font-extrabold text-center">
          <motion.div
            className="h-80 max-w-screen-2xl mx-auto flex flex-col justify-center items-center"
            initial={{ x: -1000, opacity: 0, scale: 0.5 }}
            animate={{ x: [0, 900, 0] }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-5xl text-[#fff] font-semibold ml-4 mt-10">
              Opssy Blog
            </h1>
            <p className="text-xl md:text-3xl font-semibold mt-3 text-[#fff]">
              {" "}
              {text}
              <Cursor cursorBlinking cursorColor="#fff" cursorStyle="|" />
            </p>
          </motion.div>
        </div>
      </div>
      <div/>
      <div>{false}</div>
      <div>{null}</div>
    </div>
  )
}

export default Banner