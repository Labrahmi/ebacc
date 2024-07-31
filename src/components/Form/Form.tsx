'use client';

import React, { ReactNode } from 'react'
import Image from 'next/image';

const countryCities = {
  Argentina: [
    "Buenos Aires",
    "Córdoba",
    "Rosario",
    "Mendoza",
    "La Plata",
    "San Miguel de Tucumán",
    "Mar del Plata",
    "Salta",
  ],
  Australia: [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelaide",
    "Gold Coast",
    "Canberra",
    "Hobart",
  ],
  Brazil: [
    "São Paulo",
    "Rio de Janeiro",
    "Brasília",
    "Salvador",
    "Fortaleza",
    "Belo Horizonte",
    "Manaus",
    "Curitiba",
  ],
  Canada: [
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Edmonton",
    "Ottawa",
    "Winnipeg",
    "Quebec City",
  ],
  China: [
    "Beijing",
    "Shanghai",
    "Guangzhou",
    "Shenzhen",
    "Chengdu",
    "Chongqing",
    "Tianjin",
    "Wuhan",
  ],
  Egypt: [
    "Cairo",
    "Alexandria",
    "Giza",
    "Shubra El Kheima",
    "Port Said",
    "Suez",
    "Luxor",
    "Aswan",
  ],
  Finland: [
    "Helsinki",
    "Espoo",
    "Tampere",
    "Vantaa",
    "Oulu",
    "Turku",
    "Jyväskylä",
    "Lahti",
  ],
  France: [
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Montpellier",
  ],
  Germany: [
    "Berlin",
    "Munich",
    "Frankfurt",
    "Hamburg",
    "Cologne",
    "Stuttgart",
    "Düsseldorf",
    "Dresden",
  ],
  India: [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
  ],
  Italy: [
    "Rome",
    "Milan",
    "Naples",
    "Turin",
    "Palermo",
    "Genoa",
    "Bologna",
    "Florence",
  ],
  Japan: [
    "Tokyo",
    "Osaka",
    "Nagoya",
    "Yokohama",
    "Kyoto",
    "Fukuoka",
    "Sapporo",
    "Kobe",
  ],
  Mexico: [
    "Mexico City",
    "Guadalajara",
    "Monterrey",
    "Puebla",
    "Tijuana",
    "León",
    "Ciudad Juárez",
    "Cancún",
  ],
  Morocco: [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Fes",
    "Tangier",
    "Agadir",
    "Meknes",
    "Oujda",
  ],
  Netherlands: [
    "Amsterdam",
    "Rotterdam",
    "The Hague",
    "Utrecht",
    "Eindhoven",
    "Tilburg",
    "Groningen",
    "Almere",
  ],
  "New Zealand": [
    "Auckland",
    "Wellington",
    "Christchurch",
    "Hamilton",
    "Tauranga",
    "Dunedin",
    "Palmerston North",
    "Napier",
  ],
  Russia: [
    "Moscow",
    "Saint Petersburg",
    "Novosibirsk",
    "Yekaterinburg",
    "Nizhny Novgorod",
    "Kazan",
    "Chelyabinsk",
    "Samara",
  ],
  "South Africa": [
    "Johannesburg",
    "Cape Town",
    "Durban",
    "Pretoria",
    "Port Elizabeth",
    "Bloemfontein",
    "East London",
    "Polokwane",
  ],
  "South Korea": [
    "Seoul",
    "Busan",
    "Incheon",
    "Daegu",
    "Daejeon",
    "Gwangju",
    "Suwon",
    "Ulsan",
  ],
  Spain: [
    "Madrid",
    "Barcelona",
    "Valencia",
    "Seville",
    "Zaragoza",
    "Málaga",
    "Murcia",
    "Palma",
  ],
  Singapore: ["Singapore"],
  Sweden: [
    "Stockholm",
    "Gothenburg",
    "Malmö",
    "Uppsala",
    "Västerås",
    "Örebro",
    "Linköping",
    "Helsingborg",
  ],
  Turkey: [
    "Istanbul",
    "Ankara",
    "Izmir",
    "Bursa",
    "Adana",
    "Gaziantep",
    "Konya",
    "Antalya",
  ],
  "United Kingdom": [
    "London",
    "Manchester",
    "Birmingham",
    "Glasgow",
    "Liverpool",
    "Edinburgh",
    "Leeds",
    "Bristol",
  ],
  "United States": [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
  ],
};

interface IProps {
}

