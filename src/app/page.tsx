import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ParallaxBanner from '@/components/ParallaxBanner';
import Container from '@/components/Container';
import CoinFlip from '@/components/CoinFlip';

export default function Home() {
  return (
    <main className='text-lg overflow-hidden max-w-100%'>
      
      <ParallaxBanner className='text-background [&_button]:(my-1)' bgImage='/images/parallax-bg.jpg' bgImageStyle={{bottom: '-300px'}} bgImageAlt='the cat' strength={300}>
        <div className='max-w-100% w-screen-md mx-auto px-5 py-10 text-center [&_button]:mx-1'>
          <h1 className='uppercase my-5 text-8 tracking-2 leading-10 font-400'>Andrey's Starter Project</h1>
          <div className='uppercase my-5 text-5 tracking-1'>TypeScript + Next.js + UnoCSS + shadcn/ui</div>
          <div className='uppercase my-5 text-5 tracking-1'>(+ Parallax, Navbar & Mobile Menu)</div>
          <Link href='/about'><Button>About</Button></Link>
          <Link href='https://github.com/andreysamode/starter-ts-next-uno-shad'><Button>GitHub</Button></Link>
        </div>
      </ParallaxBanner>
      
      <Container className='mt-7'>
        <CoinFlip/>
      </Container>
    </main>
  );
}
