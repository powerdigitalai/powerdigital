import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { MessageCircle, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-[#F8F9FA]/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single element brand mark (Cloudinary transparent horizontal logo) */}
          <a
            href="#"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4361EE] rounded-lg transition-transform hover:opacity-90"
            aria-label="Power Digital - Inicio"
          >
            {!imageError ? (
              <img
                src={BRAND.logoUrl}
                alt="Power Digital"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="h-10 md:h-12 w-auto object-contain max-w-[210px]"
              />
            ) : (
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                POWER<span className="text-[#4361EE]">DIGITAL</span>
              </span>
            )}
          </a>

          {/* Zone 2: Clean unboxed text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#servicios"
              className="hover:text-slate-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4361EE] hover:after:w-full after:transition-all"
            >
              Servicios
            </a>
            <a
              href="#diferenciales"
              className="hover:text-slate-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4361EE] hover:after:w-full after:transition-all"
            >
              Metodología & Diferenciales
            </a>
            <a
              href="#diagnostico"
              className="hover:text-slate-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4361EE] hover:after:w-full after:transition-all"
            >
              Diagnóstico
            </a>
            <a
              href="#contacto"
              className="hover:text-slate-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4361EE] hover:after:w-full after:transition-all"
            >
              Contacto
            </a>
            <a
              href="#preguntas"
              className="hover:text-slate-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4361EE] hover:after:w-full after:transition-all"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: Primary & secondary conversion actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 hover:text-slate-900 border border-slate-200 rounded-lg transition-all shadow-xs whitespace-nowrap active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#DEB660]" />
              <span>Agendar videollamada</span>
            </button>

            <a
              href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent('Hola Power Digital, deseo información sobre sus servicios de Growth Partner.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-lg transition-all shadow-sm hover:shadow-md whitespace-nowrap active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent('Hola Power Digital, deseo información.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#4361EE] rounded-lg active:scale-95"
              aria-label="Escribir por WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361EE]"
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-5 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#servicios"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#diferenciales"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Metodología & Diferenciales
            </a>
            <a
              href="#diagnostico"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Diagnóstico Rápido
            </a>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Contacto
            </a>
            <a
              href="#preguntas"
              onClick={closeMenu}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Preguntas Frecuentes
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                closeMenu();
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#DEB660]" />
              <span>Agendar una videollamada</span>
            </button>

            <a
              href={`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent('Hola Power Digital, me comunico desde la web para solicitar información.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
