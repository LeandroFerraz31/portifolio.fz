import { ChevronUp } from "lucide-react";

interface ScrollToTopButtonProps {
	showScrollTop: boolean;
}

const ScrollToTopButton = ({ showScrollTop }: ScrollToTopButtonProps) => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		showScrollTop && (
			// biome-ignore lint/a11y/useButtonType: <explanation>
<button
				onClick={scrollToTop}
				className="fixed bottom-28 right-6 z-50 group w-14 h-14 bg-gray-800/80 backdrop-blur-md border border-gray-700/50 text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-700/80 hover:text-white hover:border-gray-600/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
			>
				<ChevronUp
					size={20}
					className="group-hover:-translate-y-1 transition-transform"
				/>
			</button>
		)
	);
};

export default ScrollToTopButton;
