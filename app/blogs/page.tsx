'use client';

import PageHero from '../components/layout/PageHero';
import { TbCalendarEvent, TbUser, TbArrowRight } from 'react-icons/tb';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
    {
        id: 1,
        title: "From Khurja to NCR: The Journey of Deep Pariwar",
        excerpt: "How three brothers from Khurja built Deep Pariwar into a trusted household name across Delhi NCR.",
        date: "March 10, 2024",
        author: "Pariwar Kitchen",
        category: "Nutrition",
        img: "/group-product.png",
        relatedProduct: "Deep Pariwar Atta"
    },
    {
        id: 2,
        title: "The Secret Behind Soft Rotis: Why Quality Wheat Flour Matters",
        excerpt: "Discover why flour quality plays a crucial role in soft, fluffy rotis and better digestion.",
        date: "March 08, 2024",
        author: "Chef Anita",
        category: "Health",
        img: "/group-product.png",
        relatedProduct: "Wheat Flour (Atta)"
    },
    {
        id: 3,
        title: "Regional Brands Are Rising: Why Families Choose Trust Over Corporations",
        excerpt: "Indian families are increasingly choosing trusted regional brands over large corporations.",
        date: "March 05, 2024",
        author: "Pariwar Kitchen",
        category: "Lifestyle",
        img: "/group-product.png",
        relatedProduct: "Deep Pariwar"
    }
];

export default function BlogsPage() {
    return (
        <>
            <PageHero
                title="Our Blogs"
                subtitle="Insights, health tips, and stories from the heart of Deep Pariwar."
                bg="/blog-bg.webp"
            />

            <section className="blogs-section">
                <div className="container">
                    <div className="blogs-grid">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="blog-card">
                                <Link href={`/blogs/${post.id}`} className="blog-card__img-wrap">
                                    <Image
                                        src={post.img}
                                        alt={post.title}
                                        className="blog-card__img"
                                        width={600}
                                        height={400}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Link>
                                <div className="blog-card__content">
                                    <div className="blog-card__meta">
                                        <span className="blog-card__meta-item">
                                            <TbCalendarEvent size={16} />
                                            {post.date}
                                        </span>
                                        <span className="blog-card__meta-item">
                                            <TbUser size={16} />
                                            {post.author}
                                        </span>
                                    </div>
                                    <h2 className="blog-card__title">
                                        <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                                    </h2>
                                    <p className="blog-card__excerpt">{post.excerpt}</p>
                                    <div className="blog-card__footer">
                                        <div className="blog-card__product-tag">
                                            Related: <strong>{post.relatedProduct}</strong>
                                        </div>
                                        <Link href={`/blogs/${post.id}`} className="blog-card__read-more">
                                            Read More <TbArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
