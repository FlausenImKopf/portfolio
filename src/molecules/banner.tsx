export function Banner() {
  return (
    <div className="relative h-200">
      <div className="absolute -z-10 inset-0 bg-blue-200">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <div className="pt-48 pb-16 flex justify-center items-center">
        <h1 className=" text-white text-6xl">Hey there! I&apos;m Johanna</h1>
      </div>
    </div>
  );
}
