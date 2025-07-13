import { MessageCircle, ExternalLink } from "lucide-react";
import { contacts } from "../data/contacts";

const Contact = () => {
	return (
		<section id="contact" className="relative py-20 z-10">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-6">
					<span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
						Vamos criar algo incrível?
					</span>
				</h2>
				<p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
					Transforme sua ideia em realidade digital. Entre em contato para
					discutir seu próximo projeto.
				</p>

				<div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
					<a
						href={`https://wa.me/${contacts.whatsapp}`}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
					>
						<span className="flex items-center gap-3 justify-center">
							<MessageCircle size={20} />
							WhatsApp
						</span>
					</a>

					<a
						href={`mailto:${contacts.email}`}
						className="group relative px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-gray-300 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 backdrop-blur-sm"
					>
						<span className="flex items-center gap-3 justify-center">
							<ExternalLink size={20} />
							Email
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
