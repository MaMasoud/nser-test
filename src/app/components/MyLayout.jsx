"use client";


import React from 'react'
import { useState } from "react";


import Header from './Header'
import Sidebar from './Sidebar'

export default function MyLayout() {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <>
    <Header setSideOpen={setSideOpen}/>
    <Sidebar setSideOpen={setSideOpen} sideOpen={sideOpen}/>
    </>
  )
}
