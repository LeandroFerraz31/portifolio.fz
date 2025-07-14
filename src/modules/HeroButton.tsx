// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface HeroButtonProps {
	label: string;
	icon: React.ElementType;
	onClick: () => void;
	primary?: boolean;
}

const HeroButton = ({ label, icon: Icon, onClick, primary = false }: HeroButtonProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 ${
				primary
					? "bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden"
					: "border-2 border-gray-600 text-gray-300 hover:text-white hover:border-blue-400 backdrop-blur-sm"
			}`}
		>
			<span className="relative z-10 flex items-center gap-2">
				<Icon size={20} />
				{label}
			</span>
			{primary && (
				<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			)}
		</button>
	);
};

export default HeroButton;
