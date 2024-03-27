"use client";


import React from 'react'
import { useState } from "react";


import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function MyLayout() {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <>
    <Header setSideOpen={setSideOpen}/>
    <Sidebar setSideOpen={setSideOpen} sideOpen={sideOpen}/>
    </>
  )
}
