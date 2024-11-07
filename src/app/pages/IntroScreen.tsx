'use client';

import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import { useRouter } from 'next/navigation';

export default function IntroScreen() {
    
    const router = useRouter();
    const handleContinueClick = () => {
        router.push('/login');
    };

    return (
        <div className="">
            <div className="absolute left-1/2 top-[120px] transform -translate-x-1/2">
                <Logo />
            </div>

            <div className="absolute left-1/2 top-[395px] transform -translate-x-1/2">
                <Title text="W3 are crypto" />
            </div>

            <div className="absolute left-1/2 bottom-[168px] transform -translate-x-1/2 w-[296px]">
                <Button label="Crear cuenta" onClick={handleContinueClick} fullWidth />
            </div>

            <div className="absolute left-1/2 bottom-[120px] transform -translate-x-1/2 text-center text-[#FEF7FF] font-lato font-semibold text-sm">
                ¿Ya tienes cuenta? Ingresa
            </div>
        </div>
    );
}
