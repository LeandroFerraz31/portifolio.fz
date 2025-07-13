import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
	whatsapp: string;
}

const FloatingWhatsApp = ({ whatsapp }: FloatingWhatsAppProps) => {
	return (
		<a
			href={`https://wa.me/${whatsapp}`}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 z-50 group w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25"
		>
			<MessageCircle
				size={20}
				className="group-hover:scale-110 transition-transform"
			/>
		</a>
	);
};

export default FloatingWhatsApp;
