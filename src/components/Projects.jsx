"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import {
    formatRepoName,
        getTechStack,
} from "../lib/githubUtils";
export default function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function loadRepos() {
            const response = await fetch(
                "https://api.github.com/users/pedrolembeck/repos"
            );

            const data = await response.json();

            const filtered = data

                .filter(repo => !repo.fork)
                .filter(repo => !repo.archived)
                .filter(repo => repo.size > 0)
                .filter(
                    repo =>
                        repo.name.toLowerCase() !==
                        "pedrolembeck"
                )
                .map(repo => ({
                    ...repo,
                    displayName: formatRepoName(
                        repo.name
                    ),
                    techStack: getTechStack(repo),
                }))
                .sort(
                    (a, b) =>
                        new Date(b.updated_at) -
                        new Date(a.updated_at)
                );

            setRepos(filtered);
        }

        loadRepos();
    }, []);

    return (
        <section
            id="projects"
            className="py-20"
        >
            <div className="max-w-7xl mx-auto px-6">

                <h2
                    className="
            text-5xl
            font-bold
            mb-12
          "
                >
                    Projetos
                </h2>

                <div
                    className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
                >
                    {repos.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}