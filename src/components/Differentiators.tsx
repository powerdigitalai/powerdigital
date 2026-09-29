import React, { useState } from 'react';
import { DIFFERENTIATOR_PILLARS, COMPARISON_POINTS, BRAND } from '../data/content';
import { Cpu, Brain, Target, Bot, Check, X, MessageCircle, ArrowRight } from 'lucide-react';

export const Differentiators: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  const activePillar = DIFFERENTIATOR_PILLARS[activePillarIndex];

  return (
    <section id="diferenciales" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4361EE] mb-2">
            Nuestra Metodología
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Por qué elegir Power Digital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Combinamos cuatro disciplinas complementarias para hacer crecer tu marca personal o negocio a menor costo, 
            garantizando el mismo estándar de calidad que las grandes agencias globales.
          </p>
        </div>

        {/* 4 Pillars Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Pillar Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {DIFFERENTIATOR_PILLARS.map((pillar, idx) => {
              const isActive = activePillarIndex === idx;

              return (
                <button
                  key={pillar.number}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all flex items-start gap-4 ${
                    isActive
                      ? 'bg-slate-50 border-[#4361EE] shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#4361EE] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono text-slate-400">{pillar.number}</span>
                      <span className="text-xs text-slate-300">·</span>
                      <span className="text-sm font-bold text-slate-900">{pillar.title}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1 line-clamp-1">{pillar.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Pillar Showcase */}
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-slate-200 rounded-2xl p-7 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#4361EE]">
                    {getPillarIcon(activePillar.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400">Pilar {activePillar.number}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-medium px-3 py-1 bg-white border border-slate-200 rounded-md text-slate-600">
                  Diferencial Clave
                </span>
              </div>

              <div className="mt-6">
                <div className="text-sm font-semibold text-[#4361EE]">
                  {activePillar.subtitle}
                </div>
                <p className="mt-3 text-base text-slate-700 leading-relaxed">
                  {activePillar.description}
                </p>
              </div>

              {/* Concrete Business Impact */}
              <div className="mt-8 p-5 bg-white border border-slate-200 rounded-xl">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Impacto en tu negocio o marca:
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#DEB660]" />
                  <span>{activePillar.impact}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Las 4 disciplinas se implementan de forma coordinada en cada proyecto.
              </span>
              <a
                href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent(`Hola Power Digital, me llamó la atención su enfoque de ${activePillar.title}. Quisiera saber más.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#4361EE] hover:text-[#3451d1] transition-colors"
              >
                <span>Consultar sobre este enfoque</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Direct Transparent Comparison: Traditional Agency vs Power Digital */}
        <div className="bg-[#F8F9FA] border border-slate-200 rounded-2xl p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Comparativa Transparente
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Agencia Tradicional vs Power Digital
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Diseñado para responder a la realidad de marcas personales y emprendedores que necesitan resultados sin estructuras infladas.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400 w-1/4">
                    Criterio
                  </th>
                  <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-500 w-3/8">
                    Agencia Tradicional
                  </th>
                  <th className="pb-4 text-xs font-bold uppercase tracking-wider text-[#4361EE] w-3/8">
                    Power Digital (Growth Partner)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 text-sm">
                {COMPARISON_POINTS.map((pt, index) => (
                  <tr key={index} className="hover:bg-white/50 transition-colors">
                    <td className="py-4 pr-4 font-semibold text-slate-800 text-xs sm:text-sm">
                      {pt.criterion}
                    </td>
                    <td className="py-4 pr-4 text-slate-500 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{pt.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 text-slate-900 font-medium text-xs sm:text-sm bg-[#4361EE]/4 px-3 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#4361EE] shrink-0 mt-0.5" />
                        <span>{pt.powerDigital}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              ¿Quieres evaluar la viabilidad de tu proyecto con este modelo?
            </span>
            <a
              href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent('Hola Power Digital, deseo consultar si su modelo se adapta a las necesidades de mi marca.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-lg transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Conversar sin compromiso</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
