"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesComponent from "@/components/ui/particles-bg";
import { LiquidDemoButton } from "@/components/ui/button-1";
import {
  Bot,
  Calendar,
  Filter,
  UserPlus,
  Ticket,
  BookOpen,
  MessageSquare,
  BarChart,
  MapPin,
  Check,
  X,
  Menu,
  ChevronDown,
  ArrowRight,
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
      {/* Background Effects */}

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
            <a href="#features" className="hover:text-white transition-colors">Características</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#benefits" className="hover:text-white transition-colors">Beneficios</a>
            <a href="#pricing" className="hover:text-white transition-colors">Precios</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95 border border-white/10">
              Solicitar Demo
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0F172A] border-b border-white/10 p-6 flex flex-col gap-4">
            <a href="#features" className="text-slate-300 hover:text-white">Características</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white">Cómo funciona</a>
            <a href="#benefits" className="text-slate-300 hover:text-white">Beneficios</a>
            <a href="#pricing" className="text-slate-300 hover:text-white">Precios</a>
            <button className="mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold">
              Solicitar Demo
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
              <span>🤖</span> Powered by AI · WhatsApp Nativo
            </motion.div>

            <motion.h1 variants={fadeIn} className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Tu clínica agenda <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">24/7</span> mientras<br />
              tú duermes.
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              mIAgenda es el agente de inteligencia artificial que responde por WhatsApp, agenda citas médicas, califica leads y escala a tu equipo sólo cuando es necesario.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 w-full">
              <LiquidDemoButton />
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white font-medium text-lg hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center gap-2">
                Ver cómo funciona
              </button>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1"><Check size={16} className="text-green-400" /> Sin tarjeta de crédito</span>
              <span className="flex items-center gap-1"><Check size={16} className="text-green-400" /> Integración con Medilink</span>
              <span className="flex items-center gap-1"><Check size={16} className="text-green-400" /> Soporte en español</span>
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
                {/* Chat Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')", backgroundSize: 'cover' }}></div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="self-end bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm max-w-[85%] z-10">
                  Hola, quiero agendar una hora
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="self-start bg-[#202C33] text-white p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%] z-10">
                  ¡Hola! Soy MarIA de [Tu Clínica]. El valor de la consulta es $70.000. ¿Buscas la hora más próxima o tienes algún especialista de preferencia?
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }} className="self-end bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm max-w-[85%] z-10">
                  La más próxima
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.5 }} className="self-start bg-[#202C33] text-white p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%] z-10">
                  Tenemos disponibilidad el Sábado 10 de mayo a las 10:00 AM. ¿Confirmas?
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 5.5 }} className="self-end bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-sm max-w-[85%] z-10">
                  Sí
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 6.5 }} className="self-start bg-[#202C33] text-white p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%] z-10 border border-green-500/30">
                  ✅ ¡Reserva confirmada! <br /><br />Fecha: Sáb 10 mayo <br />Hora: 10:00 AM <br />Dr. García.<br /><br />¡Te esperamos!
                </motion.div>
              </div>

              <div className="absolute bottom-0 inset-x-0 h-16 bg-[#202C33] flex items-center px-4 gap-3 z-10">
                <div className="w-8 h-8 rounded-full bg-white/10"></div>
                <div className="flex-1 h-10 rounded-full bg-[#2A3942] border border-white/5 flex items-center px-4 text-slate-400 text-sm">Mensaje...</div>
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white"><Zap size={18} /></div>
              </div>
            </div>

            {/* Glow effect behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>
        </section>
      </div>

      {/* 3. LOGOS SECTION */}
      <section className="bg-[#1E293B] border-y border-white/5 py-12 overflow-hidden relative">
        <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-[#1E293B] to-transparent z-10"></div>
        <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-[#1E293B] to-transparent z-10"></div>
        <p className="text-center text-slate-400 text-sm font-semibold tracking-widest uppercase mb-8">Clínicas que ya automatizaron su recepción</p>
        <div className="flex gap-16 w-max animate-[slideLeft_30s_linear_infinite] px-8">
          {['Odontología', 'Medicina Capilar', 'Dermatología', 'Estética', 'Cardiología', 'Ortodoncia', 'Odontología', 'Medicina Capilar', 'Dermatología', 'Estética'].map((logo, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors duration-300 grayscale hover:grayscale-0">
              <Zap size={24} />
              <span className="font-jakarta font-bold text-xl">{logo}</span>
            </div>
          ))}
        </div>
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes slideLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Comienza a agendar citas en 3 pasos</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Sin código, sin instalaciones complejas. Nuestros especialistas se encargarán de la puesta en marcha.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-green-500/20 z-0"></div>

          {[
            {
              step: "01",
              title: "Conecta WhatsApp",
              desc: "Vincula tu número de WhatsApp Business con mIAgenda en minutos, sin configuraciones técnicas.",
              icon: <MessageSquare size={32} className="text-blue-400" />
            },
            {
              step: "02",
              title: "Configura tu Agente IA",
              desc: "Define el nombre, personalidad, servicios, precios, FAQs y políticas de tu clínica. El agente con IA aprende todo lo necesario.",
              icon: <Bot size={32} className="text-indigo-400" />
            },
            {
              step: "03",
              title: "Recibe pacientes automáticamente",
              desc: "Tu agente responde al instante, agenda citas, crea leads en el CRM y te notifica solo cuando necesita tu intervención.",
              icon: <Calendar size={32} className="text-green-400" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card rounded-3xl p-8 relative z-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-4 right-6 text-6xl font-bold text-white/5 select-none">{item.step}</div>
              <div className="w-20 h-20 rounded-2xl bg-[#0F172A] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {item.icon}
              </div>
              <h3 className="font-jakarta text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FEATURES */}
      <section id="features" className="py-24 px-6 bg-[#1E293B]/50 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Todo lo que necesita tu clínica en una plataforma</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Diseñado específicamente para el sector salud, no un agente con IA genérico.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Bot />, title: "Agente IA con Personalidad", desc: "Crea un asistente con nombre, tono y personalidad de tu marca. Pacientes interactúan sin saber que es IA." },
              { icon: <Zap />, title: "Agendamiento Automático 24/7", desc: "Consulta disponibilidad en tiempo real, segmenta al paciente y confirma la cita en segundos." },
              { icon: <Filter />, title: "Pipeline CRM de Leads", desc: "Cada conversación genera un lead clasificado (Nuevo, Agendado, Efectivo, Perdido). Nada se escapa." },
              { icon: <UserPlus />, title: "Intervención Humana", desc: "Define las condiciones en que el agente con IA cede el control a tu equipo. Traspaso inmediato y sin fricciones." },
              { icon: <Ticket />, title: "Tickets de Seguimiento", desc: "Sistema Kanban interno para gestionar solicitudes que requieren atención del equipo. Nada se pierde." },
              { icon: <BookOpen />, title: "Base de Conocimiento (FAQs)", desc: "Carga tus preguntas frecuentes. El agente con IA las responde de forma natural, sin repetición de scripts." },
              { icon: <MessageSquare />, title: "Plantillas de WhatsApp", desc: "Templates aprobados por Meta para recontactar pacientes con recordatorios o campañas." },
              { icon: <BarChart />, title: "Dashboard de Métricas", desc: "Visualiza leads, % de conversión, tickets resueltos y evolución de conversaciones en tiempo real." },
              { icon: <MapPin />, title: "Multi-sede y Especialidad", desc: "Gestiona múltiples sedes y profesionales desde un solo panel. Todo organizado." }
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0F172A] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="font-jakarta text-lg font-bold mb-3">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BIG NUMBERS */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900/40 to-[#0F172A] border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-jakarta text-center text-3xl md:text-5xl font-bold mb-16 text-white">El impacto real en tu clínica</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { num: "44s", desc: "Tiempo promedio de primera respuesta" },
              { num: "24/7", desc: "Disponibilidad de atención continua" },
              { num: "60%", desc: "Tasa de conversión a citas" },
              { num: "0", desc: "Mensajes perdidos" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4 tracking-tighter">
                  {stat.num}
                </div>
                <div className="text-slate-400 font-medium text-sm md:text-base max-w-[150px]">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPARATIVA */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-6">¿Cómo trabaja mIAgenda en conjunto con tu recepcionista?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Tradicional */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-[#1E293B] border border-white/5 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-xl font-bold text-slate-300 mb-8 border-b border-white/10 pb-4">Recepción Tradicional</h3>
            <ul className="space-y-6">
              {[
                "Atención solo en horario laboral",
                "Respuestas demoran horas o días",
                "Costo fijo mensual alto",
                "Se satura en horarios peak",
                "Datos dispersos en cuadernos o excels",
                "No hay métricas en tiempo real",
                "Leads se pierden sin seguimiento"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <X className="text-red-400 shrink-0 mt-0.5" size={20} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* mIAgenda */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-blue-500/30 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(59,130,246,0.15)] transform md:-translate-y-4"
          >
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Recomendado
            </div>
            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-2">
              <Zap className="text-blue-400" /> mIAgenda
            </h3>
            <ul className="space-y-6">
              {[
                "Disponibilidad total 24/7/365",
                "Respuestas en menos de 1 minuto",
                "Fracción del costo de un empleado",
                "Atiende a varios pacientes a la vez",
                "Datos estructurados en CRM nativo",
                "Dashboard con analíticas detalladas",
                "Seguimiento automático de leads"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-white font-medium">
                  <Check className="text-green-400 shrink-0 mt-0.5" size={20} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 8. TESTIMONIOS */}
      <section className="py-24 px-6 bg-[#1E293B]/30 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-6">Lo que dicen las clínicas</h2>
        </div>

        <div className="flex gap-6 w-max animate-[slideLeft_40s_linear_infinite] hover:[animation-play-state:paused] px-6">
          {[
            { name: "Dra. Carolina M.", clinic: "Centro Odontológico Sonrisas", color: "bg-blue-600", text: "Antes perdíamos decenas de pacientes porque escribían fuera de horario. Desde que instalamos mIAgenda, llegamos el lunes y tenemos la agenda llena sin mover un dedo." },
            { name: "Dr. Roberto S.", clinic: "Clínica Capilar Advanced", color: "bg-indigo-600", text: "La clasificación de leads es brutal. Sabemos exactamente qué paciente está interesado en implantes y el agente con IA ya le dio toda la información inicial. Nos ahorra horas de llamadas." },
            { name: "Lic. Andrea V.", clinic: "Estética Integral Beauty", color: "bg-pink-600", text: "Teníamos a la recepcionista colapsada. Ahora MarIA (nuestro agente con IA) hace todo el trabajo pesado y la recepcionista solo se encarga de recibir a los pacientes en la clínica." },
            { name: "Dra. Carolina M.", clinic: "Centro Odontológico Sonrisas", color: "bg-blue-600", text: "Antes perdíamos decenas de pacientes porque escribían fuera de horario. Desde que instalamos mIAgenda, llegamos el lunes y tenemos la agenda llena sin mover un dedo." },
          ].map((test, i) => (
            <div key={i} className="glass-card border border-white/10 rounded-3xl p-8 w-[400px] shrink-0 whitespace-normal">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white ${test.color}`}>
                  {test.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{test.name}</div>
                  <div className="text-sm text-slate-400">{test.clinic}</div>
                </div>
              </div>
              <div className="flex gap-1 text-yellow-400 mb-4">{"★".repeat(5)}</div>
              <p className="text-slate-300 italic">"{test.text}"</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-slate-400 font-medium">Únete a las clínicas que ya dejaron de perder pacientes por falta de respuesta.</p>
      </section>

      {/* 9. PRICING */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-6">Planes simples, sin sorpresas</h2>
          <p className="text-slate-400 text-lg">Todos nuestros planes incluyen la totalidad de las características de la plataforma. Todos los precios son + IVA.</p>
        </div>

        {/* Costo de Implementación Único */}
        <div className="max-w-4xl mx-auto mb-16 glass-card rounded-3xl p-8 md:p-10 border border-blue-500/20 relative overflow-hidden bg-slate-900/30">
          <div className="absolute top-0 right-0 bg-blue-500/10 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
            Pago Único Inicial
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="font-jakarta text-2xl font-bold text-white mb-3">Puesta en Marcha & Adaptación</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Configuración completa y adaptada para tu clínica. Nos encargamos de todo el proceso de adaptación e integración para que mIAgenda comience a operar de forma óptima.
              </p>
              <div className="text-3xl md:text-4xl font-black text-white">
                $500.000 <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">+ IVA / Pago único</span>
              </div>
            </div>
            <div className="flex-1 w-full border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">¿Qué incluye la implementación?</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <li className="flex items-center gap-2">✓ Vinculación de WhatsApp</li>
                <li className="flex items-center gap-2">✓ Integración con Medilink</li>
                <li className="flex items-center gap-2">✓ Configuración de personalidad</li>
                <li className="flex items-center gap-2">✓ Carga y entrenamiento de FAQs</li>
                <li className="flex items-center gap-2">✓ Capacitación de tu equipo</li>
                <li className="flex items-center gap-2">✓ Período de marcha blanca</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="font-jakarta text-2xl md:text-3xl font-bold text-white mb-2">Planes Mensuales</h3>
          <p className="text-slate-400 text-sm">Escoge el volumen de conversaciones mensuales que requiere tu clínica.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Starter */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl mb-2">Starter</h3>
              <div className="text-slate-400 text-sm mb-6">Para consultas individuales o clínicas pequeñas.</div>
              <div className="text-4xl font-black mb-6">$150.000<span className="text-lg text-slate-500 font-medium">/mes</span></div>
              <div className="text-xs text-slate-400 font-semibold mb-4 bg-slate-800/40 py-1.5 px-3 rounded-lg w-fit">+ IVA</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white text-sm font-semibold"><Check size={18} className="text-green-400" /> 500 conversaciones/mes</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> Agendamiento automático 24/7</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> Integración con Medilink</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> Personalidad de marca</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> FAQs ilimitadas</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> CRM de leads & tickets</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> Chat en vivo e intervención humana</li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/5 font-semibold transition-colors mt-auto">Comenzar con Starter</button>
          </div>

          {/* Pleno (Destacado) */}
          <div className="bg-[#1E293B] rounded-3xl p-8 border border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.15)] relative transform md:scale-105 z-10 flex flex-col justify-between">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
              Más Popular
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-white">Pleno</h3>
              <div className="text-blue-200 text-sm mb-6">El balance perfecto para clínicas en crecimiento.</div>
              <div className="text-4xl font-black mb-6 text-white">$280.000<span className="text-lg text-slate-400 font-medium">/mes</span></div>
              <div className="text-xs text-blue-300 font-semibold mb-4 bg-blue-500/10 py-1.5 px-3 rounded-lg w-fit">+ IVA</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white text-sm font-semibold"><Check size={18} className="text-green-400" /> 1.000 conversaciones/mes</li>
                <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-green-400" /> Agendamiento automático 24/7</li>
                <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-green-400" /> Integración con Medilink</li>
                <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-green-400" /> Personalidad de marca</li>
                <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-green-400" /> FAQs ilimitadas</li>
                <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-green-400" /> CRM de leads & tickets</li>
                <li className="flex items-center gap-3 text-white text-sm"><Check size={18} className="text-green-400" /> Chat en vivo e intervención humana</li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all mt-auto">Comenzar con Pleno</button>
          </div>

          {/* Premium */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl mb-2">Premium</h3>
              <div className="text-slate-400 text-sm mb-6">Para clínicas con alto flujo de pacientes y múltiples sedes.</div>
              <div className="text-4xl font-black mb-6">$400.000<span className="text-lg text-slate-500 font-medium">/mes</span></div>
              <div className="text-xs text-slate-400 font-semibold mb-4 bg-slate-800/40 py-1.5 px-3 rounded-lg w-fit">+ IVA</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white text-sm font-semibold"><Check size={18} className="text-green-400" /> 2.000 conversaciones/mes</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> Agendamiento automático 24/7</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> Integración con Medilink</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> Personalidad de marca</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> FAQs ilimitadas</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> CRM de leads & tickets</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><Check size={18} className="text-blue-400" /> Chat en vivo e intervención humana</li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/5 font-semibold transition-colors mt-auto">Comenzar con Premium</button>
          </div>
        </div>
        <p className="text-center mt-12 text-slate-500 text-sm">Todos los planes incluyen la implementación y configuración descrita arriba.</p>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="font-jakarta text-3xl md:text-5xl font-bold mb-12 text-center">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {[
            { q: "¿Necesito conocimientos técnicos para configurar mIAgenda?", a: "No. Nuestro equipo te asiste en todo el proceso." },
            { q: "¿El agente con IA reemplaza completamente a mi recepcionista?", a: "No la reemplaza, la potencia. El agente con IA maneja el 80% de consultas repetitivas (precios, horarios, agendamientos básicos) permitiendo que tu equipo se enfoque en ventas complejas y atención presencial de calidad." },
            { q: "¿Qué pasa si el paciente hace una pregunta que el agente con IA no sabe responder?", a: "El agente con IA es inteligente: si detecta que no tiene la respuesta o el paciente pide hablar con un humano, transfiere el chat inmediatamente a tu equipo, notificándoles en el panel." },
            { q: "¿Puedo personalizar el nombre y la personalidad del agente?", a: "Absolutamente. Puedes llamarlo 'Asistente Virtual', 'MarIA' o como quieras. Además, le damos un prompt específico para que hable con el tono exacto de tu clínica (formal, amigable, etc)." },
            { q: "¿Funciona con múltiples sedes y especialistas?", a: "Sí, a partir del plan Clínica. El agente con IA pregunta al paciente qué sede prefiere o con qué especialista se quiere atender, y cruza esa información con los horarios disponibles correspondientes." }
          ].map((faq, i) => (
            <div key={i} className="glass-card border border-white/10 rounded-2xl overflow-hidden transition-all">
              <button
                className="w-full px-6 py-5 text-left font-semibold flex items-center justify-between focus:outline-none"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              >
                {faq.q}
                <ChevronDown className={`transform transition-transform ${faqOpen === i ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} />
              </button>
              {faqOpen === i && (
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-blue-900/20 to-[#0F172A] z-0"></div>

        {/* Animated shapes */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center glass-card border border-white/10 rounded-[3rem] p-10 md:p-16">
          <h2 className="font-jakarta text-4xl md:text-5xl font-bold mb-4">¿Listo para que tu clínica atienda sola?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Únete en menos de 48 horas. Sin código, sin complicaciones.</p>

          <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-6" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Ingresa tu email profesional"
              className="w-full md:w-auto flex-1 px-6 py-4 rounded-xl bg-[#0F172A] border border-white/10 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              required
            />
            <button type="submit" className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all active:scale-95 whitespace-nowrap">
              Quiero mi Demo Gratis
            </button>
          </form>
          <div className="text-slate-400 text-sm flex items-center justify-center gap-4">
            <span>🔒 Tus datos están seguros</span>
            <span className="hidden sm:inline">·</span>
            <span>Sin spam</span>
            <span className="hidden sm:inline">·</span>
            <span>Sin compromisos</span>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#080F1A] pt-20 pb-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-jakarta font-bold text-xl mb-4">
              <Calendar className="text-blue-500" size={24} />
              mIAgenda
            </div>
            <p className="text-slate-500 text-sm mb-6">Gestión Inteligente de Citas Médicas impulsada por Inteligencia Artificial y WhatsApp.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Producto</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Solicitar Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal & Soporte</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Centro de Ayuda</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 mIAgenda. Todos los derechos reservados.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
