'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface BrandProduct {
    name: string;
    desc: string;
    tag: string;
    image: string;
}

const products: BrandProduct[] = [
    {
        name: 'Chakki Atta',
        desc: 'Stone-ground whole wheat flour — crafted for authentic rotis & wholesome family meals every single day.',
        tag: '100% Natural',
        image: '/hero-bg-1.webp',
    },
    {
        name: 'Golden Besan',
        desc: 'Premium chickpea gram flour — perfect for crispy pakoras, soft kadhi & classic halwa.',
        tag: 'High Protein',
        image: '/hero-bg-2.webp',
    },
    {
        name: 'Fine Maida',
        desc: 'Finely milled all-purpose flour — ideal for soft puris, fluffy naan & bakery delights.',
        tag: 'Finely Milled',
        image: '/hero-bg-3.webp',
    },
    {
        name: 'Thin Poha',
        desc: 'Light, fluffy flattened rice — the quickest & most delicious Indian breakfast every morning.',
        tag: 'Light & Healthy',
        image: '/hero-bg-4.webp',
    },
    {
        name: 'Broken Dalia',
        desc: 'Wholesome broken wheat dalia — the perfect high-fibre porridge for a strong, healthy start.',
        tag: 'High Fibre',
        image: '/hero-bg-5.webp',
    }
];

const Brands = () => {
    return (
        <section className="brands-section">

            {/* Header */}
            <div className="brands-header container">
                <span className="brands-eyebrow">
                    <span className="brands-eyebrow__dot" />
                    Our Product Range
                </span>
                <h2 className="brands-title">
                    Pure. Fresh. <span className="brands-title__accent">Trusted.</span>
                </h2>
                <p className="brands-subtitle">
                    Discover the complete Deep Pariwar family — every product crafted with care for your home.
                </p>
            </div>

            {/* Coverflow Swiper */}
            <div className="brands-slider-wrap">
                <Swiper
                    className="brands-coverflow-swiper"
                    modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    loop
                    slidesPerView="auto"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    navigation={{
                        nextEl: '.brands-nav-next',
                        prevEl: '.brands-nav-prev',
                    }}
                    pagination={{ el: '.brands-pagination', clickable: true }}
                    speed={700}
                >
                    {products.map((p, i) => (
                        <SwiperSlide key={i} className="brands-cf-slide">
                            <div className="brands-cf-card">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="brands-cf-card__overlay" />
                                <div className="brands-cf-card__content">
                                    <span className="brands-cf-card__tag">{p.tag}</span>
                                    <h3 className="brands-cf-card__name">{p.name}</h3>
                                    <p className="brands-cf-card__desc">{p.desc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Nav Arrows */}
                <button className="brands-nav brands-nav-prev" aria-label="Previous product">
                    <IoChevronBack size={22} />
                </button>
                <button className="brands-nav brands-nav-next" aria-label="Next product">
                    <IoChevronForward size={22} />
                </button>

                {/* Pagination Dots */}
                <div className="brands-pagination" />
            </div>

        </section>
    );
};

export default Brands;