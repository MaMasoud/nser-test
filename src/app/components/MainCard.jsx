import React from 'react'

export default function MainCard() {
    return (
        <div className="main-card flex justify-center items-center h-screen">
            <div className="card-info flex justify-center items-center gap-12 bg-white/5 px-12 py-7 rounded-3xl blur-effect duration-500 hover:translate-x-4">
                <img src="photo.png" alt="" />
                <div className="info flex flex-col gap-5">
                    <div className="name text-5xl">I’m Abdelrahman Nasr</div>
                    <div className="work text-2xl text-[#FF5C01]">Software Engineer</div>
                </div>
            </div>
        </div>
    )
}
