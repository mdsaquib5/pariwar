import Image from 'next/image';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    bg?: string;
}

const PageHero = ({ title, subtitle, bg }: PageHeroProps) => {
    return (
        <div className="page-hero">
            {bg && (
                <Image
                    src={bg}
                    alt={title}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            )}
            <div className="page-hero__overlay" />
            <div className="page-hero__content container">
                <h1 className="page-hero__title">{title}</h1>
                {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHero;
