import Image from 'next/image';

import { cn } from '@/lib/utils/cn';

type EditorialCardProps = {
  title: string;
  caption: string;
  image: string;
  className?: string;
};

export function EditorialCard({ title, caption, image, className }: EditorialCardProps) {
  return (
    <article className={cn('group', className)}>
      <div className="relative aspect-[4/5] overflow-hidden layered-shadow">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px)100vw, 40vw"
          className="object-cover transition-transform duration-[1400ms] ease-luxury group-hover:scale-110"
        />
      </div>
      <p className="label-caps mt-6 text-outline">{caption}</p>
      <h3 className="headline mt-2 text-primary">{title}</h3>
    </article>
  );
}

