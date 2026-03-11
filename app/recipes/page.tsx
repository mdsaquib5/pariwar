'use client';

import { useState } from 'react';
import PageHero from '../components/layout/PageHero';
import Image from 'next/image';
import { TbClockHour4, TbChefHat, TbZoomIn, TbX } from 'react-icons/tb';

const recipes = [
    {
        title: "Shakarpara",
        category: "Breakfast and Savoury",
        duration: "35 mins",
        difficulty: "Expert",
        badge: "Deep Pariwar Classic",
        img: "/product-maida.png",
        ingredients: ["Maida", "Sugar", "Ghee"],
        method: ["Make dough", "Cut pieces", "Deep fry till golden"]
    },
    {
        title: "Vermicelli Biryani",
        category: "Lunch and Dinner",
        duration: "45 mins",
        difficulty: "Beginner",
        badge: "Festive Favourite",
        img: "/product.png",
        ingredients: ["1 cup Vermicelli", "Mixed vegetables", "Spices", "Oil"],
        method: ["Roast vermicelli lightly", "Saute vegetables", "Add spices and cook well"]
    }
];

export default function RecipesPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <PageHero
                title="Our Recipes"
                subtitle="Authentic Indian flavours brought to your kitchen."
                bg="/recipes-bg.webp"
            />

            <section className="recipe-showcase">
                <div className="container">

                    <div className="recipe-grid-2col">
                        {recipes.map((recipe, index) => (
                            <div key={index} className="recipe-card">

                                {/* Top Header: Small Image + Title */}
                                <div className="recipe-card__header">
                                    <div
                                        className="recipe-card__img-wrap"
                                        onClick={() => setSelectedImage(recipe.img)}
                                    >
                                        <Image
                                            src={recipe.img}
                                            alt={recipe.title}
                                            className="recipe-card__img"
                                            width={300}
                                            height={300}
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="recipe-card__img-overlay">
                                            <TbZoomIn size={28} />
                                        </div>
                                    </div>

                                    <div className="recipe-card__info">
                                        <span className="recipe-card__category">{recipe.category}</span>
                                        <h2 className="recipe-card__title">{recipe.title}</h2>

                                        <div className="recipe-card__meta">
                                            <span><TbClockHour4 size={18} /> {recipe.duration}</span>
                                            <span className="recipe-meta-dot">•</span>
                                            <span><TbChefHat size={18} /> {recipe.difficulty}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Body: Horizontal Timelines */}
                                <div className="recipe-card__body">
                                    <div className="recipe-card__section">
                                        <h3 className="recipe-card__subtitle">Ingredients</h3>
                                        <div className="recipe-timeline-flow">
                                            {recipe.ingredients.map((ing, i) => (
                                                <div key={i} className="recipe-timeline-item">
                                                    <div className="recipe-timeline-dot"></div>
                                                    <div className="recipe-timeline-glass">{ing}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="recipe-card__section">
                                        <h3 className="recipe-card__subtitle">Method</h3>
                                        <div className="recipe-timeline-flow recipe-timeline-flow--method">
                                            {recipe.method.map((step, i) => (
                                                <div key={i} className="recipe-timeline-item">
                                                    <div className="recipe-timeline-number">{i + 1}</div>
                                                    <div className="recipe-timeline-glass">{step}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Lightbox / Popup Modal */}
            {selectedImage && (
                <div className="recipe-lightbox" onClick={() => setSelectedImage(null)}>
                    <button
                        className="recipe-lightbox__close"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close popup"
                    >
                        <TbX size={32} />
                    </button>
                    <div className="recipe-lightbox__content" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Recipe view"
                            className="recipe-lightbox__img"
                            width={1000}
                            height={800}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
