import { useState, useEffect, useRef } from "react";
import { FaCode, FaBolt, FaCommentDots } from "react-icons/fa";
import HeroButton from "../modules/HeroButton";

interface HeroProps {
	scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const heroRef = useRef(null);

	// Efeito de mouse parallax
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<section
			id="hero"
			ref={heroRef}
			className="relative min-h-screen flex items-center justify-center pt-20 pb-16 z-10"
		>
			<div className="max-w-7xl mx-auto px-6 text-center">
				<div className="relative">
					<div className="mb-8">
						<span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
							🚀 Desenvolvedor Fullstack
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						<span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
							Leandro
						</span>{" "}
						<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
							Ferraz
						</span>
					</h1>

					<div className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
						<div className="flex items-center justify-center gap-2 mb-4">
							<FaCode size={24} className="text-blue-400" />
							<span>Transformando</span>
							<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
								ideias
							</span>
							<span>em</span>
							<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
								realidade digital
							</span>
						</div>
						<p className="text-lg opacity-80">
							Soluções web modernas • APIs escaláveis • Experiências incríveis
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<HeroButton
							label="Ver Projetos"
							icon={FaBolt}
							onClick={() => scrollToSection("projects")}
							primary
						/>
						<HeroButton
							label="Vamos Conversar"
							icon={FaCommentDots}
							onClick={() => scrollToSection("contact")}
						/>
					</div>

					<div className="flex flex-wrap justify-center gap-6 opacity-60">
						{[
							"React",
							"Node.js",
							"TypeScript",
							"Python",
							"PostgreSQL",
							"AWS",
						].map((tech) => (
							<div
								key={tech}
								className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/30 border border-gray-700/30"
							>
								<div className="w-2 h-2 bg-blue-400 rounded-full" />
								<span className="text-sm text-gray-400">{tech}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
