import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { contacts } from "../data/contacts";

const Footer = () => {
	return (
		<footer className="relative border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-md py-8 z-10 px-6 md:pr-24">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
					<p className="text-gray-400 text-center md:text-left">
						&copy; 2024 Leandro Ferraz. Crafted with ❤️ and ☕
					</p>

					<div className="flex gap-4">
						<a
							href={contacts.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
						>
							<FaLinkedin size={20} />
						</a>
						<a
							href={contacts.instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300 hover:scale-110"
						>
							<FaInstagram size={20} />
						</a>
						<a
							href={contacts.github}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-400/50 transition-all duration-300 hover:scale-110"
						>
							<FaGithub size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
