
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-6 bg-brand-black border-t border-brand-gray/20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <a href="https://www.arovinastudio.com.br/" target="_blank" rel="noopener noreferrer">
                        <img src="/logo_magenta.png" alt="Arovina Studio" className="h-[30px] w-auto object-contain mb-2" />
                    </a>
                    <p className="text-brand-muted text-sm">© 2024. Design for the Future.</p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://www.instagram.com/ana_rovina_studio/" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-silver transition-colors">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/anarovina/" target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-silver transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:contato@arovinastudio.com.br" className="text-brand-muted hover:text-brand-silver transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
