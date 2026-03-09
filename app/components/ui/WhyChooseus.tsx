import { TbWheat, TbShieldCheck, TbCheck, TbRotate2 } from 'react-icons/tb';
import SectionTitle from '../layout/SectionTitle';

const cards = [
    {
        icon: <TbWheat size={42} />,
        title: 'Premium Indian Wheat',
        list: [
            '100% pure farm-sourced grains',
            'Free from any additives or fillers',
            'Directly sourced from Indian fields',
        ],
    },
    {
        icon: <TbRotate2 size={42} />,
        title: 'Modern Chakki Process',
        list: [
            'Stone-ground for authentic texture',
            'Nutrients preserved at every step',
            'Hygienic & temperature-controlled',
        ],
    },
    {
        icon: <TbShieldCheck size={42} />,
        title: 'Quality Assured',
        list: [
            'FSSAI certified & lab tested',
            'Strict hygienic packaging process',
            'Consistent quality in every batch',
        ],
    },
];

const WhyChooseUs = () => {
    return (
        <section className="why">
            <div className="container">

                <SectionTitle
                    title="Why Choose"
                    accent="Deep Pariwar"
                    subtitle="From India&apos;s finest fields to your kitchen — crafted with care, purity, and tradition."
                    align="center"
                    theme="light"
                />

                <div className="why-grid">
                    {cards.map((card, i) => (
                        <div className="why-card" key={i}>
                            <div className="why-card__icon">
                                {card.icon}
                            </div>
                            <h3 className="why-card__title">{card.title}</h3>
                            <div className="why-card__divider" />
                            <ul className="why-card__list">
                                {card.list.map((item, j) => (
                                    <li key={j} className="why-card__list-item">
                                        <span className="why-card__check">
                                            <TbCheck size={14} />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;