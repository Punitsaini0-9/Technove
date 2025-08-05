window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".hero-heading", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".hero-subheading", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });

  gsap.from(".getbtn", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power2.out",
  });

  gsap.from(".about-right > * ", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".about-right",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".why-heading", {
    x: -100,
    opacity: 0,
    duration: 3,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".why-heading",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".why-content p", {
    x: -100,
    opacity: 0,
    duration: 3,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".why-content",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".fade-in", {
    z: -50,
    scale: 0,
    duration: 3,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".export-left",
      toggleActions: "play none none none",
    },
  });
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".brand-content",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  })
  .from(".brand-content h1", { x: -100, opacity: 0, duration: 0.6 })
  .from(".brand-content h5", { x: -100, opacity: 0, duration: 0.6 }, "+=0.2")
  .from(".brand-content p", { x: -100, opacity: 0, duration: 0.6 }, "+=0.2")
  .from(".brand-content a", { x: -100, opacity: 0, duration: 0.6 }, "+=0.2");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".solution-section-container",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  })
  .from(".solution-section-container h2", { z: -50, scale: 0, duration: 0.6 })
  .from(
    ".solution-section-container h3",
    { z: -50, scale: 0, duration: 0.6 },
    "+=0.2"
  );

gsap.utils.toArray(".service-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: ".services-grid",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
    delay: i * 0.2, // stagger effect
  });
});

gsap.from(".industries-content > * ", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".industries-content",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

gsap.utils.toArray(".icon-item").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: ".icon-item",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
    delay: i * 0.2, // stagger effect
  });
});

gsap.from(".testimonial > * ", {
  x: -100,
  scale: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".testimonial",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

gsap.from(".trans-content > * ", {
  z: -100,
  scale: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".trans-content",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

gsap.from(".section-header ", {
  y: -50,
  scale: 0,
  duration: 1,
  ease: "power2.out",
    // stagger: 0.5,
  scrollTrigger: {
    trigger: ".section-header",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

// gsap.from(".section-header > * ", {
//   y: -50,
//   scale: 0,
//   duration: 1,
//   ease: "power2.out",
//     // stagger: 0.5,
//   scrollTrigger: {
//     trigger: ".section-header",
//     start: "top 80%",
//     toggleActions: "play none none none",
//   },
// });

gsap.utils.toArray(".tech-item").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: ".tech-item",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
    delay: i * 0.2, // stagger effect
  });
});

// gsap.from(".main-heading", {
//   y: -50,
//   scale: 0,
//   duration: 1,
//   ease: "power2.out",
// //   stagger: 0.5,
//   scrollTrigger: {
//     trigger: ".main-heading",
//     start: "top 80%",
//     toggleActions: "play none none none",
//   },
// });
