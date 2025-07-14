import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
	id: number;
	name: string;
	image: string;
	category: string;
	gradient: string;
	description: string;
	tech: string[];
	linkProjeto?: string;
	linkSite?: string;
}

interface ProjectCardProps {
	project: Project;
	index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
	return (
		<div
			className="group relative overflow-hidden rounded-2xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
			style={{ animationDelay: `${index * 0.1}s` }}
		>
			<div className="relative overflow-hidden">
				<img
					src={project.image}
					alt={project.name}
					className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
				/>
				<div
					className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
				/>

				<div className="absolute top-4 left-4">
					<span
						className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}
					>
						{project.category}
					</span>
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
					{project.name}
				</h3>
				<p className="text-gray-400 mb-4 leading-relaxed">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-2 mb-6">
					{project.tech.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 rounded-full bg-gray-700/50 border border-gray-600/50 text-gray-300 text-sm"
						>
							{tech}
						</span>
					))}
				</div>

				<div className="flex gap-4 flex-wrap">
					{project.linkProjeto && (
						<a
							href={project.linkProjeto}
							target="_blank"
							rel="noopener noreferrer"
							className="group/link inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-all duration-300"
						>
							<span>Ver projeto</span>
							<FaExternalLinkAlt
								size={16}
								className="group-hover/link:translate-x-1 transition-transform"
							/>
						</a>
					)}
					{project.linkSite && (
						<a
							href={project.linkSite}
							target="_blank"
							rel="noopener noreferrer"
							className="group/link inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-all duration-300"
						>
							<span>Acessar site</span>
							<FaExternalLinkAlt
								size={16}
								className="group-hover/link:translate-x-1 transition-transform"
							/>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
