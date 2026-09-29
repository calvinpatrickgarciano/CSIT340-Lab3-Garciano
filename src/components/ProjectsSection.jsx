import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Projects"
        subtitle="Things I have built."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">

        <ProjectCard
          year="2026"
          title="FindMyRide Cebu"
          description="A lost-and-found web application for commuters and public transportation users in Cebu."
          tech="React · Vite · MySQL"
          link="https://github.com/calvinpatrickgarciano"
        />

        <ProjectCard
          year="2026"
          title="About Me in React"
          description="A personal About Me webpage rebuilt using React and Tailwind CSS."
          tech="React · Tailwind CSS"
          link="https://github.com/calvinpatrickgarciano"
        />

        <ProjectCard
          year="2026"
          title="Spring Boot Activity 01"
          description="A simple user registration and login system connected to a MySQL database."
          tech="Java · Spring Boot · MySQL"
          link="https://github.com/calvinpatrickgarciano"
        />

        <ProjectCard
          year="2026"
          title="Class Scheduling System"
          description="A system for managing class schedules, teachers, rooms, subjects, and courses."
          tech="MySQL · Database Design"
          link="https://github.com/calvinpatrickgarciano"
        />

      </div>
    </section>
  )
}

export default ProjectsSection