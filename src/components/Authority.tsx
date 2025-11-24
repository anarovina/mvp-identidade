
import { motion } from 'framer-motion';

const Authority: React.FC = () => {
    return (
        <section id="sobre" className="py-24 px-6 bg-brand-black">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/3 aspect-[3/4] bg-brand-gray rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {/* Placeholder for Ana Rovina's photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent z-10" />
                    <img
                        src="/AnaRovina.jpeg"
                        alt="Ana Rovina"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-2">Ana Rovina</h2>
                    <p className="text-brand-accent font-medium mb-6">Founder & Creative Director no Arovina Studio</p>

                    <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
                        <p>
                            Especialista em traduzir códigos complexos em identidades visuais desejáveis.
                            Com background em Design Estratégico e Branding para Tech, Ana une a precisão
                            técnica necessária para produtos digitais com a sensibilidade artística que cria marcas memoráveis.
                        </p>
                        <blockquote className="text-2xl font-light text-brand-muted italic border-l-4 border-brand-silver pl-6 my-8">
                            "Design não é apenas como se vê, é como funciona e como se sente."
                        </blockquote>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Authority;
