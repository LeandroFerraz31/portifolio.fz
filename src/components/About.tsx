import { skills } from "../data/skills";

const About = () => {
	return (
		<section id="about" className="relative py-20 z-10">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						<span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
							Sobre mim
						</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Desenvolvedor apaixonado por inovação, especializado em criar
						soluções digitais que combinam performance, usabilidade e
						tecnologias de ponta.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{skills.map((skill, index) => (
						<div
							key={skill.name}
							className="group relative p-8 rounded-2xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div
								className={`w-16 h-16 rounded-xl ${skill.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
							>
								<skill.icon size={28} className={skill.color} />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-white">
								{skill.name}
							</h3>
							<p className="text-gray-400 leading-relaxed">
								{skill.name === "Frontend" &&
									"React, Next.js, TypeScript, Tailwind CSS e animações avançadas"}
								{skill.name === "Backend" &&
									"Node.js, Python, APIs RESTful, GraphQL e microserviços"}
								{skill.name === "Mobile" &&
									"React Native, PWA e aplicações responsivas"}
								{skill.name === "DevOps" &&
									"Docker, AWS, CI/CD e automação de deploys"}
								{skill.name === "AI/ML" &&
									"Machine Learning, análise de dados e automação"}
								{skill.name === "Cloud" &&
									"AWS, Google Cloud, serverless e escalabilidade"}
							</p>
						</div>
					))}
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					{[
						{ number: "40+", label: "Projetos GitHub" },
						{ number: "2+", label: "Anos Exp." },
						{ number: "100%", label: "Satisfação" },
						{ number: "24/7", label: "Suporte" },
					].map((stat) => (
						<div
							key={stat.label}
							className="p-6 rounded-xl bg-gray-800/20 border border-gray-700/30"
						>
							<div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
								{stat.number}
							</div>
							<div className="text-gray-400">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
