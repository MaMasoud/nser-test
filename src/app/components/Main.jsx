
export default function Main({children, className}) {
    return (
        <div className="main-card flex justify-center items-center min-h-screen ">
            <div className={`card-info flex justify-center items-center gap-12 bg-white/5 px-12 py-7 rounded-3xl blur-effect duration-500  ${className} sm:w-5/6`}>{children}</div>
        </div>
    )
}
