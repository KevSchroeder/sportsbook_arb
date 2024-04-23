"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FaFootball, 
        FaFutbol, 
        FaBaseball, 
        FaBasketball,
        FaHockeyPuck,  } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { useState } from 'react'

    import {
        ArrowPathIcon,
        CloudArrowUpIcon,
        Cog6ToothIcon,
        FingerPrintIcon,
        LockClosedIcon,
        ServerIcon,
    } from '@heroicons/react/20/solid'
    
    const features = [
        {
        name: 'NFL',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: FaFootball,
        },
        {
        name: 'Soccer',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: FaFutbol,
        },
        {
        name: 'MLB',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: FaBaseball,
        },
        {
        name: 'NBA',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: FaBasketball,
        },
        {
        name: 'NHL',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: FaHockeyPuck,
        },
        {
        name: 'NCAA',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
        icon: FaUniversity,
        },
    ]
    
    export default function Hero() {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
        
        return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Shredded Edge Arbitrage</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Increase your sports betting edge by using advanced statistical analysis and market research
                techniques to identify and capitalize on discrepancies in odds offered by various sportsbooks.
                </p>
            </div>
            </div>
            <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                width={2432}
                height={1442}
                />
                <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
                </div>
            </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        )
    }
    




const HeroPage = () => {
    const odds = useQuery(api.odds.get);    
    return (
        <div className="text-3xl m-5">
            <ul>
                {odds?.map((odds) => (
                    <li>
                    {odds.sport_title} - {odds.home_team.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};