import Image from "next/image";

export const PastFour = () => {
    return (
        <div className="flex flex-col gap-4 sm:w-fit max-w-[100ch]">
            <div className="w-fit bg-none flex justify-center">
            I made significant progress on the CRC when an exciting opportunity arose: 
            a 12-week intensive Software Developer course. <br></br><br></br>This aligned perfectly with my goals, 
            as it would allow me to deepen my technical skills and apply them directly to my CRC project.
            </div>
            
            <div className="w-fit bg-none flex justify-center">
            The course covered a wide range of tools and frameworks. From the fundamentals of HTML, 
            CSS and JavaScript to PostgreSQL, React, Next, various UI libraries and more.<br></br><br></br> 
            This was certainly my toughest challenge so far. 
            Requiring long hours and dedication to complete numerous individual and group projects.
            In fact, we were told that the workload was equivalent to a two-year A-Level, and it certainly felt like it!
            </div>

            <div className="w-full flex justify-center">
                <Image className='rounded-xl sm:w-[450px]'
                    src="/images/coding.webp"
                    alt='A laptop on a wooden table with some coding'
                    height={350}
                    width={300}
                    />
            </div>
        </div>
    )
}