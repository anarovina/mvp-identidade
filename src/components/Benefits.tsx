
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
    {
        title: "Autoridade Instantânea",
        description: "Pareça maior e mais estruturado do que você é (ainda)."
    },
    {
        title: "Clareza para o Time",
        description: "Todo mundo sabe exatamente como o produto deve se parecer e falar."
    },
    {
        title: "Facilidade de Venda",
        description: "Investidores compram visões claras. O design tangibiliza sua visão."
    },
    {
        title: "Orgulho do Produto",
        description: "Lance algo que você tem prazer em mostrar para o mundo."
    }
];

const Benefits: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-brand-dark">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-4">
                        O ROI da Estética.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 bg-brand-black rounded-xl border border-brand-gray/20"
                        >
                            <div className="w-8 h-8 bg-brand-silver rounded-full flex items-center justify-center shrink-0">
                                <Check className="w-5 h-5 text-brand-black" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-silver mb-2">{benefit.title}</h3>
                                <p className="text-brand-muted">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
