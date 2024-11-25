import Image from "next/image";

export const FutureOne = () => {
    return (
        <div className="flex flex-col gap-4 sm:">
            <div className="flex flex-wrap w-[60vw] mr-5 bg-none">
            Looking ahead, I plan to solidify my Full-Stack skills by undertaking additional projects, 
            particularly collaborative group projects.<br></br> 
            I&#39;m also committed to deepening my cloud knowledge and staying up-to-date with emerging technologies. 
            <br></br><br></br>To achieve these goals, 
            I&#39;ll continue attending industry events like Sync the City and actively participating in networking opportunities.
            </div>

            <Image className='rounded-xl'
                src="/images/goingForward.webp"
                alt='A long, straight, empty road with mountains and trees in the far distance'
                height={350}
                width={300}
                />

            <div className="flex flex-wrap w-[60vw] mr-5 bg-none">
            Ultimately, I aspire to secure a challenging and rewarding role within the tech industry. 
            Whether it&#39;s a dynamic startup or a large-scale organization, <br></br><br></br>
            I&#39;m eager to contribute my skills and passion to innovative projects that make a positive impact.
            </div>
        </div>
    )
}