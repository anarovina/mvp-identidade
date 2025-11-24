
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';

const ProblemSolution: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-brand-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gray/10 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-silver mb-6 leading-tight">
                        Ninguém lança um foguete com <span className="text-brand-muted line-through decoration-brand-silver">fita crepe</span> no visual.
                    </h2>
                    <p className="text-lg text-brand-muted mb-6">
                        Você gastou meses refinando o código, a arquitetura e a usabilidade. Por que deixar a identidade visual para depois?
                    </p>
                    <p className="text-lg text-brand-silver font-medium">
                        Lançar um MVP sem marca é validar pela metade. O mercado não perdoa produtos que parecem amadores.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-6"
                >
                    <div className="p-6 bg-brand-dark border border-brand-gray/30 rounded-xl">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-brand-silver shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-brand-silver mb-2">Confiança Imediata</h3>
                                <p className="text-brand-muted">Usuários julgam a credibilidade do seu software em 0.05 segundos.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-brand-dark border border-brand-gray/30 rounded-xl">
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-brand-silver shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-brand-silver mb-2">Validação Real</h3>
                                <p className="text-brand-muted">Teste seu produto com a percepção de valor correta desde o dia 1.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-brand-dark border border-brand-gray/30 rounded-xl">
                        <div className="flex items-start gap-4">
                            <TrendingUp className="w-6 h-6 text-brand-silver shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-brand-silver mb-2">Economia de Recurso</h3>
                                <p className="text-brand-muted">Criar certo agora custa menos do que fazer o rebranding daqui a 6 meses.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSolution;
