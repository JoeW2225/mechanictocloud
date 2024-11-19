import footBlurBg from '@/app/styles/footBlurBg.module.css'

export const FooterCount = () => {
    return (
        <footer className={footBlurBg.footContainer}>
            <div className={footBlurBg.footBlur}>
            <div className='flex justify-center items-center platypi p-3'>
            <h4 className='w-[10svw] flex justify-center text-sm'
            >Visitor Count:</h4>
            </div>
            </div>
        </footer>
    )
}