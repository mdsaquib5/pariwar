'use client';

import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import SectionTitle from "../layout/SectionTitle";

const Cta = () => {
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
                                <span>20+ Years of Brand Trust</span>
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

                            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="cta-input-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="e.g. Rahul Sharma" required />
                                </div>
                                <div className="cta-input-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                                </div>
                                <div className="cta-input-row">
                                    <div className="cta-input-group">
                                        <label>City</label>
                                        <input type="text" placeholder="e.g. Mumbai" required />
                                    </div>
                                    <div className="cta-input-group">
                                        <label>State</label>
                                        <input type="text" placeholder="e.g. Maharashtra" required />
                                    </div>
                                </div>
                                <button type="submit" className="cta-submit-btn">
                                    Become a Distributor
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cta;