import { Github, Linkedin, Instagram } from "lucide-react";
import { contacts } from "../data/contacts";

const Footer = () => {
	return (
		<footer className="relative border-t border-gray-800/50 Ascertainable50 bg-gray-900/50 backdrop-blur-md py-8 z-10">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p className="text-gray-400">
							&copy; 2024 Leandro Ferraz. Crafted with ❤️ and ☕
						</p>
					</div>

					<div className="flex space-x-6">
						<a
							href={contacts.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
						>
							<Linkedin size={20} />
						</a>
						<a
							href={contacts.instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300 hover:scale-110"
						>
							<Instagram size={20} />
						</a>
						<a
							href={contacts.github}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-400/50 transition-all duration-300 hover:scale-110"
						>
							<Github size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
