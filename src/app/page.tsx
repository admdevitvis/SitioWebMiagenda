"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesComponent from "@/components/ui/particles-bg";
import { LiquidDemoButton } from "@/components/ui/button-1";
import {
  Calendar,
  Check,
  X,
  Menu,
  ChevronDown,
  Zap,
  Sparkles
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-transparent">
      {/* 1. NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-jakarta font-bold text-xl tracking-tight">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
              <Calendar size={18} />
              <Sparkles size={10} className="absolute -top-1 -right-1 text-green-400" />
            </div>
            mIAgenda
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#dolor" className="hover:text-white transition-colors">El Problema</a>
            <a href="#oferta" className="hover:text-white transition-colors">Nuestra Oferta</a>
            <a href="#garantia" className="hover:text-white transition-colors">Garantía</a>
            <a href="#filtro" className="hover:text-white transition-colors">Para Quién Es</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95 border border-white/10 flex items-center gap-2">
              <Zap size={16} /> Simulador en Vivo
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0F172A] border-b border-white/10 p-6 flex flex-col gap-4">
            <a href="#dolor" className="text-slate-300 hover:text-white">El Problema</a>
            <a href="#oferta" className="text-slate-300 hover:text-white">Nuestra Oferta</a>
            <a href="#garantia" className="text-slate-300 hover:text-white">Garantía</a>
            <a href="#filtro" className="text-slate-300 hover:text-white">Para Quién Es</a>
            <button className="mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2">
              <Zap size={18} /> Simulador en Vivo
            </button>
          </div>
        )}
      </header>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <ParticlesComponent />
        {/* 2. HERO SECTION */}
        <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[85vh]">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="flex-1 text-center lg:text-left pt-10"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8">
              <span>🤖</span> Resultados Reales, No Promesas
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Deja de quemar plata en Meta Ads los fines de semana.
              Convertimos tus mensajes ignorados en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">pacientes sentados en tu clínica.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Sin pagar costos de instalación absurdos. Nosotros configuramos todo. Tú solo recibes la agenda llena todos los lunes por la mañana.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 w-full">
              <LiquidDemoButton />
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1"><Check size={16} className="text-green-400" /> Cero costo de instalación</span>
              <span className="flex items-center gap-1"><Check size={16} className="text-green-400" /> Garantía de resultados</span>
              <span className="flex items-center gap-1"><Check size={16} className="text-green-400" /> Cobramos por cita efectiva</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-md mx-auto"
          >
            {/* WhatsApp Mockup */}
            <div className="relative bg-[#1E293B] border border-white/10 rounded-[2.5rem] shadow-2xl p-4 w-full aspect-[9/19] flex flex-col overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-16 bg-[#0B141A] flex items-center px-6 gap-3 z-10 border-b border-white/5">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">M</div>
                <div>
                  <div className="font-semibold text-white">MarIA (mIAgenda)</div>
                  <div className="text-xs text-green-400">en línea</div>
                </div>
              </div>

              <div className="flex-1 bg-[#0B141A] mt-12 p-4 flex flex-col gap-4 overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')", backgroundSize: 'cover' }}></div>

                <div className="self-center bg-[#202C33]/80 text-slate-400 px-3 py-1 rounded-lg text-xs mb-2 z-10">
                  Domingo, 14:32 hrs
                </div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="self-end bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm max-w-[85%] z-10">
                  Hola, quiero hacerme un tratamiento capilar. Tienen horas?
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="self-start bg-[#202C33] text-white p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%] z-10">
                  ¡Hola! Soy MarIA de [Tu Clínica]. El valor de la evaluación capilar es $40.000. Tenemos disponibilidad mañana lunes a las 09:30 AM o 15:00 PM. ¿Cuál prefieres?
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }} className="self-end bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm max-w-[85%] z-10">
                  Mañana a las 15:00 me acomoda.
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.5 }} className="self-start bg-[#202C33] text-white p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%] z-10 border border-green-500/30">
                  ✅ ¡Reserva confirmada! <br /><br />Fecha: Lunes 15<br />Hora: 15:00 PM <br />Especialista Capilar.<br /><br />¡Te esperamos, la cita ya está en nuestro sistema!
                </motion.div>
              </div>

              <div className="absolute bottom-0 inset-x-0 h-16 bg-[#202C33] flex items-center px-4 gap-3 z-10">
                <div className="w-8 h-8 rounded-full bg-white/10"></div>
                <div className="flex-1 h-10 rounded-full bg-[#2A3942] border border-white/5 flex items-center px-4 text-slate-400 text-sm">Escribe un mensaje...</div>
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white"><Zap size={18} /></div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>
        </section>
      </div>

      {/* 3. DOLOR / AGITACIÓN */}
      <section id="dolor" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-8">¿Te suena familiar esta estupidez financiera?</h2>
        <div className="space-y-6 text-left mb-10">
          <p className="text-xl text-slate-400 leading-relaxed">
            Pagas una fortuna a Mark Zuckerberg y Google para que te envíen pacientes. Los anuncios funcionan. Los mensajes de WhatsApp entran.
          </p>
          <p className="text-xl text-slate-400 leading-relaxed font-semibold text-white">
            Pero entran el viernes a las 11:00 PM. Entran el domingo en la tarde.
          </p>
          <p className="text-xl text-slate-400 leading-relaxed">
            Tus secretarias (con justa razón) están descansando. ¿El resultado? El paciente se enfría, le escribe a tu competencia que <span className="italic">sí</span> le responde al instante, y tú acabas de pagar por un lead que botaste a la basura.
          </p>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 p-8 rounded-3xl transform hover:scale-[1.02] transition-transform">
          <p className="text-2xl font-bold text-red-400">
            Estás pagando por pacientes que no estás atendiendo porque tu clínica "cierra". El tráfico no duerme, pero tu equipo sí.
          </p>
        </div>
      </section>

      {/* 4. SOLUCIÓN Y OFERTA */}
      <section id="oferta" className="py-24 px-6 bg-[#1E293B]/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-6">Conoce a mIAgenda: Tu empleado estrella</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Que nunca duerme, no pide vacaciones y cobra solo si trae resultados. No te estamos vendiendo un "software complejo con integraciones API". Te estamos ofreciendo una máquina de agendamiento 24/7 que responde en segundos, califica al paciente y lo deja anotado en tu calendario.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <div className="glass-card rounded-3xl p-8 border border-white/10 text-center flex flex-col justify-center">
              <h3 className="font-bold text-xl mb-2 text-slate-300">Costo Instalación</h3>
              <div className="text-6xl font-black mb-4 text-white">$0</div>
              <p className="text-slate-400 text-sm">Las empresas de software te cobran $500.000 por esto. Nosotros lo hacemos gratis.</p>
            </div>
            
            <div className="glass-card rounded-3xl p-8 border border-blue-500/50 relative text-center bg-gradient-to-b from-blue-900/40 to-[#0F172A] transform md:scale-110 z-10 shadow-[0_0_50px_rgba(59,130,246,0.2)] flex flex-col justify-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-6 py-1.5 rounded-full uppercase whitespace-nowrap">
                Base Mensual
              </div>
              <h3 className="font-bold text-xl mb-2 text-blue-200">Mantenimiento</h3>
              <div className="text-6xl font-black mb-2 text-white">$70k<span className="text-lg text-slate-400">/mes</span></div>
              <div className="text-xs text-blue-300 mb-4">+ IVA</div>
              <p className="text-slate-300 text-sm">Menos de lo que te cuesta invitar a almorzar a tu equipo.</p>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/10 text-center flex flex-col justify-center">
              <h3 className="font-bold text-xl mb-2 text-green-300">Pago por Resultados</h3>
              <div className="text-6xl font-black mb-2 text-white">$8k<span className="text-lg text-slate-400">/cita</span></div>
              <div className="text-xs text-slate-400 mb-4">+ IVA</div>
              <p className="text-slate-400 text-sm">Pagas solo por cada paciente real y efectivo que la IA deje sentado en tu clínica.</p>
            </div>
          </div>
          <div className="mt-16 text-center text-xl text-slate-300 max-w-4xl mx-auto font-medium border-t border-white/10 pt-12">
            Piénsalo: Estás pagando $8 lucas por un paciente que va a pagar un tratamiento dental, estético o capilar de cientos de miles de pesos. <span className="text-green-400 font-bold text-2xl block mt-2">El ROI es ridículo.</span>
          </div>
        </div>
      </section>

      {/* 5. GARANTÍA */}
      <section id="garantia" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 text-green-400 mb-8 border border-green-500/30 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
          <Check size={48} />
        </div>
        <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-6">Nuestra Garantía de "Riesgo Invertido"</h2>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          Para calibrar el sistema a la perfección a tu clínica, pedimos un compromiso mínimo de permanencia de 90 días (3 meses). Pero el riesgo lo asumimos nosotros.
        </p>
        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-blue-500/30 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full"></div>
          <h3 className="text-3xl font-bold text-white mb-6 relative z-10">La Garantía del Primer Mes</h3>
          <p className="text-xl text-slate-300 leading-relaxed mb-8 relative z-10">
            Si mIAgenda no logra agendarte <strong className="text-white text-2xl">al menos 10 citas efectivas</strong> durante los primeros 30 días, te devolvemos tus $70.000 CLP de inmediato y nos damos la mano.
          </p>
          <div className="bg-green-500/20 text-green-400 px-6 py-4 rounded-xl border border-green-500/30 text-xl font-bold inline-block relative z-10">
            Tienes literalmente cero riesgo financiero. Si no te llenamos la agenda, no nos pagas.
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95 flex items-center gap-2">
            <Zap size={20} /> Pon a prueba a la IA en nuestro Simulador
          </button>
        </div>
      </section>

      {/* 6. CALIFICACIÓN */}
      <section id="filtro" className="py-24 px-6 bg-[#1E293B]/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-16 text-center">Seamos honestos. Esto NO es para todos.</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-3"><X size={32} /> mIAgenda NO es para ti si:</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-slate-300 text-lg"><span className="text-red-400 mt-1">✗</span> Tu clínica atiende a 2 pacientes por semana y tu secretaria tiene tiempo de sobra.</li>
                <li className="flex items-start gap-4 text-slate-300 text-lg"><span className="text-red-400 mt-1">✗</span> No haces publicidad en redes sociales ni recibes volumen de mensajes.</li>
                <li className="flex items-start gap-4 text-slate-300 text-lg"><span className="text-red-400 mt-1">✗</span> Escribes tus citas en un cuaderno de papel.</li>
              </ul>
            </div>

            <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full"></div>
              <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center gap-3"><Check size={32} /> mIAgenda ES para ti si:</h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4 text-slate-300 text-lg"><span className="text-green-400 mt-1 font-bold">✓</span> Eres una clínica dental, dermatológica, estética o capilar.</li>
                <li className="flex items-start gap-4 text-slate-300 text-lg"><span className="text-green-400 mt-1 font-bold">✓</span> Inviertes en Meta/Google Ads y recibes varios mensajes diarios.</li>
                <li className="flex items-start gap-4 text-slate-300 text-lg"><span className="text-green-400 mt-1 font-bold">✓</span> Pierdes pacientes los fines de semana o en las noches porque nadie responde rápido.</li>
                <li className="flex items-start gap-4 text-slate-300 text-lg"><span className="text-green-400 mt-1 font-bold">✓</span> Entiendes que la velocidad de respuesta es la diferencia entre un paciente tuyo y uno de tu competencia.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-16 text-center">Preguntas Frecuentes <br/><span className="text-blue-400">(Sin rodeos)</span></h2>
        <div className="space-y-4">
          {[
            { q: "¿Se integra con Medilink / mi sistema actual?", a: "Sí. Nuestro objetivo es que no cambies tu forma de trabajar. La IA lee tu disponibilidad y agenda directamente donde tú ya lo haces. Sin fricción." },
            { q: "¿Qué pasa si el bot 'alucina' o habla de más?", a: "No usamos IA libre que se pone a filosofar. mIAgenda está entrenada con barreras estrictas y un solo objetivo militar: responder la duda exacta y llevar al prospecto a agendar la cita. Si el paciente pregunta cosas fuera de los protocolos, la IA lo deriva amablemente a un humano." },
            { q: "¿Por qué exigen 3 meses mínimos?", a: "Porque no somos una herramienta mágica de un solo clic. El primer mes es para adaptar la IA a los modismos de tus pacientes, tus doctores y tus tratamientos. Si quieres resultados reales y consistentes, necesitamos 90 días. (Recuerda que tu primer mes está cubierto por la garantía de 10 citas)." }
          ].map((faq, i) => (
            <div key={i} className="glass-card border border-white/10 rounded-2xl overflow-hidden transition-all bg-[#0F172A]/50">
              <button
                className="w-full px-8 py-6 text-left font-bold flex items-center justify-between focus:outline-none text-white text-xl"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              >
                {faq.q}
                <ChevronDown className={`transform transition-transform ${faqOpen === i ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} size={24} />
              </button>
              {faqOpen === i && (
                <div className="px-8 pb-6 text-slate-300 text-lg leading-relaxed border-t border-white/5 pt-6">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-blue-900/20 to-[#0F172A] z-0"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-green-500/10 blur-[100px] rounded-full"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center glass-card border border-blue-500/30 rounded-[3rem] p-12 md:p-20 shadow-[0_0_80px_rgba(59,130,246,0.15)]">
          <h2 className="font-jakarta text-4xl md:text-6xl font-bold mb-6">Deja de perder pacientes hoy.</h2>
          <p className="text-slate-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
            Es estúpido seguir quemando dinero en publicidad si no vas a contestar los mensajes los domingos.
          </p>
          <div className="flex justify-center mb-8">
            <button className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl md:text-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
              <Zap size={28} /> Prueba el Simulador de 5 Minutos
            </button>
          </div>
          <div className="text-slate-400 text-base flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 font-semibold">
            <span>✓ Riesgo Cero</span>
            <span className="hidden sm:inline">·</span>
            <span>✓ $0 Instalación</span>
            <span className="hidden sm:inline">·</span>
            <span>✓ Solo pagas por resultados</span>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#080F1A] pt-20 pb-10 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <div className="flex items-center gap-2 font-jakarta font-bold text-2xl mb-4 text-white">
              <Calendar className="text-blue-500" size={28} />
              mIAgenda
            </div>
            <p className="text-slate-500 text-base max-w-sm">El empleado estrella de tu clínica que atiende 24/7 y solo cobra por paciente sentado.</p>
          </div>
          <div className="flex gap-6 md:justify-end">
            <a href="mailto:contacto@miagenda.cl" className="text-slate-400 hover:text-white transition-colors">contacto@miagenda.cl</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center md:text-left text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 mIAgenda. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Políticas de Privacidad</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
