import Socials from "@/components/Socials";
import { EMAIL, GITHUB, LINKEDIN } from "@/utils/constants-index";

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center flex-grow justify-center p-4 pb-48 md:p-24 md:pb-60`}
    >
      <p className="text-3xl">Hi, I&apos;m Drew.</p>
      <div className="flex flex-col gap-4 p-4 max-w-2xl">
        <p>
          I&apos;m an experienced software developer with a record of developing
          full-stack applications that solve complex business problems and
          provide exceptional user experiences.
        </p>
        <p>
          I thrive in a team environment, and I&apos;m always looking for ways
          to address challenges and make things better.
        </p>
      </div>
      <Socials email={EMAIL} gitHub={GITHUB} linkedIn={LINKEDIN} />
    </main>
  );
}
