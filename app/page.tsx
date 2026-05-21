import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiGlobe,
  FiMapPin,
  FiShield,
  FiStar,
  FiTruck,
} from "react-icons/fi";

const categories = [
  {
    title: "Football Jerseys",
    subtitle: "Home, away, retro, and fan editions.",
  },
  {
    title: "Men's Modern Wear",
    subtitle: "Sharp everyday fits with clean structure.",
  },
  {
    title: "Women's Fashion",
    subtitle: "Comfort-led pieces with current silhouettes.",
  },
  {
    title: "Couple & Group Looks",
    subtitle: "Coordinated styles for teams, friends, and events.",
  },
];

const highlights = [
  "Premium jersey fabric with breathable comfort",
  "Modern fits for men and women",
  "Reliable nationwide delivery across Bangladesh",
  "Trend-focused collections without compromising quality",
];

const reasons = [
  {
    title: "Quality First",
    description:
      "Pieces selected for feel, stitching quality, and repeat wear, not just shelf appeal.",
    icon: FiShield,
  },
  {
    title: "Fast Delivery",
    description:
      "Dhaka to district towns, orders are built for smooth handoff and dependable delivery.",
    icon: FiTruck,
  },
  {
    title: "Style With Comfort",
    description:
      "Sports energy and modern streetwear attitude, balanced with easy day-long comfort.",
    icon: FiStar,
  },
];

const stats = [
  { value: "All Over", label: "Bangladesh delivery coverage" },
  { value: "Men + Women", label: "Curated collections for both" },
  { value: "Quality | Comfort | Trend", label: "Brand promise in every drop" },
];

const steps = [
  {
    title: "Pick Your Look",
    copy: "Choose jerseys, fashion basics, or statement pieces that match your style.",
  },
  {
    title: "Place the Order",
    copy: "Send your order through the shop flow and confirm the details in minutes.",
  },
  {
    title: "Receive Anywhere",
    copy: "Your package is dispatched for delivery anywhere in Bangladesh.",
  },
];

export default function Home() {
  return (
    <main className="bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(197,44,30,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(243,176,52,0.18),_transparent_30%)]" />
        <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[var(--color-gold)]/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-[var(--color-red)]/15 blur-3xl" />
        <div className="relative mx-auto grid min-h-[calc(100vh-10rem)] max-w-screen-2xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-red)] backdrop-blur">
              <FiMapPin className="text-sm" />
              lumesbd.shop
            </p>
            <div className="space-y-6">
              <p className="font-bengali text-lg font-semibold text-[var(--color-red)]">
                লুমেস
              </p>
              <h1 className="font-display text-6xl uppercase leading-[0.92] text-[var(--color-ink)] sm:text-7xl lg:text-8xl">
                Light Up
                <span className="block text-[var(--color-red)]">Your Style</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-black/72 sm:text-xl">
                Premium Jerseys &amp; Modern Fashion for Men &amp; Women.
                Performance energy, clean silhouettes, and everyday comfort for
                customers across Bangladesh.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-red)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--color-red-dark)]"
              >
                Shop The Drop
                <FiArrowRight />
              </Link>
              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)] transition hover:border-[var(--color-red)] hover:text-[var(--color-red)]"
              >
                Explore Collections
              </a>
            </div>
            <ul className="mt-10 grid gap-3 text-sm font-medium text-black/75 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/70 px-4 py-4 backdrop-blur">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-base text-[var(--color-red)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center">
            <div className="grid w-full gap-4 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-black/10 bg-[var(--color-ink)] p-8 text-white shadow-[0_30px_80px_rgba(26,22,18,0.18)] lg:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  Brand Bio
                </p>
                <p className="mt-5 text-3xl font-semibold leading-tight">
                  Quality pieces that move from matchday mood to everyday street style.
                </p>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/74">
                  Built around three standards: quality, comfort, and trend. Every
                  collection is shaped to feel current without losing wearability.
                </p>
              </div>
              <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(26,22,18,0.08)]">
                <FiTruck className="text-3xl text-[var(--color-red)]" />
                <p className="mt-5 text-2xl font-semibold">Nationwide Delivery</p>
                <p className="mt-3 text-sm leading-7 text-black/68">
                  Orders are handled for customers in Dhaka and all over Bangladesh.
                </p>
              </div>
              <div className="rounded-[2rem] border border-black/10 bg-[var(--color-sand)] p-7 shadow-[0_20px_60px_rgba(26,22,18,0.08)]">
                <FiClock className="text-3xl text-[var(--color-red)]" />
                <p className="mt-5 text-2xl font-semibold">Trend-Ready Drops</p>
                <p className="mt-3 text-sm leading-7 text-black/68">
                  Fresh arrivals for sportswear fans and modern casual wardrobes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white/65 py-6">
        <div className="mx-auto grid max-w-screen-2xl gap-6 px-6 lg:grid-cols-3 lg:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-black/8 bg-white px-6 py-5 shadow-[0_10px_30px_rgba(26,22,18,0.05)]">
              <p className="font-display text-3xl uppercase text-[var(--color-red)]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-black/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-screen-2xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-red)]">
              Collections
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              Built For Matchday, Streetwear, And Everyday Confidence
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-black/70">
            LUMES BD combines football culture with wearable modern fashion for men and women.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <article
              key={category.title}
              className={`group rounded-[2rem] border border-black/10 p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(26,22,18,0.12)] ${
                index % 2 === 0 ? "bg-white" : "bg-[var(--color-sand)]"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-red)]">
                0{index + 1}
              </p>
              <h3 className="mt-10 text-2xl font-semibold">{category.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/68">
                {category.subtitle}
              </p>
              <div className="mt-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-ink)] transition group-hover:text-[var(--color-red)]">
                View style direction
                <FiArrowRight />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white">
        <div className="mx-auto grid max-w-screen-2xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Why LUMES BD
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              Premium Feel Without Losing Everyday Practicality
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/72">
              The brand sits between fan culture and modern wardrobe essentials:
              polished enough to stand out, comfortable enough to wear often.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[2rem] border border-white/12 bg-white/6 p-6 backdrop-blur"
              >
                <reason.icon className="text-3xl text-[var(--color-gold)]" />
                <h3 className="mt-8 text-2xl font-semibold">{reason.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.5rem] bg-[linear-gradient(145deg,#c52c1e,#8d1c12)] p-10 text-white shadow-[0_35px_90px_rgba(141,28,18,0.28)]">
            <FiGlobe className="text-4xl text-[var(--color-gold)]" />
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-white/72">
              Bangladesh Focused
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              Delivery All Over Bangladesh
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/78">
              From city customers to district deliveries, the store is positioned for
              nationwide reach with fashion that travels well and wears even better.
            </p>
          </div>
          <div className="grid gap-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(26,22,18,0.06)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-sand)] font-display text-2xl text-[var(--color-red)]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/68">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[var(--color-sand)] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <p className="font-bengali text-lg font-semibold text-[var(--color-red)]">
            লুমেস • Light Up Your Style
          </p>
          <h2 className="mt-5 font-display text-5xl uppercase leading-none text-[var(--color-ink)] sm:text-6xl">
            Ready To Wear Something Better?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/70">
            Shop premium jerseys and modern fashion with a clean, confident edge.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black"
            >
              Enter The Shop
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full border border-black/15 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] transition hover:border-[var(--color-red)] hover:text-[var(--color-red)]"
            >
              Join The Community
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
