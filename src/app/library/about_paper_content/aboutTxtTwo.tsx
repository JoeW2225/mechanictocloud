import Image from "next/image"

export const PastTwo = () => {
    return (
        <div className="flex flex-col gap-4 sm:w-fit max-w-[100ch]">
            <div className="w-fit bg-none flex justify-center">
            My passion for technology began early on, with a fascination for building and troubleshooting PCs. 
            </div>

            <div className="w-fit bg-none flex justify-center">
            Driven by a desire to explore the limitless possibilities of the digital world,
            I embarked on a career transition into the tech sector at the end of 2023.
            </div>

            <div className="w-full flex justify-center">
                <Image className='rounded-xl lg:hidden'
                    src="https://www.mechanictocloud.com/images/direction.webp"
                    alt='A silhouette of a post with multiple signs pointing in different directions'
                    height={350}
                    width={300}
                    />
                <Image className='rounded-xl hidden lg:block'
                    src="https://www.mechanictocloud.com/images/directionLandscape.webp"
                    alt='A silhouette of a post with multiple signs pointing in different directions'
                    height={350}
                    width={500}
                    />
            </div>
        </div>    
    )
    }