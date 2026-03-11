'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHero from '../components/layout/PageHero';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { MdAccessTime, MdOutlineInventory2 } from 'react-icons/md';
import { BsPeopleFill, BsMegaphoneFill } from 'react-icons/bs';

const contactCards = [
    {
        icon: <MdOutlineInventory2 size={28} />,
        title: 'Product & Quality',
        desc: 'Questions about our products or quality standards.',
    },
    {
        icon: <BsPeopleFill size={28} />,
        title: 'Distributors',
        desc: 'Interested in distributing Deep Pariwar products?',
        cta: 'Become a Partner →',
    },
    {
        icon: <BsMegaphoneFill size={28} />,
        title: 'Media & Marketing',
        desc: 'Brand collaborations or media inquiries.',
    },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', state: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();

            if (result.success) {
                setSent(true);
                setForm({ name: '', email: '', phone: '', city: '', state: '', message: '' });
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email. Check console for details.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email.');
        }
    };

    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="We&apos;d love to hear from you"
                bg="/contact-bg.webp"
            />

            <section className="contact-section">
                <div className="container">

                    {/* Category cards */}
                    <div className="contact-cards-bg">
                        <div className="contact-cards">
                            {contactCards.map((card, i) => (
                                <div key={i} className="contact-card">
                                    <span className="contact-card__icon">{card.icon}</span>
                                    <h3 className="contact-card__title">{card.title}</h3>
                                    <p className="contact-card__desc">{card.desc}</p>
                                    {card.cta && (
                                        <Link href="mailto:pariwaratta@gmail.com" className="contact-card__cta">
                                            {card.cta}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main grid — form + info */}
                    <div className="contact-grid">

                        {/* Form */}
                        <div className="contact-form-wrap">
                            <h2 className="contact-form__heading">Send Us a Message</h2>

                            {sent ? (
                                <div className="contact-success">
                                    <span className="contact-success__icon">✓</span>
                                    <p>Thank you! We&apos;ll get back to you within 24&ndash;48 working hours.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="contact-form__row">
                                        <div className="contact-form__field">
                                            <label htmlFor="name">Your Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder="Rahul Sharma"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="contact-form__field">
                                            <label htmlFor="email">Your Email</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="rahul@example.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-form__row">
                                        <div className="contact-form__field">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="contact-form__field">
                                            <label htmlFor="city">City</label>
                                            <input
                                                id="city"
                                                name="city"
                                                type="text"
                                                placeholder="e.g. Mumbai"
                                                value={form.city}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-form__field">
                                        <label htmlFor="state">State</label>
                                        <input
                                            id="state"
                                            name="state"
                                            type="text"
                                            placeholder="e.g. Maharashtra"
                                            value={form.state}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-form__field">
                                        <label htmlFor="message">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            placeholder="Tell us how we can help..."
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <p className="contact-form__note">
                                        ⏱ We usually respond within 24–48 working hours
                                    </p>
                                    <button type="submit" className="contact-form__btn">
                                        Send Message <IoMdSend size={18} />
                                    </button>
                                </form>
                            )}

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/918126629159"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-whatsapp"
                            >
                                <FaWhatsapp size={22} />
                                Prefer quick support? Chat with us on WhatsApp
                            </a>
                        </div>

                        {/* Info sidebar */}
                        <aside className="contact-info">
                            <div className="contact-info__block">
                                <h3 className="contact-info__heading">Our Office</h3>
                                <div className="contact-info__item">
                                    <FaMapMarkerAlt className="contact-info__icon" />
                                    <div>
                                        <strong>SD ENTERPRISES</strong>
                                        <span>Near Bright Public School, Khurja, 203131, India</span>
                                    </div>
                                </div>
                                <div className="contact-info__item">
                                    <FaPhoneAlt className="contact-info__icon" />
                                    <div>
                                        <strong>Phone</strong>
                                        <Link href="tel:+918126629159">+91 81266 29159</Link>
                                    </div>
                                </div>
                                <div className="contact-info__item">
                                    <FaEnvelope className="contact-info__icon" />
                                    <div>
                                        <strong>Email</strong>
                                        <Link href="mailto:pariwaratta@gmail.com">pariwaratta@gmail.com</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-info__block">
                                <h3 className="contact-info__heading">Working Hours</h3>
                                <div className="contact-info__item">
                                    <MdAccessTime className="contact-info__icon" size={20} />
                                    <div>
                                        <strong>Mon – Fri</strong>
                                        <span>9:00 AM – 6:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Map embed */}
                            <div className="contact-map">
                                <iframe
                                    title="Deep Pariwar Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.1682135718534!2d77.8544366!3d28.262915799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca903b8941f5b%3A0x6a12ce48c5de3a59!2sDeep%20Pariwar!5e0!3m2!1sen!2sin!4v1773214241281!5m2!1sen!2sin"
                                    width="100%"
                                    height="220"
                                    style={{ border: 0, borderRadius: '16px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </aside>

                    </div>
                </div>
            </section>
        </>
    );
}
