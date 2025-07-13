import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { contacts } from "./data/contacts";

const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	// Detect scroll
	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 300);

			const sections = ["hero", "about", "projects", "contact"];
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
			{/* Animated Background */}
			<div className="fixed inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
				<div className="absolute inset-0 opacity-30">
					<div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
				</div>
				{/* Floating particles */}
				<div className="absolute inset-0">
					{[...Array(50)].map((_, i) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								animationDelay: `${Math.random() * 2}s`,
								animationDuration: `${2 + Math.random() * 3}s`,
							}}
						/>
					))}
				</div>
			</div>

			<Header
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				activeSection={activeSection}
				scrollToSection={scrollToSection}
			/>
			<Hero scrollToSection={scrollToSection} />
			<About />
			<Projects />
			<Contact />
			<Footer />
			<ScrollToTopButton showScrollTop={showScrollTop} />
			<FloatingWhatsApp whatsapp={contacts.whatsapp} />
		</div>
	);
};

export default App;
