'use client';

import React, { ReactNode } from 'react'
import Image from 'next/image';
import { useRef } from 'react';

interface IProps {
}

export class Form extends React.Component<IProps, {}> {
    render() {
        return (
            <>
                <button className="p-2 px-4 rounded border bg-white flex justify-center items-center gap-2">
                    <h1 className="">Join Us Now</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                    </svg>
                </button>
                <main className='fixed hidden top-0 left-0 flex justify-center items-center p-8 bg-black bg-opacity-50 backdrop-blur-sm w-screen h-screen z-20'>
                    <div className='bg-white p-8 rounded max-w-[32rem] border shadow-2xl relative'>
                        <div className='absolute top-0 right-0 p-2 rounded-full cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h1 className='font-semibold text-2xl py-4'>Pre-registration Form</h1>
                        <p className='font-light text-zinc-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat beatae ab molestiae in dolore neque aperiam hic magni aut, ipsa quasi pariatur praesentium possimus autem aspernatur reprehenderit obcaecati iusto adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores unde laborum, magnam facilis quia doloribus pariatur id ipsam placeat? Dignissimos aliquid officiis cupiditate nesciunt cumque nam ratione ut doloremque praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officia voluptas harum ad architecto hic recusandae similique excepturi asperiores accusamus illo facilis sed perferendis, exercitationem odio temporibus? Saepe, debitis minus.</p>
                    </div>
                </main>
            </>
        )
    }
}
