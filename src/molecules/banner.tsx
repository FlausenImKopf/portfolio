export function Banner() {
  return (
    <section className="relative h-96">
      <div className="absolute -z-10 inset-5 bg-orange-50 rounded">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div> */}
      </div>
      <div className="pt-48 pb-16 flex justify-center items-center">
        <h1 className="px-10 text-black text-6xl">
          Hey there! I&apos;m Johanna
        </h1>
      </div>
    </section>
  );
}
