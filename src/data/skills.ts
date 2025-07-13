import {
	Monitor,
	Database,
	Smartphone,
	Terminal,
	Cpu,
	Layers,
} from "lucide-react";

export const skills = [
	{
		name: "Frontend",
		icon: Monitor,
		color: "text-blue-400",
		bg: "bg-blue-500/20",
	},
	{
		name: "Backend",
		icon: Database,
		color: "text-green-400",
		bg: "bg-green-500/20",
	},
	{
		name: "Mobile",
		icon: Smartphone,
		color: "text-purple-400",
		bg: "bg-purple-500/20",
	},
	{
		name: "DevOps",
		icon: Terminal,
		color: "text-orange-400",
		bg: "bg-orange-500/20",
	},
	{ name: "AI/ML", icon: Cpu, color: "text-pink-400", bg: "bg-pink-500/20" },
	{ name: "Cloud", icon: Layers, color: "text-cyan-400", bg: "bg-cyan-500/20" },
];
