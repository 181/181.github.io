// src/app/lib/fetchGitHubRepos.ts
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export async function fetchGitHubRepos(
  username: string
): Promise<GitHubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  const data: GitHubRepo[] = await res.json();

  return data
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);
}