import React from 'react';

const Sidebar = ({setSideOpen, sideOpen}) => {
    // Function to handle the click event
    const handleClick = () => {
        // Set the state of sideOpen to the opposite of its current value
        setSideOpen((prev) => (!prev));
    }
    let right = "-right-96";
    if (sideOpen) {
        right = "right-0";
    }
    return (
        <div className = {`sidebar fixed bg-slate-300 w-96 h-full top-0 z-50 p-6 duration-500 ${right} `} >
            <button onClick={handleClick} className="p-4 hover:bg-white/5 rounded-full duration-500 absolute right-6"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.4 7.61333C24.2766 7.48972 24.1301 7.39166 23.9688 7.32475C23.8075 7.25784 23.6346 7.2234 23.46 7.2234C23.2854 7.2234 23.1125 7.25784 22.9512 7.32475C22.7899 7.39166 22.6433 7.48972 22.52 7.61333L16 14.12L9.47999 7.59999C9.35655 7.47655 9.21 7.37863 9.04872 7.31182C8.88743 7.24502 8.71457 7.21063 8.53999 7.21063C8.36542 7.21063 8.19255 7.24502 8.03127 7.31182C7.86998 7.37863 7.72344 7.47655 7.59999 7.59999C7.47655 7.72344 7.37863 7.86998 7.31182 8.03127C7.24502 8.19255 7.21063 8.36542 7.21063 8.53999C7.21063 8.71457 7.24502 8.88743 7.31182 9.04872C7.37863 9.21 7.47655 9.35655 7.59999 9.47999L14.12 16L7.59999 22.52C7.47655 22.6434 7.37863 22.79 7.31182 22.9513C7.24502 23.1126 7.21063 23.2854 7.21063 23.46C7.21063 23.6346 7.24502 23.8074 7.31182 23.9687C7.37863 24.13 7.47655 24.2765 7.59999 24.4C7.72344 24.5234 7.86998 24.6214 8.03127 24.6882C8.19255 24.755 8.36542 24.7894 8.53999 24.7894C8.71457 24.7894 8.88743 24.755 9.04872 24.6882C9.21 24.6214 9.35655 24.5234 9.47999 24.4L16 17.88L22.52 24.4C22.6434 24.5234 22.79 24.6214 22.9513 24.6882C23.1126 24.755 23.2854 24.7894 23.46 24.7894C23.6346 24.7894 23.8074 24.755 23.9687 24.6882C24.13 24.6214 24.2765 24.5234 24.4 24.4C24.5234 24.2765 24.6214 24.13 24.6882 23.9687C24.755 23.8074 24.7894 23.6346 24.7894 23.46C24.7894 23.2854 24.755 23.1126 24.6882 22.9513C24.6214 22.79 24.5234 22.6434 24.4 22.52L17.88 16L24.4 9.47999C24.9067 8.97333 24.9067 8.11999 24.4 7.61333Z" fill="white" />
            </svg>
            </button>
            <div className="links flex flex-col gap-12 items-center mt-24">
                <SideLink>Home</SideLink>
                <SideLink>Skills</SideLink>
                <SideLink>About</SideLink>
                <SideLink>Contact</SideLink>
            </div>
            <div className="ma6de-with absolute bottom-2 left-0 w-full flex justify-center">
                <span>Made with /</span><a href="https://github.com/mamasoud" target="_blank" className="text-[#FF5C01]"> MaMasoud</a>
            </div>
        </div>
    );
}

function SideLink({ children, link }) {
    return (<a href={link ? `${link}` : '#'} className="block text-white text-4xl mt-4 hover:translate-x-3 duration-500">{children}</a>);
}

export default Sidebar;
