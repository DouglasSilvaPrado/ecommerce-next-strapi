"use client"

import { ReactNode } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const ProviderNProgress = ({ children }: { children: ReactNode }) => {
  const customStyleProgress = `
    #nprogress {
      pointer-events: none;
      background: #131313;
    
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
    
      width: 100vw;
      height: 100vh;
    }
    
    #nprogress .bar {
      background: linear-gradient(#4A69E2 0 0), linear-gradient(#4A69E2 0 0),
        linear-gradient(#4A69E2 0 0), linear-gradient(#4A69E2 0 0),
        linear-gradient(#4A69E2 0 0);
    
      background-size: 100% calc(100% / 5 + 2px);
      background-repeat: no-repeat;
    
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
    
      width: 100%;
      height: 2px;
    }
    
    /* Fancy blur effect */
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #4A69E2, 0 0 5px #4A69E2;
      opacity: 1.0;
    
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    
    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 50%;
      left: 50%;
    }
    
    #nprogress .spinner-icon {
      width:50px;
      height:50px;
      border-radius:50%;
      background:conic-gradient(#0000 10%,#4A69E2);
      -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 16px),#000 0);
      animation:s3 1s infinite linear;
    }
    
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    
    @keyframes s3 {to{transform: rotate(1turn)}}
  `
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#4A69E2"
        options={{ showSpinner: true }}
        // shallowRouting
        style={customStyleProgress}
      />
    </>
  );
}
