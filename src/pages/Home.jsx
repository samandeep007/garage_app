import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Tilt from 'react-parallax-tilt';
import { FaTools, FaBuilding, FaStar, FaEnvelope, FaQuoteLeft } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      '.feature-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      statsRef.current?.children,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <>
      <Helmet>
        <title>Home | KARTAR Construction</title>
        <meta
          name="description"
          content="Professional garage building services in Calgary. Custom garages, renovations, and commercial projects."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'KARTAR Construction',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Builder St',
              addressLocality: 'Calgary',
              addressRegion: 'AB',
              postalCode: 'T2P 0A1',
              addressCountry: 'CA',
            },
            telephone: '+1-403-123-4567',
          })}
        </script>
      </Helmet>
      <div
        className="bg-blue-800 text-white py-2 text-center text-lg font-semibold whitespace-nowrap overflow-hidden"
      >
        <div className="inline-block px-6 text-blue">
          🚧 Serving Calgary with Premium Garage Builds & Renovations since 2000 • Free Quotes Available • Trusted by 1000+ Clients • Quality You Can Count On 🚧
        </div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center perspective-1000">
        <Slider {...carouselSettings} className="w-full h-screen">
          {[
            { img: './src/assets/garage-hero.jpg', title: 'Build Your Dream Garage with KARTAR Construction', subtitle: 'Crafting exceptional garages in Calgary with precision and innovation since 2000.' },
            { img: './src/assets/garage-service1.jpg', title: 'Transform Your Space with Expert Renovations', subtitle: 'Modernize your garage with KARTAR’s innovative solutions.' },
            { img: './src/assets/garage-service2.jpg', title: 'Commercial Garages Built to Last', subtitle: 'Durable, high-capacity solutions for businesses in Calgary.' },
          ].map((slide, index) => (
            <div key={index} className="relative h-screen">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center max-w-7xl text-white z-10 transform-style-3d"
                  whileHover={{ rotateX: 5 }}
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <motion.div whileHover={{ scale: 1.05, rotateY: 10 }} className="transform-style-3d">
                    <Link
                      to="/contact"
                      className="inline-block bg-blue-600 text-white py-4 px-10 rounded-full max-w-sm text-lg font-semibold hover:bg-black transition-colors flex items-center justify-center space-x-2 mx-auto"
                    >
                      <FaEnvelope /> <span>Get a Free Quote</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className="features-section py-16 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 text-center mb-12"
          >
            Why Choose KARTAR Construction
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
            {[
              { title: 'Precision Craftsmanship', desc: 'Every detail is meticulously crafted to ensure the highest quality.', icon: <FaTools size={40} /> },
              { title: 'Innovative Designs', desc: 'We create bespoke solutions tailored to your unique needs.', icon: <FaBuilding size={40} /> },
              { title: 'Trusted Excellence', desc: 'Over 25 years of delivering exceptional projects in Calgary.', icon: <FaStar size={40} /> },
            ].map((feature) => (
              <Tilt key={feature.title} tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000}>
                <motion.div
                  className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center transform-style-3d"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                >
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.desc}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <div className="max-w-6xl w-full">
            <Slider {...testimonialSettings}>
              {[
                {
                  quote: "KARTAR Construction transformed our outdated garage into a modern masterpiece. Their attention to detail is unmatched!",
                  author: "John D., Calgary",
                },
                {
                  quote: "The team at KARTAR was professional and efficient. Our commercial garage project was completed ahead of schedule.",
                  author: "Sarah M., Business Owner",
                },
                {
                  quote: "I couldn’t be happier with my custom garage. KARTAR made the process seamless and the result is stunning.",
                  author: "Emily R., Homeowner",
                },
              ].map((testimonial, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center transform-style-3d perspective-1000"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ rotateX: 5, rotateY: 5 }}
                  >
                    <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
                    <p className="text-gray-700 text-center mb-4">{testimonial.quote}</p>
                    <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="py-16 bg-blue-800">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-black text-center mb-12"
          >
            Our Achievements
          </motion.h2>
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-center">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg transform-style-3d perspective-1000"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotateX: 5, rotateY: 5 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2 flex items-center justify-center space-x-2">
                <FaStar /> <span>25+</span>
              </div>
              <p className="text-gray-600">Years of Experience</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg transform-style-3d perspective-1000"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ rotateX: 5, rotateY: 5 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2 flex items-center justify-center space-x-2">
                <FaBuilding /> <span>1000+</span>
              </div>
              <p className="text-gray-600">Projects Completed</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg transform-style-3d perspective-1000"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ rotateX: 5, rotateY: 5 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2 flex items-center justify-center space-x-2">
                <FaStar /> <span>98%</span>
              </div>
              <p className="text-gray-600">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-col items-center perspective-1000">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 text-center mb-8"
          >
            Ready to Build Your Dream Garage?
          </motion.h2>
          <motion.div whileHover={{ scale: 1.05, rotateY: 10 }} className="transform-style-3d">
            <Link
              to="/contact"
              className="inline-block bg-blue text-white py-4 px-12 rounded-full text-lg font-semibold hover:bg-black transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <FaEnvelope /> <span>Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;