import Image from "next/image";
import { PageWrapper } from "./page-wrapper";
import { NavBar } from "./navBar";

export default function Home() {
  return (
    <main className="md:p-16 p-8 flex min-h-screen w-screen flex-col justify-between items-center selection:bg-zinc-200">
      <NavBar />
      <PageWrapper>
        <div className="">
          <h1 className="text-xl font-semibold">⌘ Hello World, This is me Youssef</h1>
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
          {/* ----------------------------------------------------------------------------------------------------------------- */}
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
          {/* ----------------------------------------------------------------------------------------------------------------- */}
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
          {/* ----------------------------------------------------------------------------------------------------------------- */}
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
          {/* ----------------------------------------------------------------------------------------------------------------- */}
        </div>
      </PageWrapper>
      <Image
        className="w-32 h-auto"
        src="/vercel.svg"
        alt="Next.js logo"
        width={100}
        height={100}
      />
    </main>
  );
}
