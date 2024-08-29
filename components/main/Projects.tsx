import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/HOME.png"
          title="WEALTH-BUILD AI"
          description="Revolutionize financial advisory services by leveraging generative AI to provide more than personalized data-driven financial advice to customers."
        />
        <ProjectCard
          src="/healthbeats.png"
          title="HEALTH-BEATS (Model)"
          description="AI-Based health KIOSK that can provide virtual doctor connectivity to people in 60,000+ remote areas with
medical assistance."
        />
        <ProjectCard
          src="/Docsapp.png"
          title="DOCS-APP"
          description="Notes Making Application stores multiple notes in an interactive 2D plane, resulting in 25% to 50% increase in productivity and user engagement."
        />
      </div>
    </div>
  );
};

export default Projects;
