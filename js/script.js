"use strict";

/////// Aggiungiamo il gestori di eventi ai bottoni di apertura e chiusura del menu in modalità mobile
[
  document.querySelector('.icon-mobile-nav[name="menu-outline"]'),
  document.querySelector('.icon-mobile-nav[name="close-outline"]'),
].forEach((el) =>
  el.addEventListener("click", () => {
    document.querySelector(".header-hero").classList.toggle("nav-open");
  })
);
//////////////////////////////////////////////////////////////////////

// Si può semplicemnte impostare il target e nel tag 'html impostare la proprietà 'scroll-behavior: smooth'

const btns = document.querySelectorAll("a:link");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(el);
    const tag = el.getAttribute("href");
    if (tag === "#") {
      // In questo modo ritorna all'inizio pagina
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        block: "nearest",
        inline: "end",
      });
    } else {
      document.querySelector(`.section-${tag.slice(1)}`).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
      });
    }

    // Chiudiamo il menu di navigazione quando il click avviene dai link della navigazione in modalità mobile
    if (el.classList.contains("navigation-link"))
      document.querySelector(".header-hero").classList.toggle("nav-open");
  });
});

//////////////////////////////////////////////////////////

///// Aggiungiamo la modalità sticky al menu di navigazione

const sectionHero = document.querySelector(".section-hero");

const obsOpts = {
  root: null, // Se null, l'intersezione dell'oggetto target sarà con la viewport
  threshold: 0, // Vogliamo attivare l'emento appena la sezione esce dalla viewport
  rootMargin: "-80px",
};

const observer = new IntersectionObserver(function (entries) {
  const [entry] = entries;
  console.log(entry);

  !entry.isIntersecting && document.body.classList.add("sticky-nav");
  entry.isIntersecting && document.body.classList.remove("sticky-nav");
}, obsOpts);
observer.observe(sectionHero);
