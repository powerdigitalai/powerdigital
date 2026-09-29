import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { User, Briefcase, Target, ArrowRight, MessageCircle, CheckCircle2, RotateCcw } from 'lucide-react';

interface DiagnosticToolProps {
  onApplyDiagnostic: (summary: string) => void;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({ onApplyDiagnostic }) => {
  const [profile, setProfile] = useState<'personal' | 'business'>('personal');
  const [goal, setGoal] = useState<'sales' | 'authority' | 'content' | 'launch'>('sales');

  const getRecommendation = () => {
    if (profile === 'personal') {
      switch (goal) {
        case 'sales':
          return {
            title: 'Plan Escala Marca Personal (Conversión Directa)',
            summary: 'Landing web para venta de consultoría o servicios + Videos con IA orientados a objeciones + Embudo WhatsApp.',
            services: ['Landings Web de Alta Conversión', 'Videos con Inteligencia Artificial', 'Acompañamiento Growth'],
            whatsappText: 'Hola Power Digital, realicé el diagnóstico en su web para MARCA PERSONAL con objetivo de AUMENTAR VENTAS. Quisiera coordinar una propuesta.',
          };
        case 'authority':
          return {
            title: 'Plan Referente Digital (Posicionamiento Orgánico)',
            summary: 'Estrategia en Instagram/TikTok con ganchos de PNL + Producción de videos dinámicos con IA para ganar credibilidad.',
            services: ['Estrategia en Redes Sociales', 'Videos con Inteligencia Artificial'],
            whatsappText: 'Hola Power Digital, mi diagnóstico dio MARCA PERSONAL con objetivo de AUTORIDAD EN REDES. Quisiera cotizar.',
          };
        case 'content':
          return {
            title: 'Plan Flujo Audiovisual IA (Volumen y Retención)',
            summary: 'Producción ágil de reels y tiktoks con IA para mantener frecuencia constante sin desgastarte grabando horas.',
            services: ['Videos con Inteligencia Artificial', 'Estrategia en Redes Sociales'],
            whatsappText: 'Hola Power Digital, me interesa el plan de PRODUCCIÓN DE VIDEOS CON IA para Marca Personal.',
          };
        case 'launch':
          return {
            title: 'Plan Lanzamiento Estratégico',
            summary: 'Landing de captación para tu masterclass o curso + campaña de videos con IA + guiones de neuromarketing.',
            services: ['Landings Web de Alta Conversión', 'Videos con IA', 'Acompañamiento Growth'],
            whatsappText: 'Hola Power Digital, quiero lanzar un producto/oferta de Marca Personal con su metodología de Growth.',
          };
      }
    } else {
      switch (goal) {
        case 'sales':
          return {
            title: 'Plan Motor de Ventas para Emprendedores',
            summary: 'Landing web de alta conversión conectada a WhatsApp + Videos publicitarios con IA para validar anuncios rápido.',
            services: ['Landings Web de Alta Conversión', 'Videos con Inteligencia Artificial', 'Estrategia en Redes Sociales'],
            whatsappText: 'Hola Power Digital, realicé el diagnóstico para mi NEGOCIO/EMPRENDIMIENTO enfocado en GENERAR VENTAS. Deseo más detalles.',
          };
        case 'authority':
          return {
            title: 'Plan Presencia & Confianza de Marca',
            summary: 'Diseño integral de redes sociales, piezas de neuromarketing y videos dinámicos para transmitir solidez comercial.',
            services: ['Estrategia en Redes Sociales', 'Videos con Inteligencia Artificial'],
            whatsappText: 'Hola Power Digital, busco mejorar la PRESENCIA Y CONFIANZA de mi negocio en redes con ustedes.',
          };
        case 'content':
          return {
            title: 'Plan Creatividades de Alto Rendimiento',
            summary: 'Producción continua de videos comerciales con IA para pauta y redes, reduciendo drásticamente costos de rodaje.',
            services: ['Videos con Inteligencia Artificial', 'Landings Web'],
            whatsappText: 'Hola Power Digital, necesito volumen de VIDEOS PUBLICITARIOS CON IA para mi emprendimiento.',
          };
        case 'launch':
          return {
            title: 'Plan Growth Partner Integral para Negocio',
            summary: 'Acompañamiento continuo, ingeniería de embudo, landing optimizada y automatización para escalar facturación.',
            services: ['Acompañamiento Growth Partner', 'Landings Web', 'Videos con IA', 'Redes Sociales'],
            whatsappText: 'Hola Power Digital, busco un GROWTH PARTNER integral para escalar la facturación de mi emprendimiento.',
          };
      }
    }
  };

  const currentRec = getRecommendation();

  return (
    <section id="diagnostico" className="py-20 md:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4361EE] mb-2">
            Herramienta Interactiva
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Diagnóstico de Crecimiento en 30 Segundos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Selecciona tu perfil y tu meta principal para descubrir la combinación estratégica de servicios que mejor se adapta a tu etapa.
          </p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls: Step 1 and Step 2 */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Step 1: Profile */}
            <div>
              <div className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-3">
                Paso 1: ¿Cuál es tu perfil?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setProfile('personal')}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                    profile === 'personal'
                      ? 'border-[#4361EE] bg-[#4361EE]/5 ring-1 ring-[#4361EE]/30'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <User className={`w-5 h-5 mt-0.5 ${profile === 'personal' ? 'text-[#4361EE]' : 'text-slate-500'}`} />
                  <div>
                    <div className="text-sm font-bold text-slate-900">Marca Personal</div>
                    <div className="text-xs text-slate-500 mt-0.5">Consultor, creador, coach o profesional</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setProfile('business')}
                  className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                    profile === 'business'
                      ? 'border-[#4361EE] bg-[#4361EE]/5 ring-1 ring-[#4361EE]/30'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <Briefcase className={`w-5 h-5 mt-0.5 ${profile === 'business' ? 'text-[#4361EE]' : 'text-slate-500'}`} />
                  <div>
                    <div className="text-sm font-bold text-slate-900">Emprendedor / Negocio</div>
                    <div className="text-xs text-slate-500 mt-0.5">Empresa, producto, ecommerce o servicios</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Goal */}
            <div>
              <div className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-3">
                Paso 2: ¿Cuál es tu objetivo prioritario?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGoal('sales')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    goal === 'sales'
                      ? 'border-[#4361EE] bg-[#4361EE]/5 font-semibold text-[#4361EE]'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Aumentar ventas directas</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Captar clientes listos para comprar</div>
                </button>

                <button
                  type="button"
                  onClick={() => setGoal('authority')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    goal === 'authority'
                      ? 'border-[#4361EE] bg-[#4361EE]/5 font-semibold text-[#4361EE]'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Ganar autoridad y alcance</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Posicionarte en Instagram y TikTok</div>
                </button>

                <button
                  type="button"
                  onClick={() => setGoal('content')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    goal === 'content'
                      ? 'border-[#4361EE] bg-[#4361EE]/5 font-semibold text-[#4361EE]'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Crear videos con IA</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Volumen dinámico a menor costo</div>
                </button>

                <button
                  type="button"
                  onClick={() => setGoal('launch')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    goal === 'launch'
                      ? 'border-[#4361EE] bg-[#4361EE]/5 font-semibold text-[#4361EE]'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Lanzamiento / Escalamiento</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Estrategia integral Growth Partner</div>
                </button>
              </div>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#DEB660]" />
              <span>Puedes cambiar las opciones en cualquier momento para ver otras recomendaciones.</span>
            </div>

          </div>

          {/* Right Column: Dynamic Recommendation Card */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-mono font-bold text-[#4361EE] uppercase tracking-wider">
                  Recomendación Estratégica
                </span>
                <span className="text-xs text-slate-400">
                  {profile === 'personal' ? 'Marca Personal' : 'Emprendimiento'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-4">
                {currentRec.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {currentRec.summary}
              </p>

              {/* Recommended Services Stack */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Servicios sugeridos en este plan:
                </div>
                <div className="space-y-2">
                  {currentRec.services.map((svc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#4361EE] shrink-0" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions for this customized diagnostic */}
            <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
              <a
                href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent(currentRec.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-xl shadow-xs transition-all active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar mi diagnóstico por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  onApplyDiagnostic(`${currentRec.title}: ${currentRec.summary}`);
                  const el = document.getElementById('contacto');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5"
              >
                O usar esta recomendación en el formulario de contacto &darr;
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
