import Overview from "@/components/Home/Home";
import NavBar from "@/components/Navbar/Navbar";
import PageWrapper from "@/components/Page-Wrapper/Page-Wrapper";
import Image from "next/image";
import Form from "@/components/Form/Form";
import Contact from "@/components/Contact/Contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="md:p-16 p-8 flex min-h-screen w-screen flex-col justify-between items-center">
      <NavBar />
      <div className="flex py-8"></div>
      <PageWrapper>
        <main className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:gap-32 gap-8 p-8 py-12 group bg-sky-900 rounded-2xl text-sky-50">
          <div className="">
            <h1 className="font-bold text-5xl">
              Study with your own pace with eBacc
            </h1>
            <p className="py-2">
              Join eBacc today and unlock your full academic potential with
              expert guidance and personalized learning. As a dedicated English
              Baccalaureate platform, we prepare you for IGCSE success.
            </p>
          </div>
          <div className="">
            <div className="w-64 h-64 rounded-2xl relative">
              <Image
                className="absolute transition-all duration-300"
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
            <Form />
            <button className="p-2 px-4 flex justify-center items-center gap-2 text-sky-200 hover:text-white transition-all">
              <h1>Learn More</h1>
            </button>
          </div>
        </div>
      </PageWrapper>
      <div className="flex py-16"></div>
      <PageWrapper>
        <main className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8 w-full overflow-hidden">
          <div className="h-full w-full">
            <h1 className="font-semibold text-3xl">
              Prepare for GCSE with eBacc
            </h1>
            <h2 className="text-lg font-light">
              Educational excellence beyond traditional courses
            </h2>
            <div className="py-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">
                    Enhancing GCSE student success
                  </AccordionTrigger>
                  <AccordionContent className="font-light text-zinc-700">
                    At eBacc, our mission is to enhance students' academic
                    learning by complementing their initial school curriculum.
                    We prepare students to excel in GCSE (General Certificate of
                    Secondary Education) exams through a rigorous and
                    well-structured program.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg">
                    Learning Objectives
                  </AccordionTrigger>
                  <AccordionContent className="font-light text-zinc-700">
                    We aim to provide thorough training in key subjects such as
                    Mathematics, Sciences, English, and more, while
                    strengthening French skills for comprehensive GCSE (General
                    Certificate of Secondary Education) preparation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg">
                    Why Choose eBacc?
                  </AccordionTrigger>
                  <AccordionContent className="font-light text-zinc-700">
                    With eBacc, students benefit from quality education
                    supplemented by live sessions with our qualified
                    instructors, ensuring thorough and personalized preparation
                    for GCSE exams.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <Image
            className="rounded-2xl md:h-[20rem] w-full object-cover"
            src={"/student_at_home.jpg"}
            width={500}
            height={500}
            alt="student at home"
          />
        </main>
      </PageWrapper>
      <div className="flex py-16"></div>
      <PageWrapper>
        <h1 className="text-xl font-semibold">eBacc for your academic success - Your education, Our priority</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 my-8">
          <div
            style={{
              backgroundImage: "url(/shapes/svg_back.png)",
              backgroundSize: "cover",
            }}
            className="flex w-full border rounded-md overflow-hidden bg-white shadow-zinc-200 shadow-2xl cursor-default hover:shadow-zinc-300 transition"
          >
            <div className="p-4 text-zinc-800">
              <a className="w-fit block cursor-default" href="#">
                <h1 className="font-semibold text-lg py-1 text-black w-fit">
                  Ttitle Here
                </h1>
              </a>
              <p className="text-sm">
                adipisicing e quisquam voluptate rem ipsa quam natus nisi
                laudantium cum temporibus repudiandae lore
              </p>
            </div>
            <Image
              className="w-32 aspect-square object-cover"
              src="/education_pattern.jpg"
              alt="Next.js logo"
              width={500}
              height={500}
            />
          </div>
          <div
            style={{
              backgroundImage: "url(/shapes/svg_back.png)",
              backgroundSize: "cover",
            }}
            className="flex w-full border rounded-md overflow-hidden bg-white shadow-zinc-200 shadow-2xl cursor-default hover:shadow-zinc-300 transition"
          >
            <div className="p-4 text-zinc-800">
              <a className="w-fit block cursor-default" href="#">
                <h1 className="font-semibold text-lg py-1 text-black w-fit">
                  Ttitle Here
                </h1>
              </a>
              <p className="text-sm">
                icing ab dignissimos nemo ducimus, hic sint! Libero velit quidem
                quaerat ex. elit. Sunt natus nisi laudantium cum temporibus
                repudiandae
              </p>
            </div>
            <Image
              className="w-32 aspect-square object-cover"
              src="/IMG_8745.jpg"
              alt="Next.js logo"
              width={500}
              height={500}
            />
          </div>
          <div
            style={{
              backgroundImage: "url(/shapes/svg_back.png)",
              backgroundSize: "cover",
            }}
            className="flex w-full border rounded-md overflow-hidden bg-white shadow-zinc-200 shadow-2xl cursor-default hover:shadow-zinc-300 transition"
          >
            <div className="p-4 text-zinc-800">
              <a className="w-fit block cursor-default" href="#">
                <h1 className="font-semibold text-lg py-1 text-black w-fit">
                  Ttitle Here
                </h1>
              </a>
              <p className="text-sm">
                ? Perspiciatis minima a fugit inventore cum voluptatum adipisci
                iusto accusamus repellendus doloremque doloribus, ad, fuga
                nobis?
              </p>
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
      </PageWrapper>
      <div className="flex py-16"></div>
      <PageWrapper>
        <main className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8 w-full overflow-hidden">
          <div className="h-full w-full">
            <h1 className="font-semibold text-3xl">
              Prepare for GCSE with eBacc
            </h1>
            <h2 className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            </h2>
            <div className="py-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">
                    Enhancing GCSE student success
                  </AccordionTrigger>
                  <AccordionContent className="font-light text-zinc-700">
                    At eBacc, our mission is to enhance students' academic
                    learning by complementing their initial school curriculum.
                    We prepare students to excel in GCSE (General Certificate of
                    Secondary Education) exams through a rigorous and
                    well-structured program.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg">
                    Learning Objectives
                  </AccordionTrigger>
                  <AccordionContent className="font-light text-zinc-700">
                    We aim to provide thorough training in key subjects such as
                    Mathematics, Sciences, English, and more, while
                    strengthening French skills for comprehensive GCSE (General
                    Certificate of Secondary Education) preparation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg">
                    Why Choose eBacc?
                  </AccordionTrigger>
                  <AccordionContent className="font-light text-zinc-700">
                    With eBacc, students benefit from quality education
                    supplemented by live sessions with our qualified
                    instructors, ensuring thorough and personalized preparation
                    for GCSE exams.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <Image
            className="rounded-2xl md:h-[20rem] w-full object-cover"
            src={"/student_at_home.jpg"}
            width={500}
            height={500}
            alt="student at home"
          />
        </main>
      </PageWrapper>
      <div className="flex py-16"></div>
      <PageWrapper>
        <main className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8 w-full">
          <div className="p-4 w-full bg-sky-700 text-sky-50 rounded-md border shadow-2xl shadow-zinc-200">
            <h1 className="py-4 font-bold text-xl">Learning Objectives</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos sed earum, molestiae voluptates, fugit quaerat, inventore magnam quis eaque eligendi vero ab laboriosam dolore. Magni corrupti aperiam esse quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi illo, eaque laudantium vitae dolore quo quis ab ipsa, iste veritatis nobis unde in totam aut ipsam repellendus deserunt quod.</p>
          </div>
          <div className="p-4 w-full bg-red-700 text-red-50 rounded-md border shadow-2xl shadow-zinc-200">
            <h1 className="py-4 font-bold text-xl">Learning Objectives</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos sed earum, molestiae voluptates, fugit quaerat, inventore magnam quis eaque eligendi vero ab laboriosam dolore. Magni corrupti aperiam esse quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi illo, eaque laudantium vitae dolore quo quis ab ipsa, iste veritatis nobis unde in totam aut ipsam repellendus deserunt quod.</p>
          </div>
          <div className="p-4 w-full bg-sky-700 text-sky-50 rounded-md border shadow-2xl shadow-zinc-200">
            <h1 className="py-4 font-bold text-xl">Learning Objectives</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos sed earum, molestiae voluptates, fugit quaerat, inventore magnam quis eaque eligendi vero ab laboriosam dolore. Magni corrupti aperiam esse quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi illo, eaque laudantium vitae dolore quo quis ab ipsa, iste veritatis nobis unde in totam aut ipsam repellendus deserunt quod.</p>
          </div>
        </main>
      </PageWrapper>
      <div className="flex py-16"></div>
      <PageWrapper>
        <Contact />
      </PageWrapper>
      <div className="flex py-16"></div>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit vitae officiis, laudantium molestias consequuntur culpa vel quod libero dolores nostrum ut quas ea reiciendis, necessitatibus magni! Voluptatibus, magnam modi.
      </footer>
    </main>
  );
}
