'use client';
import Image from 'next/image'
import { Button } from '../ui/button';
import {LogIn, UserRoundPlus as Register} from 'lucide-react'
import { ReactNode } from 'react';

export default function HomeNavbar() {
    return (
        <div className='flex flex-row w-full justify-between items-center'>
            <Image src={"/turuq-logo.webp"} width={80} height={80} alt={"Turuq Logo"} />
            {/* Action Buttons */}
            <div className='flex flex-row gap-5 items-center'>
                <HomeNavbarButton onClick={() => {}}>
                    <LogIn/> Sign In
                </HomeNavbarButton>

                <HomeNavbarButton onClick={() => {}}>
                    <Register/> Register
                </HomeNavbarButton>
            </div>
        </div>
    );
}


function HomeNavbarButton({onClick, children} : {onClick: React.MouseEventHandler<HTMLButtonElement>, children: ReactNode}) {
    return (
        <Button 
        onClick={onClick}
        className='w-fit h-12 border-b-2
        shadow-none rounded-none hover:rounded-sm
        bg-background hover:bg-foreground 
        text-foreground hover:text-background
        transition-all'> 
            {children}
        </Button>
    )
}