'use client';
import React,{useState} from 'react';
import { Avatar, Dropdown, Navbar,Accordion } from 'flowbite-react';
import {HomeIcon,InternetIcon,WebsiteIcon,MobileIcon} from './Icon';
export default function Header (){
    const [Toggle,SetToggle] = useState(false)
    return(
    <>
    <div className='px-8'>
    <Navbar fluid rounded className='justify-betwen'>

<Navbar.Brand>
    <img src="/img/Solusibijaklogo.png" className="mr-3 h-12 sm:h-20" alt="SolusiBijak Logo" />
    <h1 className="self-center whitespace-nowrap text-[19px] font-semibold dark:text-white">SolusiBijak</h1>
</Navbar.Brand>

<Navbar.Toggle 
    onClick={()=>{
        if(Toggle){
            SetToggle(false)
        }else{
            SetToggle(true)
        }
        
    }}
/>

<div className={'lg:border lg:p-2 lg:rounded-[15px] w-full md:block md:w-auto '+(Toggle?'':' hidden ')}>
<ul className={'gap-4 md:text-[18px] mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium '+(Toggle?' md:flex ':' flex  ')}>
<li className='flex gap-2 items-center'>
    <a className='order-2' >Home</a>
    <div className='order-1'><HomeIcon /></div>
</li>
<li className='hidden md:block items-center'>
    <Dropdown
    arrowIcon={true}
    inline
    label={"Service"}
    className=''
    >
    <Dropdown.Item className='flex gap-2 items-center'>
        <span className='order-2'>Internet For Your Business</span>
        <div className='order-1'><InternetIcon/></div>
    </Dropdown.Item>
    <Dropdown.Item className='flex gap-2 items-center'>
        <span className='order-2'>WebSite For Your Business</span>
        <div className='order-1'><WebsiteIcon/></div></Dropdown.Item>
    <Dropdown.Item className='flex gap-2 items-center'>
    <span className='order-2'>Mobile Apps Development</span>
        <div className='order-1'><MobileIcon/></div>
    </Dropdown.Item>
    </Dropdown>
</li>
<li className='block md:hidden items-center'>Service
    <ul className="gap-4 ml-4 mt-0 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
        <li className='mt-2 flex items-center'>Internet For Your Business</li>
        <li className='mt-2 flex items-center'>Website For Your Business</li>
        <li className='mt-2 flex items-center'>Mobile Apps Development</li>
    </ul>
</li>
<li className='items-center'>About Us</li>
<li className='items-center'>Contact Us</li>
</ul>
</div>
</Navbar>
    </div>
    
    </>
    )
}
