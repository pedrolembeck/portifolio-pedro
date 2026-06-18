export function formatRepoName(name) {
    return name
        .replace(/[-_]+/g, " ")
        .split(" ")
        .filter(Boolean)
        .map(
            word =>
                word.charAt(0).toUpperCase() +
                word.slice(1).toLowerCase()
        )
        .join(" ");
}

export function getTechStack(repo) {
    const map = {
        JavaScript: ["Next.js", "React", "JavaScript"],
        TypeScript: ["Next.js", "TypeScript"],
        Python: ["Python"],
        Java: ["Java"],
        HTML: ["HTML", "CSS"],
        CSS: ["CSS"],
    };

    return map[repo.language] || [repo.language || "Não informado"];
}