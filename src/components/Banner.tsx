'use client';
import { Carousel } from 'flowbite-react';
export default function Banner(){
    return (
        <div className="lg:h-[600px] h-[250px]">
          <Carousel slideInterval={5000}>
            <img className='lg:h-[600px] h-[250px]' src="/img/InternetSolusi.png" alt="Solusi Internet Kamu" />
            <img className='lg:h-[600px] h-[250px]' src="/img/websitesolution.png" alt="Solusi Website" />
            <img className='lg:h-[600px] h-[250px]' src="/img/mobileappssolution.png" alt="Solusi Mobile Apps" />
          </Carousel>
        </div>
      );
}