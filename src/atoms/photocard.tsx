import Image, { StaticImageData } from "next/image";

interface PhotocardProps {
  imgData: StaticImageData;
  imgAlt: string;
  heading: string;
  description: string;
}

export function Photocard(props: PhotocardProps) {
  return (
    <section className="max-w-xs relative rounded-lg bg-orange-50 shadow-slate-900 shadow-lg">
      {/* make Heading and picture a prop */}
      <div className="aspect-video overflow-hidden">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          width={400}
          style={{
            objectFit: "cover",
            borderRadius: "8px 8px 0px 0px",
          }}
        />
      </div>
      <div className="p-2">
        <h3 className="text-black px-5 font-bold">{props.heading}</h3>
        <p className="truncate text-black px-5">{props.description}</p>
      </div>
    </section>
  );
}
