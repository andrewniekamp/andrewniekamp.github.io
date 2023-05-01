import Socials from "@/components/Socials";
import Timeline from "@/components/timeline/Timeline";
import { EMAIL, GITHUB, LINKEDIN } from "@/utils/constants-index";
import { RESUME_RECORDS } from "@/utils/constants-resume";

export default function Resume() {
  return (
    <main className="flex flex-col justify-center items-center p-2 md:p-8">
      <p className="responsive-header max-w-screen text-center">Resume</p>
      <div className="pt-2">
        <Socials email={EMAIL} gitHub={GITHUB} linkedIn={LINKEDIN} />
      </div>
      <div className="flex pt-5 pb-10">
        <Timeline accomplishments={RESUME_RECORDS} />
      </div>
    </main>
  );
}
