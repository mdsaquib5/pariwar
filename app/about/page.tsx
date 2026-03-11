import PageHero from '../components/layout/PageHero';
import { TbPlant2, TbSettings2, TbShieldCheck } from 'react-icons/tb';
import { MdVerified } from 'react-icons/md';
import { FaFlask, FaIndustry } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const pillars = [
    {
        icon: <TbPlant2 size={28} />,
        title: 'Ethical Sourcing',
        desc: 'Carefully selected grains from trusted farms and regions across India.',
    },
    {
        icon: <TbSettings2 size={28} />,
        title: 'Modern Processing',
        desc: 'Advanced facilities that retain the natural freshness and nutrition of every grain.',
    },
    {
        icon: <TbShieldCheck size={28} />,
        title: 'Multi-Level Quality Checks',
        desc: 'Strict testing at every production stage before products ever reach you.',
    },
];

const timeline = [
    {
        year: '2015',
        title: 'Deep Pariwar Founded',
        desc: 'Started with a clear vision — to deliver pure, honest food to every Indian kitchen.',
    },
    {
        year: '2018',
        title: 'Expanded Product Range',
        desc: 'Launched our full range: atta, besan, sooji, poha and more — each crafted with care.',
    },
    {
        year: '2021',
        title: 'Modern Facilities Upgrade',
        desc: 'Invested in advanced processing and multi-level quality testing across our plant.',
    },
    {
        year: '2024',
        title: 'Trusted by Thousands',
        desc: 'Now a household name across regions, trusted by families every single day.',
    },
    {
        year: '2026',
        title: '11 Years of Excellence',
        desc: 'Celebrating over a decade of trust, quality, and commitment to the health of Indian families.',
    },
];

const certifications = [
    {
        icon: <MdVerified size={30} />,
        title: 'FSSAI Certified',
        desc: 'Meets all Indian food safety and standards authority requirements.',
    },
    {
        icon: <FaFlask size={26} />,
        title: 'Quality Tested',
        desc: 'Regular lab testing for purity, freshness and nutritional value.',
    },
    {
        icon: <FaIndustry size={26} />,
        title: 'Hygienic Facilities',
        desc: 'Processed in clean, temperature-controlled and monitored environments.',
    },
];

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="Our Story"
                subtitle="Rooted in tradition. Powered by purity."
                bg="/about-bg.webp"
            />

            {/* ── Our Story ─────────────────────────────────────── */}
            <section className="about-story">
                <div className="container about-story__grid">
                    <div className="about-story__content">
                        <span className="about-eyebrow">
                            <span className="about-eyebrow__dot" />
                            Deep Pariwar Family
                        </span>
                        <h2 className="about-story__title">
                            Built on one simple<br />
                            <span className="about-highlight">belief.</span>
                        </h2>
                        <p className="about-story__text">
                            Deep Pariwar was built on one simple belief — food should be pure, honest, and made with care.
                            From sourcing the finest grains to modern, hygienic processing, we ensure that every product reaching
                            your kitchen meets the same standards we follow for our own families.
                        </p>
                        <p className="about-story__text">
                            Inspired by Indian households and traditions, Deep Pariwar stands for trust, nutrition,
                            and consistency — every single day.
                        </p>

                        <div className="about-pillars">
                            {pillars.map((p, i) => (
                                <div key={i} className="about-pillar">
                                    <span className="about-pillar__icon">{p.icon}</span>
                                    <div>
                                        <strong className="about-pillar__title">{p.title}</strong>
                                        <p className="about-pillar__desc">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Story image */}
                    <div className="about-story__img-wrap">
                        <div className="about-story__img-badge">Since 2015</div>
                        <Image
                            src="/tm.webp"
                            alt="Deep Pariwar wheat fields"
                            className="about-story__img"
                            width={600}
                            height={560}
                            style={{ objectFit: 'cover', objectPosition: '73% center' }}
                        />
                        <div className="about-story__img-card">
                            <strong>1000+</strong>
                            <span>Families Served Daily</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Our Journey — Glassmorphism Timeline ──────────── */}
            <section className="about-journey">
                <div className="about-journey__bg" aria-hidden="true" />
                <div className="container">
                    <div className="about-section-header">
                        <span className="about-eyebrow about-eyebrow--light">
                            <span className="about-eyebrow__dot" />
                            Milestones
                        </span>
                        <h2 className="about-section-title about-section-title--light">Our Journey</h2>
                    </div>

                    <div className="about-timeline">
                        {/* Center line */}
                        <div className="about-timeline__line" />

                        {timeline.map((item, i) => (
                            <div
                                key={i}
                                className={`about-timeline__item ${i % 2 === 0 ? 'about-timeline__item--left' : 'about-timeline__item--right'}`}
                            >
                                <div className="about-timeline__card">
                                    <span className="about-timeline__year">{item.year}</span>
                                    <h3 className="about-timeline__title">{item.title}</h3>
                                    <p className="about-timeline__desc">{item.desc}</p>
                                </div>
                                <div className="about-timeline__dot" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Quality & Compliance ──────────────────────────── */}
            <section className="about-quality">
                <div className="container">
                    <div className="about-section-header">
                        <span className="about-eyebrow">
                            <span className="about-eyebrow__dot" />
                            Standards
                        </span>
                        <h2 className="about-section-title">Quality &amp; Compliance</h2>
                    </div>

                    <div className="about-certs">
                        {certifications.map((c, i) => (
                            <div key={i} className="about-cert-card">
                                <span className="about-cert-card__icon">{c.icon}</span>
                                <strong className="about-cert-card__title">{c.title}</strong>
                                <p className="about-cert-card__desc">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Trusted by Families + Leadership ─────────────── */}
            <section className="about-bottom">
                <div className="container about-bottom__grid">
                    <div className="about-trust">
                        <span className="about-eyebrow">
                            <span className="about-eyebrow__dot" />
                            Our Blogs
                        </span>
                        <h2 className="about-trust__title">Trusted by<br />Families</h2>
                        <p className="about-trust__desc">
                            Deep Pariwar products are designed for everyday Indian kitchens — delivering consistent quality,
                            great taste, and peace of mind.
                        </p>
                        <Link href="/blogs" className="about-trust__btn">
                            Explore Blogs →
                        </Link>
                    </div>

                    <div className="about-leadership">
                        <div className="about-leadership__card">
                            <div className="about-leadership__quote-mark">&ldquo;</div>
                            <h3 className="about-leadership__heading">Leadership with Values</h3>
                            <p className="about-leadership__text">
                                Deep Pariwar is guided by leaders who believe that food quality directly impacts family health.
                                Our leadership blends traditional wisdom with modern practices to bring you the very best.
                            </p>
                            <div className="about-leadership__author">
                                <div>
                                    <strong>Founder</strong>
                                    <span>Deep Pariwar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
