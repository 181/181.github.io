"use client";

import { motion } from "framer-motion";
import { GitHubRepo } from "../lib/fetchGitHubRepos";

interface Props {
  repo: GitHubRepo;
}

export default function ProjectCard({ repo }: Props) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 border rounded-lg bg-black/20 hover:bg-black/30 transition"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
      <p className="text-gray-400 text-sm mb-3">
        {repo.description || "No description provided."}
      </p>

      <div className="text-sm flex gap-4 text-gray-300">
        <span>⭐ {repo.stargazers_count}</span>
        {repo.language ? <span>{repo.language}</span> : null}
      </div>
    </motion.a>
  );
}