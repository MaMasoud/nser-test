"use client";


import React from 'react'
import { useState } from "react";
import AnimatedCursor from "react-animated-cursor"



import Header from './Header'
import Sidebar from './Sidebar'

export default function MyLayout() {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <>
      <AnimatedCursor innerSize={8}
        outerSize={50}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5} />
      <Header setSideOpen={setSideOpen} />
      <Sidebar setSideOpen={setSideOpen} sideOpen={sideOpen} />
      <div className="absolute left-5 top-2/4 -translate-y-2/4 bg-white/5 py-8 px-4 flex flex-col gap-12 rounded-lg blur-effect duration-500">
        <a href='https://github.com/Cat9199' target='_blank' className='p-3 hover:bg-white/5 rounded-lg duration-500'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9998 2.66667C14.2489 2.66667 12.5151 3.01154 10.8974 3.68161C9.27972 4.35167 7.80986 5.3338 6.57175 6.57191C4.07126 9.0724 2.6665 12.4638 2.6665 16C2.6665 21.8933 6.49317 26.8933 11.7865 28.6667C12.4532 28.7733 12.6665 28.36 12.6665 28V25.7467C8.97317 26.5467 8.1865 23.96 8.1865 23.96C7.57317 22.4133 6.7065 22 6.7065 22C5.49317 21.1733 6.79984 21.2 6.79984 21.2C8.13317 21.2933 8.83984 22.5733 8.83984 22.5733C9.99984 24.6 11.9598 24 12.7198 23.68C12.8398 22.8133 13.1865 22.2267 13.5598 21.8933C10.5998 21.56 7.49317 20.4133 7.49317 15.3333C7.49317 13.8533 7.99984 12.6667 8.8665 11.72C8.73317 11.3867 8.2665 10 8.99984 8.2C8.99984 8.2 10.1198 7.84 12.6665 9.56C13.7198 9.26667 14.8665 9.12 15.9998 9.12C17.1332 9.12 18.2798 9.26667 19.3332 9.56C21.8798 7.84 22.9998 8.2 22.9998 8.2C23.7332 10 23.2665 11.3867 23.1332 11.72C23.9998 12.6667 24.5065 13.8533 24.5065 15.3333C24.5065 20.4267 21.3865 21.5467 18.4132 21.88C18.8932 22.2933 19.3332 23.1067 19.3332 24.3467V28C19.3332 28.36 19.5465 28.7867 20.2265 28.6667C25.5198 26.88 29.3332 21.8933 29.3332 16C29.3332 14.249 28.9883 12.5152 28.3182 10.8976C27.6482 9.27988 26.666 7.81003 25.4279 6.57191C24.1898 5.3338 22.72 4.35167 21.1023 3.68161C19.4846 3.01154 17.7508 2.66667 15.9998 2.66667Z" fill="white" />
          </svg>
        </a>
        <a href='https://www.linkedin.com/in/abdulrahman-nasr-farag2' target='_blank' className='p-3 hover:bg-white/5 rounded-lg duration-500'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z" fill="white" />
          </svg>
        </a>
        <a href='https://www.facebook.com/BodyPythonDev' target='_blank' className='p-3 hover:bg-white/5 rounded-lg duration-500'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3332 16C29.3332 8.64 23.3598 2.66666 15.9998 2.66666C8.63984 2.66666 2.6665 8.64 2.6665 16C2.6665 22.4533 7.25317 27.8267 13.3332 29.0667V20H10.6665V16H13.3332V12.6667C13.3332 10.0933 15.4265 8 17.9998 8H21.3332V12H18.6665C17.9332 12 17.3332 12.6 17.3332 13.3333V16H21.3332V20H17.3332V29.2667C24.0665 28.6 29.3332 22.92 29.3332 16Z" fill="white" />
          </svg>
        </a>
        <a href='https://twitter.com/AbdulRh9199' target='_blank' className='p-3 hover:bg-white/5 rounded-lg duration-500'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.2735 3H28.6841L19.0481 14.0133L30.3841 29H21.5068L14.5548 19.9107L6.60012 29H2.18678L12.4935 17.22L1.62012 3H10.7201L17.0041 11.308L24.2735 3ZM22.7255 26.36H25.1695L9.39345 5.50133H6.77078L22.7255 26.36Z" fill="white" />
          </svg>
        </a>
      </div>
    </>
  )
}