const Form: React.FC = () => {
  return (
    <>
      <button onClick={(e) => {
        e.preventDefault();
        console.log('clicked');
        document.getElementById('form-overlay')?.classList.toggle('hidden');
        document.body.style.overflow = 'hidden';
      }} className="p-2 px-4 rounded border bg-white flex justify-center items-center gap-2 join-button">
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
      <main id='form-overlay' className='fixed top-0 left-0 hidden flex justify-center items-start p-8 bg-zinc-800 bg-opacity-50 w-screen h-screen z-50 overflow-auto'>
        <div style={{
          backgroundImage: "url(/shapes/svg_back.png)",
          backgroundSize: "cover",
        }} className='bg-zinc-50 md:p-8 p-4 rounded max-w-[64rem]  border shadow-2xl relative md:text-base text-xs'>
          <div onClick={(e) => {
            e.preventDefault();
            document.getElementById('form-overlay')?.classList.toggle('hidden');
            document.body.style.overflow = 'auto';
          }} className='absolute top-0 right-0 p-2 rounded-full cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className='font-semibold text-2xl py-4'>Pre-registration Form</h1>
          <div className='gap-4 flex flex-col'>
            <div className='w-full'>
              <div className='flex gap-2 w-full'>
                <div className='w-full'>
                  <h1 className='text-sm text-zinc-600'>Student's First Name</h1>
                  <input placeholder='Jhon' className='p-2 text-sm border rounded border-zinc-500 w-full bg-white' type="text" />
                </div>
                <div className='w-full'>
                  <h1 className='text-sm text-zinc-600'>Student's Last Name</h1>
                  <input placeholder='Doe' className='p-2 text-sm border rounded border-zinc-500 w-full bg-white' type="text" />
                </div>
              </div>
            </div>
            <div className='w-full'>
              <h1 className='text-sm text-zinc-600'>Date Of Birth</h1>
              <input className='p-2 text-sm border rounded border-zinc-500 w-full bg-white' type="date" />
            </div>
            <div className='w-full'>
              <h1 className='text-sm text-zinc-600'>Country</h1>
              <select className='p-2 text-sm border rounded border-zinc-500 w-full' name="" id="">
                <option value="Morocco">Morocco</option>
              </select>
            </div>
            <div className='w-full'>
              <h1 className='text-sm text-zinc-600'>City</h1>
              <select className='p-2 text-sm border rounded border-zinc-500 w-full' name="" id="">
                <option value="Casablanca">Casablanca</option>
              </select>
            </div>
            <div className='w-full'>
              <h1 className='text-sm text-zinc-600'>Email</h1>
              <input placeholder='youremail@mail.com' className='p-2 text-sm border rounded border-zinc-500 w-full bg-white' name="" id=""></input>
            </div>
            <div className='w-full'>
              <h1 className='text-sm text-zinc-600'>ARE YOU CURRENTLY</h1>
              <div className='flex justify-start items-center gap-4 py-2'>
                <div>
                  <input onChange={(e) => {
                    if (e.currentTarget.checked) {
                      document.getElementById('current_school_element')?.classList.add('hidden');
                    }
                  }} type="radio" name="current_status" id="homeschooled" />
                  <label htmlFor="homeschooled"> Homeschooled</label>
                </div>
                <div>
                  <input onChange={(e) => {
                    if (e.currentTarget.checked) {
                      document.getElementById('current_school_element')?.classList.remove('hidden');
                    }
                  }} type="radio" name="current_status" id="enrolled" />
                  <label htmlFor="enrolled"> Enrolled in a physical school</label>
                </div>
              </div>
            </div>
            <div id='current_school_element' className='w-full hidden'>
              <h1 className='text-sm text-zinc-600'>CURRENT SCHOOL</h1>
              <input placeholder='CURRENT SCHOOL' className='p-2 text-sm border rounded border-zinc-500 w-full bg-white' name="" id=""></input>
            </div>
            <div className='w-full'>
              <h1 className='text-sm text-zinc-600'>Year Group / Grade</h1>
              <select className='p-2 text-sm border rounded border-zinc-500 w-full' name="" id="">
                <option value="Year 7">Year 7</option>
                <option value="Year 8">Year 8</option>
                <option value="Year 9">Year 9</option>
                <option value="Year 10">Year 10</option>
              </select>
            </div>
            <div className='w-full'>
              <h1 className='text-sm text-zinc-600'>ARE YOU CURRENTLY</h1>
              <div className='flex flex-col justify-start items-start gap-2 py-2'>
                <div>
                  <input type="checkbox" name="condition_1" id="condition_1" />
                  <label htmlFor="condition_1"> I agree to the terms and conditions of EBacc.</label>
                </div>
                <div>
                  <input type="checkbox" name="condition_2" id="condition_2" />
                  <label htmlFor="condition_2"> I agree to the privacy policy and understand how my data will be used.</label>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <input className='font-semibold p-2 text-sm border rounded border-zinc-500 w-full cursor-pointer bg-zinc-800 hover:bg-zinc-900 text-white transition-all' name="" id="" type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Form