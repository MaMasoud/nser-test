
export default function Main({children, className}) {
    return (
        <div className="main-card flex justify-center items-center h-screen">
            <div className={`card-info flex justify-center items-center gap-12 bg-white/5 px-12 py-7 rounded-3xl blur-effect duration-500 hover:translate-x-4 ${className}`}>{children}</div>
        </div>
    )
}
