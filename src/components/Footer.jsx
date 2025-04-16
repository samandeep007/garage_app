import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white py-12"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-300 mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> KARTAR Construction
          </h3>
          <p className="text-gray">
            Premium garage solutions since 2000, delivering craftsmanship and innovation in Calgary.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-gray hover:text-blue transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <FaPhone className="mr-2" /> Contact Info
          </h4>
          <p className="text-gray flex items-center space-x-2"><FaMapMarkerAlt /> <span>123 Builder St, Calgary, AB T2P 0A1</span></p>
          <p className="text-gray flex items-center space-x-2"><FaPhone /> <span>Phone: +1-403-123-4567</span></p>
          <p className="text-gray flex items-center space-x-2"><FaEnvelope /> <span>Email: info@calgarygaragebuilders.com</span></p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
            <FaFacebook className="mr-2" /> Follow Us
          </h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray hover:text-blue transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray hover:text-blue transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray">
        © {new Date().getFullYear()} KARTAR Construction. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer;