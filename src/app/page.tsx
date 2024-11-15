import Link from 'next/link'
import doorGlow from '@/app/styles/doorGlow.module.css'
import CloudGroup from './components/CloudGroup';

export default function Home() {
  return (
    <>
      <CloudGroup />
      <main>
        <h1 className="platypi text-3xl relative justify-center p-5 h-[30vh] flex items-center sm:text-5xl">Mechanic to Cloud</h1>
        <div className='w-full flex justify-center'>
          <div className={doorGlow.doorContainer}>
            <div className={doorGlow.glowingLight}></div>
            <Link className="relative p-5 text-9xl z-50" href={'/home'}>🚪</Link>
          </div>
        </div>
      </main>
    </>
  );
}
