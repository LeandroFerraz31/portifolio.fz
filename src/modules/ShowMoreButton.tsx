import React from "react";
import { FaLayerGroup } from "react-icons/fa";

interface ShowMoreButtonProps {
	onClick: () => void;
}

const ShowMoreButton = ({ onClick }: ShowMoreButtonProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full font-semibold text-white border border-gray-600 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
		>
			<span className="flex items-center gap-2">
				<FaLayerGroup size={20} />
				Ver todos os projetos
			</span>
		</button>
	);
};

export default ShowMoreButton;
