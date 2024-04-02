import Main from "./Main"
import Image from 'next/image'


export default function MainCard() {
    return (
        <Main className='sm:flex-col md:flex-col lg:hover:translate-x-4 sm:-translate-y-4'>
            <Image src="/photo.png" alt="" width={200} height={200}/>
            <div className="info flex flex-col gap-5 sm:items-center md:items-center ">
                <div className="name text-5xl sm:text-2xl text-center text-white">I’m Abdelrahman Nasr</div>
                <div className="work text-2xl text-[#FF5C01] sm:text-lg">Software Engineer</div>
            </div>
        </Main>
    )
}
