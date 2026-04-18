// src/app/components/Projects.tsx
import ProjectCard from "./ProjectCard";
import { fetchGitHubRepos } from "../lib/fetchGitHubRepos";

interface Props {
  username: string;
}

export default async function Projects({ username }: Props) {
  const repos = await fetchGitHubRepos(username);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <ProjectCard repo={repo} key={repo.id} />
        ))}
      </div>
    </section>
  );
}