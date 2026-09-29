import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { X, Calendar, Clock, Video, CheckCircle2, MessageCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<string>('Mañana');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [topic, setTopic] = useState<string>('Diagnóstico de Crecimiento');
  const [isBooked, setIsBooked] = useState<boolean>(false);

  if (!isOpen) return null;

  const timeSlots = ['09:30 AM', '11:00 AM', '03:00 PM', '04:30 PM', '06:00 PM'];
  const dates = ['Mañana', 'En 2 días', 'En 3 días'];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setIsBooked(true);
  };

  const handleOpenWhatsAppConfirm = () => {
    const text = `Hola Power Digital, quiero confirmar una videollamada de diagnóstico:\nNombre: ${name}\nContacto: ${contact}\nDía: ${selectedDate}\nHora: ${selectedTime}\nTema: ${topic}`;
    window.open(`https://wa.me/${BRAND.whatsappCleanNumber}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
    setIsBooked(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#4361EE]/10 flex items-center justify-center text-[#4361EE]">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Agendar una videollamada
              </h3>
              <p className="text-xs text-slate-500">
                Sesión de diagnóstico estratégica (25 min)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isBooked ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                ¡Solicitud de videollamada registrada!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Hemos reservado tu espacio tentativo para el día <span className="font-semibold">{selectedDate}</span> a las <span className="font-semibold">{selectedTime}</span>.
              </p>

              <div className="pt-4 space-y-2">
                <button
                  type="button"
                  onClick={handleOpenWhatsAppConfirm}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-xl transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirmar horario por WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsBooked(false);
                    onClose();
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 transition-colors pt-2 block w-full text-center"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              {/* Date selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#4361EE]" />
                  <span>Día de preferencia</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                        selectedDate === d
                          ? 'border-[#4361EE] bg-[#4361EE]/5 text-[#4361EE]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#4361EE]" />
                  <span>Horario sugerido</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`py-1.5 px-2 text-xs font-medium rounded-lg border text-center transition-all ${
                        selectedTime === t
                          ? 'border-[#4361EE] bg-[#4361EE]/10 text-[#4361EE] font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  Tu nombre completo
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Andrés Ramírez"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="modal-contact" className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp o Correo
                </label>
                <input
                  id="modal-contact"
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+51 ... o tu@correo.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="modal-topic" className="block text-xs font-semibold text-slate-700 mb-1">
                  Motivo principal
                </label>
                <select
                  id="modal-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361EE] focus:bg-white"
                >
                  <option value="Diagnóstico de Crecimiento">Diagnóstico de Crecimiento General</option>
                  <option value="Cotización Landing Web">Cotización Landing Web</option>
                  <option value="Videos con IA">Videos con Inteligencia Artificial</option>
                  <option value="Estrategia en Redes Sociales">Estrategia en Redes Sociales</option>
                  <option value="Acompañamiento Growth Partner">Acompañamiento Growth Partner</option>
                </select>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#4361EE] hover:bg-[#3451d1] rounded-xl shadow-xs transition-all active:scale-[0.99]"
                >
                  <Video className="w-4 h-4" />
                  <span>Reservar llamada de diagnóstico</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
