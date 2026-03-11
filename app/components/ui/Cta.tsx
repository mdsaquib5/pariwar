'use client';

import { useState } from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import SectionTitle from "../layout/SectionTitle";

const Cta = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', state: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...form, message: 'New Distributor Application' }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setForm({ name: '', email: '', phone: '', city: '', state: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending application:', error);
            setStatus('error');
        }
    };

    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-wrap">

                    {/* Left Column (Content) */}
                    <div className="cta-left">
                        <SectionTitle
                            overline="Partner With Us"
                            title="Want to Partner with"
                            accent="Deep Pariwar?"
                            subtitle="Join our growing distributor network across India and be part of a legacy of premium quality & trust."
                            align="left"
                            theme="light"
                        />

                        <ul className="cta-benefits">
                            <li>
                                <TbRosetteDiscountCheckFilled />
                                <span>11+ Years of Brand Trust</span>
                            </li>
                            <li>
                                <TbRosetteDiscountCheckFilled />
                                <span>Premium Quality Products</span>
                            </li>
                            <li>
                                <TbRosetteDiscountCheckFilled />
                                <span>Exclusive Margins & Marketing Support</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column (Form) */}
                    <div className="cta-right">
                        <div className="cta-form-card">
                            <h3 className="cta-form-title">Business Application</h3>
                            <p className="cta-form-desc">Fill out the details below and our team will get back to you shortly.</p>

                            {status === 'success' ? (
                                <div className="contact-success">
                                    <span className="contact-success__icon">✓</span>
                                    <p>Application sent! We&apos;ll contact you soon.</p>
                                </div>
                            ) : (
                                <form className="cta-form" onSubmit={handleSubmit}>
                                    <div className="cta-input-row">
                                        <div className="cta-input-group">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="e.g. Rahul Sharma"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="cta-input-group">
                                            <label>Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="e.g. rahul@example.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="cta-input-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 XXXXX XXXXX"
                                            value={form.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="cta-input-row">
                                        <div className="cta-input-group">
                                            <label>City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                placeholder="e.g. Mumbai"
                                                value={form.city}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="cta-input-group">
                                            <label>State</label>
                                            <input
                                                type="text"
                                                name="state"
                                                placeholder="e.g. Maharashtra"
                                                value={form.state}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="cta-submit-btn"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Become a Distributor'}
                                    </button>
                                    {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Failed to send application. Please try again.</p>}
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cta;