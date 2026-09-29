import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { MessageCircle, Mail, Instagram, Send, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactFormProps {
  initialMessage?: string;
}

export const ContactFormSection: React.FC<ContactFormProps> = ({ initialMessage = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(initialMessage);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update message if initialMessage changes (e.g. from diagnostic tool)
  React.useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Por favor ingresa tu nombre.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (!message.trim()) {
      setErrorMessage('Por favor escribe un mensaje breve.');
      return;
    }

    setStatus('submitting');

    // Simulate immediate smooth submission
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hola Power Digital, soy ${name || 'un cliente interesado'}.\nCorreo: ${email || 'No especificado'}\nMensaje: ${message || 'Deseo más información sobre sus servicios.'}`;
    window.open(`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4361EE] mb-2">
            Hablemos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Inicia la conversación con tu nuevo Growth Partner
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Cuéntanos sobre tu marca personal o negocio. Evaluaremos tus canales y te mostraremos cómo podemos ayudarte a escalar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Action Card: WhatsApp Direct */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-[#4361EE]/10 via-[#4361EE]/5 to-transparent border border-[#4361EE]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4361EE] flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#4361EE] uppercase tracking-wider">
                    Respuesta Más Rápida
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    WhatsApp Directo
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Escríbenos directamente a nuestro número oficial para coordinar de forma ágil y personalizada.
              </p>
              <div className="mt-4">
                <a
                  href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent('Hola Power Digital, quiero consultar sobre sus servicios de Growth Partner.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#4361EE] hover:text-[#3451d1] transition-colors"
                >
                  <span>{BRAND.whatsappNumber}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-200/80 flex items-center justify-center text-slate-700">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Correo Electrónico</div>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-[#4361EE] transition-colors"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Redes Sociales Oficiales
              </div>
              <div className="space-y-3">
                <a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <div>
                      <div className="text-xs text-slate-500">Instagram</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{BRAND.social.instagramHandle}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={BRAND.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 flex items-center justify-center text-slate-900 font-bold text-xs">
                      &#9835;
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">TikTok</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{BRAND.social.tiktokHandle}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
            
            {status === 'success' ? (
              <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  ¡Mensaje recibido con éxito!
                </h3>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                  Gracias <span className="font-semibold text-slate-900">{name}</span>. Nos pondremos en contacto contigo a la brevedad en <span className="font-semibold text-slate-900">{email}</span>.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200 max-w-sm mx-auto space-y-3">
                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-xl transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continuar también por WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Formulario de Contacto
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Completa estos breves datos para dar inicio a la conversación.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                {/* Field: Nombre */}
                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nombre <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre y apellido"
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Field: Correo */}
                <div>
                  <label htmlFor="form-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Correo electrónico <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Field: Mensaje breve */}
                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Mensaje breve / ¿En qué podemos ayudarte? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntanos sobre tu marca personal o negocio, tus objetivos y los servicios que te interesan..."
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:border-transparent transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Submit button with exact text specified in brief: "Quiero más información" */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] disabled:opacity-70 rounded-xl shadow-xs transition-all active:scale-[0.99]"
                  >
                    {status === 'submitting' ? (
                      <span>Enviando información...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Quiero más información</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center pt-2">
                  Tus datos se tratan con estricta confidencialidad. Sin spam.
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
