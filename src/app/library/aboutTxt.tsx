import Image from "next/image"

export const PastOne = () => {
    return (
        <div className="flex flex-col gap-4 sm:">
            <div className="flex flex-wrap w-[60vw] mr-5 bg-none">
            Before my career transition, I was a vehicle mechanic. Working on a plethora of equipment from quadbikes, 
            trucks and generators to armoured protective mobility vehicles. This involved diagnosing, repairing and maintaining.
            </div>

            <Image className='rounded-xl'
                src="/images/landroverfix.webp"
                alt='Image of me working under the bonnet of a Land Rover Defender'
                height={350}
                width={300}
                />

            <div className="flex flex-wrap w-[60vw] mr-5 bg-none">
            Requiring a methodical approach to problem-solving, as well as the ability to think creatively and adapt to challenging situations. 
            <br></br>This would take place in a variety of environments, working individually and in diverse teams.
            </div>
        </div>
    )
    }