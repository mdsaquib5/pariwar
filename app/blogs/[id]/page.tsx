'use client';

import { useParams } from 'next/navigation';
import PageHero from '../../components/layout/PageHero';
import { TbCalendarEvent, TbUser, TbArrowLeft, TbShare, TbClock } from 'react-icons/tb';
import Link from 'next/link';
import Image from 'next/image';

interface BlogEntry {
    id: number;
    title: string;
    date: string;
    author: string;
    readTime: string;
    category: string;
    img: string;
    relatedProduct: string;
    content: React.ReactNode;
}

// Detailed blog data (In a real app, this would come from an API or shared data file)
const blogData: Record<number, BlogEntry> = {
    1: {
        id: 1,
        title: "From Khurja to NCR: The Journey of Deep Pariwar",
        date: "March 10, 2024",
        author: "Pariwar Kitchen",
        readTime: "6 min read",
        category: "Nutrition",
        img: "/group-product.png",
        relatedProduct: "Deep Pariwar",
        content: (
            <div className="blog-full-content">
                <p>
                    In the heart of Khurja, a town deeply connected with tradition and trade, three brothers laid the foundation of a dream in 2001. Under the banner of <strong>S.D Enterprises</strong>, Mr. Pramod Kumar, Mr. Anil Kumar Agrawal, and Mr. Kushal Kumar began building what would soon become a trusted household name — <strong>Deep Pariwar</strong>.
                </p>

                <p>
                    What started as a small initiative rooted in hard work and family values gradually evolved into a respected flour and food products brand serving families across Delhi NCR.
                </p>

                <h3>A Brand Built on Trust and Quality</h3>
                <p>
                    Deep Pariwar was not created overnight. It grew steadily through consistency, purity, and commitment to quality. The founders shared a deep connection with the agrarian culture of North India, understanding what truly matters in Indian kitchens — freshness, nutrition, and reliability.
                </p>

                <p>
                    Today, under the leadership of Mr. Kushal Kumar, the company continues to strengthen its presence while staying true to its founding values.
                </p>

                <h3>More Than Just Wheat Flour</h3>
                <p>Our commitment to purity extends across a wide range of kitchen essentials:</p>
                <ul>
                    <li><strong>Sooji (Semolina)</strong> – Perfect for sweet and savory dishes</li>
                    <li><strong>Dalia (Cracked Wheat)</strong> – A healthy breakfast staple</li>
                    <li><strong>Poha (Flattened Rice)</strong> – A beloved Indian snack base</li>
                    <li><strong>Maida</strong> – Essential for bakery creations</li>
                    <li><strong>Besan (Gram Flour)</strong> – Rich in protein and versatile</li>
                    <li><strong>Makki Atta</strong> – A North Indian traditional favorite</li>
                </ul>
                <p>
                    Each product reflects the brand’s commitment to quality and evolving nutritional preferences of Indian families.
                </p>

                <h3>Rooted in Tradition, Growing with Modern Demands</h3>
                <p>
                    Operating from Khurja and supplying retailers across Delhi NCR, Deep Pariwar has built strong distribution networks while maintaining a personalized approach — something often lost in large industrial brands.
                </p>

                <p>
                    By balancing traditional milling values with modern business practices, the company supports agricultural value chains, generates employment, and contributes to regional growth.
                </p>

                <h3>Looking Ahead</h3>
                <p>
                    With over two decades of experience and a loyal customer base, Deep Pariwar is positioned for continued regional expansion. The mission remains simple — to deliver dependable kitchen staples Indian families can trust every day.
                </p>
            </div>
        )
    },
    2: {
        id: 2,
        title: "The Secret Behind Soft Rotis: Why Quality Wheat Flour Matters",
        date: "March 08, 2024",
        author: "Chef Anita",
        readTime: "4 min read",
        category: "Health",
        img: "/product-maida.png",
        relatedProduct: "Wheat Flour (Atta)",
        content: (
            <div className="blog-full-content">
                <p>
                    In every Indian household, the sound of dough being kneaded and rotis puffing on the tawa is more than just cooking — it is tradition. From morning breakfasts to warm family dinners, wheat flour remains the backbone of Indian kitchens.
                </p>

                <p>
                    But have you ever wondered why some rotis turn out soft and fluffy, while others become dry within minutes? <strong>The answer lies in the quality of wheat flour.</strong>
                </p>

                <h3>The Journey from Farm to Kitchen</h3>
                <p>
                    In regions like Uttar Pradesh, wheat farming has deep cultural roots. Soil quality, climate, and harvesting techniques influence grain nutrition and texture. Carefully selected wheat retains essential nutrients, fiber, and aroma when milled properly.
                </p>

                <p>
                    Deep Pariwar maintains consistent grinding standards to preserve natural freshness and fiber content.
                </p>

                <h3>Why Flour Quality Impacts Health</h3>
                <ul>
                    <li><strong>Better fiber content</strong> – Essential for digestive health.</li>
                    <li><strong>Improved digestion</strong> – Natural grains are easier on the stomach.</li>
                    <li><strong>Sustained energy levels</strong> – Complex carbs for all-day vitality.</li>
                    <li><strong>Softer and more elastic dough</strong> – Easier to knead and roll.</li>
                </ul>

                <p>
                    For families consuming rotis daily, even small quality differences matter over time.
                </p>

                <h3>Taste Is Tradition</h3>
                <p>
                    Whether it’s soft phulkas, layered parathas, or crispy pooris, texture defines Indian cuisine. Consumers across Delhi NCR increasingly prefer brands that balance tradition with consistency.
                </p>

                <p>
                    That’s why regional brands rooted in quality, like <strong>Deep Pariwar</strong>, continue building trust among households.
                </p>

                <h3>More Than Just Flour</h3>
                <p>
                    Beyond wheat flour, Deep Pariwar also offers sooji, dalia, poha, maida, besan, and makki atta — supporting both traditional and modern recipes.
                </p>

                <blockquote>
                    &ldquo;Because food is not just nutrition — it is emotion.&rdquo;
                </blockquote>
            </div>
        )
    },
    3: {
        id: 3,
        title: "Regional Brands Are Rising: Why Families Choose Trust Over Corporations",
        date: "March 05, 2024",
        author: "Pariwar Kitchen",
        readTime: "3 min read",
        category: "Lifestyle",
        img: "/product-besan.png",
        relatedProduct: "Deep Pariwar",
        content: (
            <div className="blog-full-content">
                <p>
                    Over the last decade, Indian consumers have become more conscious about what they bring into their kitchens. While multinational brands dominate advertising, many families are returning to trusted regional names.
                </p>

                <blockquote>
                    &ldquo;Because trust feels closer to home.&rdquo;
                </blockquote>

                <h3>The Power of Local Manufacturing</h3>
                <ul>
                    <li><strong>Faster supply chains</strong> – Fresher products from factory to shelf.</li>
                    <li><strong>Better quality control</strong> – Personalized attention to every batch.</li>
                    <li><strong>Personalized retailer relationships</strong> – Building trust with local shopkeepers.</li>
                    <li><strong>Stronger community connections</strong> – Supporting local employment and growth.</li>
                </ul>

                <p>
                    <strong>Deep Pariwar</strong>, founded in 2001 under S.D Enterprises, represents this shift — growing from a family initiative into a respected regional supplier across Delhi NCR.
                </p>

                <h3>Supporting the Agricultural Ecosystem</h3>
                <p>
                    Choosing regional brands supports local farmers, suppliers, transport networks, and employment. Operating from Khurja, Deep Pariwar contributes responsibly to this ecosystem, ensuring that the agricultural value chain remains strong.
                </p>

                <h3>Tradition + Modern Expectations</h3>
                <p>
                    Today’s consumers want traditional taste combined with reliable packaging and consistency. Deep Pariwar’s wide range of products—including wheat flour, sooji, dalia, poha, maida, besan, and makki atta—reflects this delicate balance.
                </p>

                <h3>The Emotional Factor</h3>
                <p>
                    Food connects generations. Many households prefer brands that feel relatable rather than corporate. A kitchen staple isn&apos;t just a product; it&apos;s a part of the family’s daily ritual.
                </p>

                <p>
                    As India’s food industry evolves, one truth remains clear: <strong>authenticity still matters</strong>. And sometimes the strongest brands are built quietly — through consistency, not commercials.
                </p>
            </div>
        )
    }
};

