import { React, useEffect, useRef } from "react";

import "./About.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Box from "../../components/Box";
import Circle from "../../components/Circle";

const About = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const boxes = component.current.querySelectorAll(".circle");

      boxes.forEach((circle, i) => {
        gsap.to(circle, {
          x: -100,

          scrollTrigger: {
            trigger: circle,

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
          trigger: ".box",

          start: "center center",
          end: "+=100%",

          scrub: true,
          pin: true,

          markers: true,
          refreshPriority: 1
        }
      });

      tl.to(".box", {
        x: 100
      })
        .to(".box", {
          x: -200
        })
        .to(".box", {
          x: 0
        });

      ScrollTrigger.refresh();

      console.log("About ScrollTriggers created.");
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="about">
      <Circle />
      <Box />
      <Circle />
    </section>
  );
};

export default About;
