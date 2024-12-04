import Image from "next/image"

export const PastOne = () => {
    return (
        <div className="flex flex-col gap-4 sm:w-fit max-w-[100ch]">
            <div className="w-fit bg-none flex justify-center">
            Before my career transition, I was a vehicle mechanic. Working on a plethora of equipment from quadbikes, 
            trucks and generators to armoured protective mobility vehicles. This involved diagnosing, repairing and maintaining. 
            </div>

            <div className="w-fit bg-none flex justify-center">
            Requiring a methodical approach to problem-solving, as well as the ability to think creatively and adapt to challenging situations. 
            <br></br>This would take place in a variety of environments, working individually and in diverse teams.
            </div>

            <div className="w-full flex justify-center">
                <Image className='rounded-xl sm:w-[450px]'
                    src="/images/landroverfix.webp"
                    alt='A silhouette of a post with multiple signs pointing in different directions'
                    height={350}
                    width={300}
                    />
            </div>
        </div>
    )
    }