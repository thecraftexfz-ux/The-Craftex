import { cn } from '@/lib/utils/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, description, className, center }: SectionHeadingProps) {
  return (
    <header className={cn(center && 'text-center', className)}>
      {eyebrow ? <p className="label-caps mb-4 text-secondary">{eyebrow}</p> : null}
      <h2 className="display-section text-primary">{title}</h2>
      {description ? <p className="body-lg mt-6 max-w-2xl text-on-surface-variant">{description}</p> : null}
    </header>
  );
}

