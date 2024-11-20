
import DoorTransition from './components/doorTransition';
import CloudGroup from './components/CloudGroup';
import { FooterCount } from '@/app/components/footerCount'



export default function Home() {
  return (
    <>
      <CloudGroup />
      <main>
        <h1 className="platypi text-3xl relative justify-center p-5 h-[30vh] flex items-center sm:text-5xl" >Mechanic to Cloud</h1>
        <DoorTransition />
      </main>
      <footer className='sticky bottom-0 flex justify-center items-center w-full h-20 z-10 mt-28'>
        <FooterCount/>
      </footer>
    </>
  );
}
