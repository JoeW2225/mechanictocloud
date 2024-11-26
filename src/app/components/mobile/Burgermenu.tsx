import * as React from 'react';
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaletteIcon from '@mui/icons-material/Palette';
import BungalowIcon from '@mui/icons-material/Bungalow';
import InfoIcon from '@mui/icons-material/Info';
import { Spin as Hamburger } from 'hamburger-react'
import burgerMenuStyle from '@/app/styles/burgerMenuStyle.module.css'

const pages = [
  { title: "Mechanic to Cloud", href:'/home', Icon: BungalowIcon },
  { title: "About", href:'/about', Icon: InfoIcon }, 
  { title: "Projects", href:'/projects', Icon: PaletteIcon }, 
  { title: "Journal", href:'/journal', Icon: LibraryBooksIcon },  
]

export default function BurgerMenu() {
  const [isOpen, setOpen] = React.useState(false);
  const ref = React.useRef(null)

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="lg:hidden" ref={ref}>
      
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}>
        <div className={`${burgerMenuStyle.dropdown} ${burgerMenuStyle.burgerContainer}`}>
          <ul className="grid gap-2">
            {pages.map((page, idx) => {
              const { Icon } = page;

              return (
                <motion.li 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + idx / 10,
                }}
                key={page.title} className="w-full p-[0.08rem] rounded-xl bg-frosted-bg shadow-frosted-glass backdrop-blur-md">
                  <a onClick={() => setOpen((prev) => !prev)}
                  href={page.href} className={"flex items-center justify-between w-full p-5 rounded-xl bg-frosted-bg shadow-frosted-glass"}>
                      <span className="flex gap-1 text-lg">{page.title}</span>
                    <Icon className="text-xl ml-3" />
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
        </motion.div>
      )}
      </AnimatePresence>
      </div>
    
  );
}