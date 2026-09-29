import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Differentiators } from './components/Differentiators';
import { DiagnosticTool } from './components/DiagnosticTool';
import { ContactFormSection } from './components/ContactFormSection';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formInitialMessage, setFormInitialMessage] = useState('');

  const handleSelectService = (serviceName: string) => {
    setFormInitialMessage(`Hola, me interesa solicitar una propuesta detallada para el servicio: ${serviceName}.`);
  };

  const handleApplyDiagnostic = (summary: string) => {
    setFormInitialMessage(`Hola Power Digital, completé el diagnóstico con este resultado recomendado: ${summary}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-900 selection:bg-[#4361EE]/15 selection:text-[#4361EE]">
      {/* Top Bar following Top Bar Contract */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Core Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Methodology & Differentiators (Why choose us?) */}
        <Differentiators />

        {/* Interactive Growth Diagnostic (Marcas personales & Emprendedores) */}
        <DiagnosticTool onApplyDiagnostic={handleApplyDiagnostic} />

        {/* Contact Form Section */}
        <ContactFormSection initialMessage={formInitialMessage} />

        {/* FAQ Section */}
        <Faq />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />

      {/* Booking Videocall Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
