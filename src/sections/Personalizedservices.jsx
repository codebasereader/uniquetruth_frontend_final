import React, { useEffect, useRef, useState } from "react";

/* ─── useInView ─────────────────────────────────────────────────────── */
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const FadeUp = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ─── Life area cards data ──────────────────────────────────────────── */
const areas = [
  {
    label: "Family Life",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="14" cy="13" r="5" stroke="#c9a86c" strokeWidth="1.3" />
        <circle cx="26" cy="13" r="5" stroke="#5eead4" strokeWidth="1.3" />
        <path
          d="M6 34c0-6 3.5-10 8-10h12c4.5 0 8 4 8 10"
          stroke="#c9a86c"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="20" cy="24" r="3.5" fill="#c9a86c" opacity=".25" />
      </svg>
    ),
    accent: "#c9a86c",
    desc: "Decode the relational patterns that shape your bonds — and nurture a family life rooted in understanding, empathy, and lasting connection.",
  },
  {
    label: "Professional Life",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <rect
          x="8"
          y="14"
          width="24"
          height="18"
          rx="3"
          stroke="#5eead4"
          strokeWidth="1.3"
        />
        <path
          d="M14 14v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"
          stroke="#5eead4"
          strokeWidth="1.3"
        />
        <line
          x1="8"
          y1="22"
          x2="32"
          y2="22"
          stroke="#5eead4"
          strokeWidth="1"
          opacity=".4"
        />
        <circle cx="20" cy="22" r="2.5" fill="#c9a86c" opacity=".7" />
      </svg>
    ),
    accent: "#5eead4",
    desc: "Align your innate talents with a career that feels natural — discover the professional path where your strengths fuel effortless growth.",
  },
  {
    label: "Personal Life",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="16" r="7" stroke="#c9a86c" strokeWidth="1.3" />
        <path
          d="M20 9 L20 5M20 27 L20 31M9 16 L5 16M31 16 L35 16"
          stroke="#c9a86c"
          strokeWidth="1"
          strokeLinecap="round"
          opacity=".45"
        />
        <path
          d="M20 34c-6 0-11-2.5-11-6"
          stroke="#c9a86c"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M20 34c6 0 11-2.5 11-6"
          stroke="#5eead4"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="20" cy="16" r="3" fill="#c9a86c" opacity=".18" />
      </svg>
    ),
    accent: "#c9a86c",
    desc: "Uncover the unique blueprint of your mind and emotions — build habits, mindsets, and a self-relationship that supports your deepest growth.",
    center: true,
  },
  {
    label: "Spiritual Life",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <path
          d="M20 6 L20 34"
          stroke="#c9a86c"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity=".35"
        />
        <path
          d="M20 10 C14 14 10 18 14 22 C18 26 20 28 20 34 C20 28 22 26 26 22 C30 18 26 14 20 10Z"
          stroke="#c9a86c"
          strokeWidth="1.3"
          fill="#c9a86c"
          fillOpacity=".1"
        />
        <circle cx="20" cy="20" r="3" fill="#c9a86c" opacity=".55" />
        <circle
          cx="20"
          cy="20"
          r="7"
          stroke="#5eead4"
          strokeWidth=".7"
          strokeDasharray="2 4"
          opacity=".4"
        />
      </svg>
    ),
    accent: "#c9a86c",
    desc: "Connect with the deeper dimensions of your inner world — find purpose, meaning, and a spiritual clarity that transcends the everyday.",
  },
  {
    label: "Social Life",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
        <circle cx="20" cy="14" r="5" stroke="#5eead4" strokeWidth="1.3" />
        <circle cx="10" cy="22" r="4" stroke="#c9a86c" strokeWidth="1.1" />
        <circle cx="30" cy="22" r="4" stroke="#c9a86c" strokeWidth="1.1" />
        <path
          d="M10 26 C10 30 14 32 20 32 C26 32 30 30 30 26"
          stroke="#5eead4"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="15"
          y1="19"
          x2="10"
          y2="22"
          stroke="#c9a86c"
          strokeWidth=".8"
          opacity=".45"
        />
        <line
          x1="25"
          y1="19"
          x2="30"
          y2="22"
          stroke="#c9a86c"
          strokeWidth=".8"
          opacity=".45"
        />
      </svg>
    ),
    accent: "#5eead4",
    desc: "Understand how you connect, communicate, and show up in groups — and build a social presence that feels authentic and energising.",
  },
];

