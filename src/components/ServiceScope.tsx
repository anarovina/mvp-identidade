
import { motion } from 'framer-motion';
import { Layers, Palette, Layout, Image, Presentation } from 'lucide-react';

const services = [
    {
        icon: <Layers className="w-6 h-6" />,
        title: "DNA & Estratégia",
        items: ["Arquétipo de Marca", "Tom de Voz", "Posicionamento"]
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Identidade Visual",
        items: ["Logo Responsivo", "Paleta Digital (RGB/HEX)", "Tipografia de Interface"]
    },
    {
        icon: <Layout className="w-6 h-6" />,
        title: "UI Kit Essencial",
        items: ["Componentes Base", "Botões & Inputs", "Cards & Containers"]
    },
    {
        icon: <Image className="w-6 h-6" />,
        title: "Key Visuals",
        items: ["Elementos Gráficos", "Padrões & Texturas", "Assets para Site"]
    },
    {
        icon: <Presentation className="w-6 h-6" />,
        title: "Pitch Deck Assets",
        items: ["Slides Mestres", "Gráficos de Dados", "Template de Apresentação"]
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Entrega Final",
        items: ["Manual da Identidade da Marca", "Arquivos Prontos para Dev", "Guia de Uso"]
    }
];

const ServiceScope: React.FC = () => {
    return (
        <section id="servicos" className="py-24 px-6 bg-brand-dark">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-4">
                        O Ecossistema Visual do seu Produto.
                    </h2>
                    <p className="text-brand-muted text-lg">
                        Não entregamos apenas um logo. Entregamos a linguagem visual que o seu produto falará.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-brand-black border border-brand-gray/20 rounded-2xl hover:border-brand-silver/30 transition-all group"
                        >
                            <div className="w-12 h-12 bg-brand-gray/20 rounded-lg flex items-center justify-center text-brand-silver mb-6 group-hover:bg-brand-silver group-hover:text-brand-black transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-silver mb-4">{service.title}</h3>
                            <ul className="space-y-2">
                                {service.items.map((item, i) => (
                                    <li key={i} className="text-brand-muted text-sm flex items-center gap-2">
                                        <span className="w-1 h-1 bg-brand-silver rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceScope;
