import { projects } from "@/utils/constants-portfolio";
import PortfolioCard from "../components/PortfolioCard";

export default function Projects() {
  return (
    <main className="flex flex-col justify-center items-center p-2 md:p-8">
      <p className="responsive-header max-w-screen text-center">Portfolio</p>
      <div className="flex flex-wrap justify-center pt-10 gap-1">
        {projects.map((project, i) => (
          <PortfolioCard key={`project-card-${i}`} project={project} />
        ))}
      </div>
    </main>
  );
}
