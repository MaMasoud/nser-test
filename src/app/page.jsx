import Link from "next/link";
import MainCard from "./components/MainCard";
import MyLayout from "@/app/components/MyLayout";


export default function Home() {
  return (
    <>
      <MyLayout />
      <MainCard />
      <div className="fixed bottom-6 p-5 left-0 flex justify-center items-center w-full sm:top-6 sm:left-6 sm:bottom-auto sm:justify-start z-40"><Link href="/skills" className="text-sm hover:scale-125 duration-300">See My Skills</Link></div>
    </>
  );
}

