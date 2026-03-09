import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    {/* Centered Logo */}
                    <Link href="/" className="footer-logo">
                        <img src="/logo.png" alt="Deep Pariwar" className="footer-logo__img" />
                        <span className="footer-logo__text">Pariwar</span>
                    </Link>

                    {/* Company Description */}
                    <p className="footer-desc">
                        From India&apos;s finest fields to your kitchen — crafted with care, purity, and generations of tradition. Your trusted partner for premium nutritional staples.
                    </p>

                    {/* Horizontal Navigation */}
                    <nav className="footer-nav">
                        <Link href="/">Home</Link>
                        <span className="footer-nav-dot"></span>
                        <Link href="/about">About</Link>
                        <span className="footer-nav-dot"></span>
                        <Link href="/shop">Shop</Link>
                        <span className="footer-nav-dot"></span>
                        <Link href="/recipes">Recipes</Link>
                        <span className="footer-nav-dot"></span>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <div className="footer-contact-item">
                            <FaMapMarkerAlt className="footer-contact-icon" />
                            <span>123 Heritage Lane, Industrial Area, New Delhi, India 110001</span>
                        </div>
                        <div className="footer-contact-row">
                            <div className="footer-contact-item">
                                <FaPhoneAlt className="footer-contact-icon" />
                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </div>
                            <div className="footer-contact-item">
                                <FaEnvelope className="footer-contact-icon" />
                                <a href="mailto:hello@deeppariwar.com">hello@deeppariwar.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Deep Pariwar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;