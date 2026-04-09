import React from "react";

const cards = [
  {
    title: "Personal Profile Mapping",
    text: "A complete profile built around your inborn traits, strengths, and preferred growth style.",
  },
  {
    title: "Family Alignment Plan",
    text: "A practical plan to improve harmony, communication, and role clarity inside the family system.",
  },
  {
    title: "Career Direction Blueprint",
    text: "Structured recommendations that connect your natural abilities with long-term career fit.",
  },
];

const CustomisedServices = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F2E15] py-20 sm:py-24 lg:py-28 xl:py-36">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14 xl:max-w-440">
        <div className="mb-12 text-center">
          <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.5em] text-[#c9a86c]/84">
            Customised Services
          </p>
          <h2
            className="text-[clamp(2rem,4.2vw,3.4rem)] font-light leading-[1.14] text-[#fff8ef] 2xl:text-[clamp(2.5rem,3.9vw,4.1rem)]"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
          >
            Built specifically for your <em className="italic text-[#c9a86c]">uniqueness</em>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[0.92rem] leading-[1.88] text-[rgba(255,248,236,0.62)] xl:text-[1rem]">
            Every recommendation is tailored to your profile so your progress feels natural, clear, and sustainable.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm transition hover:border-[#c9a86c]/35 hover:bg-white/6 xl:p-7"
            >
              <h3
                className="text-[1.12rem] font-light text-[#fff8ef] xl:text-[1.28rem]"
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                {card.title}
              </h3>
              <p className="mt-3 text-[0.86rem] leading-[1.8] text-[rgba(255,248,236,0.62)] xl:text-[0.94rem]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomisedServices;