function NavBar(){

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return(
        <>
            <div className="flex flex-row items-center bg-transparent h-20 gap-5 w-full px-5 absolute top-0">
                <img
                    src = "/assets/linkedin_blue.png"
                    className= 'h-8 w-8 cursor-pointer'
                    alt="linkedin"
                    onClick={() => { openInNewTab("https://www.linkedin.com/in/kelvin-chung-536720245/") }}
                />

                <img
                    src = "/assets/github-mark-white.svg"
                    className= 'h-8 w-8 cursor-pointer'
                    alt="GitHub"
                    onClick={() => { openInNewTab("https://www.linkedin.com/in/kelvin-chung-536720245/") }}
                />
                <img
                    src = "/assets/goodreads.svg"
                    className= 'h-8 w-8 cursor-pointer'
                    alt="GitHub"
                    onClick={() => { openInNewTab("https://www.goodreads.com/user/show/177729571-kelvin") }}
                />
            </div>
        </>
    )

}
export default NavBar;