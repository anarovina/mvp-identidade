
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "O Arovina Studio captou a essência do nosso SaaS antes mesmo de termos a primeira linha de código pronta. O visual ajudou a fechar nossa rodada Seed.",
        author: "Founder",
        role: "Fintech Confidential"
    },
    {
        quote: "Profissionalismo impecável. A identidade não é apenas bonita, é funcional e escalável para o nosso roadmap.",
        author: "CPO",
        role: "HealthTech Startup"
    }
];

const SocialProof: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-brand-dark">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 bg-brand-black border border-brand-gray/20 rounded-2xl relative"
                        >
                            <Quote className="w-10 h-10 text-brand-silver absolute top-6 left-6" />
                            <p className="text-lg text-brand-silver mb-6 relative z-10 pt-8 italic">
                                "{item.quote}"
                            </p>
                            <div>
                                <p className="font-bold text-brand-silver">{item.author}</p>
                                <p className="text-brand-muted text-sm">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
