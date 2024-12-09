import Image from "next/image";

export const FutureOne = () => {
    return (
        <div className="flex flex-col gap-4 sm:w-fit max-w-[100ch]">
            <div className="w-fit bg-none flex justify-center">
            Looking ahead, I plan to solidify my Full-Stack skills by undertaking additional projects, 
            particularly collaborative group projects.<br></br> 
            I am also committed to deepening my cloud knowledge and staying up-to-date with emerging technologies. 
            <br></br><br></br>To achieve these goals, 
            I&#39;ll continue attending industry events like Sync the City and actively participating in networking opportunities.
            </div>

            <div className="w-fit bg-none flex justify-center">
            Ultimately, I aspire to secure a challenging, rewarding role within the tech industry. 
            Whether it&#39;s a dynamic startup or a large-scale organization, <br></br><br></br>
            I&#39;m eager to contribute my skills and passion to innovative projects that make a positive impact.
            </div>

            <div className="w-full flex justify-center">
                <Image className='rounded-xl lg:hidden'
                    src="https://www.mechanictocloud.com/images/goingForward.webp"
                    alt='A long, straight, empty road with mountains and trees in the far distance'
                    height={350}
                    width={300}
                    />
                <Image className='rounded-xl hidden lg:block'
                    src="https://www.mechanictocloud.com/images/lookingAhead.webp"
                    alt='A man up on the top of a hill looking into the distance'
                    height={350}
                    width={450}
                    />
            </div>
        </div>
    )
}