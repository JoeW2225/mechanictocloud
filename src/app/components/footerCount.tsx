import Image from 'next/image'
import awsLogo from '@/app/images/aws.png'
import twLogo from '@/app/images/tailwind.png'
import tsLogo from '@/app/images/typescript.png'
import nextLogo from '@/app/images/next.png'

export const FooterCount = () => {
    return (
        <footer className='flex justify-center items-center platypi bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 p-3'>
            <Image className='h-[2.5vh] w-auto flex justify-center items-center mr-4'
            src={twLogo}
            alt='tailwind logo'
            height={100}
            width={150}
            />

            

            <Image className='h-[3vh] w-auto flex justify-center items-center rounded-full mr-10'
            src={nextLogo}
            alt='next.js logo'
            height={50}
            width={150}
            style={{ filter: 'blur(0.4px)' }}
            
            />

            <h4 className='w-[20svw] flex justify-center text-lg'>Visitor Count:</h4>

            <Image className='h-[3vh] w-auto flex justify-center items-center ml-10'
            src={awsLogo}
            alt='aws logo'
            height={50}
            width={150}
            />

            <Image className='h-[3vh] w-auto flex justify-center items-center ml-4'
            src={tsLogo}
            alt='typescript logo'
            height={100}
            width={100}
            />
        </footer>
    )
}