"use client";

import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';

export default function IntroScreen() {
    const router = useRouter()
    const handleContinueClick = () => {
        router.push('/login');
    };

    return (
        <div className="">
            <div className="absolute left-1/2 top-[120px] transform -translate-x-1/2">
                <Logo />
            </div>

            <div className="absolute left-1/2 top-[395px] transform -translate-x-1/2">
                <Title text="W3 are cripto" />
            </div>

            <div className="absolute left-1/2 top-[445px] transform -translate-x-1/2">
                <Subtitle text="In code w3 trust" />
            </div>

            <div className="absolute left-1/2 bottom-[168px] transform -translate-x-1/2 w-[296px]">
                <Button label="Crear cuenta" onClick={handleContinueClick} fullWidth />
            </div>
        </div>
    );
}
