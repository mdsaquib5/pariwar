interface SectionTitleProps {
  overline?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
}

const SectionTitle = ({
  overline,
  title,
  accent,
  subtitle,
  align = 'center',
  theme = 'light',
}: SectionTitleProps) => {
  return (
    <div className={`section-title section-title--${align} section-title--${theme}`}>
      {overline && (
        <span className="section-title__overline">{overline}</span>
      )}
      <h2 className="section-title__heading">
        {title}{' '}
        {accent && (
          <span className="section-title__accent">{accent}</span>
        )}
      </h2>
      <div className="section-title__ornament" aria-hidden="true">
        <span className="section-title__line" />
        <span className="section-title__dot" />
        <span className="section-title__line" />
      </div>
      {subtitle && (
        <p className="section-title__subtitle">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;