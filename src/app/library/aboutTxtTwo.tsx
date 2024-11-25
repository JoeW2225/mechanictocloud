import Image from "next/image"

export const PastTwo = () => {
    return (
        <div className="flex flex-col gap-4 sm:">
            <div className="flex flex-wrap w-[60vw] mr-5 bg-none">
            My passion for technology began early on, with a fascination for building and troubleshooting PCs. 
            
            </div>

            <Image className='rounded-xl'
                src="/images/direction.webp"
                alt='A silhouette of a post with multiple signs pointing in different directions'
                height={350}
                width={300}
                />

            <div className="flex flex-wrap w-[60vw] mr-5 bg-none">
            Driven by a desire to explore the limitless possibilities of the digital world,
            I embarked on a career transition into the tech sector at the end of 2023.
            </div>
        </div>
    )
    }