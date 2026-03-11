import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    {/* Centered Logo */}
                    <Link href="/" className="footer-logo">
                        <Image src="/logo.webp" alt="Deep Pariwar" className="footer-logo__img" width={40} height={40} />
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
                        <Link href="/blogs">Blogs</Link>
                        <span className="footer-nav-dot"></span>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <div className="footer-contact-item">
                            <FaMapMarkerAlt className="footer-contact-icon" />
                            <span>S.D Enterprises, Near Bright Public School, Khurja</span>
                        </div>
                        <div className="footer-contact-row">
                            <div className="footer-contact-item">
                                <FaPhoneAlt className="footer-contact-icon" />
                                <Link href="tel:+918126629159">+91 81266 29159</Link>
                            </div>
                            <div className="footer-contact-item">
                                <FaEnvelope className="footer-contact-icon" />
                                <Link href="mailto:pariwaratta@gmail.com">pariwaratta@gmail.com</Link>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="footer-socials">
                        <Link href="https://www.facebook.com/p/deeppariwar-100084292295201/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                        </Link>
                        <Link href="https://www.instagram.com/deeppariwar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </Link>
                        <Link href="https://www.youtube.com/@DeepPariwar1" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FaYoutube />
                        </Link>
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