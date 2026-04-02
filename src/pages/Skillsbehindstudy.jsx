import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
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
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Skillsbehindstudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f14] via-[#0f2e1a] to-[#0d2416]">
      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-cyan-500/5" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl bg-amber-600/8" />
      </div>

      {/* Relative container for content */}
      <div className="relative z-10">
        {/* Header with back button */}
        <header className="sticky top-0 z-40 backdrop-blur-lg bg-[#0f2e1a]/40 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate("/#services")}
              className="flex items-center gap-2 text-sm font-medium text-[#c9a86c] hover:text-[#e8d5b5] transition-colors duration-300 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5eead4]">
              Skills Behind Studies
            </div>
          </div>
        </header>

        {/* Hero section */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
          <FadeUp>
            <h1 className="font-display text-5xl sm:text-6xl font-light text-[#fff8ef] mb-6 leading-tight">
              Skills Behind <span className="text-[#c9a86c]">Studies</span>
            </h1>
          </FadeUp>

          <FadeUp delay={100}>
            <p className="text-xl sm:text-2xl text-[rgba(255,248,236,0.8)] mb-12">
              Do you want your child to excel in academics?
            </p>
          </FadeUp>

          {/* Key Benefits */}
          <div className="mb-8">
            <FadeUp delay={150}>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-[#fff8ef] mb-2">
                🔹 Key Benefits / Value Proposition
              </h2>
            </FadeUp>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 auto-rows-fr">
            {[
              "100% Stress Free Study Methods",
              "20 to 30+% Increase in Marks",
              "Builds Self Confidence",
              "1 Year Continued Support",
            ].map((benefit, idx) => (
              <FadeUp key={idx} delay={idx * 100 + 200}>
                <div className="group h-full p-6 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm hover:bg-white/8 transition-all duration-500 hover:border-[#c9a86c]/30 hover:shadow-lg hover:shadow-amber-600/10">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 mt-1 shrink-0 rounded-full bg-gradient-to-br from-[#5eead4] to-[#c9a86c] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-[#0f2e1a]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-[0.95rem] leading-relaxed text-[rgba(255,248,236,0.75)]">
                      {benefit}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-20">
          <FadeUp>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5eead4]/20 to-[#c9a86c]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/assets/services/stud.png"
                alt="Skills Behind Studies Guide"
                className="relative w-full h-auto rounded-2xl border border-white/15 shadow-2xl"
              />
            </div>
          </FadeUp>
        </section>

        {/* Scientific Approach Section */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
          {/* Intro paragraphs */}
          <FadeUp>
            <span className="inline-flex items-center rounded-full border border-[#c9a86c]/25 bg-[#14381f]/60 px-5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-[#c9a86c] backdrop-blur-sm mb-8">
              World's First Proven Scientific Approach
            </span>
          </FadeUp>

          <div className="space-y-6 mb-16">
            <FadeUp delay={80}>
              <p className="text-[1rem] leading-[1.95] text-[rgba(255,248,236,0.72)] max-w-4xl">
                World's first proven scientific approach to find a child's
                specific learning method to learn anything stress free and
                develop{" "}
                <span className="text-[#c9a86c] font-medium">
                  Concentration, Comprehension,
                </span>{" "}
                and{" "}
                <span className="text-[#c9a86c] font-medium">
                  long-term memory.
                </span>
              </p>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="text-[1rem] leading-[1.95] text-[rgba(255,248,236,0.62)] max-w-4xl">
                Our{" "}
                <span className="text-[#5eead4]">
                  13 years of research and study
                </span>{" "}
                says, the maximum percentage of 6 years and above children's
                unhealthy behaviors are directly connected to being unaware of
                skills behind studies and also practicing wrong methods which
                are influenced by others or taught by others.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <p className="text-[1rem] leading-[1.95] text-[rgba(255,248,236,0.62)] max-w-4xl">
                With the support of{" "}
                <span className="text-[#c9a86c] font-medium">
                  Unique TRUTH's Fingerprint Analysis,
                </span>{" "}
                customized specific learning methods help a child to perform
                best in their academics.
              </p>
            </FadeUp>
          </div>

          <div className="mx-auto mb-16 h-px max-w-xs bg-gradient-to-r from-transparent via-[#c9a86c]/40 to-transparent" />

          {/* Learning profiles heading */}
          <FadeUp delay={80}>
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-light text-[#fff8ef] mb-2 leading-tight">
              Identify Your Child's{" "}
              <em className="italic text-[#c9a86c]">Learning Profile</em>
            </h2>
            <div
              className="w-20 h-px rounded-full mb-12"
              style={{ background: "linear-gradient(90deg,#c9a86c,#5eead4)" }}
            />
          </FadeUp>

          {/* Learning profile cards */}
          {[
            {
              title: "Monoperformer",
              accent: "#c9a86c",
              icon: (
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                  <circle
                    cx="16"
                    cy="16"
                    r="13"
                    stroke="#c9a86c"
                    strokeWidth="1.3"
                  />
                  <circle cx="16" cy="16" r="5" fill="#c9a86c" opacity=".35" />
                  <line
                    x1="16"
                    y1="3"
                    x2="16"
                    y2="8"
                    stroke="#c9a86c"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity=".5"
                  />
                  <line
                    x1="16"
                    y1="24"
                    x2="16"
                    y2="29"
                    stroke="#c9a86c"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity=".5"
                  />
                  <line
                    x1="3"
                    y1="16"
                    x2="8"
                    y2="16"
                    stroke="#c9a86c"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity=".5"
                  />
                  <line
                    x1="24"
                    y1="16"
                    x2="29"
                    y2="16"
                    stroke="#c9a86c"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity=".5"
                  />
                </svg>
              ),
              options: [
                "My child studies inside the room",
                "My child studies outside the room",
              ],
              delay: 0,
            },
            {
              title: "Multitasker",
              accent: "#5eead4",
              icon: (
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                  <path
                    d="M8 8 L16 4 L24 8 L24 20 L16 24 L8 20 Z"
                    stroke="#5eead4"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16"
                    y1="4"
                    x2="16"
                    y2="24"
                    stroke="#5eead4"
                    strokeWidth=".8"
                    opacity=".35"
                  />
                  <line
                    x1="8"
                    y1="14"
                    x2="24"
                    y2="14"
                    stroke="#5eead4"
                    strokeWidth=".8"
                    opacity=".35"
                  />
                </svg>
              ),
              options: [
                "My child does physical movements while studying",
                "My child studies silently without physical movements",
              ],
              delay: 100,
            },
            {
              title: "Adequate Grasping Speed",
              accent: "#c9a86c",
              icon: (
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                  <path
                    d="M6 24 L12 16 L18 20 L26 10"
                    stroke="#c9a86c"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="26" cy="10" r="2.5" fill="#c9a86c" opacity=".6" />
                </svg>
              ),
              options: [
                "My child learns better with 1 on 1 teachings",
                "My child learns great with group teachings",
              ],
              delay: 200,
            },
            {
              title: "Normal Grasping Speed",
              accent: "#5eead4",
              icon: (
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                  <circle
                    cx="16"
                    cy="12"
                    r="6"
                    stroke="#5eead4"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M8 28 C8 22 11 19 16 19 C21 19 24 22 24 28"
                    stroke="#5eead4"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              ),
              options: [
                "My child learns with push and reminders",
                "My child learns without parents' interference",
              ],
              delay: 300,
            },
            {
              title: "Excellent Grasping Speed",
              accent: "#c9a86c",
              icon: (
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                  <path
                    d="M16 4 L19.5 12.5 L28 13.5 L22 19.5 L23.5 28 L16 24 L8.5 28 L10 19.5 L4 13.5 L12.5 12.5 Z"
                    stroke="#c9a86c"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                    fill="#c9a86c"
                    fillOpacity=".1"
                  />
                </svg>
              ),
              options: [
                "My child learns everything at one time learning",
                "My child learns with repeated practices",
              ],
              delay: 400,
            },
          ].map((profile, i) => (
            <FadeUp key={i} delay={profile.delay}>
              <div
                className="group relative mb-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-400"
                style={{ "--accent": profile.accent }}
              >
                {/* top accent line on hover */}
                <div
                  className="absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{
                    background: `linear-gradient(90deg, ${profile.accent}90, transparent)`,
                  }}
                />
                {/* ambient glow */}
                <div
                  className="pointer-events-none absolute -top-8 -left-8 h-28 w-28 rounded-full opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${profile.accent}20 0%, transparent 70%)`,
                  }}
                />

                <div className="relative p-6 sm:p-8">
                  {/* header row */}
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08]"
                      style={{ background: `${profile.accent}14` }}
                    >
                      {profile.icon}
                    </div>
                    <h3 className="font-display text-[1.45rem] sm:text-[1.65rem] font-light leading-tight text-[#fff8ef] transition-colors duration-300 group-hover:text-[#c9a86c]">
                      {profile.title}
                    </h3>
                    <div
                      className="ml-auto h-px w-10 shrink-0 rounded-full transition-all duration-500 group-hover:w-20"
                      style={{ background: `${profile.accent}60` }}
                    />
                  </div>

                  {/* options */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {profile.options.map((opt, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5 transition-all duration-300 hover:border-[rgba(201,168,108,0.2)] hover:bg-white/[0.06]"
                      >
                        <span
                          className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
                          style={{
                            borderColor: `${profile.accent}60`,
                            background: `${profile.accent}12`,
                          }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: profile.accent }}
                          />
                        </span>
                        <p className="text-[0.88rem] leading-[1.75] text-[rgba(255,248,236,0.68)]">
                          {opt}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl p-12 sm:p-16 border border-[#c9a86c]/30 bg-gradient-to-r from-[#c9a86c]/10 via-[#5eead4]/5 to-[#c9a86c]/10 backdrop-blur-xl group cursor-pointer hover:border-[#c9a86c]/50 transition-all duration-500">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#c9a86c]/10 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 text-center">
                <h3 className="font-display text-3xl sm:text-4xl font-light text-[#fff8ef] mb-4">
                  Help Your Child Excel Academically
                </h3>
                <p className="text-[1rem] text-[rgba(255,248,236,0.7)] mb-8 max-w-2xl mx-auto">
                  Unlock your child's true learning potential with our
                  scientifically-proven approach tailored to their unique needs.
                </p>
                <button className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#c9a86c] to-[#5eead4] text-[#0f2e1a] font-semibold text-sm uppercase tracking-[0.15em] hover:shadow-xl hover:shadow-amber-600/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                  Start Your Child's Journey
                </button>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* Footer spacer */}
        <div className="py-12" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');
        
        .font-display {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .font-body {
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Skillsbehindstudy;
