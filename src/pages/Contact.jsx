import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Calgary Garage Builders</title>
        <meta
          name="description"
          content="Get in touch with Calgary Garage Builders for your garage project needs."
        />
      </Helmet>
      <section className="py-16 bg-gray min-h-screen">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-black text-center mb-12"
          >
            Connect With Us
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.form
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-black font-semibold mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-black font-semibold mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-black font-semibold mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                  rows="6"
                  required
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-orange text-white py-3 px-6 rounded-lg hover:bg-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-black mb-4">Visit Us</h3>
                <p className="text-gray mb-4">123 Builder St, Calgary, AB T2P 0A1</p>
                <p className="text-gray mb-4">Phone: +1-403-123-4567</p>
                <p className="text-gray mb-4">Email: info@calgarygaragebuilders.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.865!2d-114.0708!3d51.0486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTEuMDQ4NiwtMTE0LjA3MDg!5e0!3m2!1sen!2sca!4v1635781234567"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;