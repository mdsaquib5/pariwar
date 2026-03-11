'use client';

import { useState, useEffect } from 'react';
import PageHero from '../components/layout/PageHero';
import Image from 'next/image';
import { TbShoppingCart, TbX } from 'react-icons/tb';

const products = [
    {
        id: 1,
        title: "Wheat Flour (Atta)",
        category: "PREMIUM FLOUR",
        price: "180.00",
        oldPrice: "200.00",
        desc: "Finely milled from the highest quality wheat grains to give you the softest, most highly nutritious rotis every single day.",
        img: "/product-chakki.png"
    },
    {
        id: 2,
        title: "Pure Besan",
        category: "PREMIUM GRAM FLOUR",
        price: "95.00",
        oldPrice: "110.00",
        desc: "Made from 100% pure chana dal, ensuring a naturally sweet taste and perfect texture for festive sweets and savoury snacks.",
        img: "/product-besan.png"
    },
    {
        id: 3,
        title: "Roasted Poha",
        category: "BREAKFAST SPECIAL",
        price: "55.00",
        oldPrice: "70.00",
        desc: "Thick, wholesome flakes of rice that absorb flavors perfectly without losing their delicate, comforting bite.",
        img: "/product-poha.png"
    },
    {
        id: 4,
        title: "Premium Sooji",
        category: "SEMOLINA",
        price: "60.00",
        oldPrice: "75.00",
        desc: "Coarsely ground and fully roasted semolina, ideal for quick upmas, halwas, and crispy batter bases.",
        img: "/sooji-pro.png"
    },
    {
        id: 5,
        title: "Broken Dalia",
        category: "HEALTHY GRAINS",
        price: "65.00",
        oldPrice: "80.00",
        desc: "Wholesome broken wheat, perfect for high-fibre porridges and healthy breakfast options.",
        img: "/product-dalia.png"
    },
    {
        id: 6,
        title: "Fine Maida",
        category: "REFINED FLOUR",
        price: "45.00",
        oldPrice: "55.00",
        desc: "Premium quality refined wheat flour, perfect for baking, parathas, and snacks.",
        img: "/product-maida.png"
    },
    {
        id: 7,
        title: "Makki Atta",
        category: "CORN FLOUR",
        price: "50.00",
        oldPrice: "65.00",
        desc: "Authentic maize flour, stone-ground for the perfect texture and traditional flavor.",
        img: "/product-makki.png"
    }
];

export default function ShopPage() {
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (selectedProduct) {
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
    }, [selectedProduct]);

    return (
        <>
            <PageHero
                title="Our Shop"
                subtitle="Pure, honest groceries for your family."
                bg="/shop-bg.webp"
            />

            <section className="shop-section">
                <div className="container">

                    <div className="shop-grid">
                        {products.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-card__header">
                                    <div className="product-card__info">
                                        <h3 className="product-card__title">{product.title}</h3>
                                        {/* <div className="product-card__prices">
                                            <span className="product-card__price">₹{product.price}</span>
                                            {product.oldPrice && <span className="product-card__old-price">₹{product.oldPrice}</span>}
                                        </div> Removed Pricing */}
                                    </div>
                                    <button
                                        className="product-card__cart-btn"
                                        aria-label="Add to cart"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        <TbShoppingCart size={20} />
                                    </button>
                                </div>
                                <div
                                    className="product-card__img-wrap"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <Image
                                        src={product.img}
                                        alt={product.title}
                                        className="product-card__img"
                                        width={400}
                                        height={400}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="product-card__img-overlay">
                                        <span>Quick View</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Product Popup Modal */}
            {selectedProduct && (
                <div className="product-popup-wrap" onClick={() => setSelectedProduct(null)}>
                    <div className="product-popup" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="product-popup__close"
                            onClick={() => setSelectedProduct(null)}
                            aria-label="Close"
                        >
                            <TbX size={20} />
                        </button>

                        <div className="product-popup__grid">
                            <div className="product-popup__img-wrap">
                                <Image
                                    src={selectedProduct.img}
                                    alt={selectedProduct.title}
                                    className="product-popup__img"
                                    width={600}
                                    height={600}
                                />
                            </div>

                            <div className="product-popup__content">
                                <span className="product-popup__category">{selectedProduct.category}</span>
                                <h2 className="product-popup__title">{selectedProduct.title}</h2>

                                {/* <div className="product-popup__prices">
                                    <span className="product-popup__price">₹{selectedProduct.price}</span>
                                    {selectedProduct.oldPrice && (
                                        <span className="product-popup__old-price">₹{selectedProduct.oldPrice}</span>
                                    )}
                                </div> Removed Pricing */}

                                <p className="product-popup__desc">
                                    {selectedProduct.desc}
                                </p>

                                <button className="product-popup__add-btn">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
