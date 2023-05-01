import Timeline from "@/components/timeline/Timeline";
import { RESUME_RECORDS } from "@/utils/constants-resume";

export default function Resume() {
  return (
    <main className="flex flex-col justify-center items-center p-2 md:p-8">
      <p className="responsive-header max-w-screen text-center">Resume</p>
      <div className="flex pt-12 pb-10">
        <Timeline accomplishments={RESUME_RECORDS} />
      </div>
    </main>
  );
}
