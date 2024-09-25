import Link from "next/link";

export function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container mx-auto p-8 relative flex flex-wrap items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="about">About</Link>
          <Link href="projects">Projects</Link>
          <Link href="contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
