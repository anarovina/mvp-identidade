
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-10 lg:px-24 py-3 md:py-4 bg-brand-black/80 backdrop-blur-md border-b border-brand-gray"
        >
            <div className="flex items-center">
                <a href="https://www.arovinastudio.com.br/" target="_blank" rel="noopener noreferrer">
                    <img src="/logo_magenta.png" alt="Arovina Studio" className="h-[35px] md:h-[50px] w-auto object-contain" />
                </a>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-6">
                    <button
                        onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-[#616668] hover:text-brand-silver transition-colors text-sm font-bold"
                    >
                        Sobre
                    </button>
                    <button
                        onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-[#616668] hover:text-brand-silver transition-colors text-sm font-bold"
                    >
                        Serviços
                    </button>
                </div>
                <button
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium text-brand-black bg-brand-silver rounded-full hover:bg-[#616668] hover:text-white active:bg-[#616668] transition-colors"
                >
                    <span className="hidden sm:inline">Agendar Consulta</span>
                    <span className="sm:hidden">Consulta</span>
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
