export default function Header() {
  return (
    <main className="md:flex justify-between items-center items-end p-8">
      <div className="flex items-baseline gap-4 justify-center">
        <div>
          <a href="/">
            <span className="responsive-title-ultra text-blue-400">:D</span>
          </a>
          <span className="responsive-text-ultra">rew</span>
        </div>
        <div>
          <span className="responsive-text-ultra">Niekamp</span>
        </div>
      </div>
      <div className="flex gap-4 justify-between md:justify-end p-3 pt-6">
        {/* <a className="text-blue-400 sp-2" href="/about">
          About
        </a>
        <a className="text-blue-400 sp-2" href="/resume">
          Resume
        </a>
        <a className="text-blue-400 sp-2" href="/projects">
          Projects
        </a>
        <a className="text-blue-400 sp-2" href="/misc">
          Misc
        </a> */}
      </div>
    </main>
  );
}
