"use client"

import React, { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { CertificationProps, ProjectsProps, SkillsProps } from "@/lib/interfaces"
import { certifications } from "@/lib/certifications"
import { projects } from "@/lib/projects"
import { skills } from "@/lib/skills"
import TypeWriter from "@/components/TypeWriter"

interface CategoriesProps {
    onComplete: () => void;
}

const Categories : React.FC<CategoriesProps> = ({ onComplete }) => {
    const [ selectedCategory, setSelectedCategory ] = useState('certifications')
    const [ isTypingCat, setIsTypingCat ] = useState(true)
    const [ showContent, setShowContent ] = useState(false)

    const handleCatComplete = () => {
        setShowContent(true)
        onComplete()
    }

    const handleTabChange = (value: string) => {
        setSelectedCategory(value)
        setIsTypingCat(true)
        setShowContent(false)
    }

    return <>
        <div className="space-y-4">
            <Tabs defaultValue="certifications" className="w-full" onValueChange={handleTabChange}>
                <TabsList className="mb-6">
                    <TabsTrigger value="certifications">certifications/</TabsTrigger>
                    <TabsTrigger value="projects">projects/</TabsTrigger>
                    <TabsTrigger value="skills">skills/</TabsTrigger>
                </TabsList>

                <div className="mt-4">
                    {isTypingCat && (
                        <TypeWriter
                            text={`cat ${selectedCategory}`}
                            onComplete={handleCatComplete}
                            key={selectedCategory}
                        />
                    )}

                    {showContent && (
                        <>
                            <TabsContent value="certifications" className="grid gap-4 md:grid-cols-2">
                                {certifications.map((cert: CertificationProps, index: number) => (
                                    <div key={index} className="bg-[#2a2a2a] border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/40 transition-colors">
                                        <h3 className="text-lg font-bold text-orange-500">{cert.name}</h3>
                                        <p className="text-orange-400 mt-2">{cert.issuer} - {cert.date}</p>
                                        <p className="text-orange-400/80 mt-2">{cert.description}</p>
                                    </div>
                                ))}
                            </TabsContent>

                            <TabsContent value="projects" className="grid gap-4 md:grid-cols-2">
                                {projects.map((project: ProjectsProps, index: number) => (
                                    <div key={index} className="bg-[#2a2a2a] border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/40 transition-colors">
                                        <h3 className="text-lg font-bold text-orange-500">{project.name}</h3>
                                        <p className="text-orange-400 mt-2">{project.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.tech.map((tech: string, i: number) => (
                                                <span key={i} className="text-sm bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full">
                                                        {tech}
                                                    </span>
                                            ))}
                                        </div>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-orange-400 hover:text-orange-500 mt-4 inline-flex items-center gap-2 transition-colors"
                                        >
                                            View on GitHub →
                                        </a>
                                    </div>
                                ))}
                            </TabsContent>

                            <TabsContent value="skills" className="grid gap-4 md:grid-cols-2">
                                {skills.map((skill: SkillsProps, index: number) => (
                                    <div key={index} className="bg-[#2a2a2a] border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/40 transition-colors">
                                        <h3 className="text-lg font-bold text-orange-500 mb-4">{skill.category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item: string, i: number) => (
                                                <span key={i} className="text-sm bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full">
                                                        {item}
                                                    </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>
                        </>
                    )}
                </div>
            </Tabs>
        </div>
    </>
}

export default Categories