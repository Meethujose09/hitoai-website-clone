import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './contact.css'; // Ensure you include your CSS file for styling

export default function Contact() {
  return (
    <footer className="footer bg-[#081944] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-3">Contact Us</h4>
            <p className="text-sm">
              HITOAI Limited<br />
              Sandyford, Dublin 18<br />
              Dublin, Ireland
            </p>
            <p className="mt-3 text-sm">
              <FontAwesomeIcon icon={faPhone} /> <span className="ml-2">+353 89 983 2147</span><br />
              <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@hitoai.com" className="ml-2 underline hover:text-blue-400">info@hitoai.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/updates" className="hover:text-blue-400">Updates</a></li>
              <li><a href="/contactmail" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.linkedin.com/company/hitoai-limited/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom text-center mt-8 text-sm bg-[#081944]">
          <p>&copy; 2024 HitoAI - All Rights Reserved.</p>
          <p className="mt-2">
            &copy; INTELLECTUAL PROPERTY RIGHTS: All The Videos, Demos, Drawings, Graphics And Text Are The Works Of HitoAI Limited And Are Protected By Copyright. No Part Of These Works May Be Reproduced Without Permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
