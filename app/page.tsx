"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Building2,
  DollarSign,
  Flame,
  Mail,
  Menu,
  MoveRight,
  Shield,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

/* ═══════════════════════════════════════════
   SMOOTH SCROLL WITHOUT HASH IN URL
   ═══════════════════════════════════════════ */

function scrollTo(id: string) {
  if (id === "#" || id === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const target = id.startsWith("#") ? id.slice(1) : id;
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
}

/* ═══════════════════════════════════════════
   SCROLL REVEAL HOOK
   ═══════════════════════════════════════════ */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
              .forEach((child) => child.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ═══════════════════════════════════════════
   ANIMATED COUNTER HOOK
   ═══════════════════════════════════════════ */

function useCountUp(target: string, duration = 1800) {
  const [display, setDisplay] = useState("-");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Parse the target value
  const numericPart = parseFloat(target.replace(/[^0-9.]/g, ""));
  const prefix = target.match(/^[^0-9]*/)?.[0] || "";
  const suffix = target.match(/[^0-9.]*$/)?.[0] || "";
  const hasDecimals = target.includes(".") && !target.includes("/");
  const isSpecial = target === "24/7";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    if (isSpecial) {
      // For "24/7" just reveal it
      const timer = setTimeout(() => setDisplay("24/7"), 300);
      return () => clearTimeout(timer);
    }

    const steps = 40;
    const stepDuration = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numericPart * eased);

      if (step >= steps) {
        setDisplay(`${prefix}${hasDecimals ? numericPart : numericPart}${suffix}`);
        clearInterval(interval);
      } else {
        setDisplay(`${prefix}${current}${suffix}`);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [started, numericPart, prefix, suffix, hasDecimals, isSpecial, duration]);

  return { display, ref };
}

/* ═══════════════════════════════════════════
   LOGO
   ═══════════════════════════════════════════ */

function LogoLight({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 200 210" fill="none" width={size} height={size * 1.05}>
      <rect x="10" y="120" width="55" height="55" stroke="#fff" strokeWidth="3" fill="none" opacity="0.5" />
      <line x1="10" y1="120" x2="65" y2="175" stroke="#fff" strokeWidth="2" opacity="0.35" />
      <line x1="65" y1="120" x2="10" y2="175" stroke="#fff" strokeWidth="2" opacity="0.35" />
      <rect x="45" y="100" width="55" height="55" stroke="#fff" strokeWidth="3" fill="none" opacity="0.5" />
      <line x1="45" y1="100" x2="100" y2="155" stroke="#fff" strokeWidth="2" opacity="0.35" />
      <line x1="100" y1="100" x2="45" y2="155" stroke="#fff" strokeWidth="2" opacity="0.35" />
      <rect x="100" y="100" width="55" height="55" stroke="#fff" strokeWidth="3" fill="none" opacity="0.5" />
      <line x1="100" y1="100" x2="155" y2="155" stroke="#fff" strokeWidth="2" opacity="0.35" />
      <line x1="155" y1="100" x2="100" y2="155" stroke="#fff" strokeWidth="2" opacity="0.35" />
      <rect x="135" y="120" width="55" height="55" stroke="#fff" strokeWidth="3" fill="none" opacity="0.5" />
      <line x1="135" y1="120" x2="190" y2="175" stroke="#fff" strokeWidth="2" opacity="0.35" />
      <line x1="190" y1="120" x2="135" y2="175" stroke="#fff" strokeWidth="2" opacity="0.35" />
      <rect x="80" y="55" width="40" height="40" stroke="#ffbe2e" strokeWidth="3" fill="none" />
      <line x1="80" y1="55" x2="120" y2="95" stroke="#ffbe2e" strokeWidth="2" />
      <line x1="120" y1="55" x2="80" y2="95" stroke="#ffbe2e" strokeWidth="2" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const heroSlides = [
  {
    image: "/portada_2.jpg",
    title: "Infraestructura lista para operar tu marca",
    subtitle: "Espacios profesionales diseñados para producción gastronómica de alto nivel.",
  },
  {
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1800&q=80",
    title: "Escala sin límites, produce con respaldo",
    subtitle: "Crece tu marca en un ecosistema pensado para la eficiencia operativa.",
  },
  {
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=80",
    title: "Un equipo que entiende tus retos diarios",
    subtitle: "Operamos nuestras propias marcas. Sabemos lo que necesitas.",
  },
];

const benefits = [
  { icon: Building2, title: "Infraestructura lista", description: "Cocinas equipadas con ventilación, gas, agua y electricidad industrial. Listas desde el día uno.", gold: true },
  { icon: DollarSign, title: "Menor inversión inicial", description: "Reduce tu CAPEX drásticamente. Sin obra civil, sin permisos largos, sin sorpresas.", gold: false },
  { icon: Shield, title: "Modelo seguro y flexible", description: "Contratos adaptables a tu fase de crecimiento. Escala o ajusta sin atarte.", gold: true },
  { icon: Zap, title: "Velocidad de implementación", description: "De la firma al primer despacho en tiempo récord. Tu marca no puede esperar.", gold: false },
  { icon: Users, title: "Ecosistema colaborativo", description: "Opera junto a otras marcas en un entorno profesional y ordenado.", gold: true },
  { icon: Flame, title: "Experiencia real", description: "No solo alquilamos: operamos nuestras marcas y entendemos cada detalle de la producción.", gold: false },
];

const partners = [
  { name: "Menú 14", logo: "/partners/menu14.png" },
  { name: "Catedral Catering", logo: "/partners/catedral.png" },
  { name: "Yami", logo: "/partners/yami.png" },
];

const metrics = [
  { value: "500+", label: "m² operativos", detail: "Más de 500 metros cuadrados de infraestructura gastronómica profesional distribuidos estratégicamente para maximizar la eficiencia operativa." },
  { value: "8", label: "Estaciones activas", detail: "Ocho estaciones de cocina completamente equipadas y listas para producción inmediata con los más altos estándares." },
  { value: "24/7", label: "Operación continua", detail: "Acceso las 24 horas del día, los 7 días de la semana. Tu marca no descansa, nosotros tampoco." },
  { value: "11", label: "Marcas operando", detail: "Tres marcas gastronómicas activas dentro de nuestro ecosistema, cada una con su identidad y operación propia." },
  { value: "95%", label: "Tasa de ocupación", detail: "Un indicador de la confianza que nuestros partners depositan en el modelo Capital Kitchen." },
];

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: "calc(100vh - 72px)" }}>
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="hero-slide absolute inset-0"
          style={{ opacity: current === i ? 1 : 0, zIndex: current === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="animate-hero-zoom h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-dark-deep/90 via-dark/70 to-dark/40" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="grid">
            {heroSlides.map((slide, i) => (
              <div
                key={i}
                className="hero-slide col-start-1 row-start-1 max-w-2xl"
                style={{
                  opacity: current === i ? 1 : 0,
                  pointerEvents: current === i ? "auto" : "none",
                }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-sm font-medium text-white/80">Smart Dark Kitchens B2B</span>
                </div>

                <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2rem,5.5vw,4.2rem)] font-bold leading-[1.1] tracking-tight text-white">
                  {slide.title}
                </h1>

                <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/65">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => scrollTo("contacto")}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 text-[15px] font-semibold text-dark shadow-lg shadow-gold/20 transition-all hover:bg-gold-soft hover:shadow-xl hover:shadow-gold/30 cursor-pointer"
                  >
                    Agendar una visita
                    <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => scrollTo("beneficios")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-[15px] font-medium text-white/90 transition-all hover:border-white/35 hover:bg-white/8 cursor-pointer"
                  >
                    Conocer más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group relative h-1.5 overflow-hidden rounded-full transition-all duration-500"
            style={{
              width: current === i ? 48 : 12,
              background: current === i ? "#ffbe2e" : "rgba(255,255,255,0.25)",
            }}
          >
            {current === i && (
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-white/30"
                style={{ animation: "grow-bar 5.5s linear" }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes grow-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════
   METRIC TILE (horizontal)
   ═══════════════════════════════════════════ */

function MetricTile({
  metric,
  isSelected,
  onSelect,
  delay,
}: {
  metric: (typeof metrics)[0];
  isSelected: boolean;
  onSelect: () => void;
  delay: number;
}) {
  const { display, ref } = useCountUp(metric.value, 1600 + delay * 200);

  return (
    <div ref={ref} className="flex-1 min-w-0">
      <button
        onClick={onSelect}
        className={`group w-full rounded-2xl border text-left transition-all duration-300 p-5 md:p-6 ${
          isSelected
            ? "border-gold/30 bg-gold/8 shadow-lg shadow-gold/5"
            : "border-line bg-dark-card hover:border-gold/20 hover:shadow-md hover:shadow-black/20"
        }`}
      >
        <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-gold tabular-nums md:text-4xl">
          {display}
        </p>
        <p className="mt-1 text-xs font-medium text-txt-sec md:text-sm">{metric.label}</p>
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */

export default function Home() {
  const [selectedMetric, setSelectedMetric] = useState<number>(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const benefitsRef = useReveal();
  const partnersRef = useReveal();
  const metricsRef = useReveal();
  const footerRef = useReveal();

  return (
    <div className="min-h-screen bg-bg text-txt">
      {/* ═══ 1. NAVBAR ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-dark/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:px-10">
          <button onClick={() => scrollTo("#")} className="flex items-center gap-3 cursor-pointer">
            <LogoLight size={32} />
            <div className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.08em] text-white">
                Capital
              </span>
              <span className="font-[family-name:var(--font-display)] text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                Kitchen
              </span>
            </div>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {[
              { label: "Inicio", target: "#" },
              { label: "Beneficios", target: "beneficios" },
              { label: "Partners", target: "partners" },
              { label: "Métricas", target: "metricas" },
              { label: "Contacto", target: "contacto" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-txt-sec transition-colors hover:bg-white/8 hover:text-white cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contacto")}
              className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-all hover:bg-gold-soft cursor-pointer sm:inline-flex"
            >
              Contactar
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <div className="hidden h-6 w-px bg-line lg:block" />
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-txt-sec transition hover:bg-white/8 lg:hidden"
            >
              {mobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="animate-fade-in border-t border-line bg-dark px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-2">
              {[
                { label: "Inicio", target: "#" },
                { label: "Beneficios", target: "beneficios" },
                { label: "Partners", target: "partners" },
                { label: "Métricas", target: "metricas" },
                { label: "Contacto", target: "contacto" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => { scrollTo(item.target); setMobileMenu(false); }}
                  className="rounded-lg px-4 py-3 text-left text-base font-medium text-txt transition hover:bg-white/8 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { scrollTo("contacto"); setMobileMenu(false); }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-dark cursor-pointer"
              >
                Contactar
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ═══ 2. HERO ═══ */}
      <div className="pt-18">
        <HeroSlider />
      </div>

      {/* ═══ 3. BENEFICIOS ═══ */}
      <section id="beneficios" className="bg-bg py-24 md:py-32">
        <div ref={benefitsRef} className="reveal mx-auto max-w-7xl px-6 md:px-10">
          <div className="reveal mx-auto mb-16 max-w-2xl text-center md:mb-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/8 px-4 py-1.5">
              <Zap className="h-3.5 w-3.5 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                Beneficios
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-[2.75rem] md:leading-[1.15]">
              Todo lo que necesitas para{" "}
              <span className="text-gold">operar con éxito</span>
            </h2>
            <p className="mt-4 text-base text-txt-sec md:text-lg">
              Capital Kitchen elimina las barreras de entrada y te entrega la
              infraestructura que tu marca necesita.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className={`reveal-scale stagger-${i + 1} group rounded-2xl border border-line bg-dark-card p-7 transition-all duration-300 hover:border-gold/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20`}
                >
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: benefit.gold ? "rgba(255,190,46,0.15)" : "rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: benefit.gold ? "#ffbe2e" : "#a3a3a3" }}
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-txt-sec">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 4. PARTNERS CAROUSEL ═══ */}
      <section id="partners" className="overflow-hidden border-y border-line bg-bg-alt py-20 md:py-24">
        <div ref={partnersRef} className="reveal mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Nuestros Partners
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl">
              Marcas que confían en nosotros
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bg-alt to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bg-alt to-transparent" />

          <div className="animate-scroll-left flex w-max items-center gap-8">
            {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map(
              (partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex h-20 w-48 shrink-0 items-center justify-center px-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-18 w-auto object-contain brightness-0 invert opacity-60 transition-all duration-300 hover:opacity-100"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ═══ 5. MÉTRICAS ═══ */}
      <section id="metricas" className="bg-bg py-24 md:py-32">
        <div ref={metricsRef} className="reveal mx-auto max-w-7xl px-6 md:px-10">
          {/* Header */}
          <div className="reveal mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/8 px-4 py-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  Métricas
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-[2.75rem] md:leading-[1.15]">
                Números que respaldan{" "}
                <span className="text-gold">nuestra operación</span>
              </h2>
            </div>
          </div>

          {/* Detail panel — top right area */}
          <div className="reveal mb-8 min-h-[80px] rounded-2xl border border-line bg-dark-card p-6 transition-all duration-500 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/12">
                <TrendingUp className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">
                  <span className="mr-1 text-gold">{metrics[selectedMetric].value}</span>
                  {metrics[selectedMetric].label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-txt-sec">
                  {metrics[selectedMetric].detail}
                </p>
              </div>
            </div>
          </div>

          {/* Metric tiles — horizontal row */}
          <div className="flex flex-wrap gap-3 md:flex-nowrap md:gap-4">
            {metrics.map((metric, i) => (
              <MetricTile
                key={metric.label}
                metric={metric}
                isSelected={selectedMetric === i}
                onSelect={() => setSelectedMetric(i)}
                delay={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. FOOTER ═══ */}
      <footer id="contacto" className="border-t border-line bg-dark-deep">
        <div ref={footerRef} className="reveal mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <button onClick={() => scrollTo("#")} className="flex items-center gap-3 cursor-pointer">
                <LogoLight size={32} />
                <div className="flex flex-col leading-none">
                  <span className="font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.08em] text-white">
                    Capital
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                    Kitchen
                  </span>
                </div>
              </button>
              <p className="max-w-sm text-sm leading-relaxed text-white/40">
                Capital Kitchen by CAPITAL FOOD BRANDS SAC.
              </p>
            </div>

            <div className="space-y-3 md:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                Contacto
              </p>
              <a
                href="mailto:contact@capital.kitchen.com"
                className="group flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-gold"
              >
                <Mail className="h-4 w-4" />
                contacto@capital.kitchen.com
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Capital Kitchen. Todos los derechos reservados.</p>
            <p>CAPITAL FOOD BRANDS SAC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
