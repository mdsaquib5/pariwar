'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { IoPlay, IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';

interface Reel {
    id: number;
    thumbnail: string;
    videoUrl: string;
    caption: string;
}

const reelsData: Reel[] = [
    {
        id: 1,
        thumbnail: '/hero-bg-1.webp',
        videoUrl: 'https://www.youtube.com/embed/mg_15nm5Z4g',
        caption: 'Pure stone-ground atta from the heart of India. 🌾 #purity #tradition',
    },
    {
        id: 2,
        thumbnail: '/hero-bg-2.webp',
        videoUrl: 'https://www.youtube.com/embed/mg_15nm5Z4g',
        caption: 'Festive season calls for pure Besan sweets! 🍯✨ #deeppariwar #besan',
    },
    {
        id: 3,
        thumbnail: '/hero-bg-3.webp',
        videoUrl: 'https://www.youtube.com/embed/mg_15nm5Z4g',
        caption: 'Making morning breakfast easier with our premium range. ☀️ #healthy #breakfast',
    },
    {
        id: 4,
        thumbnail: '/hero-bg-4.webp',
        videoUrl: 'https://www.youtube.com/embed/mg_15nm5Z4g',
        caption: 'Authentic taste in every bite. Experience the freshness. 🥘 #authentic',
    },
    {
        id: 5,
        thumbnail: '/hero-bg-5.webp',
        videoUrl: 'https://www.youtube.com/embed/mg_15nm5Z4g',
        caption: 'Sustainability and health go hand in hand. 🌱 #organic #life',
    }
];

const Reels = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (activeVideo) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
        return () => {
            if (typeof window !== 'undefined') {
                document.body.style.overflow = '';
            }
        };
    }, [activeVideo]);

    return (
        <section className="reels-section">
            <div className="container">
                <div className="reels-header">
                    <div className="reels-header__left">
                        <span className="reels-eyebrow">
                            <FaInstagram /> Instagram Reels
                        </span>
                        <h2 className="reels-title">Experience the <span className="reels-title__accent">Deep Pariwar</span> Story</h2>
                    </div>
                </div>

                <div className="reels-slider-container">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay, Navigation, Pagination]}
                        className="reels-swiper"
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        navigation={{
                            nextEl: '.reels-nav-next',
                            prevEl: '.reels-nav-prev',
                        }}
                        pagination={{ clickable: true }}
                    >
                        {reelsData.map((reel) => (
                            <SwiperSlide key={reel.id} className="reels-slide">
                                <div className="reels-card">
                                    <div className="reels-card__img-wrap">
                                        <img src={reel.thumbnail} alt={reel.caption} className="reels-card__img" />
                                        <div className="reels-card__overlay">
                                            <button
                                                className="reels-play-btn"
                                                onClick={() => setActiveVideo(reel.videoUrl)}
                                            >
                                                <IoPlay size={30} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="reels-card__content">
                                        <p className="reels-card__caption">{reel.caption}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button className="reels-btn reels-nav-prev" aria-label="Previous slide">
                        <IoChevronBack size={24} />
                    </button>
                    <button className="reels-btn reels-nav-next" aria-label="Next slide">
                        <IoChevronForward size={24} />
                    </button>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="reels-modal" onClick={() => setActiveVideo(null)}>
                    <div className="reels-modal__content" onClick={(e) => e.stopPropagation()}>
                        <button className="reels-modal__close" onClick={() => setActiveVideo(null)}>
                            <IoClose size={32} />
                        </button>
                        <div className="reels-video-container">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`${activeVideo}?autoplay=1`}
                                title="YouTube Shorts Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="reels-video-player"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Reels;
