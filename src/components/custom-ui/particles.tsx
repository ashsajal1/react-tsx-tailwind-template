import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
    Code2, 
    BarChart3, 
    Database, 
    Cloud, 
    Shield, 
    Zap,
    LineChart,
    Server
} from "lucide-react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    icon: JSX.Element;
    rotation: number;
}

export default function Particles() {
    const [particles, setParticles] = useState<Particle[]>([]);

    const icons = [
        <Code2 className="w-6 h-6" />,
        <BarChart3 className="w-6 h-6" />,
        <Database className="w-6 h-6" />,
        <Cloud className="w-6 h-6" />,
        <Shield className="w-6 h-6" />,
        <Zap className="w-6 h-6" />,
        <LineChart className="w-6 h-6" />,
        <Server className="w-6 h-6" />
    ];

    useEffect(() => {
        // Generate particles with SaaS-related icons
        const newParticles = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 12 + 8,
            duration: Math.random() * 20 + 15,
            delay: Math.random() * 5,
            icon: icons[Math.floor(Math.random() * icons.length)],
            rotation: Math.random() * 360
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute flex items-center justify-center"
                    style={{
                        width: particle.size * 2,
                        height: particle.size * 2,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.2, 0.4, 0.2],
                        rotate: [particle.rotation, particle.rotation + 360],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="text-primary/30">
                        {particle.icon}
                    </div>
                </motion.div>
            ))}
        </div>
    );
} 