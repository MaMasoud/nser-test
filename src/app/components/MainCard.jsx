import Main from "./Main"

export default function MainCard() {
    return (
        <Main>
            <img src="photo.png" alt="" />
            <div className="info flex flex-col gap-5">
                <div className="name text-5xl">I’m Abdelrahman Nasr</div>
                <div className="work text-2xl text-[#FF5C01]">Software Engineer</div>
            </div>
        </Main>
    )
}
