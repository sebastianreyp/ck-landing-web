import {
  ArrowRight,
  Building2,
  ChefHat,
  Clock,
  Mail,
  Menu,
  MoveRight,
  Rocket,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Utensils,
  Zap,
} from "lucide-react";

/* ─── data ─── */

const stats = [
  { value: "500+", label: "m² operativos" },
  { value: "8", label: "Estaciones de cocina" },
  { value: "24/7", label: "Acceso continuo" },
  { value: "1", label: "Marca propia activa" },
];

const features = [
  {
    icon: Building2,
    title: "Infraestructura profesional",
    description:
      "Espacios diseñados con lógica operativa real: ventilación, gas, agua, electricidad industrial y zonas de almacenamiento listas para producir desde el día uno.",
    gradient: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: Shield,
    title: "Modelo flexible y seguro",
    description:
      "Alquila, intégrate o escala sin el peso de un local tradicional. Contratos adaptables a tu fase de crecimiento con soporte operativo incluido.",
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: Clock,
    title: "Operación comprobada",
    description:
      "No solo alquilamos: operamos Menú 14, nuestra marca propia. Cada mejora que implementamos nace de la experiencia real en producción y despacho.",
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad real",
    description:
      "Crece de una estación a múltiples líneas de producción sin cambiar de sede. La infraestructura se adapta a tu demanda, no al revés.",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
];

const services = [
  {
    icon: Utensils,
    tag: "Espacio",
    title: "Alquiler de cocinas ocultas",
    description:
      "Espacios funcionales con equipamiento profesional para marcas que buscan producir y vender con una base eficiente y lista para operar.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Users,
    tag: "Integración",
    title: "Nuevas marcas al ecosistema",
    description:
      "Acompañamos conceptos gastronómicos que desean sumarse a un ecosistema compartido con orden operativo y visión comercial clara.",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Rocket,
    tag: "Crecimiento",
    title: "Escalabilidad con criterio",
    description:
      "Profesionaliza procesos, mejora tu capacidad de respuesta y sostén un crecimiento consistente con infraestructura que acompaña.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
  },
];

const processSteps = [
  { step: "01", title: "Contacto", description: "Cuéntanos sobre tu marca y objetivos" },
  { step: "02", title: "Visita", description: "Conoce nuestras instalaciones en persona" },
  { step: "03", title: "Propuesta", description: "Diseñamos un plan a tu medida" },
  { step: "04", title: "Operación", description: "Comienza a producir y crecer" },
];

/* ─── page ─── */

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      {/* ═══ NAVBAR ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] font-[family-name:var(--font-display)] text-lg font-bold text-[var(--bg)]">
              CK
            </div>
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
              Capital Kitchen
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {[
              { label: "Infraestructura", href: "#infraestructura" },
              { label: "Servicios", href: "#servicios" },
              { label: "Proceso", href: "#proceso" },
              { label: "Contacto", href: "#contacto" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition-all hover:bg-[var(--accent-soft)] hover:shadow-lg hover:shadow-[var(--accent)]/20 sm:inline-flex"
            >
              Comienza hoy
              <ArrowRight className="h-4 w-4" />
            </a>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-secondary)] transition hover:bg-white/5 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="grain relative flex min-h-screen items-center overflow-hidden pt-[72px]">
        {/* Background elements */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[var(--accent)]/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/3 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 h-[1px] w-[600px] -translate-x-1/2 -rotate-45 bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div className="space-y-8">
              <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-[var(--border-accent)] bg-[var(--accent-dim)] px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                <span className="text-sm font-medium text-[var(--accent-soft)]">
                  Espacios disponibles ahora
                </span>
              </div>

              <h1 className="animate-fade-up animation-delay-200 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight">
                Tu cocina oculta,{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-soft)] bg-clip-text text-transparent">
                  lista para operar.
                </span>
              </h1>

              <p className="animate-fade-up animation-delay-400 max-w-lg text-lg leading-relaxed text-[var(--text-secondary)]">
                Infraestructura profesional para marcas gastronómicas que buscan
                producir, escalar y crecer. Sin el peso de un local tradicional.
              </p>

              <div className="animate-fade-up animation-delay-600 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contacto"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--accent)] px-8 py-4 text-base font-semibold text-[var(--bg)] transition-all hover:bg-[var(--accent-soft)] hover:shadow-xl hover:shadow-[var(--accent)]/20"
                >
                  Agendar una visita
                  <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-[var(--border)] px-8 py-4 text-base font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--accent)]/30 hover:bg-white/5 hover:text-white"
                >
                  Explorar servicios
                </a>
              </div>
            </div>

            {/* Right - Hero visual */}
            <div className="animate-slide-in-right animation-delay-400 relative hidden lg:block">
              <div className="animate-pulse-glow relative overflow-hidden rounded-3xl border border-[var(--border)]">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80"
                  alt="Cocina profesional Capital Kitchen"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/20 to-transparent" />

                {/* Floating card */}
                <div className="animate-float absolute bottom-6 left-6 right-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)]/90 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/15">
                      <ChefHat className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Operado con Menú 14</p>
                      <p className="text-xs text-[var(--text-muted)]">
                        Nuestra marca propia valida cada proceso
                      </p>
                    </div>
                    <div className="ml-auto flex h-8 items-center rounded-full bg-emerald-500/15 px-3">
                      <span className="text-xs font-semibold text-emerald-400">Activa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS MARQUEE ═══ */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-card)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[var(--border)] md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center md:py-10">
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--accent)] md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURES / INFRAESTRUCTURA ═══ */}
      <section id="infraestructura" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Infraestructura
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
              Todo lo que necesitas para{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-soft)] bg-clip-text text-transparent">
                operar
              </span>
            </h2>
            <p className="mt-5 text-lg text-[var(--text-secondary)]">
              Reducimos la fricción operativa y aceleramos tu salida al mercado
              con infraestructura inteligente y probada.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isWide = i < 2;
              return (
                <article
                  key={feature.title}
                  className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 transition-all duration-300 hover:border-[var(--accent)]/20 hover:bg-[var(--bg-card-hover)] ${isWide ? "lg:col-span-2" : ""}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] transition-colors group-hover:border-[var(--accent)]/20">
                      <Icon className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="servicios" className="border-y border-[var(--border)] bg-[var(--bg-card)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Servicios
              </p>
              <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
                Un ecosistema para operar y escalar
              </h2>
            </div>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-soft)]"
            >
              Ver todos los servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)] transition-all duration-300 hover:border-[var(--accent)]/20"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/50 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg)]/70 px-3 py-1.5 backdrop-blur-md">
                      <Icon className="h-3.5 w-3.5 text-[var(--accent)]" />
                      <span className="text-xs font-medium text-[var(--text-secondary)]">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                      <span>Más información</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CASO DE ÉXITO - MENÚ 14 ═══ */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image side */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
                  alt="Equipo Menú 14 en operación"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 shadow-xl md:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]">
                    <Sparkles className="h-5 w-5 text-[var(--bg)]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Caso de éxito</p>
                    <p className="text-xs text-[var(--text-muted)]">Menú 14</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Nuestra marca propia
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
                  Operamos lo que diseñamos
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
                No somos solo arrendadores — somos operadores. Con Menú 14 entendemos
                de primera mano la presión del despacho, la consistencia y el
                escalamiento, diseñando soluciones basadas en experiencia real.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Operación gastronómica real",
                  "Marcas nuevas o en expansión",
                  "Aprendizaje continuo",
                  "Validación corporativa",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--accent)]/15">
                      <Zap className="h-3.5 w-3.5 text-[var(--accent)]" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 text-base font-semibold text-[var(--accent)] transition hover:text-[var(--accent-soft)]"
              >
                Conoce nuestra historia
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESO ═══ */}
      <section id="proceso" className="border-y border-[var(--border)] bg-[var(--bg-card)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Proceso
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
              De la idea a la operación
            </h2>
            <p className="mt-5 text-lg text-[var(--text-secondary)]">
              Cuatro pasos simples para comenzar a operar tu marca en nuestras instalaciones.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, i) => (
              <div key={item.step} className="group relative">
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-[2px] w-6 translate-x-full bg-gradient-to-r from-[var(--accent)]/40 to-transparent lg:block" />
                )}
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-8 transition-all duration-300 hover:border-[var(--accent)]/20 hover:bg-[var(--bg-card-hover)]">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--accent)]/20 transition-colors group-hover:text-[var(--accent)]/40">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT CTA ═══ */}
      <section id="contacto" className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)]">
            <div className="grid md:grid-cols-[1.2fr,0.8fr]">
              {/* Left content */}
              <div className="p-10 md:p-14">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Contacto
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
                  Potencia tu marca gastronómica hoy
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--text-secondary)]">
                  Conversa con nuestro equipo B2B para evaluar cómo Capital Kitchen
                  puede integrarse en tu modelo de expansión.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:contacto@capital-kitchen.com"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-4 text-base font-semibold text-[var(--bg)] transition-all hover:bg-[var(--accent-soft)] hover:shadow-xl hover:shadow-[var(--accent)]/20"
                  >
                    <Mail className="h-5 w-5" />
                    Enviar correo
                  </a>
                  <a
                    href="#infraestructura"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-7 py-4 text-base font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--accent)]/30 hover:bg-white/5 hover:text-white"
                  >
                    Revisar propuesta
                  </a>
                </div>
              </div>

              {/* Right info panel */}
              <div className="border-t border-[var(--border)] bg-[var(--bg-elevated)] p-10 md:border-l md:border-t-0 md:p-14">
                <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Información corporativa
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
                      <Building2 className="h-4 w-4 text-[var(--accent)]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                        Razón social
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        CAPITAL FOOD BRANDS SAC
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
                      <Utensils className="h-4 w-4 text-[var(--accent)]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                        Marca operativa
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">Capital Kitchen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
                      <Mail className="h-4 w-4 text-[var(--accent)]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                        Email
                      </p>
                      <a
                        href="mailto:contacto@capital-kitchen.com"
                        className="mt-1 block text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-soft)]"
                      >
                        contacto@capital-kitchen.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] font-[family-name:var(--font-display)] text-lg font-bold text-[var(--bg)]">
                CK
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-base font-semibold">
                  Capital Kitchen
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  by CAPITAL FOOD BRANDS SAC
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-muted)]">
              <a href="#infraestructura" className="transition hover:text-white">
                Infraestructura
              </a>
              <a href="#servicios" className="transition hover:text-white">
                Servicios
              </a>
              <a href="#proceso" className="transition hover:text-white">
                Proceso
              </a>
              <a href="#contacto" className="transition hover:text-white">
                Contacto
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-8 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Capital Kitchen. Todos los derechos reservados.</p>
            <a
              href="mailto:contacto@capital-kitchen.com"
              className="transition hover:text-[var(--accent)]"
            >
              contacto@capital-kitchen.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
