
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
    return (
        <section className="py-32 px-6 bg-brand-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-silver/10 via-transparent to-transparent opacity-50" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto relative z-10 text-center p-12 border border-brand-gray/30 rounded-3xl bg-brand-dark/50 backdrop-blur-sm"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-brand-silver mb-6">
                    Pacote: Digital Product Identity
                </h2>
                <p className="text-xl text-brand-muted mb-12">
                    Tudo o que seu MVP precisa para ser levado a sério.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center gap-2 px-8 py-4 text-lg font-semibold text-brand-black bg-brand-silver rounded-full hover:bg-[#616668] hover:text-white active:bg-[#616668] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        Quero Agendar Minha Consulta
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </motion.button>

                    <p className="text-brand-muted italic">
                        Não deixe seu produto ser apenas mais um na multidão. Dê a ele a identidade que ele merece.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
