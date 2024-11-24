
import DoorTransition from './components/doorTransition';
import CloudGroup from './components/CloudGroup';
import { FooterCount } from '@/app/components/footerCount'
import TitleTransition from './components/TitleTransition';



export default function Home() {
  
  return (
    <>
      <CloudGroup />
      <main>
        <TitleTransition />
        <DoorTransition />
      </main>
      <footer className='sticky bottom-0 flex justify-center items-center w-full h-20 z-10 mt-28'>
        <FooterCount/>
      </footer>
    </>
  );
}
