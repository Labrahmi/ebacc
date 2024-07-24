import Image from "next/image";
import { PageWrapper } from "./page-wrapper";
import { NavBar } from "./navBar";

export default function Home() {
  return (
    <main className="md:p-16 p-8 flex min-h-screen w-screen flex-col justify-between items-center">
      <NavBar />
      <div className="flex py-16"></div>
      <PageWrapper>
        <main className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:gap-32 gap-8 p-8 py-16 group bg-sky-900 rounded-2xl text-sky-50">
          <div className="">
            <h1 className="font-bold text-5xl">Study with your own pace with eBacc</h1>
            <p className="py-2">Join eBacc today and unlock your full academic potential with expert guidance and personalized learning. As a dedicated English Baccalaureate platform, we prepare you for IGCSE success.</p>
          </div>
          <div className="">
            <div className="w-64 h-64 rounded-2xl relative">
              <Image
                className="absolute md:hover:scale-105 transition-all duration-300"
                src="/7394943-ai.png"
                alt="Next.js logo"
                width={500}
                height={500}
              />
            </div>
          </div>
        </main>
        <div>
          <div className="flex flex-row-reverse justify-center items-center py-8 gap-2 bg-sky-900 rounded-r-2xl relative -top-6">
            <button className='p-2 px-4 rounded border bg-white font-semibold flex justify-center items-center gap-2'>
              <h1 className="">Join Us Now</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </button>
            <button className='p-2 px-4 flex justify-center items-center gap-2 text-sky-200 hover:text-white transition-all'><h1>Learn More</h1></button>
          </div>
        </div>
      </PageWrapper>
      <div className="flex py-4"></div>
      <PageWrapper>
        <main className="flex items-center justify-between w-full">
          Hello World
        </main>
      </PageWrapper>
      <div className="flex py-4"></div>
      <PageWrapper>
        <main className="flex items-center justify-between w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores, cumque dolore non labore illo aliquam inventore enim animi deserunt quo sequi, dicta distinctio? Suscipit aliquid veritatis velit? Voluptatum, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum dolorum iste rem ea blanditiis corrupti dicta ullam soluta, dignissimos tempore iusto perspiciatis voluptatibus consectetur incidunt repellat dolorem quod libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, eaque amet, excepturi libero voluptates sunt iure perspiciatis explicabo eligendi quis reprehenderit nisi repudiandae blanditiis error. Culpa nesciunt tempora delectus eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, exercitationem eligendi architecto aut consequuntur culpa quod hic nobis velit, blanditiis ullam maiores eaque! Harum esse necessitatibus iusto praesentium reprehenderit blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum dolorum fuga doloremque rerum cumque molestias, earum at a eaque sit labore quo porro. Iste porro perspiciatis expedita assumenda quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis libero, officia nostrum adipisci id laboriosam ratione alias cumque aliquid animi deserunt quasi vitae debitis in obcaecati fugiat dignissimos facilis nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat sequi nostrum, pariatur excepturi eos sit minima numquam sed dolores fugiat ipsum, expedita deleniti alias omnis debitis magnam ex ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. A neque eveniet, voluptate repellendus reprehenderit deserunt quo ullam quisquam esse! Laudantium dolorem officiis odit necessitatibus nesciunt exercitationem doloribus architecto quaerat placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat provident, nesciunt at doloremque est perspiciatis illum quam, distinctio dolorem temporibus facilis corporis? Autem dignissimos inventore quam libero numquam earum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores, cumque dolore non labore illo aliquam inventore enim animi deserunt quo sequi, dicta distinctio? Suscipit aliquid veritatis velit? Voluptatum, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum dolorum iste rem ea blanditiis corrupti dicta ullam soluta, dignissimos tempore iusto perspiciatis voluptatibus consectetur incidunt repellat dolorem quod libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, eaque amet, excepturi libero voluptates sunt iure perspiciatis explicabo eligendi quis reprehenderit nisi repudiandae blanditiis error. Culpa nesciunt tempora delectus eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, exercitationem eligendi architecto aut consequuntur culpa quod hic nobis velit, blanditiis ullam maiores eaque! Harum esse necessitatibus iusto praesentium reprehenderit blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum dolorum fuga doloremque rerum cumque molestias, earum at a eaque sit labore quo porro. Iste porro perspiciatis expedita assumenda quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis libero, officia nostrum adipisci id laboriosam ratione alias cumque aliquid animi deserunt quasi vitae debitis in obcaecati fugiat dignissimos facilis nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat sequi nostrum, pariatur excepturi eos sit minima numquam sed dolores fugiat ipsum, expedita deleniti alias omnis debitis magnam ex ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. A neque eveniet, voluptate repellendus reprehenderit deserunt quo ullam quisquam esse! Laudantium dolorem officiis odit necessitatibus nesciunt exercitationem doloribus architecto quaerat placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat provident, nesciunt at doloremque est perspiciatis illum quam, distinctio dolorem temporibus facilis corporis? Autem dignissimos inventore quam libero numquam earum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores, cumque dolore non labore illo aliquam inventore enim animi deserunt quo sequi, dicta distinctio? Suscipit aliquid veritatis velit? Voluptatum, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum dolorum iste rem ea blanditiis corrupti dicta ullam soluta, dignissimos tempore iusto perspiciatis voluptatibus consectetur incidunt repellat dolorem quod libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, eaque amet, excepturi libero voluptates sunt iure perspiciatis explicabo eligendi quis reprehenderit nisi repudiandae blanditiis error. Culpa nesciunt tempora delectus eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, exercitationem eligendi architecto aut consequuntur culpa quod hic nobis velit, blanditiis ullam maiores eaque! Harum esse necessitatibus iusto praesentium reprehenderit blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum dolorum fuga doloremque rerum cumque molestias, earum at a eaque sit labore quo porro. Iste porro perspiciatis expedita assumenda quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis libero, officia nostrum adipisci id laboriosam ratione alias cumque aliquid animi deserunt quasi vitae debitis in obcaecati fugiat dignissimos facilis nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat sequi nostrum, pariatur excepturi eos sit minima numquam sed dolores fugiat ipsum, expedita deleniti alias omnis debitis magnam ex ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. A neque eveniet, voluptate repellendus reprehenderit deserunt quo ullam quisquam esse! Laudantium dolorem officiis odit necessitatibus nesciunt exercitationem doloribus architecto quaerat placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat provident, nesciunt at doloremque est perspiciatis illum quam, distinctio dolorem temporibus facilis corporis? Autem dignissimos inventore quam libero numquam earum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores, cumque dolore non labore illo aliquam inventore enim animi deserunt quo sequi, dicta distinctio? Suscipit aliquid veritatis velit? Voluptatum, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum dolorum iste rem ea blanditiis corrupti dicta ullam soluta, dignissimos tempore iusto perspiciatis voluptatibus consectetur incidunt repellat dolorem quod libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, eaque amet, excepturi libero voluptates sunt iure perspiciatis explicabo eligendi quis reprehenderit nisi repudiandae blanditiis error. Culpa nesciunt tempora delectus eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, exercitationem eligendi architecto aut consequuntur culpa quod hic nobis velit, blanditiis ullam maiores eaque! Harum esse necessitatibus iusto praesentium reprehenderit blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum dolorum fuga doloremque rerum cumque molestias, earum at a eaque sit labore quo porro. Iste porro perspiciatis expedita assumenda quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis libero, officia nostrum adipisci id laboriosam ratione alias cumque aliquid animi deserunt quasi vitae debitis in obcaecati fugiat dignissimos facilis nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat sequi nostrum, pariatur excepturi eos sit minima numquam sed dolores fugiat ipsum, expedita deleniti alias omnis debitis magnam ex ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. A neque eveniet, voluptate repellendus reprehenderit deserunt quo ullam quisquam esse! Laudantium dolorem officiis odit necessitatibus nesciunt exercitationem doloribus architecto quaerat placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat provident, nesciunt at doloremque est perspiciatis illum quam, distinctio dolorem temporibus facilis corporis? Autem dignissimos inventore quam libero numquam earum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores, cumque dolore non labore illo aliquam inventore enim animi deserunt quo sequi, dicta distinctio? Suscipit aliquid veritatis velit? Voluptatum, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum dolorum iste rem ea blanditiis corrupti dicta ullam soluta, dignissimos tempore iusto perspiciatis voluptatibus consectetur incidunt repellat dolorem quod libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, eaque amet, excepturi libero voluptates sunt iure perspiciatis explicabo eligendi quis reprehenderit nisi repudiandae blanditiis error. Culpa nesciunt tempora delectus eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, exercitationem eligendi architecto aut consequuntur culpa quod hic nobis velit, blanditiis ullam maiores eaque! Harum esse necessitatibus iusto praesentium reprehenderit blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsum dolorum fuga doloremque rerum cumque molestias, earum at a eaque sit labore quo porro. Iste porro perspiciatis expedita assumenda quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis libero, officia nostrum adipisci id laboriosam ratione alias cumque aliquid animi deserunt quasi vitae debitis in obcaecati fugiat dignissimos facilis nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat sequi nostrum, pariatur excepturi eos sit minima numquam sed dolores fugiat ipsum, expedita deleniti alias omnis debitis magnam ex ab! Lorem ipsum dolor, sit amet consectetur adipisicing elit. A neque eveniet, voluptate repellendus reprehenderit deserunt quo ullam quisquam esse! Laudantium dolorem officiis odit necessitatibus nesciunt exercitationem doloribus architecto quaerat placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat provident, nesciunt at doloremque est perspiciatis illum quam, distinctio dolorem temporibus facilis corporis? Autem dignissimos inventore quam libero numquam earum!
        </main>
      </PageWrapper>



      {/* <PageWrapper>
        <div className="">
          <h1 className="text-2xl font-semibold">⌘ Hello World, This is me Youssef</h1>
        </div>
        <div className="space-y-4 my-4">
          <p className="text-zinc-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quis perspiciatis hic doloremque exercitationem animi, sequi quas corrupti a et quod aliquam eveniet repudiandae neque adipisci, quam fugiat vitae delectus.
          </p>
          <div className="space-x-2">
            <button style={ { backgroundImage: "url(/shapes/svg_back.png)", backgroundSize: "cover" }} className="px-4 p-2 bg-[#061770] text-white border rounded-md font-semibold transition">Primary Button</button>
            <button style={ { backgroundImage: "url(/shapes/svg_back.png)", backgroundSize: "cover" }} className="px-4 p-2 bg-[#cc2132] text-white border rounded-md font-semibold transition">Secondary Button</button>
            <button className="px-4 p-2  text-zinc-800 rounded-md font-medium hover:text-black transition"> Secondary Button</button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 my-8">
          <div style={ { backgroundImage: "url(/shapes/svg_back.png)", backgroundSize: "cover" }} className="flex w-full border rounded-md overflow-hidden bg-white shadow-zinc-200 shadow-2xl cursor-default hover:shadow-zinc-300 transition">
            <div className="p-4 text-zinc-800">
              <a className="w-fit block" href="#"><h1 className="font-semibold text-lg py-1 text-black hover:underline w-fit">Ttitle Here</h1></a>
              <p className="text-sm">adipisicing e quisquam voluptate rem ipsa quam natus nisi laudantium cum temporibus repudiandae lore</p>
            </div>
            <Image
              className="w-32 aspect-square object-cover"
              src="/education_pattern.jpg"
              alt="Next.js logo"
              width={500}
              height={500}
            />
          </div>
          <div style={ { backgroundImage: "url(/shapes/svg_back.png)", backgroundSize: "cover" }} className="flex w-full border rounded-md overflow-hidden bg-white shadow-zinc-200 shadow-2xl cursor-default hover:shadow-zinc-300 transition">
            <div className="p-4 text-zinc-800">
              <a className="w-fit block" href="#"><h1 className="font-semibold text-lg py-1 text-black hover:underline w-fit">Ttitle Here</h1></a>
              <p className="text-sm">icing ab dignissimos nemo ducimus, hic sint! Libero velit quidem quaerat ex. elit. Sunt natus nisi laudantium cum temporibus repudiandae</p>
            </div>
            <Image
              className="w-32 aspect-square object-cover"
              src="/IMG_8745.jpg"
              alt="Next.js logo"
              width={500}
              height={500}
            />
          </div>
          <div style={ { backgroundImage: "url(/shapes/svg_back.png)", backgroundSize: "cover" }} className="flex w-full border rounded-md overflow-hidden bg-white shadow-zinc-200 shadow-2xl cursor-default hover:shadow-zinc-300 transition">
            <div className="p-4 text-zinc-800">
              <a className="w-fit block" href="#"><h1 className="font-semibold text-lg py-1 text-black hover:underline w-fit">Ttitle Here</h1></a>
              <p className="text-sm">? Perspiciatis minima a fugit inventore cum voluptatum adipisci iusto accusamus repellendus doloremque doloribus, ad, fuga nobis?</p>
            </div>
            <Image
              className="w-32 aspect-square object-cover"
              src="/IMG_7784.png"
              alt="Next.js logo"
              width={500}
              height={500}
            />
          </div>
        </div>
      </PageWrapper> */}

      <NavBar />
    </main>
  );
}
