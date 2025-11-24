
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Imersão (Deep Dive)",
        description: "Entendemos o core do seu produto, o problema que ele resolve e quem ele atende."
    },
    {
        number: "02",
        title: "Direção Criativa",
        description: "Apresentação de caminhos visuais (Moodboards & Conceitos). Nada de surpresas, construímos juntos."
    },
    {
        number: "03",
        title: "Desenvolvimento",
        description: "Criação dos assets, refinamento e testes de aplicação em telas reais."
    },
    {
        number: "04",
        title: "Entrega & Handover",
        description: "Guia de marca digital e arquivos prontos para o time de dev implementar."
    }
];

const Process: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-brand-black">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-4">
                        Sprint de Marca. Ágil e Profundo.
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-black transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`flex flex-col ${index % 2 === 0 && 'md:items-end md:text-right'}`}>
                                        <span className="text-6xl font-bold text-[#616668] mb-4 block">{step.number}</span>
                                        <h3 className="text-2xl font-bold text-brand-silver mb-2">{step.title}</h3>
                                        <p className="text-brand-muted max-w-md">{step.description}</p>
                                    </div>
                                </div>

                                <div className="relative z-10 w-4 h-4 bg-brand-silver rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] hidden md:block" />

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
