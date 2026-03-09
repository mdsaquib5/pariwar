'use client';

import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import { TbClockHour4, TbChefHat, TbZoomIn, TbX } from 'react-icons/tb';

const recipes = [
    {
        title: "Shakarpara",
        category: "Breakfast and Savoury",
        duration: "35 mins",
        difficulty: "Expert",
        badge: "Deep Pariwar Classic",
        img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80",
        ingredients: ["Maida", "Sugar", "Ghee"],
        method: ["Make dough", "Cut pieces", "Deep fry till golden"]
    },
    {
        title: "Authentic Besan Ladoo",
        category: "Dessert",
        duration: "45 mins",
        difficulty: "Intermediate",
        badge: "Festive Favourite",
        img: "https://images.unsplash.com/photo-1599785209707-a456fc1337cb?auto=format&fit=crop&w=1200&q=80",
        ingredients: ["Deep Pariwar Besan", "Ghee", "Powdered Sugar", "Cardamom"],
        method: ["Roast besan in ghee till golden", "Let it cool slightly", "Mix sugar and shape into rounds"]
    },
    {
        title: "Classic Atta Halwa",
        category: "Dessert",
        duration: "20 mins",
        difficulty: "Beginner",
        badge: "Comfort Food",
        img: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&w=1200&q=80",
        ingredients: ["Deep Pariwar Atta", "Ghee", "Sugar", "Water / Milk"],
        method: ["Roast atta in ghee continuously", "Add sugar syrup carefully", "Stir until it stops sticking to pan"]
    },
    {
        title: "Maharashtrian Poha",
        category: "Breakfast",
        duration: "15 mins",
        difficulty: "Beginner",
        badge: "Quick Breakfast",
        img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1200&q=80",
        ingredients: ["Deep Pariwar Poha", "Onions & Peanuts", "Turmeric", "Curry Leaves"],
        method: ["Wash and drain poha", "Sauté spices, peanuts and onions", "Mix poha and garnish with coriander"]
    },
    {
        title: "Crispy Sooji Upma",
        category: "Breakfast",
        duration: "20 mins",
        difficulty: "Beginner",
        badge: "Healthy Choice",
        img: "https://images.unsplash.com/photo-1626779848834-58a69eb070a7?auto=format&fit=crop&w=1200&q=80",
        ingredients: ["Deep Pariwar Sooji", "Mustard Seeds", "Mixed Veggies", "Water"],
        method: ["Dry roast sooji", "Temper spices and boil vegetables in water", "Slowly add sooji and simmer"]
    },
    {
        title: "Instant Wheat Dosa",
        category: "Breakfast and Savoury",
        duration: "15 mins",
        difficulty: "Intermediate",
        badge: "Healthy & Quick",
        img: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&w=1200&q=80",
        ingredients: ["Deep Pariwar Atta", "Rice Flour (Optional)", "Curd", "Water"],
        method: ["Whisk atta, curd and water into a smooth batter", "Rest for 10 mins", "Pour on hot pan and crisp with oil"]
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
                                        <img
                                            src={recipe.img.replace('w=1200', 'w=400')}
                                            alt={recipe.title}
                                            className="recipe-card__img"
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
                        <img
                            src={selectedImage}
                            alt="Recipe view"
                            className="recipe-lightbox__img"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
