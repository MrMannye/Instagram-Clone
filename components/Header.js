import { useState, useEffect } from "react";
import Image from "next/image";
import {SearchIcon, ChatIcon, PlusCircleIcon, VideoCameraIcon, HeartIcon} from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import {useTheme} from 'next-themes'

function Header() {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])
    const renderThemeChange = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <SunIcon
                    className='text-yellow-600 w-7 h-7 transition-all duration-200 ease-in'
                    role='button'
                    onClick={() => setTheme('light')}
                />
            )
        } else {
            return (
                <MoonIcon
                    className='text-blue-600 w-7 h-7 transition-all duration-200 ease-in'
                    role='button'
                    onClick={() => setTheme('dark')}
                />
            )
        }
    }

    return (
        <div className="flex dark:bg-black justify-around py-2 items-center border-b-2">
            <div className="pt-2">
                <Image 
                src={"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"}
                alt="Logo Instagram"
                loading='lazy'
                width={130}
                height={30}
                />
            </div>
            <div className='border-2 p-2 text-gray-400 text-sm flex-[.30] dark:border-0'>
                <div className="flex items-center">
                    <SearchIcon className="h-4 mr-2"/>
                    <input type="text" placeholder="Buscar" className="outline-none dark:bg-black dark:focus-within:text-white focus-within:text-black"/>
                </div>
            </div>
            <div className="flex item-center pt-2 justify-evenly space-x-6">
                <HomeIcon className="h-7"/>
                <ChatIcon className="h-7"/>
                <PlusCircleIcon className="h-7"/>
                <VideoCameraIcon className="h-7"/>
                <HeartIcon className="h-7"/>
                <div>
                    <Image 
                    src={"https://instagram.fcvj4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/268462832_1346939695763683_6748246276847046887_n.jpg?_nc_ht=instagram.fcvj4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=I1eyaCBtqD4AX_w3G5l&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT9V-pRyFl22-Te2Wc6197MPqEn37xkt8yHzpiHbVBVdsA&oe=61C9E159&_nc_sid=4f375e"}
                    alt="Imagen Avatar"
                    loading="lazy"
                    width={30}
                    height={30}
                    className=" rounded-full"
                    />
                </div>
            </div>
            
                {renderThemeChange()}
            
        </div>
    )
}

export default Header;