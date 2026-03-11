'use client';

import SectionTitle from '../layout/SectionTitle';
const Vision = () => {
    return (
        <section className="vision">
            <div className="container">

                <SectionTitle
                    title="Our"
                    accent="Vision"
                    subtitle="Deep Parivar - Your trusted partner for nutrition and purity"
                    theme="dark"
                    align="center"
                />

                <div className="vision-grid">
                    {/* Left Column */}
                    <div className="vision-left">
                        <div className="vision-video-card">
                            <iframe
                                src="https://www.youtube.com/embed/j602dTRwuEM?autoplay=1&mute=1&loop=1&playlist=j602dTRwuEM&rel=0&controls=0"
                                title="Deep Pariwar Vision"
                                className="vision-iframe"
                                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Trust Card */}
                        <div className="vision-card vision-card--transparent">
                            <h3 className="vision-card__title">Trust of 11 years</h3>
                            <div className="vision-card__divider" />
                            <p className="vision-card__desc">
                                Since our inception, Deep Pariwar has pledged to bring excellence in taste, authentic texture, and premium nutrition to your kitchens. Over the years, we have reached thousands of households across the country, becoming a staple in everyday Indian cooking.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="vision-right">
                        {/* Organic Card */}
                        <div className="vision-card vision-card--highlight">
                            <h3 className="vision-card__title">Organic: A sustainable way of life</h3>
                            <div className="vision-card__divider" />
                            <p className="vision-card__desc">
                                In an attempt to work towards the betterment of the environment and bring you optimum taste and nutrition, Deep Pariwar introduced its organic range. Truly authentic, pesticide-free grains, straight from the farm to your table, ensuring health for your family and the planet.
                            </p>
                        </div>

                        {/* Variety Card */}
                        <div className="vision-card vision-card--glass">
                            <h3 className="vision-card__title">Make Variety with Deep Pariwar</h3>
                            <div className="vision-card__divider" />
                            <p className="vision-card__desc">
                                Whether it&apos;s the sweetness of Halwa and Laddoos, the satisfying crunch of Pooris, or the savoury goodness of soft Parathas &amp; Crispy Samosas — you can do it all with the impeccable quality of Deep Pariwar&apos;s premium flour range.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Vision;