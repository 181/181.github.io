// src/app/components/ProjectCard.tsx
"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ repo, index }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      style={{
        display: "block",
        background: "#1a1a1a",
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid #333",
        textDecoration: "none",
        color: "#eee",
      }}
    >
      <h2 style={{ margin: 0 }}>{repo.name}</h2>
      <p style={{ opacity: 0.7 }}>{repo.description || "No description provided"}</p>
      <p style={{ fontSize: "14px", opacity: 0.5 }}>
        ⭐ {repo.stargazers_count} • Updated:{" "}
        {new Date(repo.updated_at).toLocaleDateString()}
      </p>
    </motion.a>
  );
}