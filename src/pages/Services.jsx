import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  useEffect(() => {
    gsap.fromTo(
      '.service-card',
      { opacity: 0, rotateY: 90 },
      {
        opacity: 1,
        rotateY: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Services | Calgary Garage Builders</title>
        <meta
          name="description"
          content="Explore our garage building services in Calgary, including custom designs, renovations, and commercial projects."
        />
      </Helmet>
      <section className="py-16 bg-gray-900 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-black text-center mb-12"
          >
            Our Services
          </motion.h1>
          <div className="services-section grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
            {[
              { title: 'Custom Garages', img: '/assets/garage-service1.jpg', desc: 'Bespoke designs tailored to your needs.', link: '#custom-garages' },
              { title: 'Renovations', img: '/assets/garage-service2.jpg', desc: 'Modernize your existing garage.', link: '#renovations' },
              { title: 'Commercial Projects', img: '/assets/garage-hero.jpg', desc: 'Robust solutions for businesses.', link: '#commercial' },
            ].map((service) => (
              <motion.div
                key={service.title}
                className="service-card relative group bg-white rounded-lg shadow-lg overflow-hidden transform-style-3d"
                whileHover={{ rotateY: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-gray mb-4">{service.desc}</p>
                  <Link
                    to={`/services${service.link}`}
                    className="inline-block bg-orange text-white py-2 px-4 rounded-lg hover:bg-black transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;