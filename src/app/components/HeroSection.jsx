'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-yellow-400 overflow-hidden">
   
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-section-2.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-[70px] text-black leading-tight max-w-5xl font-manrope md:text-8xl text-[#101010]">
          Let’s create something <br /> great together.
        </h1>
        
      </div>

      
    </section>
  );
}