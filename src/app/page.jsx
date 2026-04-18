// src/app/page.jsx
import { getRepos } from "./lib/github";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";

export default async function Page() {
  const repos = await getRepos();

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ marginBottom: "40px" }}
      >
        <h1 style={{ marginBottom: "8px" }}>Dev’s Animated Portfolio</h1>
        <p style={{ opacity: 0.7 }}>Projects fetched live from GitHub API</p>
      </motion.header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {repos.map((repo, i) => (
          <ProjectCard key={repo.id} repo={repo} index={i} />
        ))}
      </section>
    </main>
  );
}