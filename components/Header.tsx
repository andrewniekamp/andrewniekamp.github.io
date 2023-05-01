import Link from "next/link";

export default function Header() {
  return (
    <main className="md:flex justify-between items-center items-end p-8">
      <div className="flex items-baseline gap-4 justify-center">
        <div>
          <Link href="/">
            <span className="responsive-title-ultra text-blue-400">:D</span>
          </Link>
          <span className="responsive-text-ultra">rew</span>
        </div>
        <div>
          <span className="responsive-text-ultra">Niekamp</span>
        </div>
      </div>
      <div className="flex gap-4 justify-between md:justify-end p-3 pt-6">
        <Link className="text-blue-400 sp-2" href="/about">
          About
        </Link>
        <Link className="text-blue-400 sp-2" href="/resume">
          Resume
        </Link>
        {/* <Link className="text-blue-400 sp-2" href="/projects">
          Projects
        </Link> */}
      </div>
    </main>
  );
}