/* ─── Single card ───────────────────────────────────────────────────── */
const AreaCard = ({ area, delay }) => (
  <FadeUp delay={delay} className="h-full">
    <div
      className="ps-card group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm xl:p-7"
      style={{ "--accent": area.accent }}
    >
      {/* corner glow */}
      <div
        className="pointer-events-none absolute -top-10 -left-10 h-32 w-32 rounded-full opacity-0 blur-[55px] transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, ${area.accent}22 0%, transparent 70%)`,
        }}
      />
      {/* top accent line */}
      <div
        className="absolute left-0 top-0 h-px w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{
          background: `linear-gradient(90deg, ${area.accent}80, transparent)`,
        }}
      />

      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 p-2.5"
        style={{ background: `${area.accent}12` }}
      >
        {area.icon}
      </div>

      <h3 className="font-display mb-2 text-[1.15rem] font-light leading-snug text-[#fff8ef] xl:text-[1.35rem]">
        {area.label}
      </h3>

      <div
        className="mb-3 h-px w-8 rounded-full transition-all duration-500 group-hover:w-14"
        style={{ background: area.accent }}
      />

      <p className="text-[0.82rem] leading-[1.85] text-[rgba(255,248,236,0.55)] xl:text-[0.9rem]">
        {area.desc}
      </p>
    </div>
  </FadeUp>
);

/* ─── Main Section ──────────────────────────────────────────────────── */
const Personalizedservices = () => {
  return (
    <section
      id="personalised-services"
      className="font-body relative overflow-hidden bg-[#0F2E15] py-20 sm:py-24 lg:py-28 xl:py-36"
    >
      <style>{`
        .font-display { font-family: 'Cormorant Garamond', serif !important; }
        .font-body    { font-family: 'DM Sans', sans-serif !important; }
        .ps-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 256px;
        }
        .ps-card {
          transition: border-color .4s, box-shadow .4s, transform .4s cubic-bezier(.22,1,.36,1);
        }
        .ps-card:hover {
          border-color: rgba(201,168,108,.28);
          box-shadow: 0 24px 70px rgba(0,0,0,.45);
          transform: translateY(-4px);
        }
      `}</style>

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-104 w-104 rounded-full bg-teal-400/5 blur-[120px]" />
        <div className="absolute -right-32 bottom-24 h-120 w-120 rounded-full bg-[#c9a86c]/5 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/4 blur-[100px]" />
        <div className="ps-noise absolute inset-0 opacity-[0.022]" />
        <div className="absolute inset-y-0 left-[6%] hidden lg:block w-px bg-linear-to-b from-transparent via-[#c9a86c]/10 to-transparent" />
        <div className="absolute inset-y-0 right-[6%] hidden lg:block w-px bg-linear-to-b from-transparent via-teal-400/7 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14 xl:max-w-440">
        {/* ── Header ── */}
        <FadeUp className="mb-14 text-center sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center rounded-full border border-[#c9a86c]/25 bg-[#14381f]/60 px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-[#c9a86c] backdrop-blur-sm">
            Tailored For You
          </span>
          <h2 className="font-display mt-6 text-[clamp(2.1rem,4.5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.015em] text-[#fff8ef] 2xl:text-[clamp(2.5rem,3.9vw,4.2rem)]">
            Personalised &amp; Customized{" "}
            <em className="italic text-[#c9a86c]">Services</em>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-linear-to-r from-transparent via-[#c9a86c]/60 to-transparent" />
          <p className="mx-auto mt-6 max-w-[560px] text-[0.9rem] leading-[1.88] text-[rgba(255,248,236,0.55)] xl:max-w-3xl xl:text-[1rem]">
            Every dimension of your life holds a unique blueprint. We map each
            one with precision — so you can live with greater purpose, clarity,
            and fulfilment.
          </p>
        </FadeUp>

        {/* ── Full-width image row ── */}
        <FadeUp delay={80} className="mb-12 sm:mb-14">
          <img
            src="/assets/personalised.png"
            alt="Personalised and customized services"
            className="h-auto w-full rounded-3xl border border-[#c9a86c]/25 object-contain"
            loading="lazy"
            decoding="async"
          />
        </FadeUp>

        {/* ── Cards grid — full width ── */}
        <div>
          {/* Row 1 — Family Life + Professional Life */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <AreaCard area={areas[0]} delay={100} />
            <AreaCard area={areas[1]} delay={180} />
          </div>

          {/* Row 2 — Personal Life (centered) */}
          <div className="mt-4 flex justify-center">
            <div className="w-full sm:w-1/2">
              <AreaCard area={areas[2]} delay={260} />
            </div>
          </div>

          {/* Row 3 — Spiritual Life + Social Life */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <AreaCard area={areas[3]} delay={340} />
            <AreaCard area={areas[4]} delay={420} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalizedservices;
