import bookImg from "public/olena-bohovyk-Ft_Wn-K5YH8-unsplash.jpg";
import danceImg from "public/DALL·E 2024-09-27 15.15.43 - Line art of a female West Coast Swing dancer with straight, shorter hair, wearing flat shoes, loose trousers, and a crop-top for a more street-style l.webp";
import codeImg from "public/alexander-sinn-KgLtFCgfC28-unsplash.jpg";
import { Photocard } from "@/atoms";

export function About() {
  return (
    <section className="relative h-[64rem]">
      <div className="absolute -z-10 inset-5 bg-orange-50 rounded">
        {/* <div className="absolute inset-0 bg-gradient-to-l from-slate-900"></div> */}
      </div>
      <div className="pt-14">
        <h2 id="about-headline" className=" pl-10 text-black text-6xl">
          About
        </h2>
      </div>
      {/* <div className="relative border-4 border-red-300"> */}
      <div className="absolute inset-x-10 top-36 flex flex-col justify-center items-center space-y-5">
        <Photocard
          imgData={codeImg}
          imgAlt="An image of a heart in red zeros and ones"
          heading="my toolbox"
          description="Here's what I use to build and create and play with code."
        />
        <Photocard
          imgData={bookImg}
          imgAlt="An image of an isle full of books"
          heading="my reads"
          description="here's what I've read about coding."
        />
        <Photocard
          imgData={danceImg}
          imgAlt="An image of a dancer in line art with a watercolor backdrop in two shades of blue"
          heading="beyond the code"
          description="Dancer, reader, passionate about continuous learning."
        />
      </div>
      {/* </div> */}
    </section>
  );
}
