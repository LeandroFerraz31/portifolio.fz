import { FaBars, FaTimes } from "react-icons/fa";
import LF from "../children/LF";
import NavButton from "../children/NavButton";
import MobileMenu from "../children/MobileMenu";

interface HeaderProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (value: boolean) => void;
	activeSection: string;
	scrollToSection: (sectionId: string) => void;
}

const navItems = [
	{ id: "hero", label: "Início" },
	{ id: "about", label: "Sobre" },
	{ id: "projects", label: "Projetos" },
	{ id: "contact", label: "Contato" },
];

const Header = ({
	isMenuOpen,
	setIsMenuOpen,
	activeSection,
	scrollToSection,
}: HeaderProps) => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800/50">
			<div className="max-w-7xl mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
						<LF />
					</div>

					{/* Menu Desktop */}
					<nav className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<NavButton
								key={item.id}
								label={item.label}
								isActive={activeSection === item.id}
								onClick={() => scrollToSection(item.id)}
							/>
						))}
					</nav>

					{/* Botão Menu Mobile */}
					<button
						type="button"
						className="md:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700/50"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
					</button>
				</div>

				<MobileMenu
					isMenuOpen={isMenuOpen}
					activeSection={activeSection}
					scrollToSection={scrollToSection}
				/>
			</div>
		</header>
	);
};

export default Header;
