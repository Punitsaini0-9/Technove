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
                x: 100,                  // slide in from right
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.5,            // delay between each child element
                scrollTrigger: {
                    trigger: ".about-right",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            gsap.from(".why-content p", {
                x: -100,                  // slide in from right
                opacity: 0,
                duration: 1,
                ease: "power2.out",           // delay between each child element
                scrollTrigger: {
                    trigger: ".why-content",
                    toggleActions: "play none none none"
                }
            });

            gsap.from(".why-choose-section h1", {
                z: -50,                // slide in from right
                scale: 0,
                duration: 3,
                ease: "power2.out",           // delay between each child element
                scrollTrigger: {
                    trigger: ".why-choose-section",
                    toggleActions: "play none none none"
                }
            });
        });