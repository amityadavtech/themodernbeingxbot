import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white py-10" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo and About Section */}
          <section aria-labelledby="footer-logo">
            <Link href="/" aria-label="BeingxBot Homepage">
              <h2 id="footer-logo" className="text-2xl font-extrabold">
                Being<span className="text-[var(--primary-color)]">x</span>Bot
              </h2>
            </Link>
            <p className="mt-4 text-gray-300">
              Delivering exceptional websites and digital solutions with passion and precision.
            </p>
          </section>

          {/* Quick Links Section */}
          <nav aria-labelledby="footer-links">
            <h3 id="footer-links" className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" aria-label="Home Page">
                  <span className="hover:text-[#6366F1] transition duration-300 cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="about" aria-label="About BeingxBot">
                  <span className="hover:text-[#6366F1] transition duration-300 cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="plans&services" aria-label="Our Services">
                  <span className="hover:text-[#6366F1] transition duration-300 cursor-pointer">
                    Plans&Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="contact" aria-label="Contact Page">
                  <span className="hover:text-[#6366F1] transition duration-300 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="faqs" aria-label="Faqs">
                  <span className="hover:text-[#6366F1] transition duration-300 cursor-pointer">
                    Faqs
                  </span>
                </Link>
              </li>
              <li>
                <Link href="request-quote" aria-label="Request Quote">
                  <span className="hover:text-[#6366F1] transition duration-300 cursor-pointer">
                    Request a Quote
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media Section */}
          <section aria-labelledby="social-media">
            <h3 id="social-media" className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/amityadavtech" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="p-3 bg-[var(--primary-color)] rounded-full hover:bg-[#6366F1] transition duration-300">
                  <FaGithub size={20} aria-hidden="true" />
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="p-3 bg-[var(--primary-color)] rounded-full hover:bg-[#6366F1] transition duration-300">
                  <FaTwitter size={20} aria-hidden="true" />
                </div>
              </Link>
              <Link href="https://instagram.com/beingxbot" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="p-3 bg-[var(--primary-color)] rounded-full hover:bg-[#6366F1] transition duration-300">
                  <FaInstagram size={20} aria-hidden="true" />
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="p-3 bg-[var(--primary-color)] rounded-full hover:bg-[#6366F1] transition duration-300">
                  <FaLinkedinIn size={20} aria-hidden="true" />
                </div>
              </Link>
            </div>
          </section>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BeingxBot. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
