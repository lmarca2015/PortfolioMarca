import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CompanyLogo from "./CompanyLogo.jsx";

const projectKeys = [
  "tribal", "consubanco", "bci", "mindshore", "tata",
  "peigo", "encora", "thinkup", "tismart", "coderio",
  "izipay"
];
const projectMeta = {
  tribal:     { year: "2026 - 2026",    country: "Guatemala", flag: "\u{1F1EC}\u{1F1F9}", tags: ["React Native", "Flutter", "iOS", "Mobile"] },
  consubanco: { year: "2025 - 2026",    country: "Mexico",    flag: "\u{1F1F2}\u{1F1FD}", tags: ["React Native", "Banking", "Payments"] },
  bci:        { year: "2025 - 2025",    country: "Chile",     flag: "\u{1F1E8}\u{1F1F1}", tags: ["iOS", "Banking", "Payments"] },
  tata:       { year: "2024 - 2025",    country: "India",     flag: "\u{1F1EE}\u{1F1F3}", tags: ["iOS", "SwiftUI", "Enterprise"] },
  peigo:      { year: "2024 - 2024",    country: "Ecuador",   flag: "\u{1F1EA}\u{1F1E8}", tags: ["iOS", "SwiftUI", "Firebase", "Fintech"] },
  mindshore:  { year: "2023 - 2024",    country: "España",    flag: "\u{1F1F5}\u{1F1EA}", tags: ["Kotlin Multi Platform", "Mobile"] },
  encora:     { year: "2023 - 2023",    country: "USA",       flag: "\u{1F1FA}\u{1F1F8}", tags: ["iOS", "UIKit", "SwiftUI", "Mobile"] },
  thinkup:    { year: "2021 - 2022",    country: "Uruguay",   flag: "\u{1F1FA}\u{1F1FE}", tags: ["iOS", "Android", "Firebase", "Mobile"] },
  tismart:    { year: "2021 - 2021",    country: "Peru",      flag: "\u{1F1F5}\u{1F1EA}", tags: ["React Native", "Mobile"] },
  coderio:    { year: "2020 - 2021",    country: "Argentina", flag: "\u{1F1E6}\u{1F1F7}", tags: ["iOS", "Objective C", "Swift", "UIKit", "Mobile"] },
  izipay:     { year: "2014 - 2020",    country: "Peru",      flag: "\u{1F1F5}\u{1F1EA}", tags: ["iOS", "Objective C", "Swift", "UIKit", "Payments"] },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ThemeToggle({ theme, setTheme, t }) {
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
    >
      {theme === "dark" ? t("theme.light") : t("theme.dark")}
    </button>
  );
}

function LangToggle() {
  const { i18n } = useTranslation();
  const other = i18n.language === "es" ? "en" : "es";
  return (
    <button
      onClick={() => i18n.changeLanguage(other)}
      aria-label="Change language"
      className="rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
    >
      {i18n.language === "es" ? "EN" : "ES"}
    </button>
  );
}

export default function App() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return (
    <div className="min-h-screen w-full">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/60 dark:border-neutral-800/60">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-2xl italic">
            {/* luis<span className="text-neutral-400">.</span> */}
          </a>
          <div className="flex items-center gap-5 text-sm">
            <a href="#work" className="hover:opacity-60 transition">{t("nav.work")}</a>
            <a href="#about" className="hover:opacity-60 transition">{t("nav.about")}</a>
            <a href="#contact" className="hover:opacity-60 transition">{t("nav.contact")}</a>
            <LangToggle />
            <ThemeToggle theme={theme} setTheme={setTheme} t={t} />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm uppercase tracking-[0.2em] text-neutral-500"
        >
          {t("hero.eyebrow")}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6 font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight"
        >
          {t("hero.title1")}
          <br />
          <span className="italic text-neutral-500">{t("hero.title2")}</span>
          <br />
          {t("hero.title3")}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-10 max-w-xl text-lg text-neutral-600 dark:text-neutral-400"
        >
          {t("hero.description")}
        </motion.p>
      </section>

      {/* Work */}
      <section
        id="work"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{t("work.title")}</h2>
          <span className="text-sm font-light text-neutral-400 tracking-wide">
            {t("work.count", { count: projectKeys.length })}
          </span>
        </div>

        <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {projectKeys.map((key, i) => {
            const meta = projectMeta[key];
            const title = t(`projects.${key}.title`);
            const href = t(`projects.${key}.href`);
            const logo = t(`projects.${key}.logo`);
            return (
              <motion.li
                key={key}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i}
                className="group relative"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 inset-y-2 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/60 opacity-0 scale-[0.98] group-hover:opacity-100 group-hover:scale-100 transition duration-500 ease-out"
                />
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col md:grid md:grid-cols-12 gap-4 py-8 px-4 md:px-0 md:items-center"
                >
                  {/* Mobile header: logo + year + role */}
                  <div className="flex items-center justify-between md:hidden">
                    <CompanyLogo src={logo} alt={title} size={32} />
                    <div className="flex flex-col items-end gap-1 text-sm text-neutral-500">
                      <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className="text-base leading-none">{meta.flag}</span>
                        {meta.year}
                      </span>
                      <span>{t(`projects.${key}.role`)}</span>
                    </div>
                  </div>

                  {/* Desktop year + flag + logo */}
                  <div className="hidden md:flex md:col-span-2 items-center gap-2 pl-4 whitespace-nowrap">
                    <span className="text-base leading-none">{meta.flag}</span>
                    <span className="text-sm font-light text-neutral-400 tracking-wide">
                      {meta.year}
                    </span>
                  </div>
                  <div className="hidden md:flex md:col-span-1 justify-center">
                    <CompanyLogo src={logo} alt={title} size={32} />
                  </div>

                  <div className="md:col-span-6">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-xl font-light">
                      {t(`projects.${key}.description`)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium uppercase tracking-widest px-3 py-1 bg-neutral-100 dark:bg-neutral-800/60 text-neutral-500 dark:text-neutral-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="hidden md:block md:col-span-3 text-right text-sm font-light text-neutral-400 tracking-wide pr-4">
                    {t(`projects.${key}.role`)}
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-200 dark:border-neutral-800 grid md:grid-cols-12 gap-8"
      >
        <h2 className="col-span-4 font-display text-5xl">{t("about.title")}</h2>
        <div className="col-span-8 space-y-6 text-lg text-neutral-700 dark:text-neutral-300">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-32 border-t border-neutral-200 dark:border-neutral-800 text-center"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          {t("contact.eyebrow")}
        </p>
        <h2 className="mt-6 font-display text-6xl md:text-8xl italic">
          {t("contact.title")}
        </h2>
        <a
          href="mailto:luisfmz26@gmail.com"
          className="inline-block mt-10 text-2xl underline underline-offset-8 hover:opacity-60 transition"
        >
          luisfmz26@gmail.com
        </a>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 flex justify-between text-sm text-neutral-500 border-t border-neutral-200 dark:border-neutral-800">
        <span>© 2026 Luis Marca</span>
        <div className="flex gap-6">
          <a href="#" className="hover:opacity-60">GitHub</a>
          <a href="https://www.linkedin.com/in/luis-felipe-marca-zapata-26184b124/" className="hover:opacity-60">LinkedIn</a>
          <a href="#" className="hover:opacity-60">↑</a>
        </div>
      </footer>
    </div>
  );
}
