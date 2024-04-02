import Main from "./Main"

export default function MainCard() {
    return (
        <Main className='sm:flex-col md:flex-col lg:hover:translate-x-4 sm:-translate-y-4'>
            <img src="photo.png" alt=""/>
            <div className="info flex flex-col gap-5 sm:items-center md:items-center ">
                <div className="name text-5xl sm:text-2xl text-center">I’m Abdelrahman Nasr</div>
                <div className="work text-2xl text-[#FF5C01] sm:text-lg">Software Engineer</div>
            </div>
        </Main>
    )
}
