import MyLayout from "@/app/components/MyLayout";
import Main from "../components/Main";
import { skills } from "../data";

export default function About() {
  return (
    <>
      <MyLayout />
      <Main className=' gap-20 flex-col my-32 w-4/5 max-w-7xl mx-28 sm:mx-5 sm:p-2'>
        <div className="profile flex flex-col items-center gap-5">
          <img src="skills.jpeg" className="w-36 rounded-full " alt="" />
          <span className="text-2xl">My Skills</span>
        </div>
        <div className="skills flex gap-x-12 gap-y-8 flex-wrap items-center justify-center">
          {skills.map((skill, index) => <a key={index} dangerouslySetInnerHTML={{ __html: skill.Image }} className="hover:opacity-80 duration-300"></a>)}
        </div>
      </Main>
    </>
  )
}
