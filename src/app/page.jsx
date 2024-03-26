"use client";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import Sidebar from "./components/Sidebar";
import { useState } from "react";


export default function Home() {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <>
      <Header setSideOpen={setSideOpen}/>
      <Sidebar setSideOpen={setSideOpen} sideOpen={sideOpen}/>
      <MainCard />
      
    </>
  );
}

