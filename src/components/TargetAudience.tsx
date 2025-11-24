
import { motion } from 'framer-motion';
import { Target, Rocket, Users, PenTool } from 'lucide-react';

const targets = [
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Founders & Visionários",
        description: "Que entendem que percepção de valor é tão importante quanto a funcionalidade."
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: "Startups em Early Stage",
        description: "Que precisam validar o MVP com uma aparência profissional para atrair investidores."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Equipes de Produto",
        description: "Que querem evitar o retrabalho de 'arrumar a casa' depois do lançamento."
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: "Criadores Digitais",
        description: "Que buscam diferenciação em um mercado saturado de templates genéricos."
    }
];

const TargetAudience: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-brand-dark">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-4">
                        Para quem está construindo o futuro agora.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {targets.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 border border-brand-gray/30 rounded-2xl hover:border-brand-silver/50 transition-colors bg-brand-black/50"
                        >
                            <div className="mb-4 text-brand-silver">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-brand-silver mb-2">{item.title}</h3>
                            <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
