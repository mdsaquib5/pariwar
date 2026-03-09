'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const igPosts = [
    {
        id: 1,
        image: '/hero-bg-1.webp',
        caption: 'Starting the day right with the purity of Deep Pariwar premium wheat! 🌾 Experience the difference in every bite.',
        likes: 124,
    },
    {
        id: 2,
        image: '/hero-bg-2.webp',
        caption: 'Soft, fluffy, and perfectly golden parathas made from our finely milled Chakki fresh atta.',
        likes: 89,
    },
    {
        id: 3,
        image: '/hero-bg-3.webp',
        caption: 'A feast for the soul and the family! 🥘✨ Make your festive meals truly special with Deep Pariwar.',
        likes: 215,
    },
    {
        id: 4,
        image: '/hero-bg-4.webp',
        caption: 'From our farms to your plate. We ensure 100% natural processing with zero preservatives.',
        likes: 156,
    },
    {
        id: 5,
        image: '/hero-bg-5.webp',
        caption: 'Crunchy, fresh, and deeply satisfying. Cooking made better with purely traditional methods. 💛',
        likes: 108,
    },
    {
        id: 6,
        image: '/hero-bg-1.webp',
        caption: 'A feast for the soul and the family! 🥘✨ Make your festive meals truly special with Deep Pariwar.',
        likes: 215,
    }
];

const Instagram = () => {
    const [selectedPost, setSelectedPost] = useState<typeof igPosts[0] | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (selectedPost) {
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
    }, [selectedPost]);

    return (
        <section className="instagram-section">
            <div className="instagram-grid">
                {igPosts.map((post) => (
                    <div
                        key={post.id}
                        className="instagram-item"
                        onClick={() => setSelectedPost(post)}
                        role="button"
                        tabIndex={0}
                        aria-label="View Instagram Post"
                    >
                        <Image
                            src={post.image}
                            alt="Instagram Post"
                            className="instagram-img"
                            width={400}
                            height={400}
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="instagram-overlay">
                            <FaInstagram />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <div className={`ig-modal ${selectedPost ? 'ig-modal--open' : ''}`}>
                <div className="ig-modal__backdrop" onClick={() => setSelectedPost(null)} />
                <button
                    className="ig-modal__close"
                    onClick={() => setSelectedPost(null)}
                    aria-label="Close Gallery"
                >
                    <IoClose size={32} />
                </button>

                {selectedPost && (
                    <div className="ig-modal__content">
                        {/* Left Side: Large Image */}
                        <div className="ig-modal__image">
                            <Image
                                src={selectedPost.image}
                                alt="Instagram Post Enlarged"
                                className="ig-modal__img-tag"
                                width={800}
                                height={800}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>

                        {/* Right Side: Post Info */}
                        <div className="ig-modal__info">
                            <div className="ig-modal__header">
                                <div className="ig-avatar">DP</div>
                                <div>
                                    <h4>DeepPariwarOfficial</h4>
                                </div>
                            </div>
                            <div className="ig-modal__body">
                                <p><strong>DeepPariwarOfficial</strong> {selectedPost.caption}</p>
                            </div>
                            <div className="ig-modal__footer">
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ig-btn">
                                    View on Instagram
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Instagram;