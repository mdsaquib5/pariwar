'use client';

import PageHero from '../components/layout/PageHero';
import { TbCalendarEvent, TbUser, TbArrowRight } from 'react-icons/tb';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
    {
        id: 1,
        title: "The Ultimate Guide to Choosing the Best Atta for Soft Rotis",
        excerpt: "Discover the science behind milling and how the right wheat variety makes all the difference in your daily nutrition and roti texture.",
        date: "March 10, 2024",
        author: "Pariwar Kitchen",
        category: "Nutrition",
        img: "/product.webp",
        relatedProduct: "Deep Pariwar Atta"
    },
    {
        id: 2,
        title: "Why Pure Besan is a Must-Have in Your Healthy Diet",
        excerpt: "From being gluten-free to rich in protein, learn why gram flour (besan) is considered a superfood in traditional Indian households.",
        date: "March 08, 2024",
        author: "Chef Anita",
        category: "Health",
        img: "/product.webp",
        relatedProduct: "Pure Besan"
    },
    {
        id: 3,
        title: "Roasted Poha: A Nutritious and Easy Breakfast for Busy Mornings",
        excerpt: "Poha is more than just a quick meal; it's a balanced source of carbohydrates and iron. Read our top techniques for the perfect roast.",
        date: "March 05, 2024",
        author: "Pariwar Kitchen",
        category: "Lifestyle",
        img: "/product.webp",
        relatedProduct: "Roasted Poha"
    },
    {
        id: 4,
        title: "The Versatility of Sooji: From Breakfast Upma to Festive Halwas",
        excerpt: "Semolina is a kitchen staple. Learn how our premium, double-roasted sooji saves you time and enhances the flavor of your favorite dishes.",
        date: "March 02, 2024",
        author: "Chef Anita",
        category: "Recipes",
        img: "/product.webp",
        relatedProduct: "Premium Sooji"
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
