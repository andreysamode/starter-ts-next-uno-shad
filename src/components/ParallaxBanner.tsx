'use client';

import { CSSProperties } from 'react';
import { Parallax } from 'react-parallax';

const ParallaxBanner:React.FC<{children?: React.ReactNode, className:string, bgImageStyle:CSSProperties, bgImage:string, bgImageAlt:string, strength:number}> = ({children, ...props}) => {
  return (
    <Parallax {...props}>
        {children}
    </Parallax>
  );
}
export default ParallaxBanner;