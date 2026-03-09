'use client';

import { useParams, useRouter } from 'next/navigation';
import PageHero from '../../components/layout/PageHero';
import { TbCalendarEvent, TbUser, TbArrowLeft, TbShare, TbClock } from 'react-icons/tb';
import Link from 'next/link';

// Detailed blog data (In a real app, this would come from an API or shared data file)
const blogData: Record<number, any> = {
    1: {
        id: 1,
        title: "The Ultimate Guide to Choosing the Best Atta for Soft Rotis",
        date: "March 10, 2024",
        author: "Pariwar Kitchen",
        readTime: "5 min read",
        category: "Nutrition",
        img: "/product.webp",
        relatedProduct: "Deep Pariwar Atta",
        content: (
            <div className="blog-full-content">
                <p>
                    Choosing the right <strong>atta (whole wheat flour)</strong> is the first step toward making that perfect, cloud-soft roti.
                    In Indian households, the quality of your daily bread defines the meal. But with so many varieties available, how do you
                    know which one is best for your health and your palate?
                </p>

                <blockquote>
                    "The secret to a soft roti isn't just in the kneading; it begins with the soul of the grain."
                    <cite>— Traditional Indian Proverb</cite>
                </blockquote>

                <h3>1. Understand the Milling Process</h3>
                <p>
                    Modern industrial milling often strips away the nutritious bran and germ. However, <strong>Deep Pariwar Atta</strong>
                    is stone-ground to ensure that all the natural goodness stays intact.
                </p>
                <ul>
                    <li><strong>Chakki Fresh:</strong> Slow-grinding retains nutrients and moisture.</li>
                    <li><strong>High Fibre:</strong> Vital for digestive health and long-lasting energy.</li>
                    <li><strong>No Additives:</strong> Pure flour without bleach or preservatives.</li>
                </ul>

                <h3>2. Look for the Gluten Balance</h3>
                <p>
                    Gluten is what gives rotis their elasticity. A high-quality Sharbati wheat, for instance, has a superior gluten
                    profile that allows the dough to hold more water, resulting in <em>softer rotis</em> that stay fresh for hours.
                </p>

                <ol>
                    <li>Sieve the flour to remove any large impurities.</li>
                    <li>Add water slowly while kneading to reach a soft, non-sticky consistency.</li>
                    <li>Let the dough rest for at least 15-20 minutes before rolling.</li>
                </ol>

                <h3>Conclusion</h3>
                <p>
                    Investing in premium flour like <Link href="/shop">Deep Pariwar Sharbati Atta</Link> ensures that your family
                    gets the best nutrition without compromising on taste.
                </p>
            </div>
        )
    },
    2: {
        id: 2,
        title: "Why Pure Besan is a Must-Have in Your Healthy Diet",
        date: "March 08, 2024",
        author: "Chef Anita",
        readTime: "4 min read",
        category: "Health",
        img: "/product.webp",
        relatedProduct: "Pure Besan",
        content: (
            <div className="blog-full-content">
                <p>
                    Besan, or gram flour, has been a cornerstone of Indian cuisine for centuries. Beyond its delicious taste in
                    <em>pakoras</em> and <em>laddoos</em>, it is a powerhouse of nutrition.
                </p>

                <h3>Rich in Plant Protein</h3>
                <p>
                    For vegetarians, besan is one of the most accessible sources of high-quality protein. It helps in muscle repair
                    and keeps you feeling full longer.
                </p>

                <blockquote>
                    "Replacing refined flour with besan is one of the simplest ways to boost your daily protein intake."
                </blockquote>

                <ul>
                    <li><strong>Low Glycemic Index:</strong> Great for maintaining healthy blood sugar levels.</li>
                    <li><strong>Gluten-Free:</strong> A perfect alternative for those with gluten sensitivities.</li>
                    <li><strong>Rich in Folate:</strong> Essential for heart health and cell growth.</li>
                </ul>

                <p>
                    Check out our <Link href="/shop">Premium Besan</Link> made from 100% pure Chana Dal.
                </p>
            </div>
        )
    },
    3: {
        id: 3,
        title: "Roasted Poha: A Nutritious and Easy Breakfast for Busy Mornings",
        date: "March 05, 2024",
        author: "Pariwar Kitchen",
        readTime: "3 min read",
        category: "Lifestyle",
        img: "/product.webp",
        relatedProduct: "Roasted Poha",
        content: (
            <div className="blog-full-content">
                <p>
                    In the rush of the morning, finding a breakfast that is both <strong>quick and healthy</strong> can be a challenge.
                    Roasted Poha is the answer for thousands of active families.
                </p>

                <h3>Why Poha?</h3>
                <ol>
                    <li><strong>Easy to Digest:</strong> Lightweight on the stomach yet satisfying.</li>
                    <li><strong>Rich in Iron:</strong> Helps prevent anemia and boosts energy.</li>
                    <li><strong>Low Calorie:</strong> Ideal for weight management.</li>
                </ol>

                <p>
                    Our <Link href="/shop">Roasted Poha</Link> is pre-cleaned and ready to cook, saving you precious minutes
                    during your morning routine.
                </p>
            </div>
        )
    },
    4: {
        id: 4,
        title: "The Versatility of Sooji: From Breakfast Upma to Festive Halwas",
        date: "March 02, 2024",
        author: "Chef Anita",
        readTime: "6 min read",
        category: "Recipes",
        img: "/product.webp",
        relatedProduct: "Premium Sooji",
        content: (
            <div className="blog-full-content">
                <p>
                    Sooji (Semolina) is arguably the most versatile ingredient in an Indian pantry. Whether it's the savory
                    warmth of an <strong>Upma</strong> or the decadent sweetness of <strong>Halwa</strong>, it never fails.
                </p>

                <blockquote>
                    "A pantry without sooji is a pantry without possibilities."
                </blockquote>

                <h3>Cooking Tips for Perfect Texture</h3>
                <ul>
                    <li><strong>Roasting:</strong> Always dry-roast your sooji until it releases a nutty aroma.</li>
                    <li><strong>Water Ratio:</strong> Use 3 parts water to 1 part sooji for a fluffy, soft Upma.</li>
                </ul>

                <p>
                    Experience the difference with <Link href="/shop">Deep Pariwar Premium Sooji</Link>.
                </p>
            </div>
        )
    }
};

export default function BlogDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
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
                        <img src={post.img} alt={post.title} />
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
