import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { FaHistory } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    gsap.fromTo(
      '.timeline-item',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.timeline-section',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.parallax-img',
      { yPercent: 20 },
      {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>About | KARTAR Construction</title>
        <meta
          name="description"
          content="Learn about KARTAR Construction, your trusted partner for custom garages and renovations in Calgary."
        />
      </Helmet>
      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-black text-center mb-12 flex items-center justify-center space-x-2"
          >
            <FaHistory /> <span>Our Journey</span>
          </motion.h1>
          <div className="timeline-section max-w-3xl mx-auto">
            {[
              { year: '2000', event: 'KARTAR Construction was founded with a passion for quality craftsmanship, focusing on residential garage projects.' },
              { year: '2010', event: 'Expanded our expertise to include large-scale commercial garage constructions.' },
              { year: '2020', event: 'Celebrated 20 years of excellence, delivering over 1000 projects in Calgary.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item flex items-center mb-16"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-24 text-2xl font-bold text-blue">{item.year}</div>
                <div className="flex-1 bg-gray/10 p-6 rounded-lg shadow-md">
                  <p className="text-gray text-lg">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="parallax-section mt-16 relative h-96 overflow-hidden rounded-lg">
            <img
              src="/assets/garage-hero.jpg"
              alt="Our work"
              className="parallax-img absolute w-full h-[120%] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;