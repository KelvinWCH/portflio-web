

function ProjectCard({title, description, tech, link}) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
        if (newWindow) newWindow.opener = null
    }


    if(!tech)
        tech = [];

    return (
        <>
            <div className='flex flex-col gap-2 h-full w-[20rem] bg-black bg-opacity-50 
            rounded-lg p-5 hover:border hover:border-solid hover:border-white cursor-pointer'
            onClick={() => { openInNewTab(link)}}>

                <div className="flex justify-between w-full">
                    <p className='font-bold text-xl'> {title} </p>

                    <img
                        src="/assets/github-mark-white.svg"
                        className='h-7 w-7 cursor-pointer'
                        alt="GitHub"
                    />
                </div>

                <p>
                    {description}
                </p>

                <div className="grid grid-cols-3 gap-1 h-full"
                >

                    {tech.map((item, index) => (
                        <p key={index} className="bg-black font-mono text-white p-1.5 rounded-lg text-xs">
                            {item}
                        </p>
                    ))}

                </div>



            </div>
        </>

    )
}

export default ProjectCard;