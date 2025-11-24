
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import ProblemSolution from './components/ProblemSolution';
import ServiceScope from './components/ServiceScope';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Authority from './components/Authority';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-silver font-sans selection:bg-brand-silver selection:text-brand-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TargetAudience />
        <ProblemSolution />
        <ServiceScope />
        <Process />
        <Benefits />
        <Authority />
        <SocialProof />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
