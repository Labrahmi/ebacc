'use client';

import React, { ReactNode } from 'react'
import Image from 'next/image';

interface IProps {
}

export class Contact extends React.Component<IProps, {}> {
    render() {
        return (
            <>
                <div className=''>
                    <h1 className='md:text-3xl text-lg font-bold text-zinc-900 text-center'>Contact Us</h1>
                    <div className='py-4 md:py-8'></div>
                    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                        <div className="grid gap-4 lg:gap-6 lg:grid-cols-2">
                            {/*  */}
                            <a href='https://maps.app.goo.gl/D95UqUnZNwDQ9RDx5' target="_blank" className="bg-white space-y-4 shadow-2xl hover:shadow-zinc-300 rounded-xl font-light shadow-zinc-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out">
                                <div className='flex items-center space-x-1.5'>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                        </svg>
                                    </div>
                                    <div className='text-lg font-bold'>Address</div>
                                </div>
                                <div>
                                    <div>London Academy, Casablanca</div>
                                </div>
                            </a>
                            {/*  */}
                            <a href='tel:+212684290290' className="bg-white space-y-4 shadow-2xl hover:shadow-zinc-300 rounded-xl font-light shadow-zinc-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out">
                                <div className='flex items-center space-x-1.5'>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                    </div>
                                    <div className='text-lg font-bold'>Phone number</div>
                                </div>
                                <div>
                                    <div className='text-zinc-500'>During working hours only</div>
                                    <div className='font-semibold'>+212 684 290 290</div>
                                </div>
                            </a>
                            {/*  */}
                            <a href='mailto:contact@ebacc.ma' className="bg-white space-y-4 shadow-2xl hover:shadow-zinc-300 rounded-xl font-light shadow-zinc-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out">
                                <div className='flex items-center space-x-1.5'>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div className='text-lg font-bold'>Email</div>
                                </div>
                                <div>
                                    <div className='font-semibold'>contact@ebacc.ma</div>
                                </div>
                            </a>
                            {/*  */}
                            <a href='#' className="bg-white space-y-4 shadow-2xl hover:shadow-zinc-300 rounded-xl font-light shadow-zinc-200 border border-zinc-100 p-4 py-8 cursor-pointer transition-all duration-200 ease-in-out">
                                <div className='flex items-center space-x-1.5'>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div className='text-lg font-bold'>Schedules</div>
                                </div>
                                <div>
                                    <div>Monday - Saturday</div>
                                    <div className='font-semibold'>8:00 AM - 17:00 PM</div>
                                </div>
                            </a>
                            {/*  */}
                        </div>
                        <div className="bg-white space-y-2 shadow-2xl hover:shadow-zinc-300 rounded-xl font-light shadow-zinc-200 border border-zinc-100 p-4 py-8 transition-all duration-200 ease-in-out">
                            <div className='font-semibold md:text-lg text-lg'>Contact Us !</div>
                            <div className='text-sm text-zinc-600'>Fill up the form below to send us a message</div>
                            <div className='py-1'></div>
                            <form className='space-y-2' action="#" method="POST">
                                <input required={true} type="text" name="name" id="name" className="w-full p-3 border-b border-zinc-300 focus-visible:border-zinc-700 rounded-sm focus:outline-none transition-all duration-300 outline-none" placeholder="Full Name*" />
                                <input required={true} type="email" name="email" id="email" className="w-full p-3 border-b border-zinc-300 focus-visible:border-zinc-700 rounded-sm focus:outline-none transition-all duration-300 outline-none" placeholder="Email Address*" />
                                <input required={true} type="tel" name="tel" id="tel" className="w-full p-3 border-b border-zinc-300 focus-visible:border-zinc-700 rounded-sm focus:outline-none transition-all duration-300 outline-none" placeholder="Phone Number*" />
                                <textarea rows={5} name="name" id="message" className="w-full p-3 border-b border-zinc-300 focus-visible:border-zinc-700 rounded-sm focus:outline-none transition-all duration-300 outline-none" placeholder="Type your message here..." ></textarea>
                                <div className='py-1'></div>
                                <div>
                                    <button type="submit" className="w-full bg-zinc-900 text-white p-2 rounded-md hover:bg-zinc-800 transition-all duration-200 ease-in-out">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}