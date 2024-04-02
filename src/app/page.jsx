import Link from "next/link";
import MainCard from "./components/MainCard";
import MyLayout from "@/app/components/MyLayout";


export default function Home() {
  return (
    <>
      <MyLayout />
      <MainCard />
      <div className="absolute bottom-6 sm:bottom-24 p-5 left-0 flex justify-center items-center w-full"><Link href="/skills" className="text-sm hover:scale-125 duration-300">See My Skills</Link></div>
    </>
  );
}

