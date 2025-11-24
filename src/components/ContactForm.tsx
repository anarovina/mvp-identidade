import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        whatsapp: '',
        observation: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Usamos text/plain e no-cors para evitar preflight OPTIONS que costuma falhar no Apps Script
            await fetch('https://script.google.com/macros/s/AKfycbx4mDP15E6VS8BTAwIUirieUKN-AmDFHJ6hLG3lzoI-dphicagS2yKgKqX7nsQBu1Vjfw/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(formState)
            });

            // Com no-cors, não temos acesso à resposta, então assumimos sucesso se não lançar erro de rede
            setIsSubmitted(true);
            setFormState({
                name: '',
                email: '',
                whatsapp: '',
                observation: ''
            });
        } catch (err) {
            console.error('Erro ao enviar formulário:', err);
            setError('Erro ao enviar. Por favor, tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact-form" className="py-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-4">
                        Vamos construir sua marca?
                    </h2>
                    <p className="text-brand-muted text-lg">
                        Preencha o formulário abaixo para agendar sua consulta.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-brand-dark p-8 rounded-2xl shadow-lg border border-brand-gray/10"
                >
                    {isSubmitted ? (
                        <div className="text-center py-12 space-y-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-silver">Mensagem Enviada!</h3>
                            <p className="text-brand-muted">
                                Obrigado pelo interesse. Entraremos em contato em breve pelo WhatsApp ou Email.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-brand-silver font-medium hover:underline mt-4"
                            >
                                Enviar outra mensagem
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-brand-muted">Nome Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray/20 text-black focus:outline-none focus:border-brand-silver focus:ring-1 focus:ring-brand-silver transition-colors"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="whatsapp" className="text-sm font-medium text-brand-muted">WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="whatsapp"
                                        name="whatsapp"
                                        required
                                        value={formState.whatsapp}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray/20 text-black focus:outline-none focus:border-brand-silver focus:ring-1 focus:ring-brand-silver transition-colors"
                                        placeholder="(11) 99999-9999"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-brand-muted">Email Corporativo</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray/20 text-black focus:outline-none focus:border-brand-silver focus:ring-1 focus:ring-brand-silver transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="observation" className="text-sm font-medium text-brand-muted">Sobre o Projeto</label>
                                <textarea
                                    id="observation"
                                    name="observation"
                                    rows={4}
                                    value={formState.observation}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-brand-gray/20 text-black focus:outline-none focus:border-brand-silver focus:ring-1 focus:ring-brand-silver transition-colors resize-none"
                                    placeholder="Conte um pouco sobre o momento atual da sua startup ou produto..."
                                />
                            </div>

                            {error && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-brand-black bg-brand-silver rounded-lg hover:bg-[#616668] hover:text-white active:bg-[#616668] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? 'Enviando...' : 'Agendar Consulta'}
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
