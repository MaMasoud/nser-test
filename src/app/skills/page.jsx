import MyLayout from "@/app/components/MyLayout";
import Main from "../components/Main";
import { skills } from "../data";

export default function About() {
  return (
    <>
      <MyLayout />
      <Main className='container gap-20 flex-col'>
        <div className="profile flex flex-col items-center gap-5 ">
          <img src="photo.png" className="w-24" alt="" />
          <span className="text-2xl">My Skills</span>
        </div>
        <div className="skills flex gap-x-12 gap-y-8 flex-wrap items-center justify-center">
          {skills.map((skill, index) => <a key={index} dangerouslySetInnerHTML={{ __html: skill.Image }} href={skill.link} className="hover:opacity-80 duration-300"></a>)}
        </div>
      </Main>
    </>
  )
}
