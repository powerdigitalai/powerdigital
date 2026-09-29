import React, { useState } from 'react';
import { FAQ_ITEMS, BRAND } from '../data/content';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="preguntas" className="py-20 md:py-28 bg-[#F8F9FA] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4361EE] mb-2">
            Respuestas Claras
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Todo lo que necesitas saber sobre nuestra metodología, modelo de trabajo y cómo colaboramos.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4361EE]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#4361EE]/10 text-[#4361EE]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet support prompt */}
        <div className="mt-12 text-center bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-sm font-semibold text-slate-900">
            ¿Tienes alguna consulta específica sobre tu negocio?
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Escríbenos directamente y te orientaremos en minutos.
          </p>
          <div className="mt-4">
            <a
              href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent('Hola Power Digital, tengo una duda específica antes de contratar un servicio.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Resolver mi duda por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
