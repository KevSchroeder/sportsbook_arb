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
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
    ]


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
            <div className="bg-gray-900">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=500" alt="" />
            </a>
            </div>
            <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
                </a>
            ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
                Log in <span aria-hidden="true">&rarr;</span>
            </a>
            </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Shredded Edge Arbitrage</span>
                <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=500"
                    alt=""
                />
                </a>
                <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
                >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
                <div className="py-6">
                    <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                    Log in
                    </a>
                </div>
                </div>
            </div>
            </Dialog.Panel>
        </Dialog>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Shredded Edge Arbitrage</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Increase your sports betting edge by using advanced statistical analysis and market research
                techniques to identify and capitalize on discrepancies in odds offered by various sportsbooks.
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-300">
                "Trust the Data"</p>
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
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-orange-500" aria-hidden="true" />
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