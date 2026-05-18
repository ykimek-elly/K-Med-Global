// kmed-i18n.jsx — Language toggle (EN ↔ KO) for client review
// Reads ?lang=ko from URL, falls back to 'en'. Pages opt-in via useKmedLang() + local T dict.

const KMED_LANG_EVENT = "kmed:lang";

const getKmedLang = () => {
  try {
    const lang = new URLSearchParams(window.location.search).get("lang");
    return lang === "ko" ? "ko" : "en";
  } catch (e) { return "en"; }
};

const setKmedLang = (next) => {
  const url = new URL(window.location.href);
  if (next === "ko") url.searchParams.set("lang", "ko");
  else url.searchParams.delete("lang");
  window.history.pushState({}, "", url);
  window.dispatchEvent(new CustomEvent(KMED_LANG_EVENT, { detail: next }));
};

const useKmedLang = () => {
  const [lang, setLang] = React.useState(() => getKmedLang());
  React.useEffect(() => {
    const onChange = () => setLang(getKmedLang());
    window.addEventListener(KMED_LANG_EVENT, onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener(KMED_LANG_EVENT, onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);
  return lang;
};

// tk(T, lang) — pick localized dictionary, fall back to en
const tk = (T, lang) => (T && T[lang]) || (T && T.en) || {};

const LanguageToggle = ({ compact = false }) => {
  const lang = useKmedLang();
  const pad = compact ? "4px 9px" : "5px 11px";
  const fs = compact ? 11 : 12;
  const item = (code, label) => (
    <button
      key={code}
      onClick={(e) => { e.preventDefault(); setKmedLang(code); }}
      style={{
        padding: pad,
        borderRadius: 999,
        font: `700 ${fs}px "Lato", system-ui, sans-serif`,
        letterSpacing: "0.02em",
        cursor: "pointer",
        border: 0,
        color: lang === code ? "#fff" : "var(--kmed-navy, #00579B)",
        background: lang === code ? "var(--kmed-navy, #00579B)" : "transparent",
        transition: "background .15s ease, color .15s ease",
      }}
      aria-pressed={lang === code}
    >{label}</button>
  );
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: 2,
      border: "1px solid var(--kmed-line, rgba(0,0,0,0.08))",
      borderRadius: 999,
      background: "#fff",
    }}>
      {item("en", "EN")}
      {item("ko", "한국어")}
    </span>
  );
};

// ---------- Category jump (Home → Treatments listing) ----------
// Stable language-independent keys used to identify treatment categories.
const KMED_CAT_KEYS = ["all", "dermatology", "plastic", "screening", "orthopedics", "oncology", "fertility", "dental"];
const KMED_CATJUMP_EVENT = "kmed:jump-to-category";

const kmedJumpToCategory = (catKey) => {
  // Notify the Treatments listing component (lives anywhere on the page)
  window.dispatchEvent(new CustomEvent(KMED_CATJUMP_EVENT, { detail: catKey }));
  // Scroll the Treatments DCSection (id="treat" in index.html canvas) into view.
  // On standalone pages where that element does not exist, this no-ops.
  const target = document.getElementById("treatments-listing") || document.getElementById("treat");
  if (target && target.scrollIntoView) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

Object.assign(window, {
  useKmedLang, setKmedLang, getKmedLang, LanguageToggle, tk,
  KMED_CAT_KEYS, KMED_CATJUMP_EVENT, kmedJumpToCategory,
});
