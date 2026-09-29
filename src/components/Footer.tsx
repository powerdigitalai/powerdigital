import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { MessageCircle, Mail, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              {!imageError ? (
                <img
                  src={BRAND.logoUrl}
                  alt="Power Digital"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <span className="text-xl font-black text-slate-900">
                  POWER<span className="text-[#4361EE]">DIGITAL</span>
                </span>
              )}
            </a>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Empresa Growth Partner para marcas personales y emprendedores. Escalamos tu visibilidad y ventas integrando ingeniería de sistemas, PNL, neuromarketing e inteligencia artificial.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#4361EE]/10 hover:text-[#4361EE] flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Instagram Power Digital"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-600 transition-colors"
                aria-label="TikTok Power Digital"
              >
                <span className="font-bold text-xs">&#9835;</span>
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsappCleanNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Power Digital"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Servicios */}
          <div>
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 mb-4">
              Servicios
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#servicios" className="hover:text-slate-900 transition-colors">
                  Landings Web de Conversión
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-slate-900 transition-colors">
                  Videos con Inteligencia Artificial
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-slate-900 transition-colors">
                  Estrategia en Redes Sociales
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-slate-900 transition-colors">
                  Acompañamiento Growth Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Metodología */}
          <div>
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 mb-4">
              Metodología
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#diferenciales" className="hover:text-slate-900 transition-colors">
                  Ingeniería de Sistemas
                </a>
              </li>
              <li>
                <a href="#diferenciales" className="hover:text-slate-900 transition-colors">
                  Programación Neurolingüística (PNL)
                </a>
              </li>
              <li>
                <a href="#diferenciales" className="hover:text-slate-900 transition-colors">
                  Neuromarketing Aplicado
                </a>
              </li>
              <li>
                <a href="#diferenciales" className="hover:text-slate-900 transition-colors">
                  Inteligencia Artificial Eficiente
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto directo */}
          <div>
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 mb-4">
              Contacto
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="text-slate-400 text-xs">WhatsApp Directo:</div>
                <a
                  href={`https://wa.me/${BRAND.whatsappCleanNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:text-[#4361EE] transition-colors"
                >
                  {BRAND.whatsappNumber}
                </a>
              </div>

              <div>
                <div className="text-slate-400 text-xs">Correo Electrónico:</div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-medium text-slate-900 hover:text-[#4361EE] transition-colors"
                >
                  {BRAND.email}
                </a>
              </div>

              <div>
                <div className="text-slate-400 text-xs">Comunidad Digital:</div>
                <span className="font-medium text-slate-700">{BRAND.social.instagramHandle}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Power Digital. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <a href="#diagnostico" className="hover:text-slate-600 transition-colors">
              Diagnóstico
            </a>
            <a href="#contacto" className="hover:text-slate-600 transition-colors">
              Contacto
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors p-1"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
