import Image from "next/image";

export const PastFour = () => {
    return (
        <div className="flex flex-col gap-4 sm:">
            <div className="flex flex-wrap w-[60vw] mr-5 bg-none">
            I made significant progress on the CRC when an exciting opportunity arose: 
            a 12-week intensive Software Developer course. <br></br><br></br>This aligned perfectly with my goals, 
            as it would allow me to deepen my technical skills and apply them directly to my CRC project.
            </div>

            <Image className='rounded-xl'
                src="/images/coding.webp"
                alt='A laptop on a wooden table with some coding'
                height={350}
                width={300}
                />

            <div className="flex flex-wrap w-[60vw] mr-5 bg-none">
            The course covered a wide range of tools and frameworks. From the fundamentals of HTML, 
            CSS and JavaScript to PostgreSQL, React, Next, various UI libraries and more.<br></br><br></br> 
            This was certainly my toughest challenge so far. 
            Requiring long hours and dedication to complete numerous individual and group projects.<br></br>  
            In fact, we were told that the workload was equivalent to a two-year A-Level, and it certainly felt like it!
            </div>
        </div>
    )
}