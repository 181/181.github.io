// src/app/lib/github.js
export async function getRepos() {
    const username = "181"
    const res = await fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
            "Accept": "application/vnd.github+json",
            "X-Github-Api-Version": "2022-11-28",
        },
        cache: "no-store",
    });
    if(!res.ok) throw new Error("Failed to fetch github repos");
    const data = await res.json();

    return data.filter(r => !r.fork).sort((a,b)=>new Date(b.updated_at) - new Date(a.updated_at));
}