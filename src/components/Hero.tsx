
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 overflow-hidden text-center bg-black">
            <div className="absolute inset-0 z-0">
                <img
                    src="/background.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 max-w-4xl mx-auto space-y-8"
            >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
                    Não lance apenas um código. <br />
                    <span className="text-white">
                        Lance uma marca.
                    </span>
                </h1>

                <p className="max-w-xl mx-auto text-base md:text-lg lg:text-xl text-gray-300 font-light px-4">
                    Identidade de Marca estratégica desenvolvida paralelamente ao seu MVP. Para produtos digitais que precisam nascer com alma, clareza e autoridade.
                </p>

                <div className="flex flex-col items-center gap-4 pt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-brand-black bg-brand-silver rounded-full hover:bg-[#616668] hover:text-white active:bg-[#616668] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        Agendar Sessão de Consulta
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                    </motion.button>

                    <p className="text-sm text-white uppercase tracking-widest">
                        Ideal para Founders e Startups.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
