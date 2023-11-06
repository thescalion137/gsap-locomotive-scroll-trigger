import { React, useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./Hero.css";

import Box from "../../components/Box";
import Circle from "../../components/Circle";

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const boxes = component.current.querySelectorAll(".box");

      boxes.forEach((box, i) => {
        gsap.to(box, {
          x: 100,

          scrollTrigger: {
            trigger: box,

            start: "top center",
            end: "bottom center",

            toggleActions: "play none none reverse",

            markers: true
          }
        });
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "none"
        },

        scrollTrigger: {
          trigger: ".circle",

          start: "center center",
          end: "+=100%",

          scrub: true,
          pin: true,

          markers: true,
          refreshPriority: 2
        }
      });

      tl.to(".circle", {
        x: -100
      })
        .to(".circle", {
          x: 200
        })
        .to(".circle", {
          x: 0
        });

      ScrollTrigger.refresh();

      console.log("Hero ScrollTriggers created.");
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="hero">
      <Box />
      <Circle />
      <Box />
    </section>
  );
};

export default Hero;
