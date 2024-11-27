import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing some social media icons

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center justify-center  md:grid-cols-3 gap-8">
          {/* Services Section */}
          <div>
            <h6 className="footer-title text-xl font-semibold mb-4">Our Services</h6>
            <ul>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">24/7 Monitoring</a></li>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">Home Security Systems</a></li>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">Business Surveillance</a></li>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">Access Control Solutions</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h6 className="footer-title text-xl font-semibold mb-4">About VRV Security</h6>
            <ul>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">Press Kit</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h6 className="footer-title text-xl font-semibold mb-4">Legal</h6>
            <ul>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="link link-hover text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={30} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">&copy; 2024 VRV Security. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
