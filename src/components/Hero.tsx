import { useState, useEffect, useRef } from "react";
import { FaCode, FaBolt, FaCommentDots } from "react-icons/fa";
import HeroButton from "../children/HeroButton";

interface HeroProps {
	scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
	// ...
	return (
		<section id="hero" /* resto igual */>
			{/* ... */}
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
			{/* ... */}
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
			{/* ... */}
		</section>
	);
};

export default Hero;
