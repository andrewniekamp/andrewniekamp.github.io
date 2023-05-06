import { Project } from "@/utils/types";
import Image from "next/image";

interface Props {
  project: Project;
}

export default function PortfolioCard(props: Props) {
  const { project } = props;
  return (
    <div className="relative flex-grow border-2 rounded-lg xs:w-[98vw] xs:h-[98vw] md:w-[45vw] md:h-[45vw] min-w-[300px] min-h-[300px] max-w-[500px] max-h-[500px] overflow-hidden">
      <div className="flex justify-between bg-slate-200 relative z-10 border-b lg:min-h-fit">
        {project.logoUrl ? (
          <div className="p-2">
            <Image
              src={project.logoUrl}
              alt={project.title}
              width={119}
              height={119}
            />
          </div>
        ) : (
          <p className="p-6 pb-4 text-xl md:text-3xl font-[500]">
            {project.title}
          </p>
        )}
      </div>
      <div className="w-full h-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "" }}
        />
      </div>
    </div>
  );
}
