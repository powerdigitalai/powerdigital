import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { MessageCircle, Calendar, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Cpu, Brain, Layers } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'personal' | 'emprendedor'>('personal');

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#F8F9FA] via-white to-[#F8F9FA]">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#4361EE]/6 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#DEB660]/8 rounded-full pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow - Clean unboxed text with separator */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide uppercase text-[#4361EE] mb-5">
          <span>Power Digital</span>
          <span className="text-slate-300">·</span>
          <span>Growth Partner Estratégico</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-600 font-medium">Marcas Personales & Emprendedores</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] [text-wrap:balance]">
            Escala tu presencia digital con estrategia, contenido audiovisual y{' '}
            <span className="bg-gradient-to-r from-[#4361EE] to-[#2b44bf] bg-clip-text text-transparent">
              tecnología inteligente.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl [text-wrap:balance]">
            Ayudamos a marcas personales y emprendedores a liderar redes sociales mediante 
            <span className="font-semibold text-slate-900"> ingeniería de sistemas</span>,{' '}
            <span className="font-semibold text-slate-900">programación neurolingüística</span>,{' '}
            <span className="font-semibold text-slate-900">neuromarketing</span> e{' '}
            <span className="font-semibold text-slate-900">inteligencia artificial</span>.{' '}
            Misma calidad que las grandes firmas, a un costo significativamente menor.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Primary Action: WhatsApp */}
          <a
            href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent('Hola Power Digital, quiero potenciar mi marca personal o negocio. ¿Podemos conversar?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] group"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Conversar por WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary Action: Videocall Booking */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-xs active:scale-[0.99]"
          >
            <Calendar className="w-5 h-5 text-[#DEB660]" />
            <span>Agendar una videollamada</span>
          </button>
        </div>

        {/* Quiet Trust Bar - Editorial micro-points */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4361EE] shrink-0" />
            <span>Landings web de conversión</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4361EE] shrink-0" />
            <span>Videos con Inteligencia Artificial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4361EE] shrink-0" />
            <span>Estrategia en Instagram & TikTok</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4361EE] shrink-0" />
            <span>Acompañamiento Growth Partner</span>
          </div>
        </div>

        {/* Interactive Growth Ecosystem Visual Card */}
        <div className="mt-14 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Arquitectura de Crecimiento
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Cómo transformamos la atención en clientes
              </h2>
            </div>

            {/* Interactive Switcher: Segmented Control */}
            <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200/60 self-stretch md:self-auto">
              <button
                onClick={() => setActiveTab('personal')}
                className={`flex-1 md:flex-none px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'personal'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Para Marca Personal
              </button>
              <button
                onClick={() => setActiveTab('emprendedor')}
                className={`flex-1 md:flex-none px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'emprendedor'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Para Emprendedores & Negocios
              </button>
            </div>
          </div>

          {/* 4 Interactive Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            
            <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/70 flex flex-col justify-between hover:border-[#4361EE]/40 transition-colors">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#4361EE]/10 flex items-center justify-center text-[#4361EE] mb-4">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-slate-400">Paso 01</div>
                <div className="text-base font-bold text-slate-900 mt-1">Estrategia & PNL</div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeTab === 'personal'
                    ? 'Definimos tu tono de autoridad y mapas mentales de audiencia para posicionarte como referente.'
                    : 'Mapeamos la propuesta de valor y objeciones críticas de tus clientes para estructurar tu narrativa.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/50 text-[11px] font-medium text-[#4361EE]">
                {activeTab === 'personal' ? 'Voz única y diferenciada' : 'Claridad de oferta comercial'}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/70 flex flex-col justify-between hover:border-[#4361EE]/40 transition-colors">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#DEB660]/15 flex items-center justify-center text-[#DEB660] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-slate-400">Paso 02</div>
                <div className="text-base font-bold text-slate-900 mt-1">Videos con IA & Redes</div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeTab === 'personal'
                    ? 'Guiones con ganchos de retención y edición dinámica asistida por IA para reels y TikTok.'
                    : 'Creatividades publicitarias y videos explicativos producidos con rapidez para validar ángulos.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/50 text-[11px] font-medium text-[#DEB660]">
                {activeTab === 'personal' ? 'Alto alcance orgánico' : 'Validación rápida de mensajes'}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/70 flex flex-col justify-between hover:border-[#4361EE]/40 transition-colors">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#4361EE]/10 flex items-center justify-center text-[#4361EE] mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-slate-400">Paso 03</div>
                <div className="text-base font-bold text-slate-900 mt-1">Landing de Neuromarketing</div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeTab === 'personal'
                    ? 'Landing diseñada para agendar sesiones, vender consultorías o capturar suscriptores fieles.'
                    : 'Página de venta enfocada en convertir clics en consultas de WhatsApp y pedidos calificados.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/50 text-[11px] font-medium text-[#4361EE]">
                {activeTab === 'personal' ? 'Conversión de seguidores a clientes' : 'Foco en captación directa'}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/70 flex flex-col justify-between hover:border-[#4361EE]/40 transition-colors">
              <div>
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-slate-400">Paso 04</div>
                <div className="text-base font-bold text-slate-900 mt-1">Growth & Optimización</div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeTab === 'personal'
                    ? 'Medición de métricas con rigor de ingeniería de sistemas para duplicar lo que mejor funciona.'
                    : 'Acompañamiento iterativo continuo para escalar adquisición y maximizar el margen de beneficio.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/50 text-[11px] font-medium text-emerald-600">
                {activeTab === 'personal' ? 'Crecimiento sostenible' : 'Retorno sobre inversión continuo'}
              </div>
            </div>

          </div>

          {/* Quick Consultation Callout inside the Card */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <span>
              ¿Quieres saber cuál es la combinación ideal para tu etapa actual?
            </span>
            <a
              href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent(`Hola Power Digital, me identifico como ${activeTab === 'personal' ? 'Marca Personal' : 'Emprendedor'} y quiero orientación sobre el ecosistema de crecimiento.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#4361EE] hover:text-[#3451d1] transition-colors"
            >
              <span>Consultar por WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
