import { ResumeRecord, TimelineRecord } from "@/utils/types";
import { DateTime } from "luxon";
import TimelineItem from "./TimelineItem";

interface Props {
  accomplishments: ResumeRecord[];
}

export default function Timeline(props: Props) {
  const { accomplishments } = props;

  const sortedAccomplishments = accomplishments.sort((a, b) => {
    return (
      DateTime.fromISO(b.startDate).valueOf() -
      DateTime.fromISO(a.startDate).valueOf()
    );
  });

  return (
    <div className="flex flex-col gap-10">
      {sortedAccomplishments.map((accomplishment, index) => (
        <TimelineItem key={index} record={accomplishment} />
      ))}
    </div>
  );
}
