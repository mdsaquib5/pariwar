'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Link from 'next/link';
import Image from 'next/image';
import { IoArrowForward, IoChevronBack, IoChevronForward, IoLeafOutline } from 'react-icons/io5';
import { TbWheat } from 'react-icons/tb';

interface Slide {
    bg: string;
    productImg: string;
    tag: string;
    product: string;
    line1: string;
    line2: string;
    desc: string;
    price: string;
    badge: string;
}

const slides: Slide[] = [
    {
        bg: '/hero-bg-1.webp',
        productImg: '/chakki-atta.webp',
        tag: 'Premium Quality',
        product: 'Wheat Flour (Atta)',
        line1: 'Pure From',
        line2: 'The Fields',
        desc: 'Stone-ground whole wheat flour — crafted for authentic rotis & wholesome family meals every day.',
        price: '', // Removed pricing
        badge: '100% Natural',
    },
    {
        bg: '/hero-bg-2.webp',
        productImg: '/besan.webp',
        tag: 'Rich in Protein',
        product: 'Pure Besan',
        line1: 'Golden',
        line2: 'Besan',
        desc: 'Premium chickpea gram flour — perfect for crispy pakoras, soft kadhi & classic halwa.',
        price: '', // Removed pricing
        badge: 'High Protein',
    },
    {
        bg: '/hero-bg-3.webp',
        productImg: '/sooji.webp',
        tag: 'Finely Milled',
        product: 'Premium Sooji',
        line1: 'Silky',
        line2: 'Sooji',
        desc: 'Finely milled semolina — perfect for fluffy upma, rich halwa & creamy sooji ki kheer.',
        price: '', // Removed pricing
        badge: 'Pure Wheat',
    },
    {
        bg: '/hero-bg-4.webp',
        productImg: '/poha.webp',
        tag: 'Light & Fluffy',
        product: 'Roasted Poha',
        line1: 'Morning',
        line2: 'Freshness',
        desc: 'Light, fluffy flattened rice — the quickest & most delicious Indian breakfast every morning.',
        price: '', // Removed pricing
        badge: 'Light & Healthy',
    },
    {
        bg: '/hero-bg-5.webp',
        productImg: '/dalia.webp',
        tag: 'High Fibre',
        product: 'Broken Dalia',
        line1: 'Nourishing',
        line2: 'Dalia',
        desc: 'Wholesome broken wheat dalia — the perfect high-fibre porridge for a strong, healthy start.',
        price: '', // Removed pricing
        badge: 'High Fibre',
    },
];

const Hero = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animKey, setAnimKey] = useState(0);

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex);
        setAnimKey(prev => prev + 1);
    };

    const active = slides[activeIndex];

    return (
        <section className="hero">

            <Swiper
                className="hero-swiper"
                modules={[Autoplay, EffectFade, Navigation, Thumbs]}
                effect="fade"
                speed={1400}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                navigation={{ nextEl: '.hero-nav-next', prevEl: '.hero-nav-prev' }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                onSlideChange={handleSlideChange}
                loop
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="hero-slide-bg">
                            <Image
                                src={slide.bg}
                                alt={slide.product}
                                fill
                                priority={i === 0}
                                sizes="100vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="hero-overlay" />
                        <div className="hero-overlay-gradient" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="hero-diagonal" aria-hidden="true" />

            <div className="hero-content container">
                <div className="hero-anim-wrap" key={animKey}>

                    <div className="hero-left">
                        <div className="hero-border" aria-hidden="true" />
                        <span className="hero-tag">
                            <IoLeafOutline />
                            {active.tag}
                        </span>
                        <h1 className="hero-heading">
                            <span className="hero-heading__line1">{active.line1}</span>
                            <span className="hero-heading__line2">{active.line2}</span>
                        </h1>
                        <p className="hero-desc">{active.desc}</p>
                        <div className="hero-actions">
                            <Link href="/shop" className="hero-btn">
                                Explore Products <IoArrowForward />
                            </Link>
                            {/* <span className="hero-price">From ₹{active.price}</span> Removed pricing */}
                        </div>
                    </div>

                    <div className="hero-card">
                        <div className="hero-card__badge">
                            <TbWheat size={14} />
                            {active.badge}
                        </div>
                        <div className="hero-card__image">
                            <Image
                                src={active.productImg}
                                alt={active.product}
                                fill
                                priority={true}
                                sizes="(max-width: 768px) 100vw, 400px"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="hero-card__body">
                            <span className="hero-card__label">Featured Product</span>
                            <h3 className="hero-card__name">{active.product}</h3>
                            <div className="hero-card__footer">
                                {/* <strong className="hero-card__price">From ₹{active.price}</strong> Removed pricing */}
                                {/* <button className="hero-card__add" aria-label="Add to cart">
                                    <LuShoppingBag size={15} />
                                </button> Removed cart button */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="hero-counter" aria-label="Slide counter">
                <span className="hero-counter__num">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="hero-counter__line" />
                <span className="hero-counter__num">{String(slides.length).padStart(2, '0')}</span>
            </div>

            <button className="hero-nav hero-nav-prev" aria-label="Previous slide">
                <IoChevronBack size={18} />
            </button>
            <button className="hero-nav hero-nav-next" aria-label="Next slide">
                <IoChevronForward size={18} />
            </button>

            <div className="hero-thumbs-wrap">
                <Swiper
                    className="hero-thumbs-swiper"
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    slidesPerView={5}
                    spaceBetween={0}
                    watchSlidesProgress
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide key={i} className="hero-thumb">
                            <div className="hero-thumb__bg">
                                <Image
                                    src={slide.bg}
                                    alt={slide.product}
                                    fill
                                    sizes="25vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="hero-thumb__overlay" />
                            <span className="hero-thumb__label">{slide.product}</span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    );
};

export default Hero;