export default function BlogDetailsPage() {
    const { id } = useParams();
    const post = blogData[Number(id)];

    if (!post) {
        return (
            <div className="container" style={{ paddingBlock: '100px', textAlign: 'center' }}>
                <h2>Blog post not found</h2>
                <Link href="/blogs" className="hero-btn" style={{ marginTop: '20px' }}>Back to Blogs</Link>
            </div>
        );
    }

    return (
        <>
            <PageHero
                title={post.title}
                subtitle={`${post.author} • ${post.date}`}
                bg="/blog-bg.webp"
            />

            <article className="blog-details-section">
                <div className="container container--narrow">
                    <div className="blog-details__back">
                        <Link href="/blogs" className="back-link">
                            <TbArrowLeft size={20} /> Back to all articles
                        </Link>
                    </div>

                    <div className="blog-details__meta-top">
                        <span className="blog-card__meta-item"><TbCalendarEvent size={18} /> {post.date}</span>
                        <span className="blog-card__meta-item"><TbUser size={18} /> {post.author}</span>
                        <span className="blog-card__meta-item"><TbClock size={18} /> {post.readTime}</span>
                    </div>

                    <div className="blog-details__main-img">
                        <Image
                            src={post.img}
                            alt={post.title}
                            width={1200}
                            height={600}
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div className="blog-details__content">
                        {post.content}
                    </div>

                    <div className="blog-details__footer">
                        <div className="blog-details__share">
                            <span>Share this article:</span>
                            <div className="share-btns">
                                <button className="share-btn"><TbShare size={20} /></button>
                            </div>
                        </div>
                        <div className="blog-details__related">
                            <span>Related Product:</span>
                            <Link href="/shop" className="product-pill">{post.relatedProduct}</Link>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
