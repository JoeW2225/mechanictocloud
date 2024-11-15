import Link from 'next/link'
import doorGlow from '@/app/styles/doorGlow.module.css'
import cloudAni from '@/app/styles/cloudAni.module.css'



export default function Home() {
  return (
    <>
    
      <div className={cloudAni.backgroundWrap}>
        <div className={cloudAni.x1}>
          <div className={cloudAni.cloud}></div>
        </div>

        <div className={cloudAni.x2}>
          <div className={cloudAni.cloud}></div>
        </div>

        <div className={cloudAni.x3}>
          <div className={cloudAni.cloud}></div>
        </div>

        <div className={cloudAni.x4}>
          <div className={cloudAni.cloud}></div>
        </div>

        <div className={cloudAni.x5}>
          <div className={cloudAni.cloud}></div>
        </div>
      </div>
      
      <main>
        <h1 className="platypi text-3xl relative justify-center p-5 h-[30vh] flex items-center sm:text-5xl">Mechanic to Cloud</h1>

        <div className='w-full flex justify-center'>
          <div className={doorGlow.doorContainer}>
            <div className={doorGlow.glowingLight}></div>
            <Link className="relative p-5 text-9xl z-50" href={'/home'}>🚪</Link>
          </div>
        </div>

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </>
  );
}
