'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' },
];

export default function Navbar () {
  const pathname = usePathname();
  return <>
    <div className='bg-stone-1'>
      <header className='max-w-screen-md mx-auto py-4 px-7 flex items-center [&_.active]:text-primary-foreground-hover'>
        <Link href='/' className='text-(8 secondary-foreground) grow-1'>A Project</Link>
        {/* !nav links (skip the 'home' link) */}
        <div className='hidden sm:block'>
          { navItems.map((link, index) => link.path !== '/' &&
            <Link href={link.path} key={index} 
              className={`uppercase font-default px-2 py-1 text-(3.8 secondary-foreground) hover:(text-primary-foreground-hover shadow-[0_5px_0] shadow-stone-2) 
                ${ pathname === link.path ? 'active' : '' }`}>
              {link.text}
            </Link>) }
        </div>
        {/* !hamburger menu */}
        <div className='block sm:hidden'>
        <Sheet>
          <SheetTrigger className='i-mdi-menu size-8 hover:bg-secondary-foreground'>Open</SheetTrigger>
            <SheetContent className='max-w-200px'>
              <SheetHeader>
                <SheetDescription className='[&_.active]:text-primary-foreground-hover'>
                  { navItems.map((item, index) => 
                    <SheetClose key={index} asChild>
                      <Link href={item.path} className='block text-5 px-0 py-2 mx-0 text-(xl primary-foreground left)'>
                        {item.text}
                      </Link>
                    </SheetClose> ) }
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          </div>
      </header>
    </div>
  </>
}