'use client';

import React, { ReactNode } from 'react'
import Image from 'next/image';

interface IProps {
}

export class NavBar extends React.Component<IProps, {}> {
    render() {
        return (
            <nav className="w-full flex justify-between items-center p-8  rounded-md">
                <a href='/' className="flex justify-center items-center gap-2 select-none">
                    {/* <div className=''>LOGO</div> */}
                    <Image
                        className=''
                        src="/Logpo-Ebacc.png"
                        alt="Next.js logo"
                        width={200}
                        height={200}
                    />
                </a>
                <ul className="flex gap-3 invisible">
                    <li><a className='hover:underline' href='/'>Home</a></li>
                    <li><a className='hover:underline' href='/cats'>Cats</a></li>
                    <li><a className='hover:underline' href='/dogs'>Dogs</a></li>
                    <li><a className='hover:underline' href='/birds'>Birds</a></li>
                </ul>
                <div className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /></svg></div>
            </nav>
        )
    }
}