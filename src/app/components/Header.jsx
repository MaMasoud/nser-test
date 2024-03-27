const Header = ({ setSideOpen }) => {
    // Function to handle the click event
    const handleClick = () => {
        // Set the state of sideOpen to the opposite of its current value
        setSideOpen((prev) => (!prev));
    }

    return (
        // Header component
        <header className="p-6 flex justify-end fixed top-0 left-0 w-full z-40">
            <button onClick={handleClick} className="hover:bg-white/5 blur-effect-hover p-4 rounded-full duration-500	"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clip-path="url(#clip0_1_10)">
                    <path d="M28.4445 25.7778H3.55558C3.31983 25.7778 3.09374 25.6841 2.92704 25.5174C2.76034 25.3507 2.66669 25.1246 2.66669 24.8889C2.66669 24.6531 2.76034 24.427 2.92704 24.2603C3.09374 24.0936 3.31983 24 3.55558 24H28.4445C28.6802 24 28.9063 24.0936 29.073 24.2603C29.2397 24.427 29.3334 24.6531 29.3334 24.8889C29.3334 25.1246 29.2397 25.3507 29.073 25.5174C28.9063 25.6841 28.6802 25.7778 28.4445 25.7778Z" fill="white" />
                    <path d="M28.4445 16.8889H3.55558C3.31983 16.8889 3.09374 16.7952 2.92704 16.6285C2.76034 16.4618 2.66669 16.2358 2.66669 16C2.66669 15.7643 2.76034 15.5382 2.92704 15.3715C3.09374 15.2048 3.31983 15.1111 3.55558 15.1111H28.4445C28.6802 15.1111 28.9063 15.2048 29.073 15.3715C29.2397 15.5382 29.3334 15.7643 29.3334 16C29.3334 16.2358 29.2397 16.4618 29.073 16.6285C28.9063 16.7952 28.6802 16.8889 28.4445 16.8889Z" fill="white" />
                    <path d="M28.4445 8.00001H3.55558C3.31983 8.00001 3.09374 7.90636 2.92704 7.73966C2.76034 7.57296 2.66669 7.34687 2.66669 7.11112C2.66669 6.87537 2.76034 6.64928 2.92704 6.48258C3.09374 6.31588 3.31983 6.22223 3.55558 6.22223H28.4445C28.6802 6.22223 28.9063 6.31588 29.073 6.48258C29.2397 6.64928 29.3334 6.87537 29.3334 7.11112C29.3334 7.34687 29.2397 7.57296 29.073 7.73966C28.9063 7.90636 28.6802 8.00001 28.4445 8.00001Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_1_10">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg></button>


            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3921916,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
                }}
            />
        </header>
    );
}

export default Header;
