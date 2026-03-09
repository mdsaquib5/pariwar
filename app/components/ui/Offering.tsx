import Link from 'next/link';
import SectionTitle from '../layout/SectionTitle';
import { IoArrowForward } from 'react-icons/io5';

const products = [
    {
        name: 'Whole Wheat Atta',
        tagline: 'Pure stone-ground flour',
        price: 'From ₹180 / 5kg',
        href: '/shop/atta',
        img: '/hero-bg-1.webp',
        offset: 52,
    },
    {
        name: 'Chickpea Besan',
        tagline: 'Rich gram flour',
        price: 'From ₹95 / 1kg',
        href: '/shop/besan',
        img: '/hero-bg-2.webp',
        offset: 18,
    },
    {
        name: 'Fine Sooji',
        tagline: 'Silky milled semolina',
        price: 'From ₹60 / 1kg',
        href: '/shop/sooji',
        img: '/hero-bg-3.webp',
        offset: -24,
    },
    {
        name: 'Thin Poha',
        tagline: 'Light flattened rice',
        price: 'From ₹55 / 1kg',
        href: '/shop/poha',
        img: '/hero-bg-4.webp',
        offset: 18,
    },
    {
        name: 'Broken Dalia',
        tagline: 'High-fibre porridge',
        price: 'From ₹65 / 1kg',
        href: '/shop/dalia',
        img: '/hero-bg-5.webp',
        offset: 52,
    },
];

const Offering = () => {
    return (
        <section className="offering">
            <div className="container">

                <SectionTitle
                    title="Our Product"
                    accent="Range"
                    subtitle="Five essential Indian staples — pure, wholesome, and crafted for every kitchen."
                    align="center"
                    theme="light"
                />

                <div className="offering-grid-wrap">

                    <svg
                        className="offering-arch"
                        viewBox="0 0 1000 110"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M 70,90 C 260,8 740,8 930,90"
                            fill="none"
                            stroke="#E4B44C"
                            strokeWidth="1.5"
                            strokeDasharray="7 5"
                            opacity="0.5"
                        />
                        <circle cx="70" cy="90" r="4" fill="#E4B44C" opacity="0.6" />
                        <circle cx="280" cy="24" r="3" fill="#E4B44C" opacity="0.4" />
                        <circle cx="500" cy="11" r="4" fill="#E4B44C" opacity="0.6" />
                        <circle cx="720" cy="24" r="3" fill="#E4B44C" opacity="0.4" />
                        <circle cx="930" cy="90" r="4" fill="#E4B44C" opacity="0.6" />
                    </svg>

                    <div className="offering-grid">
                        {products.map((product, i) => (
                            <div
                                className="offering-card"
                                key={i}
                                style={{ '--card-offset': `${product.offset}px` } as React.CSSProperties}
                            >
                                <div
                                    className="offering-card__img"
                                    style={{ backgroundImage: `url(${product.img})` }}
                                />
                                <div className="offering-card__body">
                                    <h3 className="offering-card__name">{product.name}</h3>
                                    <p className="offering-card__tagline">{product.tagline}</p>
                                    <div className="offering-card__bottom">
                                        <span className="offering-card__price">{product.price}</span>
                                        <Link href={product.href} className="offering-card__link">
                                            Shop <IoArrowForward size={13} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="offering-cta">
                    <Link href="/shop" className="offering-btn">
                        View All Products <IoArrowForward size={16} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Offering;