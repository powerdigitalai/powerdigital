import React, { useState } from 'react';
import { SERVICES, BRAND, ServiceItem } from '../data/content';
import { Globe, Sparkles, Share2, TrendingUp, Check, ArrowUpRight, MessageCircle } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedId, setSelectedId] = useState<string>('landings-web');

  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Share2':
        return <Share2 className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4361EE] mb-2">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Soluciones estructuradas para generar impacto, visibilidad y ventas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Diseñamos cada servicio con mentalidad de Growth Partner: sin piezas aisladas ni esfuerzo desperdiciado. 
            Todo responde a un objetivo de posicionamiento y conversión medible.
          </p>
        </div>

        {/* 4 Core Services Cards Grid - Inspired by Superside card architecture with Clay minimalism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const isSelected = selectedId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`group relative bg-white rounded-2xl p-7 lg:p-9 border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#4361EE] shadow-md ring-1 ring-[#4361EE]/20'
                    : 'border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Card Header: Editorial Number and Clean Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                    <span className="text-sm font-bold font-mono tracking-wider text-slate-400">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#4361EE] group-hover:scale-105 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#4361EE]">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Qué incluye:
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-[#4361EE] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For Note */}
                  <div className="mt-6 pt-4 border-t border-slate-100/80 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Ideal para: </span>
                    <span>{service.idealFor}</span>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                      const el = document.getElementById('contacto');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2 text-left"
                  >
                    Solicitar información detallada &rarr;
                  </button>

                  <a
                    href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-lg transition-all active:scale-95 whitespace-nowrap shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Cotizar por WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global CTA Banner beneath services */}
        <div className="mt-12 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              ¿No estás seguro de cuál servicio necesitas primero?
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Utiliza nuestro diagnóstico rápido o escríbenos directamente para asesorarte sin compromiso.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="#diagnostico"
              className="w-full sm:w-auto text-center px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Hacer diagnóstico (30 seg)
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent('Hola Power Digital, me gustaría recibir una recomendación de servicios para mi caso.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Consultar caso en WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
