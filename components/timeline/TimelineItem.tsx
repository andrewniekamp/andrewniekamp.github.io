import { ResumeRecord } from "@/utils/types";
import { DateTime } from "luxon";

interface Props {
  record: ResumeRecord;
}

export default function TimelineItem(props: Props) {
  const { record } = props;

  const formatDates = (startingIso: string, endingIso?: string | null) => {
    const start = DateTime.fromISO(startingIso).toLocaleString({
      month: "short",
      year: "numeric",
    });
    let end = null;
    if (endingIso) {
      end = DateTime.fromISO(endingIso).toLocaleString({
        month: "short",
        year: "numeric",
      });
    } else {
      if (end === null) {
        end = "Present";
      }
    }
    return `${start} ${end ? " - " + end : ""}`;
  };

  return (
    <div className="flex justify-center">
      {/* Date */}
      <div className="flex w-1/6 justify-center md:justify-end items-center text-gray-500">
        <span className="text-sm -rotate-90 md:rotate-0 whitespace-nowrap border border-t-0 md:border-l-0 md:border-t p-2">
          {formatDates(record.startDate, record.endDate)}
        </span>
      </div>
      <div className="hidden sm:flex w-1/6 justify-center items-center">
        {/* Node */}
        <span className="relative flex h-3 w-3 ml-3">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              record.type === "EXPERIENCE" ? "bg-sky-400" : "bg-pink-400"
            }`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${
              record.type === "EXPERIENCE" ? "bg-sky-500" : "bg-pink-500"
            }`}
          ></span>
        </span>
        {/* Line */}
        <div className="w-full">
          <hr />
        </div>
      </div>
      {/* Title/Desc */}
      <div className="flex w-5/6 sm:w-2/3 flex-col border-l pl-2">
        <h3 className="text-lg">{record.header}</h3>
        <p className="font-medium text-gray-500">
          {record.subheader} - {record.location}
        </p>
        {record.technologies?.length && (
          <p className="mt-3 mb-3 text-sm">
            <span>Technologies:</span> {record.technologies.join(", ")}
          </p>
        )}
        {record.points?.length && (
          <ul className="list-disc ml-5">
            {record.points.map((point, i) => (
              <li key={`point-${i}`}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
