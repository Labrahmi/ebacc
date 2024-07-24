'use client';

import React, { ReactNode } from 'react'
import Image from 'next/image';

interface IProps {
}

export class NavBar extends React.Component<IProps, {}> {
    render() {
        return (
            <nav className="w-full flex justify-between items-center z-10 p-4">
                <a href='/' className="flex justify-center items-center gap-2 select-none">
                    <h1 className='font-bold text-xl'>eBacc <span className='text-xs font-normal'>by London Academy</span></h1>
                </a>
                <ul className="flex gap-3 invisible">
                    <li><a className='hover:underline' href='/'>Home</a></li>
                    <li><a className='hover:underline' href='/cats'>Cats</a></li>
                    <li><a className='hover:underline' href='/dogs'>Dogs</a></li>
                    <li><a className='hover:underline' href='/birds'>Birds</a></li>
                </ul>
                <div className='flex justify-center items-center gap-4'>
                    <button className='p-2 px-4 rounded border bg-white flex justify-center items-center gap-2'>
                        <h1>Join Us Now</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                    </button>
                    <a href="#">
                        <Image
                            className='w-10 rounded'
                            src={"/Flag_of_France.png"}
                            width={500}
                            height={500}
                            alt='france'
                        />
                    </a>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
            </nav>
        )
    }
}